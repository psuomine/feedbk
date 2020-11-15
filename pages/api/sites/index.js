import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  const sites = await prisma.site.findMany();

  return res.json(sites);
};
