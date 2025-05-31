export default function Success() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            Welcome to ProSignature Pro! 🎉
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your subscription is now active. Let's create amazing signatures!
          </p>
          <a 
            href="/"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Create Your First Signature
          </a>
        </div>
      </div>
    );
  }