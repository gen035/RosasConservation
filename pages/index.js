import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
export default function Home() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('home:seo_title')}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <header>
      <div className="row">
        <div className="col-6">
          <Image src="/logo.svg" alt="Logo" className="header-logo" width={80} height={80} />
        </div>
        <div className="col-6 header-languages">
          <ul>
            {router.locales.map(locale => (
              <li key={locale}>
                <Link href={router.asPath} locale={locale}>
                  <a>{locale}</a>
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
        <div className="button">
          <p className="button-text">
            {t('home:contact')}
          </p>
          <div className="button-icon-container">
            <p className="button-icon fa-solid fa-envelope"></p>
          </div>
        </div>
      </div>
    </>
  )
}
