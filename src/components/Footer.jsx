import { Link } from 'react-router-dom'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

function Footer() {
  const footerSections = {
    shop: {
      title: 'Shop',
      links: [
        { name: 'Hårpleje', path: '/haircare' },
        { name: 'Hudpleje', path: '/skincare' },
        { name: 'Makeup', path: '/makeup' },
        { name: 'Tilbud', path: '/offers' },
        { name: 'Nyheder', path: '/new' }
      ]
    },
    kundeservice: {
      title: 'Kundeservice',
      links: [
        { name: 'Ofte stillede spørgsmål', path: '/faq' },
        { name: 'Levering', path: '/shipping' },
        { name: 'Returpolitik', path: '/returns' },
        { name: 'Kontakt os', path: '/contact' },
        { name: 'Sitemap', path: '/sitemap' }
      ]
    },
    omOs: {
      title: 'Om Beauty & Hair Paradise',
      links: [
        { name: 'Vores historie', path: '/about' },
        { name: 'Find butik', path: '/stores' },
        { name: 'Job hos os', path: '/careers' },
        { name: 'Bæredygtighed', path: '/sustainability' }
      ]
    }
  }

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Kontakt information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <PhoneIcon className="h-5 w-5 mr-2 text-pink-500" />
                <a href="tel:+4512345678" className="hover:text-pink-500">
                  +45 12 34 56 78
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <EnvelopeIcon className="h-5 w-5 mr-2 text-pink-500" />
                <a href="mailto:kontakt@beautyhair.dk" className="hover:text-pink-500">
                  kontakt@beautyhair.dk
                </a>
              </div>
              <div className="flex items-start text-gray-600">
                <MapPinIcon className="h-5 w-5 mr-2 text-pink-500 mt-0.5" />
                <div>
                  <p>Hovedgaden 123</p>
                  <p>2100 København Ø</p>
                </div>
              </div>
              <div className="flex items-start text-gray-600">
                <ClockIcon className="h-5 w-5 mr-2 text-pink-500 mt-0.5" />
                <div>
                  <p>Man-Fre: 10:00 - 18:00</p>
                  <p>Lør: 10:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation sections */}
          {Object.values(footerSections).map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-pink-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm">
              © 2024 Beauty & Hair Paradise. Alle rettigheder forbeholdes.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-500 hover:text-pink-500 text-sm">
                Privatlivspolitik
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-pink-500 text-sm">
                Handelsbetingelser
              </Link>
              <Link to="/cookies" className="text-gray-500 hover:text-pink-500 text-sm">
                Cookie politik
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 