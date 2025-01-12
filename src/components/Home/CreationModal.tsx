import { initialProjectRequest } from '@/constants/project';
import { useCreateProject } from '@/hooks/api/useProject';
import { ProjectRequest } from '@/types/api/project';
import { isProjectValid } from '@/utils/validation';
import { useState } from 'react';

type CreationModalProps = {
  onClose: () => void;
};

const CreationModal = ({ onClose }: CreationModalProps) => {
  const [projectInfo, setProjectInfo] = useState<ProjectRequest>(
    initialProjectRequest,
  );

  const { mutate } = useCreateProject();

  const handleChange = (key: keyof ProjectRequest, value: string) => {
    setProjectInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    if (!isProjectValid(projectInfo)) {
      alert('필수 정보를 입력해주세요!');
    }
    mutate(projectInfo);
  };
  return (
    <div className="h-screen w-screen fixed bg-[rgb(0,0,0,0.50)] flex justify-center items-center px-6">
      <div className="w-full max-w-[600px] bg-white rounded-3xl flex flex-col items-center p-4 gap-6">
        <div className="w-full pt-3 px-4 flex flex-col justify-center gap-6">
          <div className="text-secondary text-xl font-bold text-center">
            프로젝트를 생성해보세요!
          </div>
          {/* 프로젝트 정보 입력 */}
          <div className="w-full flex flex-col gap-2">
            <input
              className="w-full border border-white300 rounded-lg px-4 py-3 text-secondary placeholder:text-[#AFAFAF]"
              type="text"
              placeholder="프로젝트를 입력해주세요"
              onChange={(e) => handleChange('title', e.target.value)}
              value={String(projectInfo.title)}
            />
            <div className="relative">
              <textarea
                className="resize-none w-full border border-white300 rounded-lg px-4 py-3 text-secondary placeholder:text-[#AFAFAF]"
                placeholder="설명을 입력해주세요"
                rows={4}
                onChange={(e) => handleChange('content', e.target.value)}
                value={String(projectInfo.content)}
              />
              <div className="absolute bottom-4 right-4 text-[#E1E1E1] text-[0.625rem]">
                최대 200자
              </div>
            </div>
          </div>
        </div>
        {/* 버튼 */}
        <div className="w-full flex gap-1">
          <button
            onClick={onClose}
            className="w-[50%] bg-[#E1E1E1] rounded-[100px] py-4 px-6 text-[#646464] text-base font-bold"
          >
            닫기
          </button>
          <button
            onClick={handleSubmit}
            className="w-[50%] bg-primary rounded-[100px] py-4 px-6 text-secondary text-base font-bold"
          >
            다음으로
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreationModal;
