import ReportNavbar from '@/components/Report/ReportNavbar';
import ReportSection from '@/components/Report/ReportSection';
import { useState } from 'react';

const ReportPage = () => {
  const [type, setType] = useState('like'); // 'like' | 'disappointed';

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <ReportNavbar title="모아둔 먹이" />
      <div className="w-fit my-8 flex justify-center bg-[rgba(255,255,255,0.16)] rounded-3xl">
        <div
          onClick={() => setType('like')}
          className={`m-2 ${type == 'like' ? 'text-secondary bg-primary' : 'text-[#AFAFAF] bg-none'} rounded-3xl px-5 py-2 text-base font-bold`}
        >
          좋아요
        </div>
        <div
          onClick={() => setType('disappointed')}
          className={`m-2 ${type == 'disappointed' ? 'text-secondary bg-primary' : 'text-[#AFAFAF] bg-none'} rounded-3xl px-5 py-2 text-base font-bold`}
        >
          아쉬워요
        </div>
      </div>
      <div className="flex-grow h-full w-full">
        <ReportSection type={type} />
      </div>
    </div>
  );
};

export default ReportPage;
