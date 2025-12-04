import { useEffect, useState } from 'react'
import useSkills from '../Hooks/useSkills'
import AOS from 'aos'
import 'aos/dist/aos.css'
import CourseCards from '../components/CourseCards'

function Courses() {
  const { skills, loading } = useSkills()
  const [sortedSkills, setSortedSkills] = useState([])
  const [sortOrder, setSortOrder] = useState('asc')
  const [filterText, setFilterText] = useState('')

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  useEffect(() => {
    let filtered = skills.filter((skill) =>
      skill.skillName.toLowerCase().includes(filterText.toLowerCase())
    )
    let sorted = [...filtered].sort((a, b) =>
      sortOrder === 'asc'
        ? a.skillName.localeCompare(b.skillName)
        : b.skillName.localeCompare(a.skillName)
    )
    setSortedSkills(sorted)
  }, [skills, sortOrder, filterText])

  if (loading) return null

  return (
    <section className="bg-[#e9edf2] py-10 px-4">
      <h2 className="text-2xl font-bold mb-5 text-center">Popular Skills</h2>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
        <select
          className="px-3 py-2 border rounded"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="low-high">Rating: Low to High</option>
          <option value="high-low">Rating: High to Low</option>
        </select>

        <input
          type="text"
          className="px-3 py-2 border rounded"
          placeholder="Filter skills"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-5 justify-center">
        {sortedSkills.map((skill, index) => (
          <CourseCards key={skill.skillId} course={skill} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Courses
