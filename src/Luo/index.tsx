import { useState, useEffect, useRef } from 'react';
import './index.css';
import ProgressBar from '../store/ProgressBar';
import useStore from '../store/index';

// 半圆形图片对比滑块组件
const Luo = () => {
  // 从Zustand存储获取状态和方法
  const { position, setPosition, progress, setProgress } = useStore();
  
  // DOM元素引用
  const sliderRef = useRef<HTMLDivElement>(null);    // 滑块容器
  const leftImageRef = useRef<HTMLDivElement>(null); // 左侧图片容器
  const rightImageRef = useRef<HTMLDivElement>(null);// 右侧图片容器

  // 处理鼠标移动事件
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!sliderRef.current) return;
    const sliderRect = sliderRef.current.getBoundingClientRect();
    // 计算鼠标相对位置百分比（0-100）
    let newPosition = ((e.clientX - sliderRect.left) / sliderRect.width) * 100;
    newPosition = Math.max(0, Math.min(100, newPosition)); // 限制范围
    setPosition(newPosition);
    setProgress(newPosition); // 同步更新滑动条的进度值
  };

  // 更新滑块位置和图片裁剪
  useEffect(() => {
    if (sliderRef.current) {
      const radius = sliderRef.current.offsetWidth / 2; // 容器半径
      const center = radius; // 圆心坐标
      const radians = (position / 100) * Math.PI; // 角度转弧度

      // 计算分隔线坐标
      const x = center + radius * Math.cos(radians);
      const y = center + radius * Math.sin(radians);

      // 更新分隔线样式
      const divider = sliderRef.current.querySelector('.divider');
      if (divider) {
        (divider as HTMLElement).style.left = `${x}px`;
        (divider as HTMLElement).style.top = `${y}px`;
        // 根据位置旋转分隔线（转换为-90°到90°之间的角度）
        (divider as HTMLElement).style.transform = `rotate(${90 - (position / 100) * 180}deg)`;
      }

      // 更新左右图片裁剪区域
      if (leftImageRef.current) {
        leftImageRef.current.style.clipPath = `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`;
      }
      if (rightImageRef.current) {
        rightImageRef.current.style.clipPath = `polygon(${position}% 0, 100% 0, 100% 100%, ${position}% 100%)`;
      }
    }
  }, [position]);

  // ... 原有JSX结构保持不变 ...
  return (
    <div className="half-circle-slider-container">
      <div
        ref={sliderRef}
        className="half-circle-slider"
        onMouseMove={handleMouseMove}
      >
        <div className="left-image" ref={leftImageRef}>
          <img
            src="https://i5.3conline.com/images/piclib/201004/23/batch/1/58539/12719788154753gm3p4mk5y.jpg"
            alt="Left Image"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.display = 'none';
            }}
          />
        </div>
        <div className="right-image" ref={rightImageRef}>
          <img
            src="https://img-baofun.zhhainiao.com/pcwallpaper_ugc/static/388379538bf2af745f3f7cfea82816a2.jpg?x-oss-process=image%2fresize%2cm_lfit%2cw_3880%2ch_2160"
            alt="Right Image"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.display = 'none';
            }}
          />
        </div>
        <div className="divider">
          <div className="handle"></div>
        </div>
      </div>
      <div className="slider-info">
        <span>左侧位置: {position.toFixed(1)}%</span>
      </div>
      <div className="slider-info">
        <p>图像间距:</p>
        <div style={{ padding: '10px' }}>
        <ProgressBar
            width={600}
            height={7}
          />
        </div>
      </div>
    </div>
  );
};

export default Luo;