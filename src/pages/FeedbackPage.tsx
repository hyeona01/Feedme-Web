import { useState } from 'react';
import FeedbackStep1 from '@/components/Feedback/Step1';
import FeedbackStep2 from '@/components/Feedback/Step2';
import FeedbackStep3 from '@/components/Feedback/Step3';
import FeedbackStep4 from '@/components/Feedback/Step4';
import { useParams } from 'react-router-dom';
import { useGetUserName } from '@/hooks/api/useFeedback';

const FeedbackPage = () => {
  const { id } = useParams();

  const [step, setStep] = useState<number>(1);

  const onChangeStep = (changeValue: number) => {
    setStep((step) => step + changeValue);
  };

  const { data, isError } = useGetUserName(id || '');

  if (isError) return <div>에러가 발생했습니다.</div>;

  const showCurrentStep = () => {
    switch (step) {
      case 1:
        return <FeedbackStep1 onChangeStep={onChangeStep} />;
      case 2:
        return <FeedbackStep2 onChangeStep={onChangeStep} nickname={data} />;
      case 3:
        return <FeedbackStep3 onChangeStep={onChangeStep} />;
      case 4:
        return <FeedbackStep4 onChangeStep={onChangeStep} nickname={data} />;
    }
  };

  return <>{showCurrentStep()}</>;
};

export default FeedbackPage;
