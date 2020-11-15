import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export default async (req, res) => {
  const { siteId, name, description } = req.body;
  const id = siteId ? siteId : uuidv4();

  if (name.length === 0) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const site = await prisma.site.create({ data: { id, name, description } });

  return res.json(site);
};
