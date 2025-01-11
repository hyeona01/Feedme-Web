import Input from '@/components/Common/Input';
import { initialSignupInfo } from '@/constants/auth';
import { SignupRequest } from '@/types/api/auth';
import { useState } from 'react';
import FilledButton from '../Common/FilledButton';
import {
  isIdValid,
  isNamewordValid,
  isPasswordValid,
} from '@/utils/validation';
import { useSignUp } from '@/hooks/api/useAuth';

const SignupForm = () => {
  const [userInfo, setUserInfo] = useState<SignupRequest>(initialSignupInfo);

  const { mutate } = useSignUp({
    serial_id: userInfo.serial_id,
    password: userInfo.password,
  });

  const handleChange = (key: keyof SignupRequest, value: string) => {
    setUserInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      !isIdValid(String(userInfo.serial_id)) ||
      !isPasswordValid(String(userInfo.password)) ||
      !isNamewordValid(String(userInfo.name))
    ) {
      alert('필드를 다시 입력해주세요.');
      return;
    }

    mutate(userInfo);
  };

  return (
    <div className="w-full p-6 flex flex-col gap-6">
      <Input
        value={String(userInfo.serial_id)}
        isLight={false}
        inputType="TEXT"
        placeholder="아이디를 입력해주세요"
        onChange={(value) => handleChange('serial_id', value)}
        isInvalid={!isIdValid(String(userInfo.serial_id))}
        label="아이디"
      />
      <Input
        value={String(userInfo.password)}
        isLight={false}
        inputType="PASSWORD"
        placeholder="비밀번호를 입력해주세요"
        onChange={(value) => handleChange('password', value)}
        isInvalid={!isPasswordValid(String(userInfo.password))}
        label="비밀번호"
      />
      <Input
        value={String(userInfo.name)}
        isLight={false}
        inputType="TEXT"
        placeholder="이름을 입력해주세요"
        onChange={(value) => handleChange('name', value)}
        isInvalid={!isNamewordValid(String(userInfo.name))}
        label="이름"
      />
      <FilledButton title="회원가입" onClick={handleSubmit} />
    </div>
  );
};

export default SignupForm;
