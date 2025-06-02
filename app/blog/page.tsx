export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Navigation back to home */}
        <div className="mb-8">
          <a href="/" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to ProSignature
          </a>
        </div>

        {/* Blog Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ProSignature Blog</h1>
          <p className="text-xl text-gray-600">Tips, guides, and best practices for professional email signatures</p>
        </header>
        
        {/* Main Blog Post */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How to Create a Professional Gmail Signature in 2024
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <span>December 15, 2024</span>
              <span className="mx-2">•</span>
              <span>8 min read</span>
              <span className="mx-2">•</span>
              <span>Complete Guide</span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Your email signature is your digital business card. Every email you send is an opportunity to make a professional impression, build your brand, and drive business results.
            </p>
          </div>

          {/* CTA Box */}
          <div className="bg-blue-600 text-white rounded-lg p-6 my-8 text-center">
            <h3 className="text-xl font-bold mb-2">Create Your Professional Signature Now</h3>
            <p className="mb-4">Use our AI-powered generator to create a stunning signature in 30 seconds</p>
            <a href="/" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block">
              Try ProSignature Free →
            </a>
          </div>

          {/* Blog Content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Gmail Signatures Matter More Than Ever</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In 2024, email remains the primary business communication channel. The average professional sends 40+ emails daily, meaning your signature appears 40+ times every day. That's 200+ brand impressions per week - more than most paid advertising campaigns deliver.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <h4 className="font-bold text-gray-900 mb-3">Professional signatures help you:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Build consistent brand recognition</li>
                  <li>• Drive traffic to your website/social media</li>
                  <li>• Establish credibility and trust</li>
                  <li>• Generate leads from every email</li>
                  <li>• Save time on repetitive contact sharing</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes a Gmail Signature Professional</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Essential Elements</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                <li><strong>Full name</strong> - obvious but often forgotten</li>
                <li><strong>Job title</strong> - establishes authority</li>
                <li><strong>Company name</strong> - builds trust</li>
                <li><strong>Phone number</strong> - enables immediate contact</li>
                <li><strong>Email address</strong> - sometimes hidden in email clients</li>
                <li><strong>Website URL</strong> - drives traffic</li>
              </ol>

              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Optional but Powerful</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Professional headshot (increases response rates by 32%)</li>
                <li>Office address (builds local trust)</li>
                <li>Social media links (LinkedIn is most professional)</li>
                <li>Company logo (enhances brand recognition)</li>
                <li>Call-to-action (book a meeting, download resource)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Gmail Signature Templates</h2>
              
              <div className="grid md:grid-cols-1 gap-6">
                <div className="border rounded-lg p-6 bg-gray-50">
                  <h4 className="font-bold mb-3">Template 1: Classic Professional</h4>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    John Smith<br/>
                    Senior Marketing Manager<br/>
                    ABC Company<br/>
                    📞 (555) 123-4567<br/>
                    ✉️ john@abccompany.com<br/>
                    🌐 www.abccompany.com
                  </div>
                </div>

                <div className="border rounded-lg p-6 bg-gray-50">
                  <h4 className="font-bold mb-3">Template 2: Modern Minimalist</h4>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    John Smith | Senior Marketing Manager<br/>
                    ABC Company<br/>
                    P: (555) 123-4567 | E: john@abccompany.com<br/>
                    W: www.abccompany.com | L: linkedin.com/in/johnsmith
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Gmail Signature Mistakes to Avoid</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h4 className="font-bold text-red-800 mb-3">❌ What NOT to Do:</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>• Too much information (6+ lines)</li>
                    <li>• Poor formatting and mixed fonts</li>
                    <li>• Broken or untested links</li>
                    <li>• Unprofessional email addresses</li>
                    <li>• Outdated contact information</li>
                    <li>• Too many colors or fonts</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="font-bold text-green-800 mb-3">✅ Best Practices:</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>• Keep it under 6 lines total</li>
                    <li>• Use consistent formatting</li>
                    <li>• Test on mobile devices</li>
                    <li>• Update information regularly</li>
                    <li>• Include only working links</li>
                    <li>• Match brand guidelines</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8 text-center my-12">
              <h3 className="text-2xl font-bold mb-4">Ready to Create Your Professional Signature?</h3>
              <p className="text-lg mb-6">Join thousands of professionals using ProSignature</p>
              <a href="/" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 inline-block">
                Get Started Free - 30 Seconds Setup
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}