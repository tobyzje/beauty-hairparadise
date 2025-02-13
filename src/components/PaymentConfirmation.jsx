import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

function PaymentConfirmation({ orderDetails }) {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <CheckCircleIcon className="h-10 w-10 text-green-600" />
          </div>
          
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Tak for din ordre!
          </h1>
          <p className="text-gray-600 mb-6">
            Din ordre er blevet bekræftet og vil blive behandlet hurtigst muligt.
          </p>

          <div className="border-t border-b border-gray-200 py-4 my-6">
            <div className="text-left mb-4">
              <h2 className="font-medium mb-2">Ordrenummer: #{orderDetails?.orderNumber}</h2>
              <p className="text-sm text-gray-600">En ordrebekræftelse er sendt til {orderDetails?.email}</p>
            </div>

            <div className="text-left">
              <h3 className="font-medium mb-2">Leveringsadresse:</h3>
              <p className="text-sm text-gray-600">
                {orderDetails?.firstName} {orderDetails?.lastName}<br />
                {orderDetails?.address}<br />
                {orderDetails?.postalCode} {orderDetails?.city}
              </p>
            </div>
          </div>

          <Link
            to="/"
            className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors"
          >
            Fortsæt med at handle
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PaymentConfirmation 