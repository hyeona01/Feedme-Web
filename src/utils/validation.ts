import { ProjectRequest } from '@/types/api/project';

export const isIdValid = (id: string) => {
  return id.length >= 1 && id.length <= 20;
};

export const isPasswordValid = (password: string) => {
  return password.length >= 6 && password.length <= 320;
};

export const isNamewordValid = (name: string) => {
  return name.length >= 1 && name.length <= 20;
};

export const isProjectValid = (projectInfo: ProjectRequest) => {
  return (
    String(projectInfo.title).length <= 30 &&
    String(projectInfo.title).length > 0 &&
    String(projectInfo.content).length > 0 &&
    String(projectInfo.content).length <= 200
  );
};
