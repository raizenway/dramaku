<div align="center">
  <img src="https://media.tenor.com/vafOLwS0j0sAAAAj/star-y%C4%B1ld%C4%B1z.gif" width="60" style="background: transparent;" />
  <img src="public/images/logo.svg" alt="Dramaku Logo" style="width: 200px; height: auto; display: inline-block;">
  <img src="https://media.tenor.com/vafOLwS0j0sAAAAj/star-y%C4%B1ld%C4%B1z.gif" width="60" style="background: transparent;" />
</div>

**Dramaku** adalah aplikasi website untuk koleksi drama, anime, film, dan serial TV lainnya!

Projek ini merupakan tugas Pengembangan Web Praktek D-4 Teknik Informatika dari kelompok 9 kelas 3B:
- Banteng Harisantoso (221524036)
- Bhisma Chandra Yudha Setiawan (221524037)

---  
<br>  

## 📚 Daftar Isi  

- [📚 Daftar Isi](#-daftar-isi)
- [🎥 Fitur Utama](#-fitur-utama)
- [🖼️ Tampilan Website](#️-tampilan-website)
- [🛠️ Teknologi yang Digunakan](#️-teknologi-yang-digunakan)
- [🚀 Cara Instalasi](#-cara-instalasi)
  - [**Persiapan**](#persiapan)
  - [**Langkah Instalasi Lokal**](#langkah-instalasi-lokal)
  - [**Langkah Instalasi dengan Docker**](#langkah-instalasi-dengan-docker)

---  
<br>  

## 🎥 Fitur Utama  

- 💡 **Cari Film dan Filter**: Temukan judul favorit Anda dengan mudah menggunakan fitur pencarian yang intuitif.  

- ⭐ **Menambah Ulasan**: Bagikan pengalaman Anda dengan menulis ulasan dan memberi rating.  

- 🔒 **Login Google**: Masuk dengan aman melalui akun Google Anda.  

- 🛠️ **Mengelola Konten**: Kelola informasi film, serial, dan ulasan di halaman admin.  

---  
<br>  

## 🖼️ Tampilan Website  

**1. 📌 Halaman Utama**  
![Halaman Utama](readme/home.webp)

**2. 🎞️ Detail Film**  
![Detail Film](readme/detail.webp)

**3. 🔑 Halaman Login**  
![Halaman Login](readme/login.webp)

**4. 🖋️ Halaman Admin**  
![Halaman Admin](readme/admin.webp)

---  
<br>  

## 🛠️ Teknologi yang Digunakan  

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 40px; align-items: center;">
    <img src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="TailwindCSS" width="70" height="70">
    <img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" width="50" height="50">
    <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png" alt="Vite" width="70" height="70">
    <img src="https://github.com/marwin1991/profile-technology-icons/assets/25181517/afcf1c98-544e-41fb-bf44-edba5e62809a" alt="Laravel" width="70" height="70">
    <img src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" alt="PostgreSQL" width="70" height="70">
    <img src="https://user-images.githubusercontent.com/25181517/187955005-f4ca6f1a-e727-497b-b81b-93fb9726268e.png" alt="Jest" width="70" height="70">
    <img src="https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png" alt="Docker" width="70" height="70">
</div>

---  
<br>  

## 🚀 Cara Instalasi  

### **Persiapan**  
Berikut merupakan versi yang digunakan:  
- **PHP**: `8.2.12`  
- **Composer**: `2.7.9`  
- **Node.js**: `20.16.0`  
- **npm**: `10.9.0`  

### **Langkah Instalasi Lokal**  

1. **Clone Repository**  

2. **Konfigurasi .env**  
   - Atur detail database dan integrasi Google.

3. **Buat Database Baru**  
   Buat database bernama `dramaku` di PostgreSQL.  

4. **Install Dependencies**  
   ```bash
   composer install
   npm install
   ```

5. **Migrasi Database**  
   ```bash
   php artisan migrate
   ```

6. **Jalankan Aplikasi**  
    ```bash
    npm run dev
    php artisan serve
    ```


### **Langkah Instalasi dengan Docker**  

1. **Ganti Konfigurasi Database**  
   Sesuaikan `.env` dan `docker-compose.yml`.  

2. **Jalankan Docker Desktop**  

3. **Bangun dan Jalankan Container**  
   ```bash
   docker-compose up --build
   ```
