import { useEffect } from 'react'
import CourseCards from './CourseCards'
import useSkills from '../Hooks/useSkills'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Courses() {
  const { skills, loading } = useSkills()

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  if (loading) return null 

  return (
    <section className="bg-[#e9edf2] my-10 px-4">
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
