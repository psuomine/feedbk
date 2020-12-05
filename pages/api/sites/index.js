import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  const sites = await prisma.site.findMany();

  const features = [
    { id: '2bb12a06-5c2f-4ff7-865c-b3a373c42f96', name: 'Feature 123' },
    { id: '2bb12a06-5c2f-4ff7-865c-b3a373c42f90', name: 'Feature 456' }
  ];

  const result = sites.map((site) => ({ ...site, features }));

  return res.json(result);
};
