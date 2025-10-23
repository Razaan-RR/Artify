import Courses from '../components/Courses'
import HeroSlider from '../components/HeroSlider'
import HowItWorks from '../components/HowItWorks'
import TopProviders from '../components/TopProviders'
import WhyChooseUs from '../components/WhyChooseUs'

function Home() {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <Courses></Courses>
      <TopProviders></TopProviders>
      <HowItWorks></HowItWorks>
      <WhyChooseUs></WhyChooseUs>
    </div>
  )
}

export default Home