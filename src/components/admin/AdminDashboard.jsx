import { useState } from 'react'
import { 
  ChartBarIcon, 
  ShoppingBagIcon, 
  UserGroupIcon, 
  CurrencyDollarIcon,
  TagIcon
} from '@heroicons/react/24/outline'
import OrdersList from './OrdersList'
import ProductsList from './ProductsList'
import CustomersList from './CustomersList'


function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { name: 'Total Salg', value: '24.589 kr', change: '+12%', icon: CurrencyDollarIcon },
    { name: 'Aktive Kunder', value: '147', change: '+4%', icon: UserGroupIcon },
    { name: 'Ordre i Dag', value: '12', change: '+18%', icon: ShoppingBagIcon },
    { name: 'Produkter', value: '89', change: '+2', icon: TagIcon }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Velkommen, Admin</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistik Kort */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.name}</p>
                  <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                </div>
                <div className="bg-pink-100 rounded-lg p-3">
                  <stat.icon className="h-6 w-6 text-pink-600" />
                </div>
              </div>
              <div className="mt-2">
                <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500"> siden sidste måned</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`${
                activeTab === 'overview'
                  ? 'border-pink-500 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
            >
              Oversigt
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`${
                activeTab === 'orders'
                  ? 'border-pink-500 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
            >
              Ordrer
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`${
                activeTab === 'products'
                  ? 'border-pink-500 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
            >
              Produkter
            </button>
            <button
              onClick={() => setActiveTab('customers')}
              className={`${
                activeTab === 'customers'
                  ? 'border-pink-500 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
            >
              Kunder
            </button>
          </nav>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow">
          {activeTab === 'overview' && (
            <div className="p-6">
              <h2 className="text-lg font-medium mb-4">Seneste Aktivitet</h2>
              {/* Her kan vi tilføje grafer og mere detaljeret statistik */}
            </div>
          )}
          {activeTab === 'orders' && <OrdersList />}
          {activeTab === 'products' && <ProductsList />}
          {activeTab === 'customers' && <CustomersList />}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard 