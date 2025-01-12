import { useGetReport } from '@/hooks/api/useReport';
import { useUserStore } from '@/store/user';

type ProjectDetailSectionProps = { type: string };

const ProjectDetailSection = ({ type }: ProjectDetailSectionProps) => {
  const { name } = useUserStore();

  const { data: report } = useGetReport(type == 'like');
  // const { data: reportTags } = useGetReportTags(type == 'like');

  return (
    <div className="h-full w-full bg-white p-6 flex flex-col gap64 rounded-t-3xl">
      <div className="flex items-center gap-2">
        <div className="bg-[#7D7D7D] rounded-md px-2 py-1 w-fit text-primary text-xs">
          삐약톤
          {/* {report?.data.content} */}
        </div>
        <div className="text-secondary font-bold py-4">
          팀원들이 보는 {name}님
        </div>
      </div>
      <div className="py-4 flex flex-col gap-4">
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
      <div>
        <div
          className={`${closed && 'h-[220px] overflow-hidden'} flex flex-col px-5 py-4 gap-2 bg-white200 rounded-t-3xl`}
        >
          <div className="w-full border-b border-white300 pb-2 text-[#646464] text-xs font-bold">
            팀원들의 자세한 평가
          </div>
          <div className="p-2 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              {/* {reportTags?.data.tags.map((tag) => ( */}
              <div className="bg-white w-full rounded-xl p-3 text-[#191919] text-xs font-bold">
                팀원 별명
              </div>
              {/* ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailSection;
