import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Detail from './Detail.jsx';

function App() {
  const [pilihan, setPilihan] = useState(null);

  return (
    <Routes>
      <Route 
        path="/" 
        element={<Home setPilihan={setPilihan} />} 
      />
      <Route 
        path="/detail" 
        element={<Detail pilihan={pilihan} />} 
      />
    </Routes>
  );
}

export default App;