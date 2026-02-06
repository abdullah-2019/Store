const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const { Pool } = require("pg");
const products = require("./products.json");

const pool = new Pool({
  connectionString:
    "postgresql://postgres.rtoazawtlxalfsfkiojg:5RjHRtOPELjgg7DR@aws-1-ap-south-1.pooler.supabase.com:5432/postgres",
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Available models:", Object.keys(prisma).filter(k => !k.startsWith('_')));

  console.log("Start seeding...");
  for (const product of products) {
    const item = await prisma.product.create({
      data: product,
    });
    console.log(`Created product: ${item.name}`);
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error("Seeding Error:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
