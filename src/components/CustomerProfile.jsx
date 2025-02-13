import { useState } from 'react'
import { 
  UserCircleIcon, 
  ShoppingBagIcon, 
  HeartIcon, 
  CogIcon,
  ArrowRightOnRectangleIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'
import TrackingView from './admin/TrackingView'

function CustomerProfile() {
  const [expandedOrder, setExpandedOrder] = useState(null)
  const [user] = useState({
    name: 'Anders Hansen',
    email: 'anders@example.com',
    since: 'Februar 2024',
    orders: [
      { 
        id: '#12345', 
        date: '20 Feb 2024', 
        total: '899 kr',
        status: 'Leveret',
        tracking: 'GLS-123456789'
      },
      { 
        id: '#12346', 
        date: '15 Feb 2024', 
        total: '458 kr',
        status: 'Afsendt',
        tracking: 'GLS-987654321'
      }
    ],
    wishlist: [
      { name: 'Økologisk Shampoo', price: '149 kr' },
      { name: 'Hårkur med Keratin', price: '189 kr' }
    ]
  })

  const menuItems = [
    { name: 'Mine Ordrer', icon: ShoppingBagIcon, count: user.orders.length },
    { name: 'Ønskeliste', icon: HeartIcon, count: user.wishlist.length },
    { name: 'Indstillinger', icon: CogIcon },
    { name: 'Log ud', icon: ArrowRightOnRectangleIcon }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col items-center mb-6">
                <UserCircleIcon className="w-20 h-20 text-gray-400" />
                <h2 className="mt-4 font-semibold text-gray-900">{user.name}</h2>
                <p className="text-sm text-gray-500">Medlem siden {user.since}</p>
              </div>

              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors group"
                  >
                    <div className="flex items-center">
                      <item.icon className="w-5 h-5 mr-3 group-hover:text-pink-500" />
                      <span>{item.name}</span>
                    </div>
                    {item.count && (
                      <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded-full text-xs">
                        {item.count}
                      </span>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Seneste Ordrer</h3>
              <div className="space-y-4">
                {user.orders.map((order) => (
                  <div key={order.id}>
                    <div 
                      className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:border-pink-100 transition-colors cursor-pointer"
                      onClick={() => setExpandedOrder(expandedOrder === order.id ? null : order.id)}
                    >
                      <div>
                        <div className="font-medium text-gray-900">
                          Ordre {order.id}
                        </div>
                        <div className="text-sm text-gray-500">{order.date}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="font-medium text-gray-900">{order.total}</div>
                          <div className="text-sm text-green-600">{order.status}</div>
                        </div>
                        <ChevronDownIcon 
                          className={`h-5 w-5 text-gray-400 transition-transform ${
                            expandedOrder === order.id ? 'transform rotate-180' : ''
                          }`}
                        />
                      </div>
                    </div>
                    
                    {/* Tracking View */}
                    {expandedOrder === order.id && (
                      <div className="mt-2 border border-gray-100 rounded-lg p-4 bg-gray-50">
                        <TrackingView 
                          trackingNumber={order.tracking}
                          status={order.status}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-semibold mt-8 mb-4">Ønskeliste</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {user.wishlist.map((item, index) => (
                  <div 
                    key={index}
                    className="p-4 border border-gray-100 rounded-lg hover:border-pink-100 transition-colors"
                  >
                    <div className="font-medium text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerProfile 