import { createGlobalStyle, ThemeProvider } from 'styled-components'

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
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
