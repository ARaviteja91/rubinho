import { Routes, Route } from 'react-router-dom';
import { usePageFx } from './fx.jsx';
import Landing from './pages/Landing.jsx';
import Home from './pages/Home.jsx';
import UXCaseStudies from './pages/UXCaseStudies.jsx';
import Nia from './pages/Nia.jsx';
import Davai from './pages/Davai.jsx';
import Chirp from './pages/Chirp.jsx';
import Eklat from './pages/Eklat.jsx';
import Monumentale from './pages/Monumentale.jsx';
import VisualDesign from './pages/VisualDesign.jsx';
import Beeswax from './pages/Beeswax.jsx';
import Info from './pages/Info.jsx';

export default function App() {
  usePageFx();
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/ux-case-studies" element={<UXCaseStudies />} />
      <Route path="/ux-case-studies/nia" element={<Nia />} />
      <Route path="/ux-case-studies/davai" element={<Davai />} />
      <Route path="/ux-case-studies/chirp" element={<Chirp />} />
      <Route path="/ux-case-studies/eklat" element={<Eklat />} />
      <Route path="/ux-case-studies/monumentale" element={<Monumentale />} />
      <Route path="/visual-design" element={<VisualDesign />} />
      <Route path="/visual-design/beeswax" element={<Beeswax />} />
      <Route path="/info" element={<Info />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
