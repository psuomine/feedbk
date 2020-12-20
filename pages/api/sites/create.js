import { v4 as uuidv4 } from 'uuid';
import { db } from '@/utils/firebase-admin';

export default async (req, res) => {
  try {
    const { id, name, description } = req.body;
    const siteId = id ? id : uuidv4();

    if (name.length === 0) {
      return res.status(400).json({ error: 'Name is required' });
    }

    //const { uid } = await auth.verifyIdToken(req.headers.token);
    const sites = await db.collection('sites').doc(id).set({ id: siteId, name, description, userId: '123' });

    res.status(200).json({ sites });
  } catch (error) {
    res.status(500).json({ error });
  }
};
