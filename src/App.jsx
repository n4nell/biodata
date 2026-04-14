import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Detail from './Detail.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;