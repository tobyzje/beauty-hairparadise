import { useState } from 'react'
import { CheckCircleIcon, TruckIcon, ClockIcon } from '@heroicons/react/24/outline'


function TrackingView({ trackingNumber, status }) {
  const steps = [
    { 
      id: 1, 
      name: 'Ordre modtaget', 
      icon: ClockIcon,
      date: '20 Feb, 2024 08:45',
      location: 'Webshop'
    },
    { 
      id: 2, 
      name: 'Pakket og klar', 
      icon: TruckIcon,
      date: '20 Feb, 2024 14:30',
      location: 'Lager, København'
    },
    { 
      id: 3, 
      name: 'Sendt', 
      icon: TruckIcon,
      date: '21 Feb, 2024 09:15',
      location: 'Pakkecenter, København'
    },
    { 
      id: 4, 
      name: 'Leveret', 
      icon: CheckCircleIcon,
      date: '22 Feb, 2024 13:45',
      location: 'Leveringsadresse'
    }
  ]

  // Bestem hvor langt i processen ordren er baseret på status
  const getProgress = (status) => {
    switch (status) {
      case 'Afventer': return 1
      case 'Behandles': return 2
      case 'Afsendt': return 3
      case 'Leveret': return 4
      default: return 1
    }
  }

  const currentStep = getProgress(status)

  return (
    <div className="py-4">
      <div className="flex items-center mb-4">
        <TruckIcon className="h-5 w-5 text-gray-500 mr-2" />
        <span className="text-sm font-medium">Tracking nummer: {trackingNumber}</span>
      </div>
      
      <div className="relative">
        {/* Vertikal linje */}
        <div className="absolute left-[17px] top-0 h-full w-0.5 bg-gray-200" />

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step) => {
            const StepIcon = step.icon
            const isCompleted = step.id <= currentStep
            const isCurrent = step.id === currentStep

            return (
              <div key={step.id} className="relative flex items-start">
                <div className={`absolute left-0 h-9 w-9 rounded-full border-2 flex items-center justify-center
                  ${isCompleted 
                    ? 'bg-green-100 border-green-500' 
                    : 'bg-white border-gray-300'
                  }
                  ${isCurrent ? 'ring-2 ring-green-500 ring-opacity-50' : ''}
                `}>
                  <StepIcon className={`h-5 w-5 ${
                    isCompleted ? 'text-green-500' : 'text-gray-400'
                  }`} />
                </div>
                
                <div className="ml-12">
                  <div className={`text-sm font-medium ${
                    isCompleted ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {step.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    {step.date}
                  </div>
                  <div className="text-xs text-gray-500">
                    {step.location}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TrackingView 