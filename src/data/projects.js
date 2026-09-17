export const projects = [
  {
    slug: "smart-space-booking-api", name: "Smart Space Booking API", tier: "Flagship",
    img: "/images/projects/smart-space-booking-api.png",
    desc: "Layanan REST API backend reservasi coworking space multi-tenant dengan isolasi data App Maker, kalkulasi diskon dinamis, validasi jadwal bebas bentrok, dan 50 endpoint terstandar.",
    tags: ["NestJS", "TypeScript", "Prisma ORM", "PostgreSQL", "Passport JWT", "Swagger", "REST API"],
    github: "https://github.com/Ameer-28/Smart_Space_Booking",
    caseStudy: {
      layers: "Client Guard (x-maker-key) → Authentication & Role Security (Dual-secret JWT) → Domain Business Logic (Collision-Free Scheduler & Dynamic Discount) → Data Persistence (Prisma ORM & PostgreSQL).",
      entities: "AppMaker & User, Space & Diskon, Reservasi & DetailReservasi.",
      decision: "Dual-Secret JWT Isolation & Decoupled Historical Pricing Snapshot."
    }
  },
  {
    slug: "lapangin", name: "Lapang.in", tier: "Full-Stack",
    img: "/images/projects/lapangin-platform.jpg",
    desc: "Platform pemesanan dan manajemen jadwal lapangan olahraga secara real-time. Terdiri dari backend REST API (validasi ketersediaan jadwal, relasi data via Prisma ORM, deployment Railway) dan antarmuka web interaktif yang terintegrasi langsung dengannya.",
    tags: ["NestJS", "TypeScript", "Prisma ORM", "PostgreSQL", "Railway", "REST API", "Next.js", "Tailwind CSS", "Vercel"],
    github: "https://github.com/Ameer-28/Lapangin_backend",
    githubFrontend: "https://github.com/Ameer-28/Lapangin_frontend",
    live: "https://lapangin-frontend.vercel.app/",
    caseStudy: {
      layers: "Antarmuka Next.js terintegrasi langsung dengan REST API backend NestJS, dengan validasi ketersediaan jadwal lapangan di sisi server.",
      entities: "Relasi foreign key lapangan–jadwal–pemesanan, dengan state caching pada data jadwal & pemesanan di sisi frontend.",
      decision: "Penanganan concurrency saat proses booking berlangsung bersamaan, serta UI responsif untuk alur booking dari sisi pengguna."
  }
  },
  {
    slug: "ecommerce-rest-api", name: "E-Commerce REST API", tier: "Backend",
    img: "/images/projects/ecommerce-rest-api.png",
    desc: "E-Commerce Backend adalah REST API yang dibangun dengan NestJS untuk menjadi fondasi server-side dari aplikasi e-commerce — mengelola autentikasi pengguna, keamanan endpoint, dan interaksi data melalui ORM yang type-safe. Project ini dikembangkan dengan pola arsitektur modular khas NestJS, dilengkapi proteksi tingkat produksi (rate limiting, HTTP security headers) dan siap dikontainerisasi untuk deployment.",
    tags: ["Node.js", "NestJS", "TypeScript", "Prisma ORM", "PostgreSQL", "REST API"],
    github: "https://github.com/Ameer-28/ecommerce-backend",
    caseStudy: {
      layers: "Siklus pesanan e-commerce end-to-end.",
      entities: "Relasi katalog–kategori–order.",
      decision: "DTO class-validator & JWT RBAC untuk peran Admin vs Customer."
    }
  },
  {
    slug: "train-ticketing-management-api", name: "Train Ticketing & Management API", tier: "Backend",
    img: "/images/projects/train-ticketing-management-api.png",
    desc: "Train_Project adalah backend API untuk sistem tiket kereta yang dibangun di atas framework NestJS dengan TypeScript, menggunakan Prisma sebagai ORM untuk mengelola data melalui skema database yang terstruktur, serta mengimplementasikan autentikasi berbasis JWT dan Passport untuk mengamankan endpoint pengguna; project ini juga dilengkapi dokumentasi API otomatis via Swagger, suite pengujian unit/e2e dengan Jest, dan konfigurasi siap deploy ke platform Railway, menjadikannya fondasi server-side yang modular dan production-ready untuk aplikasi pemesanan tiket kereta.",
    tags: ["NestJS", "TypeScript", "Prisma ORM", "MySQL", "REST API"],
    github: "https://github.com/Ameer-28/Train_Project"
  },
  {
    slug: "nestjs-prisma-architecture-boilerplate", name: "NestJS & Prisma Boilerplate", tier: "Architecture",
    img: "/images/projects/nestjs-prisma-architecture-boilerplate.png",
    desc: "Nest-Prisma adalah starter/boilerplate backend REST API yang dibangun dengan NestJS sebagai framework utama dan Prisma sebagai ORM untuk mengelola koneksi serta skema database, dilengkapi sistem autentikasi berbasis JWT (via Passport) dengan password yang di-hash menggunakan bcrypt, validasi input otomatis lewat class-validator/class-transformer, dan dokumentasi API interaktif melalui Swagger — sehingga cocok dijadikan pondasi untuk membangun aplikasi backend yang aman, terstruktur, dan siap diuji (didukung Jest & Supertest).",
    tags: ["NestJS", "Prisma ORM", "TypeScript", "Architecture", "MySQL"],
    github: "https://github.com/Ameer-28/Nest-Prisma"
  }
];
