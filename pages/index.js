import * as React from 'react';
import Layout from '../components/layout/Layout';
import { useAuth } from '@/features/auth/useAuth';

export default function Home() {
  const auth = useAuth();

  return auth.user ? (
    <Layout>
      <p>{auth.user.email}</p>
      <button onClick={() => auth.signout()}>Sign out</button>
    </Layout>
  ) : (
    <button onClick={() => auth.signinWithGitHub()}>Sign In</button>
  );
}
