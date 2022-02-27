import type { NextPage } from 'next'
import HomeBanner from '../components/HomeBanner'
import HomeCards from '../components/HomeCards'
const Home: NextPage = () => {
  return (
    <div>
      <HomeBanner 
        imageBanner={'https://res.cloudinary.com/publi-node-uploads/image/upload/v1645972762/landing-montain/BG_3_czaot1.png'} 
        imageBanner_mobile={'https://res.cloudinary.com/publi-node-uploads/image/upload/v1645979487/landing-montain/BG_mobile_1_v0gb64.png'}
      />
      <div>
        <HomeCards />
      </div>
    </div>
  )
}

export default Home
