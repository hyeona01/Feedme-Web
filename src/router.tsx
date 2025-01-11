import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import StartPage from '@/pages/StartPage';
import ScrollToTop from '@/components/Common/ScrollToTop';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <div className="w-dvw h-dvh bg-white flex justify-center">
        <div className="w-full max-w-[600px] h-full min-h-fit">
          <Outlet />
        </div>
      </div>
    </>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/start" element={<StartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
