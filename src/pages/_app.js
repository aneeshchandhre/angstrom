import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import "@/styles/layout.scss";
import "@/styles/responsive.scss";
import "@/styles/workSheet.scss";

import {Inter} from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} /> 
    </main>
    );
}
