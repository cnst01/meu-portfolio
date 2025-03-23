import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { theme } from '../styles/theme'
import { MotionConfig } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MotionConfig reducedMotion="user">
        <GlobalStyle />
        <Component {...pageProps} />
      </MotionConfig>
    </ThemeProvider>
  )
}

export default MyApp