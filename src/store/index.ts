import { create } from 'zustand';

interface GlobalState {
  time: number;
  isRunning: boolean;
  intervalId: ReturnType<typeof setInterval> | null;
  position: number;
  progress: number;
  setPosition: (position: number) => void;
  setProgress: (progress: number) => void;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
}

const useStore = create<GlobalState>((set, get) => ({
  time: 0,
  isRunning: false,
  intervalId: null,
  position: 50,
  progress: 50,
  setPosition: (position) => set({ position }),
  setProgress: (progress) => set({ progress }),
  startTimer: () => {
    if (!get().isRunning) {
      set({ isRunning: true });
      const id = setInterval(() => {
        set((state) => ({ time: state.time + 1 }));
      }, 1000);
      set({ intervalId: id });
    }
  },
  pauseTimer: () => {
    if (get().isRunning) {
      set({ isRunning: false });
      const intervalId = get().intervalId;
      if (intervalId) {
        // Bug fix: Convert intervalId to number and ensure it's not null
        clearInterval(Number(intervalId));
        set({ intervalId: null });
      }
    }
  },
  resetTimer: () => {
    get().pauseTimer();
    set({ time: 0 });
  },
}));

export default useStore;