import CTAIcon from '@/assets/icons/CTAIcon.svg?react';
import { useNavigate } from 'react-router-dom';
import Tag from '@/components/Common/Tag';
import { mode } from '@/constants/components';
import { useGetSummaries } from '@/hooks/api/useMainpage';
import { HASH_TAG_LIST } from '@/contstants/hashTag';

const TotalReport = () => {
  const navigate = useNavigate();
  const { data } = useGetSummaries();

  return (
    <div className="bg-white rounded-3xl px-5 py-4 flex flex-col">
      {/* CTA */}
      <div className="flex items-center justify-between pb-2 border-b border-b-white300 mb-2">
        <div className="text-[#646464] text-xs font-bold">모아둔 먹이</div>
        <CTAIcon
          onClick={() => {
            if (!data?.data?.positive_content?.length) {
              alert('모인 팀원들의 의견이 없어요ㅠ');
              return;
            }
            navigate('/report');
          }}
        />
      </div>
      <div>
        {/* 키워드 */}
        <div className="text-[#191919] text-base font-bold mb-3 p-2">
          Top 3 키워드
        </div>
        <div className="flex gap-2 mb-3">
          {data?.data?.tags?.length ? (
            HASH_TAG_LIST.filter((value) =>
              data?.data?.tags.includes(value.id),
            ).map((value) => <Tag title={`🌟 ${value.tag}`} type={mode.DARK} />)
          ) : (
            <Tag title={'환영합니다!'} type={mode.DARK} />
          )}
        </div>
        {/* 피드백 */}
        <div className="flex flex-col gap-2">
          <div className="p-4 pb-5 bg-white200 flex flex-col gap-2 rounded-xl">
            <div className="w-fit text-xs bg-black200 rounded px-2 py-1 text-white200">
              좋아요
            </div>
            <div className="text-[#646464] text-xs font-normal">
              {data?.data?.positive_content?.length ??
                '새로운 프로젝트를 생성해서 나를 알아봅시다!'}
            </div>
          </div>
          <div className="p-4 pb-5 bg-white200 flex flex-col gap-2 rounded-xl">
            <div className="w-fit text-xs bg-black200 rounded px-2 py-1 text-white200">
              아쉬워요
            </div>
            <div className="text-[#646464] text-xs font-normal">
              {data?.data?.negative_content?.length ??
                '새로운 프로젝트를 생성해서 나를 알아봅시다!'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalReport;
