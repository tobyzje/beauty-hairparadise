import { Fragment, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { 
  TruckIcon, 
  ShieldCheckIcon, 
  CreditCardIcon,
  ArrowPathIcon,
  GiftIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const benefits = [
  {
    name: 'Gratis levering',
    description: 'Ved køb over 499 kr',
    icon: TruckIcon
  },
  {
    name: 'Sikker betaling',
    description: 'Alle kortoplysninger er krypterede',
    icon: ShieldCheckIcon
  },
  {
    name: 'Nem returnering',
    description: '30 dages returret',
    icon: ArrowPathIcon
  },
  {
    name: 'Flere betalingsmuligheder',
    description: 'Betal med kort eller MobilePay',
    icon: CreditCardIcon
  },
  {
    name: 'Gavekort',
    description: 'Giv en oplevelse i gave',
    icon: GiftIcon
  }
]

function CartDropdown({ cart, isOpen, onClose, removeFromCart }) {
  const dropdownRef = useRef(null)
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onClose])

  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-150"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <div 
        ref={dropdownRef}
        className="absolute right-0 top-[calc(100%+0.5rem)] w-96 bg-white rounded-lg shadow-xl z-50 origin-top-right"
        style={{
          right: '1rem', // Juster denne værdi efter behov
        }}
      >
        <div className="relative">
          {/* Lille trekant i toppen */}
          <div className="absolute -top-2 right-6 w-4 h-4 transform rotate-45 bg-white border-t border-l border-gray-200"></div>
          
          <div className="relative bg-white rounded-lg">
            <div className="p-6">
              {cart.length > 0 ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Din indkøbskurv</h3>
                    <div className="space-y-4 max-h-[300px] overflow-y-auto">
                      {cart.map((item) => (
                        <div key={item.id} className="flex gap-4 py-2 border-b border-gray-100">
                          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="flex flex-1 flex-col">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h4>{item.name}</h4>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-gray-400 hover:text-gray-500"
                              >
                                <XMarkIcon className="h-5 w-5" />
                              </button>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">Antal: {item.quantity}</p>
                            <div className="flex justify-between items-end flex-1">
                              <p className="text-sm font-medium text-gray-900">{item.price} kr</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <div className="flex justify-between text-base font-medium text-gray-900 mb-1">
                      <p>Subtotal</p>
                      <p>{total} kr</p>
                    </div>
                    <p className="text-sm text-gray-500">Fragt beregnes ved checkout</p>
                    <Link
                      to="/checkout"
                      className="w-full mt-4 bg-pink-600 text-white py-2.5 px-4 rounded-lg hover:bg-pink-700 transition-colors"
                      onClick={onClose}
                    >
                      Gå til kassen
                    </Link>
                  </div>
                </>
              ) : (
                <p className="text-gray-500 text-center py-4 mb-6">Din kurv er tom</p>
              )}

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Fordele hos Beauty & Hair Paradise</h3>
                <div className="space-y-3">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit.name}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0">
                        <benefit.icon className="h-5 w-5 text-gray-600" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">
                          {benefit.name}
                        </h4>
                        <p className="mt-0.5 text-xs text-gray-500">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 text-center">
                <button
                  onClick={onClose}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Fortsæt med at handle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}

export default CartDropdown 