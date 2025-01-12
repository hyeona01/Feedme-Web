import CTAIcon from '@/assets/icons/CTAIcon.svg?react';
import DarkCTAIcon from '@/assets/icons/DarkCTAIcon.svg?react';
import { useNavigate } from 'react-router-dom';
import Tag from '@/components/Common/Tag';
import { mode } from '@/constants/components';
import { useGetProjectList } from '@/hooks/api/useMainpage';

type ProjectListProps = {
  onOpen: () => void;
};

const ProjectList = ({ onOpen }: ProjectListProps) => {
  const navigate = useNavigate();

  const { data } = useGetProjectList();

  return (
    <div className="bg-white rounded-3xl px-5 py-4 flex flex-col">
      {/* CTA */}
      <div className="flex items-center justify-between pb-2 border-b border-b-white300 mb-2">
        <div className="text-[#646464] text-xs font-bold">프로젝트 리스트</div>
        <CTAIcon
          onClick={() => {
            navigate('/');
          }}
        />
      </div>
      {/* 프로젝트 리스트 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {data?.data.projects.map((project) => (
            <Tag
              key={project.id}
              onClick={() => navigate(`/project/${project.id}`)}
              title={project.title}
              type={mode.LIGHT}
            />
          ))}
        </div>
        <DarkCTAIcon onClick={onOpen} />
      </div>
    </div>
  );
};

export default ProjectList;
