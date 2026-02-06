import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  // We use the DATABASE_URL environment variable here
  return new PrismaClient()
}

// Global scope to persist across hot reloads
declare const globalThis: {
  prisma: ReturnType<typeof prismaClientSingleton> | undefined
} & typeof global;

const db = globalThis.prisma ?? prismaClientSingleton()

export default db

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db
