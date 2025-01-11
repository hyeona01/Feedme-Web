import { mode } from '@/constants/components';

type TagProps = {
  title: string;
  type: mode;
  onClick?: () => void;
};

const Tag = ({ title, type, onClick }: TagProps) => {
  return (
    <div
      onClick={onClick}
      className={`w-fit px-3 py-2 flex items-center gap-[0.375rem] rounded-3xl text-xs font-bold ${type == mode.DARK ? 'bg-secondary text-primary' : 'bg-primary text-secondary'}`}
    >
      {title}
    </div>
  );
};

export default Tag;
