import '../styles/globals.css'
import 'nprogress/nprogress.css'
import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import NProgress from 'nprogress'

import { Router } from 'next/router'
import { MiniLoaderProvider } from '../components/mini-loader/mini-loader.provider'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

NProgress.configure({ showSpinner: false })

function MyApp({ Component, pageProps }) {
  return (
    <MiniLoaderProvider>
      <Component {...pageProps} />
    </MiniLoaderProvider>
  )
}

export default MyApp
