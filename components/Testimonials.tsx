export default function Testimonials() {
    const testimonials = [
      {
        name: "Sarah Chen",
        role: "Marketing Director",
        content: "Finally, a signature tool that just works. Created my signature in literally 30 seconds!",
        rating: 5
      },
      {
        name: "Michael Roberts",
        role: "Startup Founder", 
        content: "Clean, professional, and easy. Exactly what I was looking for.",
        rating: 5
      },
      {
        name: "Emily Watson",
        role: "Freelance Designer",
        content: "The templates are perfect. Saved me hours of formatting headaches.",
        rating: 5
      }
    ];
  
    return (
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Loved by Professionals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }