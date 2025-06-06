import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("works")  // 表名，根据实际情况调整
export class work {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 255 })
    title!: string;

    @Column({ type: "text" })
    description!: string;

    @Column({ type: "varchar", length: 255 })
    image!: string;

    @Column("simple-array")  // TypeORM简单数组类型
    tags!: string[];

    @Column({ 
        type: "timestamp", 
        default: () => "CURRENT_TIMESTAMP" 
    })
    createdAt!: string;

    @Column({ 
        type: "timestamp", 
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP"  // 自动更新时间戳
    })
    updatedAt!: string;

    @Column({ type: "int" })
    userId!: number;
}