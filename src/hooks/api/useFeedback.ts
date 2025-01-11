import { getEvaluation, getUserName, postEvaluation } from '@/api/feedback';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

// 3.1 암호화된 project-Id로부터 사용자 이름 받기 훅
export const useGetUserName = (cryptographyProjectId: string) => {
  return useQuery({
    queryKey: ['username', cryptographyProjectId],
    queryFn: () => getUserName(cryptographyProjectId),
  });
};

// 5.1 평가 생성 훅
export const useEditPost = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: postEvaluation,
    onSuccess: () => {
      navigate(`/feedback-result`);
    },
    onError: (error) => {
      alert('평가에 실패했습니다. 다시 시도해주세요.');
      console.error('평가 생성하기 실패', error);
    },
  });
};

// 5.2 평가 단일 조회하기 훅
export const useGetEvaluation = (evaluationId: string) => {
  return useQuery({
    queryKey: ['feedback', evaluationId],
    queryFn: () => getEvaluation(evaluationId),
  });
};
