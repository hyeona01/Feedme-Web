import { useState } from 'react';
import SBIBar from './SBIBar';
import TitleSection from './TitleSection';
import AppBar from '@/components/Common/AppBar';
import { useFeedbackStore } from '@/store/feedback';
import CommentBox from '../Common/CommentBox';

const FeedbackStep2 = ({
  onChangeStep,
  nickname,
}: {
  onChangeStep: (changeValue: number) => void;
  nickname: string;
}) => {
  const { feedbackData, updateFeedbackData } = useFeedbackStore();

  const [step, setStep] = useState<number>(
    feedbackData.positive_impact.length > 0 ? 3 : 1,
  );
  const [comment, setComment] = useState<string>(feedbackData.positive_impact);

  const handlePrevStep = () => {
    switch (step) {
      case 1:
        onChangeStep(-1);
        break;
      case 2:
        setComment(feedbackData.positive_situation);
        updateFeedbackData({ ...feedbackData, positive_situation: '' });
        setStep((step) => step - 1);
        break;
      case 3:
        setComment(feedbackData.positive_behavior);
        updateFeedbackData({ ...feedbackData, positive_behavior: '' });
        setStep((step) => step - 1);
        break;
    }
  };

  const handleSubmit = () => {
    switch (step) {
      case 1:
        updateFeedbackData({ ...feedbackData, positive_situation: comment });
        setStep((step) => step + 1);
        break;
      case 2:
        updateFeedbackData({ ...feedbackData, positive_behavior: comment });
        setStep((step) => step + 1);
        break;
      case 3:
        updateFeedbackData({ ...feedbackData, positive_impact: comment });
        onChangeStep(1);
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
        progressPercent={50}
        title={`Feed to ${nickname}`}
        onClickBackButton={handlePrevStep}
      />
      <div className="flex flex-col h-dvh pt-[67px] bg-black">
        <TitleSection
          title="이런 점이 너무 좋았어요! 😆"
          bgColor="bg-success3"
        />
        <main>
          <article className="pt-8 pb-4 px-8">
            <div className="btn2 w-fit rounded-[0.5rem] px-2 py-1 bg-black100 border border-primary text-primary">
              Q2
            </div>
            <p className="pt-3 text-while300 body2 text-white">
              구체적으로 알려주면 더 도움이 돼요!
            </p>
            <h3 className="text-while300 h1 text-white">
              승준님의 어떤 점이 좋았나요?
            </h3>
            <div className="pt-7 pb-4">
              <SBIBar step={step} />
            </div>
          </article>
        </main>
        <div className="relative flex flex-col gap-5 flex-grow w-full px-6 pb-32 overflow-y-auto">
          {step >= 2 && (
            <div className="w-full py-7 px-6 bg-white rounded-b-3xl rounded-r-3xl body2 text-grey500">
              {feedbackData.positive_situation}
            </div>
          )}
          {step >= 3 && (
            <div className="w-full py-7 px-6 bg-white rounded-b-3xl rounded-r-3xl body2 text-grey500">
              {feedbackData.positive_behavior}
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

export default FeedbackStep2;
