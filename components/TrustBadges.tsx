export default function TrustBadges() {
    return (
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Signatures Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">30 sec</div>
              <div className="text-gray-600">Average Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-gray-600">Free to Start</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">4.9★</div>
              <div className="text-gray-600">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    );
  }