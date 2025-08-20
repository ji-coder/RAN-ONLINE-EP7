import RootLayout from "./shared/components/Layouts/RootLayout";
import { Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import NewsEventsPage from "./pages/NewsEventsPage";
import NotFound from "./pages/NotFoundPage";
import OurServicesPage from "./pages/OurServicesPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (

    <Routes>
      <Route element={<RootLayout />} >
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about/:id" element={<AboutPage />} />
        <Route path="/news&events" element={<NewsEventsPage />} />
        <Route path="/our-services" element={<OurServicesPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>


  );
}

export default App;
