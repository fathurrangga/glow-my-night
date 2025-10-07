# Instruksi Upload Gambar Personal

Untuk melengkapi website cerita interaktif "Menerangi Malam", Anda perlu menambahkan gambar-gambar personal berikut:

## Gambar yang Perlu Diupload:

### 1. **images/pasangan.jpeg**
- **Lokasi**: Halaman 1 (Pengakuan)
- **Deskripsi**: Foto bersama pasangan Anda
- **Ukuran Rekomendasi**: Minimal 800x800px (persegi)
- **Format**: JPG atau PNG

### 2. **images/kenangan1.jpeg**
- **Lokasi**: Halaman 2 (Kenangan Senyuman)
- **Deskripsi**: Foto pasangan Anda tersenyum
- **Ukuran Rekomendasi**: Minimal 800x800px (persegi)
- **Format**: JPG atau PNG

### 3. **images/keimutan.mp4**
- **Lokasi**: Halaman 3 (Kenangan Video)
- **Deskripsi**: Video singkat pasangan Anda
- **Ukuran Rekomendasi**: Maksimal 10MB untuk performa terbaik
- **Format**: MP4
- **Durasi**: 5-15 detik ideal

## Cara Menambahkan Gambar:

### Opsi 1: Upload ke Public Folder (Paling Mudah)
1. Buat folder `images` di dalam folder `public`
2. Upload semua gambar ke `public/images/`
3. File akan otomatis dapat diakses

### Opsi 2: Upload ke Assets (Untuk Bundling)
1. Upload ke `src/assets/`
2. Import di komponen dengan: `import gambar from "@/assets/nama-gambar.jpeg"`
3. Update komponen InteractiveBook.tsx untuk menggunakan import

## Tips Gambar Terbaik:
- Gunakan foto beresolusi tinggi untuk hasil terbaik
- Foto dengan pencahayaan baik akan terlihat lebih indah
- Untuk video, pastikan format landscape atau portrait sesuai desain
- Compress gambar jika file terlalu besar (gunakan tools seperti TinyPNG)

## Catatan:
✅ Lentera sudah tersedia (generated otomatis)
⏸️ Gambar personal perlu Anda upload sendiri
