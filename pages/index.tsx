import type { NextPage } from 'next'
import HomeBanner from '../components/HomeBanner'
import HomeCards from '../components/HomeCards'
import Footer from '../components/Footer'
import Head from 'next/head'
import Styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Triper.com</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400&family=Playfair+Display&family=Poppins:wght@100;200&family=Raleway:wght@200;300&display=swap" rel="stylesheet" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div>

      <HomeBanner 
        imageBanner={'https://res.cloudinary.com/publi-node-uploads/image/upload/v1645972762/landing-montain/BG_3_czaot1.png'} 
        imageBanner_mobile={'https://res.cloudinary.com/publi-node-uploads/image/upload/v1645979487/landing-montain/BG_mobile_1_v0gb64.png'}
      />
      </div>

      <div className={Styles.containerSectionHomePage}>
        <HomeCards />
        <Footer />
      </div>


    </div>
  )
}

export default Home
