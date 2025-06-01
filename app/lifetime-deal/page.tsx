'use client'

import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function LifetimeDeal() {
  const [loading, setLoading] = useState(false)
  const supabase = createClientComponentClient()

  const handlePurchase = async () => {
    setLoading(true)
    
    // Get user session
    const { data: { session } } = await supabase.auth.getSession()
    
    if (!session) {
      // Redirect to login
      window.location.href = '/login'
      return
    }

    // Create checkout session for lifetime deal
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        priceId: 'price_lifetime_deal', // You'll create this in Stripe
        userId: session.user.id,
        isLifetime: true
      }),
    })

    const { url } = await response.json()
    window.location.href = url
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🔥 LIMITED TIME OFFER
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Lifetime Pro Access
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get unlimited professional email signatures forever. No monthly fees, ever.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border-4 border-blue-500 p-8 text-center">
            <div className="mb-6">
              <div className="text-gray-500 line-through text-2xl mb-2">$108/year</div>
              <div className="text-6xl font-bold text-blue-600 mb-2">$49</div>
              <div className="text-gray-600">One-time payment</div>
            </div>

            <div className="text-left mb-8 space-y-3">
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Unlimited email signatures</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>All premium templates</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Remove ProSignature branding</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Save & edit signatures</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Priority support</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>All future features included</span>
              </div>
            </div>

            <button
              onClick={handlePurchase}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Get Lifetime Access - $49'}
            </button>

            <div className="mt-4 text-sm text-gray-500">
              🔒 Secure payment via Stripe • 30-day money-back guarantee
            </div>
          </div>
        </div>

        {/* Urgency */}
        <div className="text-center mt-12">
          <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-bold text-yellow-800 mb-2">⚡ First 100 Customers Only</h3>
            <p className="text-yellow-700">
              This lifetime deal will never be offered again. Regular price returns to $9/month after 100 sales.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}