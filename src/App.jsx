import { useState } from 'react'

import './App.scss'
import Header from './components/Header'
import HeroSetion from './components/Herosection'
import OurPartner from './components/OurPartner'
import OurCourses from './components/OurCourses'
import OurService from './components/OurServices'
import AboutUs from './components/About'
import OurTeam from './components/OurTeam'
import OurPricing from './components/OurPricing'
import Review from './components/Review'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'> 
       <Header />
       <HeroSetion/>
       <OurPartner/>
       <OurCourses/>
       <OurService/>
       <AboutUs/>
       <OurTeam/>
       <OurPricing/>
       <Review/>
    </div>
  )
}

export default App
