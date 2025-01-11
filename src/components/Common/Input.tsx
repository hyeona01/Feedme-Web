import { useEffect, useState } from 'react';
import InvisibleIcon from '@/assets/icons/Reveal.svg?react';
import VisibleIcon from '@/assets/icons/Hide.svg?react';

const INPUT_STATUS = {
  DISABLED: 'DISABLED',
  ACTIVE: 'ACTIVE',
  FILLED: 'FILLED',
  ERROR: 'ERROR',
} as const;

type InputStatus = (typeof INPUT_STATUS)[keyof typeof INPUT_STATUS];

type InputProps = {
  isLight: boolean; // Light: true, Dark: false
  inputType: 'PASSWORD' | 'TEXT'; // 입력 필드의 타입
  placeholder: string; // 플레이스홀더 텍스트
  value: string | null; // 입력 필드의 현재 값
  onChange: (value: string) => void; // 입력값 변경 시 호출될 함수
  isInvalid?: boolean; // 유효하지 않은 입력 상태 여부 (선택적)
  comment?: string;
  label?: string;
};

// inputStyler 함수: 입력 필드의 상태, 필드의 모드에 따른 스타일 반환
const inputStyler = (status: InputStatus, isLight: boolean) => {
  switch (status) {
    case INPUT_STATUS.FILLED:
      return isLight
        ? 'bg-white text-[#191919] border-b-[#191919]'
        : 'bg-black text-[#FAFAF5] border-b-[#FAFAF5]';
    case INPUT_STATUS.DISABLED:
      return isLight
        ? 'bg-white text-[#E1E1E1] border-b-[#E1E1E1]'
        : 'bg-black text-[#AFAFAF] border-b-[#AFAFAF]';
    case INPUT_STATUS.ACTIVE:
      return isLight
        ? 'bg-white text-[#191919] border-b-[#D2FA63]'
        : 'bg-black text-[#FAFAF5] border-b-[#D2FA63]';
    case INPUT_STATUS.ERROR:
      return isLight
        ? 'bg-white border-[#EB0555] text-[#EB0555] [--input-color:#EB0555]'
        : 'bg-black border-[#EB0555] text-[#EB0555] [--input-color:#EB0555]';
  }
};

const Input = ({
  isLight,
  inputType,
  placeholder,
  onChange,
  isInvalid,
  value,
  comment,
  label,
}: InputProps) => {
  // 현재 입력 필드 상태
  const [currentStatus, setCurrentStatus] = useState<InputStatus>(
    isInvalid
      ? INPUT_STATUS.ERROR
      : value
        ? INPUT_STATUS.FILLED
        : INPUT_STATUS.DISABLED,
  );

  // 비밀번호 표시/숨김 상태
  const [showPassword, setShowPassword] = useState(false);

  // 포커스 상태 관리
  const [isFocused, setIsFocused] = useState(false);

  // INPUT_STATUS 상태를 업데이트: isInvalid, value, isFocused 변경 시 상태를 설정
  useEffect(() => {
    if (isInvalid) {
      setCurrentStatus(INPUT_STATUS.ERROR);
    } else if (isFocused) {
      setCurrentStatus(INPUT_STATUS.ACTIVE);
    } else if (value) {
      setCurrentStatus(INPUT_STATUS.FILLED);
    } else {
      setCurrentStatus(INPUT_STATUS.DISABLED);
    }
  }, [isInvalid, value, isFocused]);

  // 입력값 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`font-normal ${isLight ? 'bg-white' : 'bg-black'}`}>
      <div className="text-[#AFAFAF] font-bold text-xs">{label}</div>
      <div
        className={`w-full flex items-center border-b-2 ${inputStyler(currentStatus, isLight)}`}
      >
        <input
          placeholder={placeholder}
          value={value ?? ''}
          className={`w-full outline-none placeholder:text-[var(--input-color)] py-[0.625rem] ${inputStyler(currentStatus, isLight)}`}
          onFocus={() => setIsFocused(true)} // 포커스 상태 활성화
          onBlur={() => setIsFocused(false)} // 포커스 상태 비활성화
          onChange={handleInputChange}
          type={
            inputType === 'PASSWORD'
              ? showPassword
                ? 'text'
                : 'password'
              : 'text'
          }
        />
        {/* 비밀번호 타입일 경우 표시/숨김 토글 아이콘 표시 */}
        {inputType === 'PASSWORD' &&
          (showPassword ? (
            <InvisibleIcon onClick={() => setShowPassword(!showPassword)} />
          ) : (
            <VisibleIcon onClick={() => setShowPassword(!showPassword)} />
          ))}
      </div>
      <div className="text-[#AFAFAF] text-[0.625rem] pt-2">{comment}</div>
    </div>
  );
};

export default Input;
