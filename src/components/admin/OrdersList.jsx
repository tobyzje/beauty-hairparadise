import { useState } from 'react'
import { 
  ChevronDownIcon, 
  TruckIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline'
import TrackingView from './TrackingView'

function OrdersList() {
  const statusColors = {
    'Afventer': 'bg-yellow-100 text-yellow-800',
    'Behandles': 'bg-blue-100 text-blue-800',
    'Afsendt': 'bg-green-100 text-green-800',
    'Leveret': 'bg-gray-100 text-gray-800',
    'Annulleret': 'bg-red-100 text-red-800'
  }

  const [orders, setOrders] = useState([
    {
      id: '#12345',
      customer: 'Anders Hansen',
      date: '2024-02-20',
      total: '899 kr',
      status: 'Afventer',
      tracking: '',
      items: [
        { name: 'Økologisk Shampoo', quantity: 2, price: '149 kr' },
        { name: 'Hårkur med Keratin', quantity: 1, price: '189 kr' }
      ]
    },
    {
      id: '#12346',
      customer: 'Marie Jensen',
      date: '2024-02-20',
      total: '1.299 kr',
      status: 'Behandles',
      items: [
        { name: 'Fugtgivende Ansigtscreme', quantity: 1, price: '299 kr' },
        { name: 'Øjenvippe Serum', quantity: 1, price: '399 kr' }
      ]
    },
    {
      id: '#12347',
      customer: 'Peter Nielsen',
      date: '2024-02-19',
      total: '458 kr',
      status: 'Afsendt',
      items: [
        { name: 'Hårolie med Argan', quantity: 2, price: '169 kr' },
        { name: 'Rensende Ansigtsmaske', quantity: 1, price: '129 kr' }
      ]
    },
    {
      id: '#12348',
      customer: 'Sofie Pedersen',
      date: '2024-02-19',
      total: '748 kr',
      status: 'Leveret',
      items: [
        { name: 'Foundation med SPF', quantity: 1, price: '249 kr' },
        { name: 'Varmebeskyttende Spray', quantity: 2, price: '159 kr' }
      ]
    }
  ])

  const [expandedOrders, setExpandedOrders] = useState(new Set())
  const [editingTracking, setEditingTracking] = useState(null)

  const toggleOrder = (orderId) => {
    const newExpanded = new Set(expandedOrders)
    if (newExpanded.has(orderId)) {
      newExpanded.delete(orderId)
    } else {
      newExpanded.add(orderId)
    }
    setExpandedOrders(newExpanded)
  }

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId 
        ? { ...order, status: newStatus }
        : order
    ))
  }

  const updateTracking = (orderId, trackingNumber) => {
    setOrders(orders.map(order =>
      order.id === orderId
        ? { ...order, tracking: trackingNumber }
        : order
    ))
    setEditingTracking(null)
  }

  return (
    <div className="overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800">Ordrer</h2>
      </div>
      
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ordre ID
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Kunde
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Dato
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tracking
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Handlinger</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order) => (
            <>
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.customer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.total}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[order.status]}`}
                  >
                    {Object.keys(statusColors).map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingTracking === order.id ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        className="border rounded px-2 py-1 text-sm"
                        placeholder="Indtast tracking nummer"
                        defaultValue={order.tracking}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            updateTracking(order.id, e.target.value)
                          }
                        }}
                      />
                      <button
                        onClick={() => setEditingTracking(null)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <XCircleIcon className="h-5 w-5" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      {order.tracking ? (
                        <>
                          <TruckIcon className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{order.tracking}</span>
                        </>
                      ) : (
                        <button
                          onClick={() => setEditingTracking(order.id)}
                          className="text-blue-600 hover:text-blue-800 text-sm"
                        >
                          + Tilføj tracking
                        </button>
                      )}
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => toggleOrder(order.id)}
                    className="text-pink-600 hover:text-pink-900"
                  >
                    <ChevronDownIcon className={`h-5 w-5 transform transition-transform ${
                      expandedOrders.has(order.id) ? 'rotate-180' : ''
                    }`} />
                  </button>
                </td>
              </tr>
              {expandedOrders.has(order.id) && (
                <tr className="bg-gray-50">
                  <td colSpan="7" className="px-6 py-4">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <ClockIcon className="h-4 w-4" />
                          Ordre oprettet: {order.date}
                        </div>
                      </div>
                      
                      {order.tracking && (
                        <div className="border-t border-b border-gray-200 -mx-6 px-6">
                          <TrackingView 
                            trackingNumber={order.tracking}
                            status={order.status}
                          />
                        </div>
                      )}

                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span>{item.name} (x{item.quantity})</span>
                            <span>{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrdersList 