import { Link } from 'react-router-dom'

function CourseCards({ course, index }) {
  const { skillId, skillName, image, price, rating } = course

  return (
    <div
      className="cards pt-2 transition-transform duration-300 hover:-translate-y-2 hover:shadow-md"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <Link
        to={`/course/${skillId}`}
        className="card bg-base-100 w-full sm:w-[270px] shadow-sm pb-4"
      >
        <figure className="px-4 pt-4">
          <img
            className="rounded-lg h-56 sm:h-70 w-full object-cover"
            src={image}
            alt={skillName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[13px] sm:text-[15px]">{skillName}</h2>
          <p>Rating: {rating} ⭐</p>
          <p>Price: ${price}</p>
          <button className="btn btn-primary mt-2 w-full">View Details</button>
        </div>
      </Link>
    </div>
  )
}

export default CourseCards
