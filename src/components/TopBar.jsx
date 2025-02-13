import { PhoneIcon, EnvelopeIcon, TruckIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

function TopBar() {
  return (
    <div className="bg-pink-500 text-white">
      {/* Mobile version (kun vigtigste info) */}
      <div className="md:hidden">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="text-center text-sm">
            <p>Gratis fragt ved køb over 499 kr</p>
          </div>
        </div>
      </div>

      {/* Tablet og desktop version */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-2 lg:space-y-0">
            {/* Kontakt information */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm">
              <a href="tel:+4512345678" className="flex items-center hover:text-pink-100">
                <PhoneIcon className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">+45 12 34 56 78</span>
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="mailto:kontakt@beautyhair.dk" className="flex items-center hover:text-pink-100">
                <EnvelopeIcon className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">kontakt@beautyhair.dk</span>
              </a>
              <Link 
                to="/admin" 
                className="hover:text-pink-100 text-xs opacity-50 hover:opacity-100"
              >
                Admin
              </Link>
            </div>

            {/* Levering og service information */}
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center">
                <TruckIcon className="h-4 w-4 mr-1" />
                <span>Gratis fragt ved køb over 499 kr</span>
              </div>
              <span className="hidden xl:inline">|</span>
              <span className="hidden xl:inline">Hurtig levering</span>
              <span className="hidden xl:inline">|</span>
              <span className="hidden xl:inline">Sikker betaling</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar