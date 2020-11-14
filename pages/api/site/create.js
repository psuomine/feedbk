import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export default async (req, res) => {
  const { name, description } = req.body;
  const id = uuidv4();

  const site = await prisma.site.create({ data: { id, name, description } });

  return res.json(site);
};
