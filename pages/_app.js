import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import '../styles/globals.scss'
import AppContext from "../AppContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [context, setContext] = useState({
    isContactModalOpened: false
  });

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <AppContext.Provider value={[context, setContext]}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
