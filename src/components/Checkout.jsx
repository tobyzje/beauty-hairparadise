import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRightIcon, TagIcon, GiftIcon } from '@heroicons/react/24/outline'

function Checkout({ cart, removeFromCart, onPaymentComplete }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    postalCode: '',
    city: '',
    phone: ''
  })

  const [discountCode, setDiscountCode] = useState('')
  const [giftCard, setGiftCard] = useState('')
  const [discount, setDiscount] = useState(0)
  const [giftCardAmount, setGiftCardAmount] = useState(0)
  const [discountError, setDiscountError] = useState('')
  const [giftCardError, setGiftCardError] = useState('')
  const [appliedDiscountCode, setAppliedDiscountCode] = useState('')
  const [appliedGiftCards, setAppliedGiftCards] = useState([])
  const [isProcessing, setIsProcessing] = useState(false)

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal >= 499 ? 0 : 39
  const total = Math.max(0, subtotal + shipping - discount - giftCardAmount)

  const validateDiscountCode = () => {
    setDiscountError('')
    const validCodes = {
      'VELKOM10': 10,
      'SOMMER20': 20,
      'BEAUTY15': 15
    }

    if (validCodes[discountCode]) {
      const discountAmount = (subtotal * validCodes[discountCode]) / 100
      setDiscount(discountAmount)
      setAppliedDiscountCode(discountCode)
      setDiscountCode('')
    } else {
      setDiscountError('Ugyldig rabatkode')
    }
  }

  const validateGiftCard = () => {
    setGiftCardError('')
    const validGiftCards = {
      'GIFT100': 100,
      'GIFT200': 200,
      'GIFT500': 500
    }

    if (validGiftCards[giftCard]) {
      const amount = validGiftCards[giftCard]
      setGiftCardAmount(prev => prev + amount)
      setAppliedGiftCards(prev => [...prev, { code: giftCard, amount }])
      setGiftCard('')
    } else {
      setGiftCardError('Ugyldig gavekortkode')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simuler en betalingsproces
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simuler netværksanmodning
      
      const orderDetails = {
        orderNumber: Math.floor(Math.random() * 1000000),
        ...formData,
        items: cart,
        total,
        discount,
        shipping,
        appliedDiscountCode,
        appliedGiftCards,
        date: new Date().toISOString()
      }

      onPaymentComplete(orderDetails)
      navigate('/payment-confirmation')
    } catch (error) {
      console.error('Betaling fejlede:', error)
      // Håndter fejl her
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Venstre side - Formular */}
          <div className='bg-white p-4 rounded-lg shadow-md'>
            <h2 className="text-2xl font-semibold mb-8">Leveringsoplysninger</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className='text-red-500'>*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg bg-gray-100 border-gray-200 p-3"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fornavn <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg bg-gray-100 border-gray-200 p-3"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Efternavn <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg bg-gray-100 border-gray-200 p-3"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse <span className='text-red-500'>*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg bg-gray-100 border-gray-200 p-3"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Postnummer <span className='text-red-500'>*</span>    
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg bg-gray-100 border-gray-200 p-3"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    By <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg bg-gray-100 border-gray-200 p-3"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon <span className='text-red-500'>*</span>
                </label>
                <input
                  type="tel"
                  required
                  className="w-full rounded-lg bg-gray-100 border-gray-200 p-3"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-3 rounded-lg transition-colors mt-8 ${
                  isProcessing 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-pink-600 hover:bg-pink-700'
                } text-white`}
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Behandler betaling...
                  </span>
                ) : (
                  'Gå til betaling'
                )}
              </button>
            </form>
          </div>

          {/* Højre side - Ordreoversigt */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Din ordre</h2>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">Antal: {item.quantity}</p>
                      <p className="text-sm font-medium">{item.price} kr</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      Fjern
                    </button>
                  </div>
                ))}
              </div>

              {/* Rabatkode sektion */}
              <div className="border-t border-gray-200 mt-6 pt-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rabatkode <span className='text-gray-500 text-xs'>Kun en rabatkode kan anvendes pr. ordre</span>
                    </label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <TagIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-gray-100"
                          placeholder="Indtast rabatkode"
                          value={discountCode}
                          onChange={(e) => setDiscountCode(e.target.value.toUpperCase())}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={validateDiscountCode}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        Tilføj
                      </button>
                    </div>
                    {discountError && (
                      <p className="mt-1 text-sm text-red-500">{discountError}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gavekort <span className='text-gray-500 text-xs'>Der kan anvendes flere gavekort pr. ordre</span>
                    </label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <GiftIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-gray-100"
                          placeholder="Indtast gavekortkode"
                          value={giftCard}
                          onChange={(e) => setGiftCard(e.target.value.toUpperCase())}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={validateGiftCard}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        Indløs
                      </button>
                    </div>
                    {giftCardError && (
                      <p className="mt-1 text-sm text-red-500">{giftCardError}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Opdateret pristotal sektion */}
              <div className="border-t border-gray-200 mt-6 pt-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>{subtotal} kr</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Fragt</span>
                  <span>{shipping === 0 ? 'Gratis' : `${shipping} kr`}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Rabat ({appliedDiscountCode})</span>
                    <span>-{discount} kr</span>
                  </div>
                )}
                {appliedGiftCards.map((card, index) => (
                  <div key={index} className="flex justify-between text-sm text-green-600">
                    <span>Gavekort ({card.code})</span>
                    <span>-{card.amount} kr</span>
                  </div>
                ))}
                <div className="flex justify-between font-semibold text-lg pt-2">
                  <span>Total</span>
                  <span>{total} kr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout 