import React from 'react';
import { 
  FaBook,
  FaFlask,
  FaLaptop,
  FaMusic,
  FaRunning,
  FaUtensils,
  FaTree,
  FaShieldAlt,
  FaBus,
  FaHospital,
  FaMicroscope,
  FaPalette,
  FaBasketballBall,
  FaSwimmer,
  FaTheaterMasks,
  FaWifi,
  FaBookReader,
  FaAtom,
  FaCar,
  FaFirstAid,
  FaDesktop
} from 'react-icons/fa';

const Facilities = () => {
  // Main facilities data
  const facilities = [
    {
      id: 1,
      title: "Digital Library",
      description: "State-of-the-art library with extensive collection of books, journals, and digital resources",
      features: ["50,000+ Books", "Digital Catalog", "Reading Rooms", "Research Assistance"],
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <FaBookReader className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Science Laboratories",
      description: "Modern laboratories for Physics, Chemistry, and Biology with advanced equipment",
      features: ["Physics Lab", "Chemistry Lab", "Biology Lab", "Computer Lab"],
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <FaFlask className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Computer Center",
      description: "Fully equipped computer labs with latest technology and high-speed internet",
      features: ["Latest Computers", "High-speed WiFi", "Programming Labs", "IT Training"],
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <FaLaptop className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Sports Complex",
      description: "Comprehensive sports facilities for indoor and outdoor games and fitness training",
      features: ["Basketball Court", "Football Ground", "Swimming Pool", "Gymnasium"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <FaRunning className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Auditorium",
      description: "Spacious auditorium with modern audio-visual equipment for events and performances",
      features: ["500+ Capacity", "Audio-Visual System", "Stage Lighting", "Green Rooms"],
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <FaTheaterMasks className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Cafeteria",
      description: "Hygienic and spacious cafeteria serving nutritious and delicious meals",
      features: ["Healthy Menu", "Hygienic Kitchen", "Spacious Seating", "Snack Counter"],
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <FaUtensils className="w-8 h-8" />,
      color: "from-yellow-500 to-amber-500"
    }
  ];

  // Additional facilities
  const additionalFacilities = [
    {
      icon: <FaBus className="w-8 h-8" />,
      title: "Transportation",
      description: "Safe and reliable bus service covering all major routes in the city",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaHospital className="w-8 h-8" />,
      title: "Medical Room",
      description: "Fully equipped medical room with trained staff and first-aid facilities",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <FaTree className="w-8 h-8" />,
      title: "Green Campus",
      description: "Eco-friendly campus with lush greenery and environmental initiatives",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Security",
      description: "24/7 security surveillance and controlled access to ensure student safety",
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: <FaWifi className="w-8 h-8" />,
      title: "WiFi Campus",
      description: "High-speed wireless internet connectivity across the entire campus",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <FaMusic className="w-8 h-8" />,
      title: "Music Room",
      description: "Dedicated space for music education with various instruments",
      color: "from-pink-500 to-pink-600"
    }
  ];

  // Sports facilities
  const sportsFacilities = [
    {
      name: "Olympic-size Swimming Pool",
      icon: <FaSwimmer className="w-6 h-6" />,
      description: "Heated swimming pool with certified trainers"
    },
    {
      name: "Basketball Courts",
      icon: <FaBasketballBall className="w-6 h-6" />,
      description: "Indoor and outdoor courts for practice and matches"
    },
    {
      name: "Football Ground",
      icon: <FaRunning className="w-6 h-6" />,
      description: "Full-size football field with proper turf"
    },
    {
      name: "Athletics Track",
      icon: <FaRunning className="w-6 h-6" />,
      description: "400m synthetic track for various athletic events"
    },
    {
      name: "Indoor Games",
      icon: <FaTheaterMasks className="w-6 h-6" />,
      description: "Table tennis, chess, carrom and other indoor games"
    },
    {
      name: "Gymnasium",
      icon: <FaRunning className="w-6 h-6" />,
      description: "Modern gym equipment for fitness training"
    }
  ];

  // Lab facilities
  const labFacilities = [
    {
      name: "Physics Laboratory",
      icon: <FaAtom className="w-6 h-6" />,
      equipment: ["Optical Instruments", "Electrical Kits", "Measuring Devices"],
      image: "https://images.unsplash.com/photo-1636466497217-26a8c3afc3a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Chemistry Laboratory",
      icon: <FaFlask className="w-6 h-6" />,
      equipment: ["Chemical Reagents", "Safety Equipment", "Analytical Instruments"],
      image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Biology Laboratory",
      icon: <FaMicroscope className="w-6 h-6" />,
      equipment: ["Microscopes", "Specimens", "Laboratory Equipment"],
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Computer Laboratory",
      icon: <FaDesktop className="w-6 h-6" />,
      equipment: ["Latest Computers", "Programming Software", "Networking Equipment"],
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
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
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold mb-6 border border-white/20">
              <FaTree className="w-5 h-5 mr-2" />
              World-Class Facilities
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Facilities</span>
            </h1>
            <p className="text-2xl md:text-3xl text-green-100 max-w-4xl mx-auto font-light leading-relaxed">
              State-of-the-art infrastructure designed to inspire learning, creativity, and holistic development
            </p>
          </div>
        </div>
      </section>

      {/* Main Facilities Section */}
      <section className="relative py-24 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 font-semibold mb-6">
              <FaBook className="w-5 h-5 mr-2" />
              Our Facilities
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-6">
              Premium <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Infrastructure</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Modern, well-equipped facilities that provide the perfect environment for academic excellence and personal growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility) => (
              <div 
                key={facility.id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-700 border border-white/50 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-500/5 to-emerald-500/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${facility.color} rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    {facility.icon}
                  </div>
                  
                  <div className="h-48 overflow-hidden rounded-xl mb-6">
                    <img 
                      src={facility.image} 
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">
                    {facility.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed font-light mb-6">
                    {facility.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {facility.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-slate-700 font-light">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Facilities */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-green-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 font-semibold mb-6">
              <FaShieldAlt className="w-5 h-5 mr-2" />
              Additional Amenities
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-6">
              Complete <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Campus</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Everything students need for a comfortable, safe, and enriching campus experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFacilities.map((facility, index) => (
              <div 
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-700 border border-white/50 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${facility.color} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto transform group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  {facility.icon}
                </div>
                
                <h3 className="text-xl font-black text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">
                  {facility.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed font-light">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Facilities */}
      <section className="relative py-24 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 font-semibold mb-6">
              <FaRunning className="w-5 h-5 mr-2" />
              Sports & Fitness
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-6">
              Sports <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Facilities</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Comprehensive sports infrastructure to promote physical fitness and team spirit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportsFacilities.map((sport, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-white/50"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                    {sport.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">{sport.name}</h3>
                    <p className="text-slate-600 text-sm font-light">{sport.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratory Facilities */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold mb-6 border border-white/20">
              <FaFlask className="w-5 h-5 mr-2" />
              Laboratory Facilities
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Laboratories</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto font-light">
              Modern laboratories equipped with latest technology for hands-on learning and research
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {labFacilities.map((lab, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-700 border border-white/20"
              >
                <div className="flex space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-500">
                      {lab.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">{lab.name}</h3>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {lab.equipment.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center text-blue-200">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                          <span className="text-sm font-light">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;