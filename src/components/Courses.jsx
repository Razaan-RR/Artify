import { useEffect, useState } from 'react'
import CourseCards from './CourseCards'

function Courses() {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    fetch('/SkillListings.json') 
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <section className="my-10 px-4">
      <h2 className="text-2xl font-bold mb-5 text-center">Popular Skills</h2>
      <div className="flex flex-wrap gap-5 justify-center">
        {skills.map(skill => (
          <CourseCards key={skill.skillId} course={skill} />
        ))}
      </div>
    </section>
  )
}

export default Courses
