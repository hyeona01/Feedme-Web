import { useGetReport, useGetReportTags } from '@/hooks/api/useReport';
import { useUserStore } from '@/store/user';
import { useState } from 'react';

type ReportSectionProps = { type: string };

const ReportSection = ({ type }: ReportSectionProps) => {
  const { name } = useUserStore();
  const [closed, setClosed] = useState(true);

  const { data: report } = useGetReport(type == 'like');
  const { data: reportTags } = useGetReportTags(type == 'like');

  return (
    <div className="h-full w-full bg-white p-6 flex flex-col gap64 rounded-t-3xl">
      <div className="text-secondary font-bold py-4">
        팀원들이 보는 {name}님
      </div>
      <div className="py-4 flex flex-col gap-4">
        <div>
          <div
            className={`${closed && 'h-[220px] overflow-hidden'} flex flex-col px-5 py-4 gap-2 bg-white200 rounded-t-3xl`}
          >
            <div className="w-full border-b border-white300 pb-2 text-[#646464] text-xs font-bold">
              이런 점이 {type == 'like' ? '좋았어요' : '아쉬워요'}
            </div>
            <div className="p-2 flex flex-col gap-4">
              <div className="text-[#646464] text-[10px] font-normal">
                261명 응답
              </div>
              <div className="flex flex-col gap-1">
                {reportTags?.data.tags.map((tag) => (
                  <div className="bg-primary w-full rounded-md text-[#191919] text-xs font-bold px-4 py-3">
                    {tag.id}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            onClick={() => setClosed(!closed)}
            className="bg-white200 rounded-b-3xl py-4 w-full text-center text-[#646464] text-xs"
          >
            {closed ? '열기' : '접기'}
          </div>
        </div>
        <div className="flex flex-col px-5 py-4 gap-6 bg-white200 rounded-3xl">
          <div className="w-full border-b border-white300 pb-2 text-[#646464] text-xs font-bold">
            AI가 요약한 {name}님이에요!
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-secondary text-lg font-bold">
              {report?.data.title}
            </div>
            <div className="text-[#646464] text-xs font-normal">
              {report?.data.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportSection;
