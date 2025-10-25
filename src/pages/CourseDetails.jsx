import { useState } from 'react'
import { useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import useSkills from '../Hooks/useSkills'

function CourseDetails() {
  const { id } = useParams()
  const { skills, loading } = useSkills()
  const [formData, setFormData] = useState({ name: '', email: '' })

  const course = skills.find((c) => c.skillId === parseInt(id))

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Session booked successfully!')
    setFormData({ name: '', email: '' })
  }

  if (loading) return <p>Loading...</p>
  if (!course) return <p className="text-red-500 text-center mt-10">Course not found</p>

  return (
    <div className="max-w-full sm:max-w-4xl mx-auto my-10 px-4 sm:px-6">
      <Toaster />
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">{course.skillName}</h1>
      <img
        src={course.image}
        alt={course.skillName}
        className="rounded-lg mb-4 w-full h-64 sm:h-80 object-cover"
      />
      <p className="text-sm sm:text-base">
        <strong>Provider:</strong> {course.providerName} ({course.providerEmail})
      </p>
      <p className="text-sm sm:text-base">
        <strong>Category:</strong> {course.category}
      </p>
      <p className="text-sm sm:text-base">
        <strong>Price:</strong> ${course.price}
      </p>
      <p className="text-sm sm:text-base">
        <strong>Rating:</strong> {course.rating} ⭐
      </p>
      <p className="text-sm sm:text-base">
        <strong>Slots Available:</strong> {course.slotsAvailable}
      </p>
      <p className="my-4 text-sm sm:text-base">{course.description}</p>

      <h2 className="text-xl sm:text-2xl font-semibold mb-2">Book Session</h2>
      <form className="flex flex-col gap-3 max-w-full sm:max-w-sm" onSubmit={handleSubmit}>
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
