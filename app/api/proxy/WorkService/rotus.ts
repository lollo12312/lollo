// src/services/WorkService.ts

import { NextRequest, NextResponse } from 'next/server';
import { AppDataSource } from '@/lib/database';
import { work } from '@/lib/entities/Wrok'
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false, // 必须禁用默认的 bodyParser
  },
};


//创建作品
export async function POST(request: NextRequest) {
  try {
    const form = formidable({ multiples: true });
    
    // 解析表单数据
    const formData = await new Promise<{ fields: any; files: any }>((resolve, reject) => {
      form.parse(request, (err, fields, files) => {
        if (err) reject(err);
        resolve({ fields, files });
      });
    });

    // 处理上传的文件
    const file = formData.files.image as formidable.File;
    const fileData = fs.readFileSync(file.filepath);
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    const fileName = `${Date.now()}-${file.originalFilename}`;
    const filePath = path.join(uploadDir, fileName);
    
    // 确保上传目录存在
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    
    // 保存文件
    fs.writeFileSync(filePath, fileData);
    fs.unlinkSync(file.filepath); // 删除临时文件

    // 创建新作品
    const workRepository = AppDataSource.getRepository(work);
    const newWork = workRepository.create({
      title: formData.fields.title,
      description: formData.fields.description,
      image: `/uploads/${fileName}`, // 保存相对路径
      tags: formData.fields.tags ? formData.fields.tags.split(',') : [],
      userId: parseInt(formData.fields.userId, 10),
    });

    const savedWork = await workRepository.save(newWork);
    return NextResponse.json(savedWork, { status: 201 });
  } catch (error) {
    console.error('Error creating work:', error);
    return NextResponse.json(
      { error: 'Failed to create work' },
      { status: 500 }
    );
  }
}

//查找所有
export async function GET(request: NextRequest) {
  try {
    const works = await AppDataSource.getRepository(work).find();
    return NextResponse.json(works);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch works' },
      { status: 500 }
    );
  }
}

//更新作品
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = parseInt(params.id, 10);
    const workRepository:any = AppDataSource.getRepository(work);
    const Work:any = await workRepository.findOneBy({ id });
    
    if (!Work) {
      return NextResponse.json({ error: 'Work not found' }, { status: 404 });
    }

    const updatedData = await request.json();
    await workRepository.update(id, updatedData);
    
    const updatedWork = await workRepository.findOneBy({ id });
    return NextResponse.json(updatedWork);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update work' },
      { status: 500 }
    );
  }
}

//删除作品
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = parseInt(params.id, 10);
    const workRepository = AppDataSource.getRepository(work);
    const Work = await workRepository.findOneBy({ id });
    
    if (!Work) {
      return NextResponse.json({ error: 'Work not found' }, { status: 404 });
    }

    // 删除关联的图片文件
    if (Work.image && Work.image.startsWith('/uploads/')) {
      const imagePath = path.join(process.cwd(), 'public', Work.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await workRepository.remove(Work);
    return NextResponse.json({ message: 'Work deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete work' },
      { status: 500 }
    );
  }
}