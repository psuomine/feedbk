import { db, auth } from '@/utils/firebase-admin';

export default async (req, res) => {
  try {
    const { uid } = await auth.verifyIdToken(req.headers.authorization);
    const snapshot = await db.collection('sites').where('userId', '==', uid).get();

    const sites = [];

    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() });
    });

    return res.status(200).json(sites);
  } catch (error) {
    res.status(500).json({ error });
  }
};
