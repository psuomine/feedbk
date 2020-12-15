import * as React from 'react';
import Layout from '../components/layout/Layout';
import { useAuth } from '@/features/auth/useAuth';

export default function Home() {
  const auth = useAuth();

  return (
    <Layout>
      <button onClick={() => auth.signout()}>Sign out</button>
    </Layout>
  );
}
