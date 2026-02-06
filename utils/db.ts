import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  // 1. Create a connection pool using your env variable
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  
  // 2. Wrap it in the Prisma Adapter
  const adapter = new PrismaPg(pool);
  
  // 3. Pass the adapter to the Client
  return new PrismaClient({ adapter });
};

declare const globalThis: {
  prisma: ReturnType<typeof prismaClientSingleton> | undefined;
} & typeof global;

const db = globalThis.prisma ?? prismaClientSingleton();

export default db;

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;

