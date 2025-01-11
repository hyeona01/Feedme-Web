import { projectListGet, tagSummariesGet } from '@/api/mainpage';
import { useQuery } from '@tanstack/react-query';

// 3.2 유저 종합피드백 조회하기(메인뷰)
export const useGetSummaries = () => {
  return useQuery({
    queryKey: ['summaries'],
    queryFn: () => tagSummariesGet(),
  });
};

// 6.2 프로젝트 리스트 조회하기(메인뷰)
export const useGetProjectList = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: () => projectListGet(),
  });
};
