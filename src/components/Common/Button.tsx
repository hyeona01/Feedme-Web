type ButtonProps = {
  width?: string; // 버튼의 너비 (optional)
  bgColor?: string; // 버튼의 배경색 (optional)
  fontColor?: string; // 버튼 글자색 (optional)
  title: string; // 버튼에 포함되는 글자 (optional)
  onClick?: () => void; // 클릭 이벤트 핸들러 (optional)
};

const Button = ({
  width = 'w-full',
  bgColor = 'bg-black',
  fontColor = 'text-primary',
  title,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-center ${width} py-4 px-6 rounded-[100px] ${fontColor} ${bgColor} btn1`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
