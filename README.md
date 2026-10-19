# Solusi Dampak Global — Company Profile Website

Stack: **Next.js (App Router, TypeScript, Tailwind)** untuk frontend + **Strapi** sebagai headless CMS backend.

## Struktur folder yang disediakan di sini

```
solusi-dampak-global/
├── frontend/                # file yang perlu kamu salin ke project Next.js kamu
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   └── Hero.tsx
│   ├── lib/
│   │   └── strapi.ts
│   ├── types/
│   │   └── strapi.ts
│   ├── tailwind.config.ts
│   └── .env.local.example
└── backend/                 # file yang perlu kamu salin ke project Strapi kamu
    └── src/
        ├── api/hero-section/
        │   ├── content-types/hero-section/schema.json
        │   ├── controllers/hero-section.js
        │   ├── routes/hero-section.js
        │   └── services/hero-section.js
        └── components/shared/cta-button.json
```

Catatan: karena environment ini tidak punya akses internet, saya tidak bisa menjalankan `create-next-app` / `create-strapi-app` (butuh download dari npm registry). Jadi langkah scaffolding kamu jalankan sendiri di komputer kamu, lalu file-file di atas tinggal ditempel ke posisi yang sama di project kamu.

## 1. Setup Strapi (backend)

```bash
npx create-strapi-app@latest backend --quickstart
cd backend
```

Setelah project jadi:
1. Salin folder `backend/src/components/shared/cta-button.json` → `backend/src/components/shared/cta-button.json`
2. Salin folder `backend/src/api/hero-section/` → `backend/src/api/hero-section/`
3. Jalankan `npm run develop`, buka `http://localhost:1337/admin`, buat akun admin.
4. Di **Settings → Roles → Public**, aktifkan permission `find` untuk `Hero-section`, supaya Next.js bisa fetch data tanpa login.
5. Masuk ke **Content Manager → Hero Section**, isi field: `tagline`, `titleHero`, `subtitleHero`, `ctaConsultation` (label: "Konsultasi"), `ctaVolunteer` (label: "Menjadi Relawan"), lalu **Publish**.

## 2. Setup Next.js (frontend)

```bash
npx create-next-app@latest frontend --typescript --tailwind --app --src-dir=false --import-alias "@/*"
cd frontend
```

Lalu salin isi folder `frontend/` di atas ke project barumu (timpa `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, `tailwind.config.ts`, tambahkan `components/`, `lib/`, `types/`).

Buat file env:
```bash
cp .env.local.example .env.local
```

Jalankan:
```bash
npm run dev
```

Buka `http://localhost:3000` — Hero Section akan menampilkan data dari Strapi. Kalau Strapi belum diisi/belum nyala, komponen tetap tampil dengan konten fallback yang sudah saya siapkan (jadi halaman tidak pernah kosong saat development).

## 3. Rencana desain Hero Section

- **Warna**: hijau tua `#0F2B22` (latar, kesan tepercaya/lingkungan) — bukan hijau default, dipilih agar terasa serius tapi hangat; aksen emas `#C9963C` (kehangatan, filantropi) untuk tombol utama dan tagline; teks krem lembut `#F3EFE6` untuk kontras nyaman di atas hijau tua.
- **Tipografi**: Fraunces (serif, untuk judul — beri karakter humanis, tidak generik) + Inter (sans, untuk body dan tombol). Ukuran judul besar (36–60px) dengan line-height rapat.
- **Layout**: teks rata kiri, tidak simetris/center seperti hero generik; ada pola garis diagonal tipis di sisi kanan sebagai tekstur, bukan gradient dekoratif klise.
- Dua tombol CTA dibedakan gaya: **Konsultasi** = tombol solid emas (aksi utama/berbayar), **Menjadi Relawan** = tombol outline (aksi sekunder/komunitas).

Struktur data di Strapi dibuat sebagai *Single Type* `hero-section` dengan dua komponen `cta-button` yang reusable, supaya section lain (misalnya CTA di footer) bisa pakai komponen tombol yang sama.

## Langkah selanjutnya yang bisa saya bantu

- Section "Tentang Kami", "Program/Layanan", "Testimoni", "Kontak/Footer"
- Content type Strapi untuk Program, Tim, dan Blog/Artikel
- Deploy: Strapi ke Railway/Render, Next.js ke Vercel
