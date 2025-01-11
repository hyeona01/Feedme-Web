import AppBar from '@/components/Common/AppBar';
import FilledButton from '@/components/Common/FilledButton';
import FeedbackIcon from '@/assets/icons/feedbackIcon.svg?react';
import { useNavigate } from 'react-router-dom';

const FeedbackDetailResultPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar theme="dark" type="basic" isProgress={false} title="먹이주기" />
      <main className="flex flex-col items-center w-full p-6 pt-48">
        <FeedbackIcon />
        <h1 className="py-6 text-white100 h1 text-center">아 배부르다!</h1>
      </main>
      <FilledButton
        title="홈으로 이동하기"
        bgColor="bg-secondary"
        fontColor="text-primary"
        onClick={() => navigate('/')}
      />
    </>
  );
};

export default FeedbackDetailResultPage;
