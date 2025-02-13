import { Fragment, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'

function Toast({ show, product, onClose }) {
  // Luk automatisk efter 2 sekunder
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose()
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  return (
    <Transition
      show={show}
      as={Fragment}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0"
      enterTo="translate-y-0 opacity-100"
      leave="transition ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white rounded-lg shadow-lg p-3 flex items-center gap-2">
          <div className="flex-shrink-0">
            <div className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center">
              <CheckIcon className="h-4 w-4 text-green-600" />
            </div>
          </div>
          <p className="text-sm font-medium text-gray-900">
            Tilføjet til kurven
          </p>
          {product && (
            <img
              src={product.image}
              alt={product.name}
              className="h-8 w-8 object-cover rounded"
            />
          )}
        </div>
      </div>
    </Transition>
  )
}

export default Toast 