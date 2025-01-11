import { useRef, useState, useEffect } from 'react';
import CommentIcon from '@/assets/icons/CommentIcon.svg?react';
import SendIcon from '@/assets/icons/SendIcon.svg?react';

type CommentBoxProps = {
  placeholder: string; // 플레이스홀더 텍스트
  value: string; // 입력 필드의 현재 값
  onChange: (value: string) => void; // 입력값 변경 시 호출될 함수
  onSubmit: () => void; // 제출 시 호출될 함수
};

const CommentBox = ({
  placeholder,
  value,
  onChange,
  onSubmit,
}: CommentBoxProps) => {
  // 포커스 상태 관리
  const [isFocused, setIsFocused] = useState(false);

  // textarea의 높이를 조정하기 위한 ref
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const isValid = () => value.length >= 20;

  // 입력값 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
    adjustTextareaHeight();
  };

  // textarea 높이 조정
  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // 높이를 초기화
      const scrollHeight = textareaRef.current.scrollHeight; // 내용에 맞는 높이
      const maxRows = 8;
      const lineHeight = 24; // textarea의 한 줄 높이 (px)
      const maxHeight = maxRows * lineHeight;

      textareaRef.current.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
    }
  };

  // 컴포넌트가 마운트되었거나 값이 변경될 때 높이 조정
  useEffect(() => {
    adjustTextareaHeight();
  }, [value]);

  return (
    <div
      className={`z-50 fixed bottom-0 w-full max-w-[600px] flex justify-between items-end bg-secondary rounded-t-3xl pt-6 pb-12 px-8`}
    >
      <div
        className={`w-full flex items-end border-b-2 ${
          isFocused ? 'border-b-[#D2FA63]' : 'border-b-[#7D7D7D]'
        }`}
      >
        <div className="flex flex-grow items-end gap-3">
          <div className="h-11 py-[0.625rem] flex items-center">
            <CommentIcon
              fill={`${
                isFocused ? '#D2FA63' : value.length === 0 ? '#AFAFAF' : 'white'
              }`}
            />
          </div>
          <textarea
            ref={textareaRef} // ref 연결
            placeholder={placeholder}
            value={value}
            className={`flex-grow bg-secondary w-full mr-3 outline-none placeholder:text-[var(--input-color)] font-normal py-[0.625rem] ${
              value.length === 0 ? 'text-[#AFAFAF]' : 'text-[#FAFAF5]'
            } resize-none`}
            onFocus={() => setIsFocused(true)} // 포커스 상태 활성화
            onBlur={() => setIsFocused(false)} // 포커스 상태 비활성화
            onChange={handleInputChange}
            rows={1} // 기본 1줄
          />
        </div>
        <div className="h-11 py-[0.625rem] flex items-center">
          <SendIcon
            className="pr-2"
            fill={`${isValid() ? '#D2FA63' : 'white'}`}
            onClick={() => isValid() && onSubmit()}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
