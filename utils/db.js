import firebase from './firebase';

const firestore = firebase.firestore();

export const createUser = (uid, data) => {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
};

export const createSite = (uid, siteData) => {
  const site = firestore.collection('sites').doc();
  site.set({ userId: uid, ...siteData });
  return site;
};
