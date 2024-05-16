import { useContext, useState } from "react";
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import AppContext from "../AppContext";
import ContactModal from "../components/contactModal";
import LogoSvg from '../components/logo';

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation();
  const [context, setContext] = useContext(AppContext);

  const toggleModal = () => {
    const modalOpened = context && context.isContactModalOpened;
    setContext({...context, isContactModalOpened: !modalOpened});
  };

  return (
    <>
      <Head>
        <title>{t('home:seo_title')}</title>
        {/**
          * OG
          */}
        <meta name="title" content={`${t('home:title')} - ${t('home:description')}`} />
        <meta name="description" content={t('home:description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rosasconservation.com" />
        <meta property="og:title" content={`${t('home:title')} - ${t('home:description')}`} />
        <meta property="og:description" content={t('home:description')} />
        <meta property="og:image" content="/og.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.rosasconservation.com" />
        <meta property="twitter:title" content={`${t('home:title')} - ${t('home:description')}`} />
        <meta property="twitter:description" content={t('home:description')} />
        <meta property="twitter:image" content="/og.jpg"></meta>
        {/**
         * Favicons
         */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#f4f1eb" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#f4f1eb" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
        <meta name="theme-color" content="#f4f1eb" />
      </Head>
     <header>
      <div className="row">
        <div className="col-6">
          <LogoSvg width={80}/>
        </div>
        <div className="col-6 header-languages">
          <ul>
            {router.locales.map(locale => (
              <li key={locale}>
                <Link href={router.asPath} locale={locale}>
                  {locale}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
     </header>
     <div className="content d-flex flex-column align-items-center justify-content-center">
        <h1>{t('home:title')}</h1>
        <h2>{t('home:description')}</h2>
        <div onClick={toggleModal} className="button" href="mailto:gabriela@rosasconservation.com">
          <p className="button-text">
            {t('home:contact')}
          </p>
          <div className="button-icon-container">
            <p className="button-icon fa-solid fa-envelope"></p>
          </div>
        </div>
        <ContactModal />
      </div>
    </>
  )
}
