import GithubIcon from '@/assets/icons/Github.svg?react';

const HomeNavbar = () => {
  // TODO: 깃허브 연동
  const handleGithubContinu = () => {};

  return (
    <div className="flex justify-between pt-3 pb-2 px-5">
      {/* TODO: 로고로 변경 */}
      <img src="logo.svg" alt="logo" />
      <GithubIcon onClick={handleGithubContinu} />
    </div>
  );
};

export default HomeNavbar;
