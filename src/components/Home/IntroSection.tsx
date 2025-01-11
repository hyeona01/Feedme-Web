import { useUserStore } from '@/store/user';

const IntroSection = () => {
  const { name } = useUserStore();
  // TODO: 키워드 get API 연결

  return (
    <div className="text-2xl font-bold text-white100 leading-[32px] tracking-[-0.096px] my-6">
      <div>안녕하세요</div>
      <div>
        <span className="text-primary">귀엽고 착한</span> {name}님!
      </div>
    </div>
  );
};

export default IntroSection;
