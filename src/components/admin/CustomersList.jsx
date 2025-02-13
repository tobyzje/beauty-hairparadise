import { useState } from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

function CustomersList() {
  const [customers] = useState([
    {
      id: 1,
      name: 'Anders Hansen',
      email: 'anders@example.com',
      phone: '+45 12 34 56 78',
      orders: 5,
      totalSpent: '4.595 kr',
      lastOrder: '2024-02-20'
    },
    {
      id: 2,
      name: 'Marie Jensen',
      email: 'marie@example.com',
      phone: '+45 23 45 67 89',
      orders: 3,
      totalSpent: '2.897 kr',
      lastOrder: '2024-02-19'
    },
    {
      id: 3,
      name: 'Peter Nielsen',
      email: 'peter@example.com',
      phone: '+45 34 56 78 90',
      orders: 2,
      totalSpent: '1.458 kr',
      lastOrder: '2024-02-18'
    }
  ])

  return (
    <div className="overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800">Kunder</h2>
      </div>
      
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Kunde
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Kontakt
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Antal Ordrer
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total Købt For
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Seneste Ordre
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {customers.map((customer) => (
            <tr key={customer.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{customer.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center text-sm text-gray-500">
                    <EnvelopeIcon className="h-4 w-4 mr-2" />
                    {customer.email}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <PhoneIcon className="h-4 w-4 mr-2" />
                    {customer.phone}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {customer.orders}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {customer.totalSpent}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {customer.lastOrder}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomersList 