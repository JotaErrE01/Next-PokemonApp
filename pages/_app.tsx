import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';
import { darkTheme } from '../themes';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider 
      theme={darkTheme}
    >
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
