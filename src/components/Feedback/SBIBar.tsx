const SBIBar = ({ step }: { step: number }) => {
  return (
    <div className="flex items-center">
      <button
        className={`flex items-center gap-[6px] py-2 px-3 rounded-3xl ${step >= 1 ? 'bg-primary' : 'bg-black border-[1.5px] border-black300'}`}
      >
        <div>🌟</div>
        <div className={`btn2 ${step >= 1 ? 'text-black' : 'text-black300'} `}>
          상황
        </div>
      </button>
      <div
        className={`w-7 ${step >= 2 ? 'border-primary' : 'border-black200'} border-[2px]`}
      ></div>
      <button
        className={`flex items-center gap-[6px] py-2 px-3 rounded-3xl ${step >= 2 ? 'bg-primary' : 'bg-black border-[1.5px] border-black300'}`}
      >
        <div>🌟</div>
        <div className={`btn2 ${step >= 2 ? 'text-black' : 'text-black300'} `}>
          행동
        </div>
      </button>
      <div
        className={`w-7 ${step >= 3 ? 'border-primary' : 'border-black200'} border-[2px]`}
      ></div>
      <button
        className={`flex items-center gap-[6px] py-2 px-3  rounded-3xl ${step >= 3 ? 'bg-primary' : 'bg-black border-[1.5px] border-black300'}`}
      >
        <div>🌟</div>
        <div className={`btn2 ${step >= 3 ? 'text-black' : 'text-black300'} `}>
          영향
        </div>
      </button>
    </div>
  );
};

export default SBIBar;
