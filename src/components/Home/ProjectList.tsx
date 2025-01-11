import CTAIcon from '@/assets/icons/CTAIcon.svg?react';
import DarkCTAIcon from '@/assets/icons/DarkCTAIcon.svg?react';
import { useNavigate } from 'react-router-dom';
import Tag from '@/components/Common/Tag';
import { mode } from '@/constants/components';

type ProjectListProps = {
  onOpen: () => void;
};

const ProjectList = ({ onOpen }: ProjectListProps) => {
  const navigate = useNavigate();

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
          <Tag
            onClick={() => navigate(`/report/${0}`)}
            title="삐약톤"
            type={mode.LIGHT}
          />
          <Tag
            onClick={() => navigate(`/report/${0}`)}
            title="삐약톤"
            type={mode.LIGHT}
          />
          <Tag
            onClick={() => navigate(`/report/${0}`)}
            title="삐약톤"
            type={mode.LIGHT}
          />
        </div>
        <DarkCTAIcon onClick={onOpen} />
      </div>
    </div>
  );
};

export default ProjectList;
