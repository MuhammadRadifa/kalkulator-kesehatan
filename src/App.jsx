import { Route, Routes } from 'react-router-dom';
import { AplikasiKalori, HomepagePages } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/home' element={<HomepagePages />} />
      <Route path='/kalkulator-kalori' element={<AplikasiKalori />} />
      <Route path='*' element={<HomepagePages />} />
    </Routes>
  );
}

export default App;
