import SignupForm from '@/components/Signup/SignupForm';

const SignupPage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-2xl font-bold mt-40 mb-20">회원가입</div>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
