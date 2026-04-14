## 🛠 Langkah 1: Inisialisasi Project

Pertama, kita akan membuat folder project menggunakan Vite. Vite dipilih karena proses pengembangannya jauh lebih cepat daripada create-react-app.

Buka terminal atau CMD, lalu ketik:

```bash
npm create vite@latest nama-project-kamu -- --template react
```

Masuk ke folder project:

```bash
cd nama-project-kamu
```

---

## 📦 Langkah 2: Instalasi Library React Router

Karena React secara bawaan tidak memiliki fitur pindah halaman (routing), kita perlu menginstall library tambahan bernama react-router-dom.

```bash
npm install react-router-dom
```

**Kegunaan:** Library ini memungkinkan kita membuat aplikasi "Single Page Application" (SPA). Artinya, saat pindah halaman, browser tidak perlu me-refresh seluruh halaman, cukup komponennya saja yang berganti.

---

## 🏗 Langkah 3: Menghubungkan Router (main.jsx)

File `main.jsx` adalah titik masuk utama aplikasi kita. Di sini kita harus membungkus komponen `<App />` dengan `<BrowserRouter>`.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' // Import ini wajib

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* Membungkus App agar fitur navigasi aktif */}
    <App />
  </BrowserRouter>
)
```

---

## 📑 Langkah 4: Membuat Data Dummy (data.js)

Kita buat file `data.js` sebagai pengganti database. Kita menggunakan export agar data ini bisa dipanggil di file mana saja.

```js
export const data = [
  { id: 1, nama: "Dudu", foto: "/foto1.jpg", kelas: "XI RPL", hobi: "Makan" },
  { id: 2, nama: "Bubu", foto: "/foto2.jpg", kelas: "XI RPL", hobi: "Tidur" },
  { id: 3, nama: "Husna", foto: "/foto3.jpg", kelas: "XI RPL", hobi: "Main Epep" },
  { id: 4, nama: "Haani", foto: "/foto4.jpg", kelas: "XI RPL", hobi: "Jalan-jalan" }
]
```

---

## 🛤 Langkah 5: Mengatur Jalur Halaman (App.jsx)

Di sini kita menentukan alamat (path) untuk setiap halaman menggunakan `Routes` dan `Route`.

```jsx
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Detail from './Detail.jsx';

function App() {
  return (
    <Routes>
      {/* Alamat "/" akan menampilkan halaman Home */}
      <Route path="/" element={<Home />} />

      {/* Alamat "/detail/:id" akan menampilkan halaman Detail. 
          ":id" adalah parameter dinamis (bisa berubah sesuai angka yang dikirim) */}
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
```

---

## 🏠 Langkah 6: Membuat Halaman Daftar (Home.jsx)

Halaman ini akan menampilkan semua nama teman dari `data.js`.

**Kegunaan useNavigate:** Ini adalah hook yang berfungsi sebagai "supir". Saat tombol diklik, dia akan mengarahkan kita ke alamat tertentu melalui kode.

**Kegunaan data.map:** Kita mengulang (looping) array data teman untuk dijadikan tampilan kotak-kotak biodata.

```jsx
import { useNavigate } from 'react-router-dom';
import { data } from './data';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Biodata Teman</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {data.map(function (teman) {
          return (
            <div key={teman.id} style={{ border: '1px solid #ccc', padding: '15px' }}>
              <p><strong>{teman.nama}</strong></p>

              {/* Navigasi ke alamat /detail/ + id teman (misal: /detail/1) */}
              <button onClick={function() { navigate('/detail/' + teman.id); }}>
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
```

---

## 🔍 Langkah 7: Membuat Halaman Detail (Detail.jsx)

Ini adalah bagian paling penting di mana kita menggunakan `useParams`.

**Kegunaan useParams:** Digunakan untuk mengambil nilai dari URL. Jika alamatnya `/detail/3`, maka useParams akan mengambil angka 3 tersebut.

**Kegunaan data.find:** Setelah mendapatkan ID dari URL, kita harus mencari di file `data.js` mana teman yang memiliki ID yang sama.

**Kenapa ada Number(id)?:** Karena ID yang diambil dari URL tipenya adalah teks (string), sedangkan ID di data kita adalah angka (number). Kita harus menyamakannya agar bisa dibandingkan.

```jsx
import { useParams, useNavigate } from 'react-router-dom';
import { data } from './data';

function Detail() {
  const { id } = useParams(); // Mengambil ID dari URL
  const navigate = useNavigate();

  // Mencari satu data yang ID-nya cocok
  const teman = data.find(function(item) {
    return item.id === Number(id);
  });

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Detail Teman</h1>
      <div style={{ border: '1px solid #ccc', padding: '20px', display: 'inline-block', marginBottom: '15px' }}>
        {/* Menampilkan data teman yang ditemukan */}
        <img src={teman.foto} alt={teman.nama} width="150" style={{ borderRadius: '50%' }} />
        <h3>{teman.nama}</h3>
        <p>Kelas: {teman.kelas}</p>
        <p>Hobi: {teman.hobi}</p>
      </div>
      <br />
      {/* navigate(-1) artinya balik ke halaman sebelumnya */}
      <button onClick={function() { navigate(-1); }}>Kembali</button>
    </div>
  );
}

export default Detail;
```

---

## 🚀 Cara Menjalankan

Pastikan kamu berada di folder project.

Jalankan perintah:

```bash
npm run dev
```

Buka alamat:

```
http://localhost:5173
```

---

## 🧠 Kesimpulan Konsep

Aplikasi ini bekerja dengan alur:

**Klik Tombol di Home ➡️ URL Berubah (Ada ID-nya) ➡️ Halaman Detail Mengambil ID dari URL ➡️ Halaman Detail Mencari Data yang Cocok ➡️ Data Ditampilkan**
