import { ProjectRequest } from '@/types/api/project';
import { api } from '@/api';

// 6.3 프로젝트 생성하기
export const createProject = async (projectInfo: ProjectRequest) => {
  const response = await api.post('/projects', projectInfo);
  return response.data;
};
