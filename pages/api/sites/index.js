import { db, auth } from '@/utils/firebase-admin';

export default async (req, res) => {
  try {
    const { uid } = await auth.verifyIdToken(req.headers.authorization);
    const snapshot = await db.collection('sites').where('userId', '==', uid).get();

    const sites = [];

    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() });
    });

    const features = [
      { id: '2bb12a06-5c2f-4ff7-865c-b3a373c42f96', name: 'Feature 123' },
      { id: '2bb12a06-5c2f-4ff7-865c-b3a373c42f90', name: 'Feature 456' }
    ];

    const result = sites.map((site) => ({ ...site, features }));

    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};
