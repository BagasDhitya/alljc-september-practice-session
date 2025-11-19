import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function resetArticleTable() {
  console.log("🔄 Resetting article table...");

  // Hapus semua data
  await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE "Article" RESTART IDENTITY CASCADE;`
  );

  console.log(
    "✅ Table Article berhasil di-reset (data dihapus + ID kembali ke 1)"
  );
}

async function seedArticles() {
  const articles = [
    {
      title: "Belajar ExpressJS dengan TypeScript",
      content:
        "Panduan lengkap membuat REST API dengan ExpressJS dan TypeScript.",
    },
    {
      title: "Mengenal Prisma ORM",
      content: "Cara menggunakan Prisma sebagai ORM modern yang powerful.",
    },
    {
      title: "Cara Membuat Blog API",
      content: "Langkah demi langkah membangun blog API dengan Node.js.",
    },
    {
      title: "Optimasi Query PostgreSQL",
      content:
        "Tips dan trik mengoptimalkan query PostgreSQL untuk performa maksimal.",
    },
    {
      title: "Apa Itu REST API?",
      content:
        "Penjelasan konsep REST API dan cara kerjanya dalam aplikasi modern.",
    },
    {
      title: "Kelebihan TypeScript",
      content: "Mengapa TypeScript penting untuk development skala besar.",
    },
    {
      title: "Mengenal HTTP Status Code",
      content: "Daftar lengkap HTTP status code dan kapan menggunakannya.",
    },
    {
      title: "Arsitektur Clean Code Backend",
      content:
        "Best practice menulis backend yang rapi, scalable, dan mudah dikembangkan.",
    },
    {
      title: "Konsep Middleware di Express",
      content: "Bagaimana cara kerja middleware dan contoh penggunaannya.",
    },
    {
      title: "Apa itu Controller Service Repository?",
      content:
        "Penjelasan pattern yang sering dipakai untuk backend profesional.",
    },
  ];

  await prisma.article.createMany({
    data: articles,
  });

  console.log("🌱 Seeding selesai: 10 artikel telah dibuat.");
}

async function main() {
  await resetArticleTable();
  await seedArticles();
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (err) => {
    console.error("❌ Error:", err);
    await prisma.$disconnect();
    process.exit(1);
  });
