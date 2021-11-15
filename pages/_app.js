import Head from 'next/head'
import { Navbar, Footer } from '@/ksh-components'
import { ThemeProvider } from '@emotion/react'
import { lightTheme } from '@/ksh-theme/theme'
import GlobalStyles from '@/ksh-styles/GlobalStyles'

function MyKSHApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kyaw San Htoo - Pharmacy in Pathein</title>
        <meta name='description' content='The very first online pharmacy based in Pathein' />
        <meta name='keywords' content='' />
        <link rel='shortcut icon' type='image/svg' href='/favicon.svg' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+Myanmar:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles theme={lightTheme} />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyKSHApp