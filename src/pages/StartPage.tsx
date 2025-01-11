import FeedbackIcon from '@/assets/icons/feedbackIcon.svg?react';
import Button from '@/components/Common/Button';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className="flex flex-col items-center w-full p-6 pt-48">
        <FeedbackIcon />
        <h1 className="py-6 text-white100 h1 text-center">피드미</h1>
      </main>
      <div className="flex flex-col gap-[10px] w-full p-6 pb-8">
        <Button
          title="로그인하기"
          bgColor="bg-primary"
          fontColor="text-black"
          onClick={() => navigate(`/signin`)}
        />
        <Button
          title="회원가입하기"
          bgColor="bg-secondary"
          fontColor="text-primary"
          onClick={() => navigate(`/signup`)}
        />
      </div>
    </>
  );
};

export default StartPage;
