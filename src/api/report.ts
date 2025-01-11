import { api } from '@/api';
import { RESTYPE } from '@/types/api/common';
import { reportResponse, reportTagsResponse } from '@/types/api/report';

// 3.3 사용자 긍/부정 리포트 조회하기
export const reportGet = async (
  type: boolean,
): Promise<RESTYPE<reportResponse>> => {
  const response = await api.get(`/users/reports`, {
    params: {
      'is-positive': type,
    },
  });
  return response.data;
};

// 4.1 사용자 긍/부정 태그 조회하기
export const reportTagsGet = async (
  type: boolean,
): Promise<RESTYPE<reportTagsResponse>> => {
  const response = await api.get(`/users/tags`, {
    params: {
      'is-positive': type,
    },
  });
  return response.data;
};
