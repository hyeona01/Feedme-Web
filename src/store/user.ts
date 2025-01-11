import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserStore = {
  name: string;
  updateName: (name: string) => void; // 이름 업데이트 함수
};

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      name: '',
      updateName: (name) => set(() => ({ name })),
    }),
    {
      name: 'userStore',
    },
  ),
);
