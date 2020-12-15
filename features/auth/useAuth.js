import * as React from 'react';
import firebase from '@/utils/firebase';
import { useRouter } from 'next/router';

const AuthContext = React.createContext();

const useProvideAuth = () => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();

  const handleUser = (rawUser) => {
    if (!rawUser) {
      setLoading(false);
      setUser(false);
      return false;
    }

    const user = formatUser(rawUser);
    setLoading(false);
    setUser(user);
  };

  const signinWithGitHub = () => {
    setLoading(true);

    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        handleUser(response.user);
        router.push('/');
      });
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        handleUser(null);
        router.push('/login');
      });
  };

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
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId
  };
};
