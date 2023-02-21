import { Route, Routes } from 'react-router-dom';
import { HomepagePages } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomepagePages />} />
    </Routes>
  );
}

export default App;
