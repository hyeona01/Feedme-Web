import FilledButton from '@/components/Common/FilledButton';
import Input from '@/components/Common/Input';
import { initialSigninInfo } from '@/constants/auth';
import { useSignIn } from '@/hooks/api/useAuth';
import { SignInRequest } from '@/types/api/auth';
import { isIdValid, isPasswordValid } from '@/utils/validation';
import { useState } from 'react';

const SigninPage = () => {
  const [userInfo, setUserInfo] = useState<SignInRequest>(initialSigninInfo);

  const { mutate } = useSignIn();

  const handleChange = (key: keyof SignInRequest, value: string) => {
    setUserInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    mutate(userInfo);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-2xl font-bold mt-40 mb-20">로그인</div>
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
      </div>
      <FilledButton title="로그인" onClick={handleSubmit} />
    </div>
  );
};

export default SigninPage;
