import { reportGet, reportTagsGet } from '@/api/report';
import { useQuery } from '@tanstack/react-query';

// 3.3 사용자 긍/부정 리포트 조회하기
export const useGetReport = (type: boolean) => {
  return useQuery({
    queryKey: ['report', type],
    queryFn: () => reportGet(type),
  });
};

// 4.1 사용자 긍/부정 태그 조회하기
export const useGetReportTags = (type: boolean) => {
  return useQuery({
    queryKey: ['report-tags', type],
    queryFn: () => reportTagsGet(type),
  });
};
