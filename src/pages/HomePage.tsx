import CreationModal from '@/components/Home/CreationModal';
import HomeNavbar from '@/components/Home/HomeNavbar';
import IntroSection from '@/components/Home/IntroSection';
import ProjectList from '@/components/Home/ProjectList';
import TotalReport from '@/components/Home/TotalReport';
import { useState } from 'react';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <CreationModal onClose={() => setIsOpen(false)} />}
      <>
        <HomeNavbar />
        <div className="flex flex-col gap-4 p-6">
          <IntroSection />
          <TotalReport />
          <ProjectList onOpen={() => setIsOpen(true)} />
        </div>
      </>
    </>
  );
};

export default HomePage;
