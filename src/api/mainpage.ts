import { RESTYPE } from '@/types/api/common';
import {
  projectListResponse,
  tagSummariesResponse,
} from '@/types/api/mainpage';
import { api } from '.';

// 3.2 유저 종합피드백 조회하기(메인뷰)
export const tagSummariesGet = async (): Promise<
  RESTYPE<tagSummariesResponse>
> => {
  const response = await api.get(`/users/overviews`);
  return response.data;
};

// 6.2 프로젝트 리스트 조회하기(메인뷰)
export const projectListGet = async (): Promise<
  RESTYPE<projectListResponse>
> => {
  const response = await api.get(`/projects`);
  return response.data;
};
