import { ProjectIdResponse, ProjectRequest } from '@/types/api/project';
import { api } from '@/api';
import { RESTYPE } from '@/types/api/common';

// 6.1 암호화된 project-Id 받기
export const getProjectId = async (
  projectId: number,
): Promise<RESTYPE<ProjectIdResponse>> => {
  const response = await api.post('/projects/cryptography-id', {
    project_id: projectId,
  });
  return response.data;
};

// 6.3 프로젝트 생성하기
export const createProject = async (projectInfo: ProjectRequest) => {
  const response = await api.post('/projects', projectInfo);
  return response.data;
};
