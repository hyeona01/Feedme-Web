import TitleSection from './TitleSection';
import AppBar from '@/components/Common/AppBar';
import { useFeedbackStore } from '@/store/feedback';
import SBIBar from '../Feedback/SBIBar';
import Button from '../Common/Button';
import { useNavigate } from 'react-router-dom';

const FeedbackDetailStep4 = ({
  onChangeStep,
}: {
  onChangeStep: (changeValue: number) => void;
}) => {
  const navigate = useNavigate();
  const { feedbackData } = useFeedbackStore();

  return (
    <>
      <AppBar
        theme="dark"
        type="back"
        isProgress={false}
        title={`${feedbackData.nickname}의 피드백`}
        onClickBackButton={() => onChangeStep(-1)}
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
              <SBIBar step={3} />
            </div>
          </article>
        </main>
        <div className="relative flex flex-col gap-5 flex-grow w-full px-6 pb-32 overflow-y-auto">
          <div className="w-full py-7 px-6 bg-white rounded-b-3xl rounded-r-3xl body2 text-grey500">
            {feedbackData.negative_situation}
          </div>
          <div className="w-full py-7 px-6 bg-white rounded-b-3xl rounded-r-3xl body2 text-grey500">
            {feedbackData.negative_behavior}
          </div>
          <div className="w-full py-7 px-6 bg-white rounded-b-3xl rounded-r-3xl body2 text-grey500">
            {feedbackData.negative_impact}
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.45)_0%,_rgba(0,_0,_0,_0)_40.87%)]"></div>
        </div>
        <footer className="flex justify-center w-full fixed bottom-0 left-0 pb-[30px] px-6">
          <div className="w-full max-w-[600px]">
            <Button
              title="다음으로"
              bgColor="bg-black200"
              fontColor="text-white"
              onClick={() => navigate(`/feedback-detail/result`)}
            />
          </div>
        </footer>
      </div>
    </>
  );
};

export default FeedbackDetailStep4;
