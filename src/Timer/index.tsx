import React from 'react';
import useTimerStore from'../store';

function Timer() {
  const { time, isRunning, startTimer, pauseTimer, resetTimer } = useTimerStore();

  // 格式化时间显示为 HH:MM:SS
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>计时器</h1>
      <div style={{ fontSize: '48px', margin: '20px 0' }}>{formatTime(time)}</div>
      <div>
        <button
          onClick={startTimer}
          disabled={isRunning}
          style={{ padding: '10px 20px', margin: '0 10px' }}
        >
          开始
        </button>
        <button
          onClick={pauseTimer}
          disabled={!isRunning}
          style={{ padding: '10px 20px', margin: '0 10px' }}
        >
          暂停
        </button>
        <button onClick={resetTimer} style={{ padding: '10px 20px' }}>
          重置
        </button>
      </div>
    </div>
  );
}

export default Timer;