import { FeedBackDataType } from '@/store/feedback';
import { apiWithoutAuth, apiAiWithoutAuth, api } from '.';

// 3.1 암호화된 project-Id로부터 사용자 이름 받기
export const getUserName = async (cryptographyProjectId: string) => {
  const response = await apiWithoutAuth.get(
    `/projects/${cryptographyProjectId}/users/name`,
  );
  return response.data;
};

// 5.1 평가 생성
export const postEvaluation = async ({
  id,
  body,
}: {
  id: string;
  body: FeedBackDataType;
}) => {
  const response = await apiAiWithoutAuth.post(
    `/evaluations?cryptography-project-id=${id}`,
    body,
  );
  return response.data;
};

// 5.2 평가 단일 조회하기
export const getEvaluation = async (evaluationId: string) => {
  const response = await api.get(`/evaluations/${evaluationId}/details`);
  return response.data;
};
