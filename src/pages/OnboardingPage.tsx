import AppBar from '@/components/Common/AppBar';
import FilledButton from '@/components/Common/FilledButton';
import FeedbackIcon from '@/assets/icons/feedbackIcon.svg?react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetUserName } from '@/hooks/api/useFeedback';

const OnboardingPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const startFeedback = () => {
    navigate(`/nickname/${id}`);
  };

  const { data, isError } = useGetUserName(id || '');

  if (isError) return <div>에러가 발생했습니다.</div>;

  return (
    <>
      <AppBar theme="dark" type="basic" isProgress={false} title="먹이주기" />
      <main className="flex flex-col items-center w-full p-6 pt-28">
        <h1 className="py-6 text-white100 h1 text-center">
          {data}님에게 피드백을 선물해주세요!
        </h1>
        <FeedbackIcon />
      </main>
      <FilledButton
        title="좋아요!"
        bgColor="bg-secondary"
        fontColor="text-primary"
        onClick={startFeedback}
      />
    </>
  );
};

export default OnboardingPage;
