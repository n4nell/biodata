import { useNavigate } from 'react-router-dom';

function Detail({ pilihan }) {
  const navigate = useNavigate();

  if (!pilihan) {
    return (
      <div style={{ textAlign: 'center' }}>
        <p>Data tidak ditemukan!</p>
        <button onClick={function() { navigate('/'); }}>Balik ke Home</button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Detail Teman</h1>
      <div style={{ border: '1px solid #ccc', padding: '20px', display: 'inline-block', borderRadius: '8px' }}>
        <img src={pilihan.foto} alt={pilihan.nama} width="120" style={{ borderRadius: '50%' }} />
        <h3>{pilihan.nama}</h3>
        <p>Kelas: {pilihan.kelas}</p>
        <p>Hobi: {pilihan.hobi}</p>
      </div>
      <br />
      <button onClick={function() { navigate(-1); }} style={{ marginTop: '15px' }}>
        Kembali
      </button>
    </div>
  );
}

export default Detail;