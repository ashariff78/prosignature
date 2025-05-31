"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      window.location.href = '/login';
    } else {
      setUser(user);
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white w-8 h-8 rounded flex items-center justify-center font-bold">
              PS
            </div>
            <span className="text-xl font-semibold">ProSignature</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">{user?.email}</span>
            <button
              onClick={handleSignOut}
              className="text-gray-600 hover:text-gray-800"
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Your Plan</h3>
            <p className="text-3xl font-bold text-blue-600">Free</p>
            <p className="text-gray-600 mt-2">3 signatures per month</p>
            <a href="/pricing" className="text-blue-600 hover:text-blue-700 text-sm mt-4 block">
              Upgrade to Pro →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Signatures Created</h3>
            <p className="text-3xl font-bold">0</p>
            <p className="text-gray-600 mt-2">This month</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Quick Actions</h3>
            <a href="/" className="bg-blue-600 text-white px-4 py-2 rounded block text-center hover:bg-blue-700">
              Create New Signature
            </a>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Saved Signatures</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600">No saved signatures yet. Create your first one!</p>
          </div>
        </div>
      </div>
    </div>
  );
}