"use client";
import { useState } from 'react';
import SignatureBuilder from '@/components/SignatureBuilder';

export default function Home() {
  const [showBuilder, setShowBuilder] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {!showBuilder ? (
        /* Hero Section */
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
          </div>
        </div>
      ) : (
        /* Signature Builder */
        <div className="container mx-auto px-4 py-12">
          <SignatureBuilder />
        </div>
      )}
    </main>
  );
}