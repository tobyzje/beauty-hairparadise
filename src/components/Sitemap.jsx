import { Link } from 'react-router-dom'
import { 
  ShoppingBagIcon, 
  UserIcon, 
  QuestionMarkCircleIcon,
  BuildingStorefrontIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

function Sitemap() {
  const siteStructure = {
    shop: {
      title: 'Shop',
      icon: ShoppingBagIcon,
      links: [
        { name: 'Hårpleje', path: '/haircare', description: 'Shampoo, balsam, hårkur og styling produkter' },
        { name: 'Hudpleje', path: '/skincare', description: 'Ansigtspleje, kropspleje og solbeskyttelse' },
        { name: 'Makeup', path: '/makeup', description: 'Foundation, mascara, læbestift og mere' },
        { name: 'Tilbud', path: '/offers', description: 'Aktuelle tilbud og rabatter' },
        { name: 'Nyheder', path: '/new', description: 'Se vores nyeste produkter' }
      ]
    },
    kunde: {
      title: 'Kundeservice',
      icon: UserIcon,
      links: [
        { name: 'Min Profil', path: '/profile', description: 'Se dine ordrer og personlige oplysninger' },
        { name: 'Ordresporing', path: '/track-order', description: 'Følg din ordre' },
        { name: 'Returpolitik', path: '/returns', description: 'Information om returnering' },
        { name: 'Ofte stillede spørgsmål', path: '/faq', description: 'Få svar på almindelige spørgsmål' }
      ]
    },
    information: {
      title: 'Information',
      icon: QuestionMarkCircleIcon,
      links: [
        { name: 'Om os', path: '/about', description: 'Lær mere om Beauty & Hair Paradise' },
        { name: 'Kontakt', path: '/contact', description: 'Kontakt kundeservice' },
        { name: 'Find butik', path: '/stores', description: 'Find din nærmeste butik' },
        { name: 'Job hos os', path: '/careers', description: 'Se ledige stillinger' }
      ]
    },
    juridisk: {
      title: 'Juridisk Information',
      icon: DocumentTextIcon,
      links: [
        { name: 'Handelsbetingelser', path: '/terms', description: 'Vores handelsbetingelser' },
        { name: 'Privatlivspolitik', path: '/privacy', description: 'Sådan behandler vi dine data' },
        { name: 'Cookie Politik', path: '/cookies', description: 'Information om cookies' }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold text-gray-900">Sitemap</h1>
          <p className="mt-4 text-gray-600">
            Find hurtigt rundt på vores hjemmeside
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(siteStructure).map(([key, section]) => (
            <div key={key} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-6">
                <section.icon className="h-6 w-6 text-pink-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-4">
                {section.links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block group"
                  >
                    <div className="p-4 rounded-lg border border-gray-100 hover:border-pink-100 transition-colors">
                      <div className="font-medium text-gray-900 group-hover:text-pink-600">
                        {link.name}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        {link.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-12">
          <div className="bg-pink-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Hurtige Genveje
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link 
                to="/checkout" 
                className="flex items-center text-gray-700 hover:text-pink-600"
              >
                <ShoppingBagIcon className="h-5 w-5 mr-2" />
                Til kurven
              </Link>
              <Link 
                to="/profile" 
                className="flex items-center text-gray-700 hover:text-pink-600"
              >
                <UserIcon className="h-5 w-5 mr-2" />
                Min profil
              </Link>
              <Link 
                to="/stores" 
                className="flex items-center text-gray-700 hover:text-pink-600"
              >
                <BuildingStorefrontIcon className="h-5 w-5 mr-2" />
                Find butik
              </Link>
              <Link 
                to="/contact" 
                className="flex items-center text-gray-700 hover:text-pink-600"
              >
                <QuestionMarkCircleIcon className="h-5 w-5 mr-2" />
                Hjælp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sitemap 