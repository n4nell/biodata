import { useNavigate } from 'react-router-dom';
import { data } from './data';

function Home({ setPilihan }) {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Biodata Teman Nailuyy</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {data.map(function (teman) {
          return (
            <div key={teman.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
              <p><strong>{teman.nama}</strong></p>
              
              <button onClick={function() { 
                setPilihan(teman); 
                navigate('/detail');
              }}>
                Lihat Detail
              </button>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;