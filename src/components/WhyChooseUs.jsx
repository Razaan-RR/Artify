import { FaStar, FaChalkboardTeacher, FaLaptopCode, FaClock } from 'react-icons/fa'

function WhyChooseUs() {
  const features = [
    {
      icon: <FaChalkboardTeacher className="text-4xl text-blue-500" />,
      title: "Expert Instructors",
      description: "Learn from top-rated professionals with years of experience."
    },
    {
      icon: <FaLaptopCode className="text-4xl text-green-500" />,
      title: "Flexible Learning",
      description: "Access courses anytime, anywhere on your device."
    },
    {
      icon: <FaStar className="text-4xl text-yellow-400" />,
      title: "High Quality Content",
      description: "All courses are carefully curated to ensure maximum learning."
    },
    {
      icon: <FaClock className="text-4xl text-red-500" />,
      title: "Self-Paced",
      description: "Learn at your own speed with lifetime access to courses."
    }
  ]

  return (
    <section className="my-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
        Why Choose Our Platform
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs
