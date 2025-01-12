import BackIcon from '@/assets/icons/BackIcon';
import { useNavigate } from 'react-router-dom';

type ReportNavbarProps = {
  title: string;
};

const ReportNavbar = ({ title }: ReportNavbarProps) => {
  const navigate = useNavigate();

  return (
    <div className="w-full relative pt-3 pb-2 flex items-center justify-center">
      <div className="absolute left-5" onClick={() => navigate('/')}>
        <BackIcon theme="dark" />
      </div>
      <div className="text-[#FAFAF5] text-lg font-bold">{title}</div>
    </div>
  );
};

export default ReportNavbar;
