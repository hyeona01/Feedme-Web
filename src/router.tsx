import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import StartPage from '@/pages/StartPage';
import ScrollToTop from '@/components/Common/ScrollToTop';
import SignupPage from '@/pages/SignupPage';
import SigninPage from '@/pages/SigninPage';
import ReportPage from '@/pages/ReportPage';
import OnboardingPage from '@/pages/OnboardingPage';
import FeedbackPage from '@/pages/FeedbackPage';
import FeedbackNicknamePage from '@/pages/FeedbackNicknamePage';
import FeedbackResultPage from '@/pages/FeedbackResultPage';
import FeedbackDetailPage from '@/pages/FeedbackDetailPage';
import FeedbackDetailResultPage from '@/pages/FeedbackDetailResultPage';
import ProjectDetailPage from '@/pages/ProjectDetailPage';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <div className="w-dvw h-dvh bg-white flex justify-center">
        <div className="w-full bg-black text-white100 max-w-[600px] h-full min-h-fit">
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

          <Route path="/report" element={<ReportPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />

          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />

          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/nickname/:id" element={<FeedbackNicknamePage />} />
          <Route path="/feedback/:id" element={<FeedbackPage />} />
          <Route path="/feedback-result" element={<FeedbackResultPage />} />
          <Route path="/feedback-detail" element={<FeedbackDetailPage />} />
          <Route
            path="/feedback-detail/result"
            element={<FeedbackDetailResultPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
