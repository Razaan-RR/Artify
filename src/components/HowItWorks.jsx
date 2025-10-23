import { FaBook, FaChalkboardTeacher, FaCreditCard, FaChartLine } from 'react-icons/fa'

function HowItWorks() {
  const steps = [
    {
      icon: <FaBook className="text-4xl text-purple-500 mb-3" />,
      title: "Browse Skills",
      description:
        "Explore our wide range of creative and technical skills. View course details, ratings, and instructor profiles.",
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-purple-500 mb-3" />,
      title: "Choose Your Course",
      description:
        "Select the skill that interests you most and check course overview, available slots, and instructor details.",
    },
    {
      icon: <FaCreditCard className="text-4xl text-purple-500 mb-3" />,
      title: "Enroll & Start Learning",
      description:
        "Book your seat instantly using our secure platform and get access to materials, schedules, and instructor updates.",
    },
    {
      icon: <FaChartLine className="text-4xl text-purple-500 mb-3" />,
      title: "Track Your Progress",
      description:
        "Keep track of your enrolled skills, completed lessons, and feedback in your personalized dashboard.",
    },
  ]

  return (
    <section className="my-16 px-16">
      <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow"
          >
            {step.icon}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
