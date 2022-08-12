import React, { useState } from "react";
import '../styles/globals.scss'
import AppContext from "../AppContext";
function MyApp({ Component, pageProps }) {
  const [context, setContext] = useState({
    isContactModalOpened: false
  });

  return (
    <AppContext.Provider value={[context, setContext]}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
