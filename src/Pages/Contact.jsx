import React from 'react';
import { 
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaSchool
} from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Main School Address",
      details: [
        "Don Bosco School",
        "123 Education Street, Knowledge City, KC 12345"
      ],
      color: "from-red-500 to-pink-500",
      highlight: true
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone Number",
      details: [
        "+91-987654321"
      ],
      color: "from-blue-500 to-cyan-500",
      highlight: true
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email Address",
      details: [
        "info@donbosco.edu",
      ],
      color: "from-green-500 to-emerald-500",
      highlight: true
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 4:00 PM",
        "Saturday: 8:00 AM - 1:00 PM",
        "Sunday: Closed",
        "Holidays: As per academic calendar"
      ],
      color: "from-purple-500 to-indigo-500",
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold mb-6 border border-white/20">
              <FaSchool className="w-5 h-5 mr-2" />
              Get In Touch
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Contact</span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 max-w-4xl mx-auto font-light leading-relaxed">
              Reach out to us through multiple channels. We're here to help and answer any questions you may have.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Information */}
      <section className="relative py-24 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 font-semibold mb-6">
              <FaPhone className="w-5 h-5 mr-2" />
              Contact Information
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-6">
              How to <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Reach Us</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Multiple ways to connect with our institution for inquiries, admissions, and general information
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => (
              <div 
                key={index}
                className={`group relative backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-700 border ${
                  contact.highlight 
                    ? 'bg-gradient-to-br from-white to-blue-50 border-blue-200 scale-105' 
                    : 'bg-white/80 border-white/50'
                }`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-1000 ${
                  contact.highlight 
                    ? 'bg-blue-500/10' 
                    : 'bg-blue-500/5'
                }`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto transform group-hover:scale-110 transition-transform duration-500 shadow-lg ${
                    contact.highlight ? 'ring-4 ring-blue-200' : ''
                  }`}>
                    {contact.icon}
                  </div>
                  
                  <h3 className={`text-xl font-black mb-6 group-hover:text-slate-900 transition-colors duration-300 ${
                    contact.highlight ? 'text-blue-800' : 'text-slate-800'
                  }`}>
                    {contact.title}
                  </h3>
                  
                  <div className="space-y-3">
                    {contact.details.map((detail, detailIndex) => (
                      <p 
                        key={detailIndex} 
                        className={`leading-relaxed font-medium ${
                          contact.highlight 
                            ? 'text-blue-700 text-lg' 
                            : 'text-slate-600 font-light'
                        }`}
                      >
                        {detail}
                      </p>
                    ))}
                  </div>

                  {contact.highlight && (
                    <div className="mt-6 pt-4 border-t border-blue-200">
                      <div className="text-blue-600 text-sm font-semibold">
                        {contact.title.includes('Address') && '📍 Visit us anytime during office hours'}
                        {contact.title.includes('Phone') && '📞 Call us for immediate assistance'}
                        {contact.title.includes('Email') && '📧 We respond within 24 hours'}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Location Map Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 font-semibold mb-6">
              <FaMapMarkerAlt className="w-5 h-5 mr-2" />
              Visit Our School
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-800 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Location</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Come visit us at our main School. We welcome prospective students and parents for School tours.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-black text-slate-800 mb-4">School Location</h3>
              <p className="text-slate-600 max-w-2xl mx-auto font-light">
                Our School is conveniently located in Knowledge City with easy access to all major areas
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 text-center">
              <div className="w-full h-64 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <p className="text-blue-800 font-semibold text-lg">Don Bosco School School</p>
                  <p className="text-blue-600 font-semibold text-md mt-2">
                    123 Education Street, Knowledge City, KC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;