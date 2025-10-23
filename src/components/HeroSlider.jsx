import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

function HeroSlider() {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    fetch('/SkillListings.json')
      .then(res => res.json())
      .then(data => setSkills(data.slice(0, 4)))
      .catch(err => console.error('Error loading skills:', err))
  }, [])

  if (!skills.length) {
    return <p className="text-center py-10 text-gray-500">Loading slider...</p>
  }

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      loop={true}
      className="w-full h-[500px] mt-4"
    >
      {skills.map(skill => (
        <SwiperSlide key={skill.skillId}>
          <div
            className="h-[400px] bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${skill.image})` }}
          >
            <div className="bg-black/50 p-8 rounded-xl text-center max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{skill.skillName}</h2>
              <p className="text-lg mb-3">Instructor: {skill.providerName}</p>
              <p className="text-md">Rating: ⭐ {skill.rating}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default HeroSlider
