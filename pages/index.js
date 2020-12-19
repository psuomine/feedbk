import * as React from 'react';
import Head from 'next/head';
import { Button } from '@chakra-ui/react';
import { useAuth } from '@/features/auth/useAuth';

export default function Home() {
  const auth = useAuth();

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (document.cookie && document.cookie.includes('feedbaek-auth')) {
                window.location.href = "/feedbacks"
              }
            `
          }}
        />
      </Head>
      <Button onClick={() => auth.signinWithGitHub()}>Login</Button>
    </>
  );
}
