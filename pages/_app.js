import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-size: 1em;
    cursor: url('https://res.cloudinary.com/instacloneapp/image/upload/c_fit,h_32,w_32/v1622223328/shivansh.xyz/surprised_tl73ho.png'), auto;

  }
  a{
    text-decoration: none;
    color: #363636;
    font-size: 1em;
    cursor: url('https://res.cloudinary.com/instacloneapp/image/upload/c_scale,h_32/v1622269574/shivansh.xyz/pointer_v8dsps.png'), auto;

  }
`

const theme = {
  colors: {
    primary: '#0070f3',
    black: '#000',
    white: '#fff',
    grey1: '#f1f1f1',
    grey2: '#dadada',
    greyDark: '#363636'
  },
}

export default function App({ Component, pageProps }) {
  

  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name='title' content='Shivansh Mehendiratta' />
        <meta name='description' content='Shivansh Mehendiratta is a final-year undergrad at CBS studying computer science | Product @ Gomigo | Ex - Lumis Partners, TUZ Venturex, Redesyn, Ambit Capital, Travclan' />
        <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/instacloneapp/image/upload/v1622341320/shivansh.xyz/favicon/apple-touch-icon_cuw2bp.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://res.cloudinary.com/instacloneapp/image/upload/v1622341319/shivansh.xyz/favicon/favicon-32x32_w9vivl.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://res.cloudinary.com/instacloneapp/image/upload/v1622341319/shivansh.xyz/favicon/favicon-16x16_ekky0u.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
