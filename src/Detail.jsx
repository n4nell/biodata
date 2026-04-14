import { useParams, useNavigate } from 'react-router-dom';
import { data } from './data';

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const teman = data.find(function(item) {
    return item.id === Number(id);
  });

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Detail Teman</h1>
      <div style={{ border: '1px solid #ccc', padding: '20px', display: 'inline-block', marginBottom: '15px' }}>
        <img src={teman.foto} alt={teman.nama} width="150" style={{ borderRadius: '50%' }} />
        <h3>{teman.nama}</h3>
        <p>Kelas: {teman.kelas}</p>
        <p>Hobi: {teman.hobi}</p>
      </div>
      <br />
      <button onClick={function() { navigate(-1); }}>Kembali</button>
    </div>
  );
}

export default Detail;