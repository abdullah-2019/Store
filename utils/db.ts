import { PrismaClient } from '@prisma/client'

const PrismaClientSignleton = () => {
    return new PrismaClient();
}

type PrismaClientSignleton = ReturnType<typeof PrismaClientSignleton>;

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClientSignleton | undefined;
}

const prisma = globalForPrisma.prisma ?? PrismaClientSignleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;