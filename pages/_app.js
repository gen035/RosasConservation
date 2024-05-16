import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

import '../styles/globals.scss'
import AppContext from "../AppContext";

function MyApp({ Component, pageProps }) {

  const [context, setContext] = useState({
    isContactModalOpened: false
  });

  return (
    <AppContext.Provider value={[context, setContext]}>
      <Component {...pageProps} />
      <Analytics />
    </AppContext.Provider>
  )
}

export default MyApp
