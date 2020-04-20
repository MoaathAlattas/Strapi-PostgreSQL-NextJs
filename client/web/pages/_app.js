import {AppProvider} from '../context/appContext'
function MyApp({ Component, pageProps }) {
  return(
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

// MyApp.getInitialProps = async (ctx)=>{
//   const user = await current(ctx)
//   return {user}
// }

export default MyApp