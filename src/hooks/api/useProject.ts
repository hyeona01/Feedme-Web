import { createProject, getProjectId } from '@/api/project';
import { RESTYPE } from '@/types/api/common';
import { ProjectIdResponse } from '@/types/api/project';
import { useMutation } from '@tanstack/react-query';

// 6.1 암호화된 project-Id 받기
export const useGetProjectId = () => {
  return useMutation({
    mutationFn: getProjectId,
    onSuccess: (data: RESTYPE<ProjectIdResponse>) => {
      if (data) {
        navigator.clipboard
          .writeText(
            `https://feedme-union.vercel.app/onboarding?id=${data.data.cryptography_project_id}`,
          )
          .then(() => {
            alert('복사되었습니다!');
          })
          .catch((error) => {
            console.error('클립보드 복사 실패:', error);
          });
      }
    },
    onError: () => {
      console.log('project-Id 받기 실패');
    },
  });
};

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
