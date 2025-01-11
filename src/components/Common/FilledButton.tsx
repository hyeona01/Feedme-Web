type FilledButtonProps = {
  bgColor?: string; // 버튼의 배경색 (optional)
  fontColor?: string; // 버튼 글자색 (optional)
  title: string; // 버튼에 포함되는 글자 (optional)
  onClick?: () => void; // 클릭 이벤트 핸들러 (optional)
};

const FilledButton = ({
  bgColor = 'bg-primary',
  fontColor = 'text-black',
  title,
  onClick,
}: FilledButtonProps) => {
  return (
    <div className="fixed bottom-0 left-0 flex justify-center w-full">
      <button
        className={`flex justify-center w-full max-w-[600px] pt-6 pb-9 px-6 ${fontColor} ${bgColor} btn1`}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default FilledButton;
