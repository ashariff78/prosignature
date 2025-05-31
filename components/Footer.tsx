export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">ProSignature</h3>
              <p className="text-sm">Professional email signatures in 30 seconds.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="/templates" className="hover:text-white">Templates</a></li>
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/help" className="hover:text-white">Help Center</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
                <li><a href="/privacy" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://twitter.com/AppProsignature" className="hover:text-white">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 ProSignature. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }