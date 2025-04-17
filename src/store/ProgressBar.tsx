import React, { useEffect, useRef } from 'react';
import useStore from '.';

interface ProgressBarProps {
  width?: number;
  height?: number;
}

function ProgressBar({ width = 300, height = 20 }: ProgressBarProps) {
  const { progress, setProgress, position, setPosition } = useStore();
  const progressBarRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  // 更新滑块位置
  const updateThumbPosition = () => {
    if (thumbRef.current && progressBarRef.current) {
      const thumbWidth = thumbRef.current.offsetWidth;
      const progressBarWidth = progressBarRef.current.offsetWidth;
      const thumbLeft = (progress / 100) * (progressBarWidth - thumbWidth);
      thumbRef.current.style.left = `${thumbLeft}px`;
    }
  };

  // 处理鼠标移动事件
  const handleMouseMove = (e: MouseEvent) => {
    if (!progressBarRef.current || !thumbRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const progressBarWidth = rect.width;
    const thumbWidth = thumbRef.current.offsetWidth;
    const relativeX = e.clientX - rect.left;
    const newProgress = Math.round(
      (Math.max(0, Math.min(relativeX, progressBarWidth - thumbWidth)) / (progressBarWidth - thumbWidth)) * 100
    );
    setProgress(newProgress);
    setPosition(newProgress); // 同步更新分界线的位置
  };

  // 添加和移除全局事件监听器
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleMouseMove(e.nativeEvent);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  // 更新进度时重新计算滑块位置
  useEffect(() => {
    updateThumbPosition();
  }, [progress]);

  return (
    <div
      ref={progressBarRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: '#e0e0e0',
        borderRadius: '10px',
        position: 'relative',
        cursor: 'pointer',
      }}
      onMouseDown={handleMouseDown}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: `${progress}%`,
          backgroundColor: '#4caf50',
          borderRadius: '10px',
          zIndex: 1,
        }}
      />
      <div
        ref={thumbRef}
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          width: `${height * 2}px`,
          height: `${height * 2}px`,
          backgroundColor: 'white',
          borderRadius: '50%',
          boxShadow: '0 0 0 2px #4caf50',
          zIndex: 2,
          transition: 'left 0.2s ease', // 添加平滑过渡
        }}
      />
    </div>
  );
}

export default ProgressBar;