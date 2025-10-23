import { useEffect, useState } from 'react'
import CourseCards from './CourseCards'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Courses() {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    // Fetch skills
    fetch('/SkillListings.json')
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.log(err))

    // Initialize AOS
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <section className="my-10 px-4">
      <h2 className="text-2xl font-bold mb-5 text-center">Popular Skills</h2>
      <div className="flex flex-wrap gap-5 justify-center">
        {skills.map((skill, index) => (
          <CourseCards key={skill.skillId} course={skill} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Courses
