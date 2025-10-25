const providers = [
  {
    id: 1,
    name: 'Emily Carter',
    skill: 'Watercolor Basics',
    rating: 4.9,
    image: 'https://i.ibb.co.com/JF7WKmRD/woman.jpg',
  },
  {
    id: 2,
    name: 'Ryan Mitchell',
    skill: 'Digital Illustration',
    rating: 4.8,
    image: 'https://i.ibb.co.com/0Vzvp7gB/man.jpg',
  },
  {
    id: 3,
    name: 'Hannah Lopez',
    skill: 'Portrait Sketching',
    rating: 4.7,
    image: 'https://i.ibb.co.com/GQmQHJqY/woman2.jpg',
  },
]

function TopProviders() {
  return (
    <section className="py-10 px-4 sm:px-16">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Top Rated Providers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {providers.map((provider) => (
          <div
            key={provider.id}
            className="card bg-base-100 shadow-md p-4 hover:shadow-lg transition"
          >
            <img
              src={provider.image}
              alt={provider.name}
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <h3 className="font-semibold text-lg">{provider.name}</h3>
            <p className="text-sm text-gray-600">{provider.skill}</p>
            <p className="text-yellow-500 font-semibold mt-2">
              ⭐ {provider.rating}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TopProviders
