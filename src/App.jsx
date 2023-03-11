import { Route, Routes } from 'react-router-dom';
import {
  AplikasiBMI,
  AplikasiKalori,
  AplikasiKebahagiaan,
  AplikasiTidur,
  AplkasiHidrasi,
  HomepagePages,
  NotFound,
  AplikasiRokok,
} from './pages';

function App() {
  return (
    <Routes>
      <Route path='/home' element={<HomepagePages />} />
      <Route path='/kalkulator-kalori' element={<AplikasiKalori />} />
      <Route path='/kalkulator-bmi' element={<AplikasiBMI />} />
      <Route path='/kalkulator-hidrasi' element={<AplkasiHidrasi />} />
      <Route path='/kalkulator-kebahagiaan' element={<AplikasiKebahagiaan />} />
      <Route path='/kalkulator-siklus-tidur' element={<AplikasiTidur />} />
      <Route path='/kalkulator-rokok' element={<AplikasiRokok />} />
      <Route path='*' element={<HomepagePages />} />
    </Routes>
  );
}

export default App;
