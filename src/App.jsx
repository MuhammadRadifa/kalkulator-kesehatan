import { Route, Routes } from 'react-router-dom';
import { HomepagePages, TestPages } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomepagePages />} />
      <Route path='/testing' element={<TestPages />} />
    </Routes>
  );
}

export default App;
