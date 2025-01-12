import FilledButton from '@/components/Common/FilledButton';
import ProjectDetailSection from '@/components/ProjectDetail/ProjectDetailSection';
import ReportNavbar from '@/components/Report/ReportNavbar';
import { useGetProjectId } from '@/hooks/api/useProject';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetailPage = () => {
  const [type, setType] = useState('like'); // 'like' | 'disappointed';
  const { id } = useParams();

  const { mutate } = useGetProjectId();

  return (
    <div>
      <ReportNavbar title="삐약톤" />
      <div className="mt-8 py-4 px-8 text-[#AFAFAF] text-sm font-normal">
        설명
      </div>
      <div className="w-full flex justify-center">
        <div className="w-fit my-8 flex justify-center bg-[rgba(255,255,255,0.16)] rounded-3xl">
          <div
            onClick={() => setType('like')}
            className={`m-2 ${type == 'like' ? 'text-secondary bg-primary' : 'text-[#AFAFAF] bg-none'} rounded-3xl px-5 py-2 text-base font-bold`}
          >
            좋아요
          </div>
          <div
            onClick={() => setType('disappointed')}
            className={`m-2 ${type == 'disappointed' ? 'text-secondary bg-primary' : 'text-[#AFAFAF] bg-none'} rounded-3xl px-5 py-2 text-base font-bold`}
          >
            아쉬워요
          </div>
        </div>
      </div>
      <ProjectDetailSection type={type} />
      <FilledButton
        title="피드미 요청하기"
        onClick={() => mutate(Number(id))}
      />
    </div>
  );
};

export default ProjectDetailPage;
