import { createProject } from '@/api/project';
import { useMutation } from '@tanstack/react-query';

// 6.3 프로젝트 생성하기
export const useCreateProject = () => {
  return useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      window.location.reload();
    },
    onError: () => {
      console.log('프로젝트 등록 성공');
    },
  });
};
