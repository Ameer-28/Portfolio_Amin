# amin.dev — Portofolio (Astro)

Hasil migrasi dari `hero.html` (satu file HTML/CSS/JS) ke proyek Astro yang
terstruktur per-komponen, tapi tampilan dan interaksinya dipertahankan
persis sama seperti desain aslinya.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:4321`.

## Struktur proyek

```
src/
  layouts/Layout.astro     # <head>, font Google, import CSS global
  components/
    Nav.astro              # navbar pill
    Hero.astro             # hero + kartu foto tilt-3D interaktif
    About.astro            # section "tentang", console whoami, stat, timeline
    Showcase.astro         # tab Proyek / Sertifikasi / Tech Stack
    Contact.astro          # jam WIB live, tombol salin email, sosial media
    Modals.astro           # modal detail proyek & sertifikat
    react/
      VariableProximity.jsx  # efek teks "variable proximity" (dari reactbits.dev)
      VariableProximity.css  # font Roboto Flex (variable font) + helper warna
      HeroTitle.jsx           # wrapper yang memasang efek ke judul hero
  data/
    projects.js            # data proyek (edit di sini untuk nambah proyek)
    certs.js                # data sertifikasi
  styles/global.css        # semua CSS asli, tidak diubah
  pages/index.astro         # merangkai semua komponen jadi satu halaman
public/
  images/projects/          # taruh thumbnail proyek di sini
  images/certificates/      # taruh gambar sertifikat di sini
  CV_Muhammad_Amin_Murtadho.pdf  # tambahkan file CV kamu di sini
```

## Efek teks hero (Variable Proximity)

Judul di hero ("Backend developer in progress.") sekarang memakai efek
[Variable Proximity dari reactbits.dev](https://reactbits.dev/text-animations/variable-proximity):
huruf yang didekati kursor jadi lebih tebal (bold) secara halus, lalu
kembali tipis saat kursor menjauh. Efek ini butuh font variabel, jadi
font judul hero diganti ke **Roboto Flex** (yang lain di situs tetap
pakai Space Grotesk / Inter / IBM Plex Mono seperti semula).

Untuk menyesuaikan efeknya, edit `src/components/react/HeroTitle.jsx`:
- `radius` — seberapa jauh jangkauan kursor mempengaruhi huruf (px).
- `falloff` — `"linear"`, `"exponential"`, atau `"gaussian"`.
- `fromFontVariationSettings` / `toFontVariationSettings` — rentang
  ketebalan (`wght`) dan optical size (`opsz`) dari kondisi normal ke
  kondisi saat didekati kursor.

Karena ini komponen React, Astro butuh `client:load` di tag
`<HeroTitle client:load />` (sudah ada di `Hero.astro`) supaya efeknya
aktif di browser.

## Menambah proyek atau sertifikat baru

Cukup tambahkan object baru ke `src/data/projects.js` atau
`src/data/certs.js` — kartu, modal, dan hitungan tab akan otomatis
menyesuaikan karena semuanya di-render dari data ini.

## Build & deploy

```bash
npm run build    # hasil build statis ada di folder dist/
npm run preview  # preview hasil build
```

Paling gampang deploy ke **Vercel** atau **Netlify**:
1. Push folder ini ke repo GitHub.
2. Import repo di Vercel/Netlify, framework preset akan otomatis
   terdeteksi sebagai Astro.
3. Deploy — tidak perlu setting tambahan.

## Catatan

- Gambar proyek/sertifikat belum disertakan (tidak ada di desain asli).
  Kartu akan menampilkan fallback inisial sampai kamu menambahkan file
  gambar sesuai nama di `src/data/projects.js` / `certs.js`.
- Tambahkan file `CV_Muhammad_Amin_Murtadho.pdf` ke folder `public/`
  supaya tombol "Unduh CV" berfungsi.
