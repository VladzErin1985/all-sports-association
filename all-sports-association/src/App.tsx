import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Sponsors from "./pages/Sponsors";
import Donate from "./pages/Donate";
import About from "./pages/About";
import Events from "./pages/Events";
import Awards from "./pages/Awards";
import Contact from "./pages/Contact";
import Photos from "./pages/Photos";
import Videos from "./pages/Videos";
import News from "./pages/News";
import Speakers from "./pages/Speakers";
import MemberPortal from "./pages/MemberPortal";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/members" element={<Members />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/news" element={<News />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/member-portal" element={<MemberPortal />} />
        </Routes>
      </Layout>
    </Router>
  );
}
