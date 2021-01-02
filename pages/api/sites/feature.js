import { validate as uuidValidate } from 'uuid';
import { db, auth, firestore } from '@/utils/firebase-admin';

export default async (req, res) => {
  try {
    const { uid } = await auth.verifyIdToken(req.headers.authorization);
    const { featureId, featureName, siteId } = req.body;

    if (featureId.length === 0 || !uuidValidate(featureId)) {
      return res.status(400).json({ error: 'Feature Id is required' });
    }

    if (featureName.length === 0) {
      return res.status(400).json({ error: 'Feature name is required' });
    }

    if (siteId.length === 0) {
      return res.status(400).json({ error: 'Site Id is required' });
    }

    const sitesRef = db.collection('sites');

    // Make sure userId has rights to the site
    const sitesQuerySnapshot = await sitesRef.where('id', '==', siteId).where('userId', '==', uid).get();

    if (sitesQuerySnapshot.empty) {
      res.status(404).json({ message: 'site not found' });
    }

    await sitesRef.doc(siteId).update(
      'features',
      firestore.FieldValue.arrayUnion({
        featureId,
        featureName
      })
    );

    res.status(200).json({});
  } catch (error) {
    res.status(500).json({ error });
  }
};
