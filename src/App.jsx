import RootLayout from "./shared/components/Layouts/RootLayout";
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";

import NewsEventsPage from "./components/NewsEvents/NewsEventsPage";
import NotFound from "./pages/NotFoundPage";
import OurServicesPage from "./pages/OurServicesPage";

import DownloadLinks from "./components/Downloads/DownloadLinks";
import TopUpPage from "./components/TopUp/TopUpPage";
import Rankings from "./components/Rankings/Rankings";
import Login from "./components/LoginRegister/Login";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/news&events" element={<NewsEventsPage />} />
          <Route path="/news&events/page/:page" element={<NewsEventsPage />} />
          <Route path="/server-info" element={<OurServicesPage />} />
          <Route path="/downloads" element={<DownloadLinks />} />
          <Route path="/top-up" element={<TopUpPage />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  );
}

export default App;
