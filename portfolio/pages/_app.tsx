import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function BlackPageTransition() {
  const router = useRouter();

  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const handleStart = (url: any) => {
      if (url !== router.asPath) {
        setTransition(true);
      }
    }

    const handleEnd = () => {
      setTimeout(() => {
        setTransition(false);
      }, 750);
    }

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleEnd);
    router.events.on('routeChangeError', handleEnd);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleEnd);
      router.events.off('routeChangeError', handleEnd);
    }
  });

  return transition ? <div className="black-page" /> : <></>
}

function MyApp({ Component, pageProps }: AppProps) {
  const [initialBlackPage, setinitialBlackPage] = useState(true);
  setTimeout(() => {
    setinitialBlackPage(false);
  }, 750);

  return <>
    {initialBlackPage ? <div className="black-page" /> : <BlackPageTransition />}
    <Component {...pageProps} />
  </>
}

export default MyApp
