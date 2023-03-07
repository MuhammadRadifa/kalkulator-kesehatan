import { Route, Routes } from 'react-router-dom';
import { AplikasiBMI, AplikasiKalori, AplkasiHidrasi, HomepagePages, NotFound } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/home' element={<HomepagePages />} />
      <Route path='/kalkulator-kalori' element={<AplikasiKalori />} />
      <Route path='/kalkulator-bmi' element={<AplikasiBMI />} />
      <Route path='/kalkulator-hidrasi' element={<AplkasiHidrasi />} />
      <Route path='*' element={<HomepagePages />} />
    </Routes>
  );
}

export default App;
