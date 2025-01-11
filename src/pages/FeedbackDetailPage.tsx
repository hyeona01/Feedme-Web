import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetEvaluation } from '@/hooks/api/useFeedback';
import { useFeedbackStore } from '@/store/feedback';
import FeedbackDetailStep1 from '@/components/FeedbackDetail/Step1';
import FeedbackDetailStep2 from '@/components/FeedbackDetail/Step2';
import FeedbackDetailStep3 from '@/components/FeedbackDetail/Step3';
import FeedbackDetailStep4 from '@/components/FeedbackDetail/Step4';

const FeedbackDetailPage = () => {
  const { id } = useParams();

  const [step, setStep] = useState<number>(1);
  const { updateFeedbackData } = useFeedbackStore();

  const onChangeStep = (changeValue: number) => {
    setStep((step) => step + changeValue);
  };

  const { data, isError } = useGetEvaluation(id || '');

  if (isError) return <div>에러가 발생했습니다.</div>;
  if (data) updateFeedbackData(data);

  const showCurrentStep = () => {
    switch (step) {
      case 1:
        return <FeedbackDetailStep1 onChangeStep={onChangeStep} />;
      case 2:
        return <FeedbackDetailStep2 onChangeStep={onChangeStep} />;
      case 3:
        return <FeedbackDetailStep3 onChangeStep={onChangeStep} />;
      case 4:
        return <FeedbackDetailStep4 onChangeStep={onChangeStep} />;
    }
  };

  return <>{showCurrentStep()}</>;
};

export default FeedbackDetailPage;
