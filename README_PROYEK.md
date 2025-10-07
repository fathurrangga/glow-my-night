# 🌙 Menerangi Malam - Website Cerita Interaktif 3D

Sebuah website permintaan maaf yang tulus dalam bentuk cerita interaktif dengan buku 3D yang dapat dibalik.

## ✨ Fitur Utama

- **Buku 3D Interaktif**: Buku yang dapat dibalik dengan animasi 3D yang realistic
- **Swipe Gesture**: Gesek kiri/kanan untuk membuka dan membalik halaman (mobile)
- **Responsive Design**: 
  - Mobile: Satu halaman penuh
  - Desktop: Dua halaman berdampingan seperti buku fisik
- **Latar Belakang Animasi**: Langit malam dengan bintang-bintang interaktif (particles.js)
- **5 Halaman Cerita**: Pengakuan, kenangan, janji, dan kesempatan baru

## 📖 Struktur Halaman

1. **Cover**: Sampul buku dengan judul "Cerita yang Seharusnya Tidak Gelap"
2. **Halaman 1 - Pengakuan**: Permohonan maaf yang tulus
3. **Halaman 2 - Kenangan Senyuman**: Foto kenangan indah
4. **Halaman 3 - Kenangan Video**: Video momen berharga
5. **Halaman 4 - Janjiku**: Komitmen untuk memperbaiki
6. **Halaman 5 - Kesempatan Baru**: Ajakan untuk menulis cerita bersama

## 🎨 Design System

### Warna
- **Biru Malam**: `hsl(210, 60%, 10%)` - Warna utama background
- **Krem Kertas**: `hsl(40, 45%, 97%)` - Warna halaman buku
- **Emas**: `hsl(43, 74%, 49%)` - Aksen dan highlight

### Tipografi
- **Judul**: Playfair Display (serif, elegant)
- **Body**: Poppins (sans-serif, modern)

### Animasi
- Flip page dengan CSS 3D transforms
- Float animation untuk lentera
- Glow effect untuk elemen interaktif
- Particle stars di background

## 📸 Cara Menambahkan Gambar Personal

### File yang Perlu Diupload:

Buat folder `images` di dalam folder `public` dan tambahkan:

1. **pasangan.jpeg** - Foto bersama pasangan (800x800px minimal)
2. **kenangan1.jpeg** - Foto pasangan tersenyum (800x800px minimal)
3. **keimutan.mp4** - Video singkat (max 10MB, 5-15 detik)

### Struktur Folder:
```
public/
  └── images/
      ├── pasangan.jpeg
      ├── kenangan1.jpeg
      └── keimutan.mp4
```

**Catatan**: Lentera sudah tersedia secara otomatis!

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 💡 Tips untuk Hasil Terbaik

1. **Gambar Berkualitas**: Gunakan foto beresolusi tinggi dengan pencahayaan baik
2. **Video Singkat**: Pastikan video tidak terlalu besar untuk loading yang cepat
3. **Format**: JPG/PNG untuk gambar, MP4 untuk video
4. **Compress**: Gunakan tools seperti TinyPNG untuk compress gambar besar

## 🎯 Teknologi yang Digunakan

- **React** - Framework UI
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Particles.js** - Animasi bintang
- **CSS 3D Transforms** - Efek buku 3D

## 📱 Penggunaan

### Mobile:
1. Tap untuk membuka buku
2. Swipe kiri untuk halaman berikutnya
3. Swipe kanan untuk halaman sebelumnya

### Desktop:
1. Click untuk membuka buku
2. Gunakan tombol panah (← →) untuk navigasi
3. Atau click panah di kiri/kanan buku

## ❤️ Pesan Khusus

Website ini dibuat dengan sepenuh hati sebagai bentuk permintaan maaf yang tulus. Setiap detail dirancang untuk menyampaikan penyesalan dan harapan untuk kesempatan baru.

---

**Dibuat dengan ❤️ dan penyesalan yang tulus**
