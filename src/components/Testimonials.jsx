import { StarIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarOutline } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Marie Jensen',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      rating: 5,
      text: 'Super god service og hurtig levering! Produkterne er altid i top kvalitet.',
      date: '15. februar 2024'
    },
    {
      id: 2,
      name: 'Peter Nielsen',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      rating: 4,
      text: 'Stort udvalg af økologiske produkter. Meget tilfreds med min seneste ordre.',
      date: '12. februar 2024'
    },
    {
      id: 3,
      name: 'Sofie Pedersen',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      rating: 5,
      text: 'Fantastisk kundeservice! De hjalp mig med at finde de perfekte produkter til min hårtype.',
      date: '10. februar 2024'
    }
  ]

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      index < rating ? (
        <StarIcon key={index} className="h-5 w-5 text-yellow-400" />
      ) : (
        <StarOutline key={index} className="h-5 w-5 text-yellow-400" />
      )
    ))
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900">
            Hvad siger vores kunder
          </h2>
          <p className="mt-4 text-gray-600">
            Vi er stolte af at have så mange tilfredse kunder. Her er hvad nogle af dem siger:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                  <div className="flex mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="text-sm text-gray-500">{testimonial.date}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/reviews"
            className="inline-flex items-center text-pink-600 hover:text-pink-700"
          >
            Se alle anmeldelser
            <ChevronRightIcon className="h-5 w-5 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 