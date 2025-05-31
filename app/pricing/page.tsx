"use client";
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function Pricing() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  };

  const handleCheckout = async (priceId: string) => {
    setLoading(true);
    
    // Check if user is logged in
    if (!user) {
      window.location.href = '/login?redirect=pricing';
      return;
    }
    
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        priceId,
        userEmail: user.email 
      }),
    });

    const data = await response.json();
    window.location.href = data.url;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      {/* Navigation */}
      <nav className="bg-white shadow-sm mb-12">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white w-8 h-8 rounded flex items-center justify-center font-bold">
              PS
            </div>
            <span className="text-xl font-semibold">ProSignature</span>
          </a>
          <div className="flex items-center space-x-4">
            {user ? (
              <a href="/dashboard" className="text-blue-600 hover:text-blue-700">
                Dashboard
              </a>
            ) : (
              <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Login
              </a>
            )}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600">
            Start free, upgrade when you need more
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Free</h3>
            <p className="text-4xl font-bold mb-6">$0<span className="text-base font-normal text-gray-600">/month</span></p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>3 signatures per month</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Basic templates</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>ProSignature branding</span>
              </li>
            </ul>
            {user ? (
              <button className="w-full py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50">
                Current Plan
              </button>
            ) : (
              <a href="/login" className="block w-full py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 text-center">
                Sign Up Free
              </a>
            )}
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-600 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro</h3>
            <p className="text-4xl font-bold mb-6">$9<span className="text-base font-normal text-gray-600">/month</span></p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Unlimited signatures</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>All premium templates</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>No branding</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Priority support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Save signatures</span>
              </li>
            </ul>
            <button 
              onClick={() => handleCheckout('pro')}
              disabled={loading}
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Loading...' : (user ? 'Start Free Trial' : 'Sign Up & Start Trial')}
            </button>
          </div>

          {/* Team Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Team</h3>
            <p className="text-4xl font-bold mb-6">$29<span className="text-base font-normal text-gray-600">/month</span></p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>5 team members</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Central management</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>API access</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Custom branding</span>
              </li>
            </ul>
            <button 
              onClick={() => handleCheckout('team')}
              disabled={loading}
              className="w-full py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 disabled:opacity-50"
            >
              {loading ? 'Loading...' : (user ? 'Start Free Trial' : 'Sign Up & Start Trial')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}