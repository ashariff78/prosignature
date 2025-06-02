"use client";
import { useState } from 'react';
import SignatureBuilder from '@/components/SignatureBuilder';
import TrustBadges from '@/components/TrustBadges';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  const [showBuilder, setShowBuilder] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-center py-3 sticky top-0 z-50">
        <p className="font-semibold">
          🔥 LIMITED TIME: Get Lifetime Pro Access for $49 (normally $108/year) 
          <a href="/lifetime-deal" className="underline ml-2 hover:text-yellow-200">
            Claim Now →
          </a>
        </p>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white w-8 h-8 rounded flex items-center justify-center font-bold">
              PS
            </div>
            <span className="text-xl font-semibold">ProSignature</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/pricing" className="text-blue-600 hover:text-blue-700 font-medium">
            Pricing
            </a>
          <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Login
          </a>
        </div>
        </div>
      </nav>

      {!showBuilder ? (
        <>
          {/* Hero Section */}
          <div className="container mx-auto px-4 pt-20 pb-32">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Create Professional Email Signatures in{" "}
                <span className="text-blue-600">30 Seconds</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                AI-powered email signature generator that makes you look professional. 
                No design skills needed.
              </p>
              <button 
                onClick={() => setShowBuilder(true)}
                className="bg-blue-600 text-white text-lg px-8 py-4 rounded-lg hover:bg-blue-700 transition"
              >
                Create Your Signature Free →
              </button>
              <p className="text-sm text-gray-500 mt-4">
                No credit card required • 2-minute setup
              </p>
              <div className="mt-8">
                <a href="/pricing" className="text-blue-600 hover:text-blue-700 font-medium">
                  View Pricing →
                </a>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <TrustBadges />

          {/* Features Section */}
          <div className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose ProSignature?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Lightning Fast</h3>
                  <p className="text-gray-600">Create professional signatures in under 30 seconds</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Beautiful Templates</h3>
                  <p className="text-gray-600">Professional designs that make you stand out</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📧</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Works Everywhere</h3>
                  <p className="text-gray-600">Compatible with Gmail, Outlook, Apple Mail & more</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <Testimonials />

          {/* CTA Section */}
          <div className="bg-blue-600 text-white py-16">
            <div className="max-w-4xl mx-auto text-center px-4">
              <h2 className="text-3xl font-bold mb-4">Ready to Create Your Signature?</h2>
              <p className="text-xl mb-8">Join thousands of professionals with beautiful email signatures</p>
              <button 
                onClick={() => setShowBuilder(true)}
                className="bg-white text-blue-600 text-lg px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold"
              >
                Start Creating - It's Free
              </button>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </>
      ) : (
        /* Signature Builder */
        <div className="container mx-auto px-4 py-12">
          <button 
            onClick={() => setShowBuilder(false)}
            className="mb-4 text-gray-600 hover:text-gray-800"
          >
            ← Back to Home
          </button>
          <SignatureBuilder />
        </div>
      )}
    </main>
  );
}