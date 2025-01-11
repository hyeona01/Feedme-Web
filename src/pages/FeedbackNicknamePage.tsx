import AppBar from '@/components/Common/AppBar';
import FilledButton from '@/components/Common/FilledButton';
import Input from '@/components/Common/Input';
import { initialFeedbackData } from '@/contstants/feedback';
import { useGetUserName } from '@/hooks/api/useFeedback';
import { useFeedbackStore } from '@/store/feedback';
import { isNamewordValid } from '@/utils/validation';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FeedbackNicknamePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isError } = useGetUserName(id || '');

  const { updateFeedbackData } = useFeedbackStore();

  const [nickname, setNickname] = useState<string>('');

  const startFeedback = () => {
    if (!isNamewordValid(nickname)) {
      alert('닉네임을 올바르게 입력해주세요.');
      return;
    }
    updateFeedbackData({ ...initialFeedbackData, nickname: nickname });
    navigate('/feedback');
  };

  if (isError) return <div>에러가 발생했습니다.</div>;

  return (
    <>
      <AppBar theme="dark" type="basic" isProgress={false} title="먹이주기" />
      <main className="flex flex-col items-center w-full p-6 pt-28">
        <h1 className="py-6 text-white100 h1 text-center">
          {data}님에게 피드백을 선물해주세요!
        </h1>
        <Input
          value={nickname}
          isLight={false}
          inputType="TEXT"
          placeholder="별명를 입력해주세요"
          onChange={(value) => setNickname(value)}
          isInvalid={!isNamewordValid(nickname)}
          label="아이디"
          comment="20자 이내로 작성해주세요"
        />
      </main>
      <FilledButton title="시작하기" onClick={startFeedback} />
    </>
  );
};

export default FeedbackNicknamePage;
