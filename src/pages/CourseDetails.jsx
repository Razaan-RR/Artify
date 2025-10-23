import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

function CourseDetails() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '' })

  useEffect(() => {
    fetch('/SkillListings.json')
      .then(res => res.json())
      .then(data => {
        const selectedCourse = data.find(c => c.skillId === parseInt(id))
        setCourse(selectedCourse)
      })
      .catch(err => console.log(err))
  }, [id])

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    toast.success('Session booked successfully!')
    setFormData({ name: '', email: '' })
  }

  if (!course) return <p>Loading...</p>

  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      <Toaster />
      <h1 className="text-3xl font-bold mb-4">{course.skillName}</h1>
      <img src={course.image} alt={course.skillName} className="rounded-lg mb-4 w-full h-80 object-cover" />
      <p><strong>Provider:</strong> {course.providerName} ({course.providerEmail})</p>
      <p><strong>Category:</strong> {course.category}</p>
      <p><strong>Price:</strong> ${course.price}</p>
      <p><strong>Rating:</strong> {course.rating} ⭐</p>
      <p><strong>Slots Available:</strong> {course.slotsAvailable}</p>
      <p className="my-4">{course.description}</p>

      <h2 className="text-2xl font-semibold mb-2">Book Session</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm">
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <button type="submit" className="btn btn-primary mt-2 w-full">
          Submit
        </button>
      </form>
    </div>
  )
}

export default CourseDetails
