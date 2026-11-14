export const projects = [
  {
    slug: "smart-space-booking-api",
    name: "Smart Space Booking API",
    tier: "Flagship",
    hasUi: false,
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
    slug: "lapangin",
    name: "Lapang.in",
    tier: "Full-Stack",
    hasUi: true,
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
    slug: "ecommerce-rest-api",
    name: "E-Commerce REST API",
    tier: "Backend",
    hasUi: false,
    desc: "REST API fondasi server-side e-commerce dengan NestJS — autentikasi JWT RBAC (Admin vs Customer), sanitasi input DTO class-validator, proteksi HTTP headers & rate limiting, siap deployment.",
    tags: ["Node.js", "NestJS", "TypeScript", "Prisma ORM", "PostgreSQL", "REST API"],
    github: "https://github.com/Ameer-28/ecommerce-backend",
    caseStudy: {
      layers: "Siklus pesanan e-commerce end-to-end.",
      entities: "Relasi katalog–kategori–order.",
      decision: "DTO class-validator & JWT RBAC untuk peran Admin vs Customer."
    }
  },
  {
    slug: "train-ticketing-management-api",
    name: "Train Ticketing & Management API",
    tier: "Backend",
    hasUi: false,
    desc: "Backend API pemesanan tiket kereta modular dan production-ready berbasis NestJS, skema database relasional Prisma ORM, autentikasi Passport JWT, dokumentasi Swagger otomatis, dan suite pengujian Jest.",
    tags: ["NestJS", "TypeScript", "Prisma ORM", "MySQL", "REST API", "Jest", "Swagger"],
    github: "https://github.com/Ameer-28/Train_Project"
  },
  {
    slug: "nestjs-prisma-architecture-boilerplate",
    name: "NestJS & Prisma Architecture Boilerplate",
    tier: "Architecture",
    hasUi: false,
    desc: "Starter boilerplate backend REST API modular dengan NestJS & Prisma ORM, autentikasi JWT, password hashing bcrypt, validasi input otomatis lewat class-validator, Swagger UI, serta Jest & Supertest.",
    tags: ["NestJS", "Prisma ORM", "TypeScript", "Architecture", "MySQL", "Swagger"],
    github: "https://github.com/Ameer-28/Nest-Prisma"
  }
];
