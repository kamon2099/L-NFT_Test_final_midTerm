import '../styles/globals.css';
import Link from 'next/link';
import App from "next/app";
import {Nav, Footer, CTA, Hero} from "./components";
import styles from '../styles/style';
import Home from '.';


function MyApp({ Component, pageProps }) {
  return(
    <div className='bg-Aubergine  w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Nav />
        </div>
      </div>

      <div className={`bg-Aubergine ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={` ${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-Aubergine ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Home/>
          <CTA />
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    
  </div>
  ); 
}

export default MyApp
