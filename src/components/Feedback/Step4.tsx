import { useState } from 'react';
import SBIBar from './SBIBar';
import TitleSection from './TitleSection';
import AppBar from '@/components/Common/AppBar';
import { useFeedbackStore } from '@/store/feedback';
import CommentBox from '../Common/CommentBox';
import { useEditPost } from '@/hooks/api/useFeedback';
import { useParams } from 'react-router-dom';

const FeedbackStep4 = ({
  onChangeStep,
  nickname,
}: {
  onChangeStep: (changeValue: number) => void;
  nickname: string;
}) => {
  const { feedbackData, updateFeedbackData } = useFeedbackStore();
  const { mutateAsync } = useEditPost();
  const { id } = useParams();

  const [step, setStep] = useState<number>(
    feedbackData.negative_impact.length > 0 ? 3 : 1,
  );
  const [comment, setComment] = useState<string>(feedbackData.negative_impact);

  const handlePrevStep = () => {
    switch (step) {
      case 1:
        onChangeStep(-1);
        break;
      case 2:
        setComment(feedbackData.negative_situation);
        updateFeedbackData({ ...feedbackData, negative_situation: '' });
        setStep((step) => step - 1);
        break;
      case 3:
        setComment(feedbackData.negative_behavior);
        updateFeedbackData({ ...feedbackData, negative_behavior: '' });
        setStep((step) => step - 1);
        break;
    }
  };

  const handleSubmit = async () => {
    switch (step) {
      case 1:
        updateFeedbackData({ ...feedbackData, negative_situation: comment });
        setStep((step) => step + 1);
        break;
      case 2:
        updateFeedbackData({ ...feedbackData, negative_behavior: comment });
        setStep((step) => step + 1);
        break;
      case 3:
        updateFeedbackData({ ...feedbackData, negative_impact: comment });
        // TODO: 여기서 API 호출하고 성공 시 제출 완료 페이지로 이동하기!
        if (id) await mutateAsync({ id, body: feedbackData });
        break;
    }
    setComment('');
  };

  return (
    <>
      <AppBar
        theme="dark"
        type="back"
        isProgress={true}
        progressPercent={100}
        title={`Feed to ${nickname}`}
        onClickBackButton={handlePrevStep}
      />
      <div className="flex flex-col h-dvh pt-[67px] bg-black">
        <TitleSection title="이런 점이 아쉬워요.. 🥹" bgColor="bg-[#FAE1EA]" />
        <main>
          <article className="pt-8 pb-4 px-8">
            <div className="btn2 w-fit rounded-[0.5rem] px-2 py-1 bg-black100 border border-primary text-primary">
              Q2
            </div>
            <p className="pt-3 text-while300 body2 text-white">
              구체적으로 알려주면 더 도움이 돼요!
            </p>
            <h3 className="text-while300 h1 text-white">
              승준님의 어떤 점이 아쉬웠나요?
            </h3>
            <div className="pt-7 pb-4">
              <SBIBar step={step} />
            </div>
          </article>
        </main>
        <div className="relative flex flex-col gap-5 flex-grow w-full px-6 pb-32 overflow-y-auto">
          {step >= 2 && (
            <div className="w-full py-7 px-6 bg-white rounded-b-3xl rounded-r-3xl body2 text-grey500">
              {feedbackData.negative_situation}
            </div>
          )}
          {step >= 3 && (
            <div className="w-full py-7 px-6 bg-white rounded-b-3xl rounded-r-3xl body2 text-grey500">
              {feedbackData.negative_behavior}
            </div>
          )}
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.45)_0%,_rgba(0,_0,_0,_0)_40.87%)]"></div>
        </div>
        <CommentBox
          placeholder="최소 20자 이상 답변을 입력해주세요."
          value={comment}
          onChange={(value) => setComment(value)}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default FeedbackStep4;
