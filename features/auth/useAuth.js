import * as React from 'react';
import firebase from '@/utils/firebase';
import { useRouter } from 'next/router';
import cookie from 'js-cookie';
import { createUser } from '@/utils/db';

const AuthContext = React.createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'logout':
      return { loading: false, user: false };
    case 'login':
      return { loading: false, user: action.user };
    case 'start-login':
      return { loading: true, user: false };
    default:
      throw new Error();
  }
};

const useProvideAuth = () => {
  const [{ user, loading }, dispatch] = React.useReducer(authReducer, { loading: true, user: false });
  const router = useRouter();

  const handleUser = (rawUser) => {
    if (!rawUser) {
      dispatch({ type: 'logout' });
      cookie.remove('feedbaek-auth');
      return false;
    }

    const user = formatUser(rawUser);
    createUser(user.uid, user);
    dispatch({ type: 'login', user });
    cookie.set('feedbaek-auth', true, { expires: 1 });
  };

  const signinWithGitHub = () => {
    dispatch({ type: 'start-login' });

    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        handleUser(response.user);
        router.push('/feedbacks');
      });
  };

  const signout = React.useCallback(() => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        handleUser(null);
        router.push('/');
      });
  }, [router]);

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    signinWithGitHub,
    signout
  };
};

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => React.useContext(AuthContext);

const formatUser = (user) => {
  console.log('user', user);
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL
  };
};
