import { signIn, signUp } from '@/api/auth';
import { SignInRequest, SignInResponse } from '@/types/api/auth';
import { setAccessToken, setRefreshToken } from '@/utils/auth';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { RESTYPE } from '@/types/api/common';
import { useUserStore } from '@/store/user';

/**
 * 로그인 프로세스를 처리하는 커스텀 훅
 *
 * @function useSignIn
 * @returns {UseMutationResult} Tanstack Query의 useMutation 결과
 *
 * @description
 * 이 훅은 로그인 과정을 관리하며 다음과 같은 기능을 수행합니다:
 * 1. signIn 함수를 사용하여 로그인 요청을 보냅니다.
 * 2. 로그인 성공 시 액세스 토큰을 저장하고 홈페이지로 이동합니다.
 * 3. 로그인 실패 시 로그인 페이지로 리다이렉트합니다.
 *
 * @example
 * const { mutate: signIn, isLoading } = useSignIn();
 *
 * const handleSubmit = (data) => {
 *   signIn(data);
 * };
 *
 * if (isLoading) return <LoadingSpinner />;
 *
 * return <LoginForm onSubmit={handleSubmit} />;
 */

// 1.1 사용자 로그인 훅
export const useSignIn = () => {
  const navigate = useNavigate();
  const { updateName } = useUserStore();

  return useMutation({
    mutationFn: signIn,
    onSuccess: (data: RESTYPE<SignInResponse>) => {
      if (data.success) {
        setAccessToken(data.data.access_token);
        setRefreshToken(data.data.refresh_token);

        updateName(data.data.name);

        navigate('/');
      }
    },
    onError: () => {
      alert('아이디 혹은 비밀번호를 다시 확인해주세요.');
    },
  });
};

// 2.1  기본 유저 회원가입 훅
export const useSignUp = (userInfo: SignInRequest) => {
  const navigate = useNavigate();
  const { mutate: signin } = useSignIn(); // 로그인 훅

  return useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      console.log('회원가입 성공');

      // 1초 후에 로그인 시도
      setTimeout(() => {
        signin({ serial_id: userInfo.serial_id, password: userInfo.password });
        console.log('로그인 성공');
      }, 1000);

      navigate('/');
    },
    onError: () => {
      alert('입력 정보를 다시 확인해주세요.');
    },
  });
};
