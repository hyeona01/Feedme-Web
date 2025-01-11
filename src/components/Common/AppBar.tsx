import BackIcon from '@/assets/icons/BackIcon';

type AppBarProps = {
  theme: 'dark' | 'light'; // "dark" | "light"
  type: 'logo' | 'pass' | 'back' | 'basic'; // 로고, 건너뛰기, 뒤로가기 버튼, 버튼 없음 중 어떤 것인지 선택
  title?: string; // 버튼에 포함되는 글자 (optional)
  isProgress: boolean; // progress바가 존재 여부
  progressPercent?: number; // 얼마나 진행됐는지 퍼센트 단위로 (optional)
  onClickPassButton?: () => void; // 건너뛰기 이벤트 핸들러 (optional)
  onClickBackButton?: () => void; // 뒤로가기 이벤트 헨들러 (optional)
};

const AppBar = ({
  theme,
  type,
  title,
  isProgress,
  progressPercent,
  onClickPassButton,
  onClickBackButton,
}: AppBarProps) => {
  const getHeaderStyle = () => {
    switch (type) {
      case 'logo':
        return (
          <div className="flex justify-between items-center w-full h-16 pt-1 px-[20px]">
            <div className="w-12 h-12 rounded-2xl bg-gray-400"></div>
            <div className="h3">{title}</div>
            <div className="w-12 h-12"></div>
          </div>
        );
      case 'pass':
        return (
          <div className="flex justify-between items-center w-full h-16 pt-1 px-5">
            <button className="body3 text-grey600" onClick={onClickPassButton}>
              건너뛰기
            </button>
            <div className="h3">{title}</div>
            <div className="body3 text-transparent">건너뛰기</div>
          </div>
        );
      case 'back':
        return (
          <div className="flex items-center gap-3 w-full h-16 pt-1 px-5">
            <button className="" onClick={onClickBackButton}>
              <BackIcon theme={theme} />
            </button>
            <div className="h3">{title}</div>
          </div>
        );
      case 'basic':
        return (
          <div className="flex items-center gap-3 w-full h-16 pt-1 px-7">
            <div className="h3">{title}</div>
          </div>
        );
    }
  };

  return (
    <div className="fixed top-0 left-0 flex justify-center w-full">
      <header className={`w-full max-w-[600px]`}>
        <div
          className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
        >
          {getHeaderStyle()}
        </div>
        {isProgress && (
          <div className="w-full bg-grey100 h-[3px]">
            <div
              className="bg-primary h-[3px] transition-all duration-300 ease-in-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}
      </header>
    </div>
  );
};

export default AppBar;
