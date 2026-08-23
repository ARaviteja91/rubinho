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
import Bloomy from './pages/Bloomy.jsx';
import NotePadVD from './pages/NotePadVD.jsx';
import SimbisiSweater from './pages/SimbisiSweater.jsx';
import TuliaMugs from './pages/TuliaMugs.jsx';
import JLPaPa from './pages/JLPaPa.jsx';
import IoTInterface from './pages/IoTInterface.jsx';
import HotOnes from './pages/HotOnes.jsx';
import DrivR from './pages/DrivR.jsx';
import PunkAnime from './pages/PunkAnime.jsx';
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
      <Route path="/visual-design/bloomy" element={<Bloomy />} />
      <Route path="/visual-design/notepad" element={<NotePadVD />} />
      <Route path="/visual-design/simbisi-sweater" element={<SimbisiSweater />} />
      <Route path="/visual-design/tulia-mugs" element={<TuliaMugs />} />
      <Route path="/visual-design/papa" element={<JLPaPa />} />
      <Route path="/visual-design/iot" element={<IoTInterface />} />
      <Route path="/visual-design/hot-ones" element={<HotOnes />} />
      <Route path="/visual-design/drivr" element={<DrivR />} />
      <Route path="/visual-design/punk-anime" element={<PunkAnime />} />
      <Route path="/info" element={<Info />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
