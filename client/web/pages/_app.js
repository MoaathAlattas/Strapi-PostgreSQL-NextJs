import { AppProvider } from '../context/appContext'

const app = ({ Component, pageProps }) => (
  <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
)

export default app