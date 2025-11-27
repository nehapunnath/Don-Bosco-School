import React from 'react';
import { 
  FaCalendarAlt,
  FaMusic,
  FaFlask,
  FaRunning,
  FaTheaterMasks,
  FaGraduationCap,
  FaTree,
  FaUsers,
  FaTrophy,
  FaBook,
  FaPalette,
  FaMicrophone,
  FaClock,
  FaMapMarkerAlt,
  FaRegCalendarCheck
} from 'react-icons/fa';

const Events = () => {
  // Upcoming Events
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Science Exhibition",
      date: "2024-03-15",
      time: "10:00 AM - 4:00 PM",
      venue: "School Auditorium",
      description: "Showcasing innovative science projects and experiments by students from all grades. This year's theme is 'Sustainable Solutions for Tomorrow'. Students will demonstrate projects in renewable energy, environmental conservation, and technological innovations.",
      detailedDescription: "The Annual Science Exhibition is one of our most anticipated events where students showcase their scientific creativity and problem-solving skills. This year, we have over 150 projects spanning various scientific disciplines including physics, chemistry, biology, and environmental science. The exhibition aims to foster scientific temper and encourage young minds to think innovatively about real-world problems.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <FaFlask className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      category: "Academic"
    },
    {
      id: 2,
      title: "Sports Day 2024",
      date: "2024-03-20",
      time: "8:00 AM - 5:00 PM",
      venue: "School Ground",
      description: "Annual sports competition featuring various athletic events and games for all students.",
      detailedDescription: "Our Annual Sports Day brings together students from all classes to compete in various athletic events including track and field, team sports, and traditional games. The event promotes sportsmanship, teamwork, and physical fitness. This year, we're introducing new events like obstacle courses and relay races to make it more exciting for participants and spectators alike.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <FaRunning className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      category: "Sports"
    },
    {
      id: 3,
      title: "Cultural Fest 'Renaissance'",
      date: "2024-04-05",
      time: "9:00 AM - 8:00 PM",
      venue: "Main School",
      description: "A day filled with music, dance, drama, and artistic performances by our talented students.",
      detailedDescription: "Renaissance is our annual cultural extravaganza that celebrates the diverse talents of our students. The event features dance performances, musical concerts, drama plays, art exhibitions, and literary competitions. This year's theme 'Cultural Harmony' focuses on showcasing the rich diversity of Indian culture through various art forms and performances.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <FaTheaterMasks className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      category: "Cultural"
    }
  ];

  // Past Events
  const pastEvents = [
    {
      id: 4,
      title: "Annual Day Celebration 2023",
      date: "2023-12-20",
      description: "Grand celebration of another successful academic year with outstanding performances and achievements.",
      detailedDescription: "The Annual Day Celebration was a magnificent event that highlighted the achievements and talents of our students throughout the year. The evening featured award ceremonies for academic excellence, cultural performances including classical and contemporary dances, musical renditions, and a spectacular drama performance. Special guests included alumni who shared their inspiring journeys.",
      highlights: ["Student Performances", "Award Ceremony", "Cultural Show", "Alumni Meet"],
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      ],
      participants: 500,
      category: "Cultural"
    },
    {
      id: 5,
      title: "Math Olympiad 2023",
      date: "2023-11-15",
      description: "School-level mathematics competition that challenged students' problem-solving skills.",
      detailedDescription: "The Math Olympiad saw participation from over 200 students across different grades. The competition tested mathematical reasoning, logical thinking, and problem-solving abilities through various rounds including quick calculation, mathematical puzzles, and team problem-solving challenges. The event aimed to make mathematics engaging and fun while identifying mathematical talent.",
      highlights: ["Problem Solving", "Quick Math", "Team Events", "Puzzle Round"],
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      ],
      participants: 200,
      category: "Academic"
    },
    {
      id: 6,
      title: "Environment Day Celebration",
      date: "2023-06-05",
      description: "Tree plantation drive and environmental awareness program promoting sustainability.",
      detailedDescription: "On World Environment Day, our school organized a comprehensive program focused on environmental conservation. Students participated in tree plantation drives, created awareness posters, attended workshops on sustainable living, and took a green pledge to protect our planet. The event emphasized the importance of individual responsibility in environmental conservation.",
      highlights: ["Tree Plantation", "Poster Making", "Green Pledge", "Awareness Workshop"],
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      ],
      participants: 350,
      category: "Social"
    },
    {
      id: 7,
      title: "Art & Craft Exhibition",
      date: "2023-05-15",
      description: "Display of creative artworks and crafts showcasing students' artistic talents.",
      detailedDescription: "The Art & Craft Exhibition was a vibrant display of creativity featuring paintings, sculptures, pottery, digital art, and traditional crafts. Students from all grades contributed their artworks, showcasing diverse techniques and mediums. The exhibition also included live art demonstrations and workshops conducted by professional artists.",
      highlights: ["Painting Exhibition", "Sculpture Display", "Digital Art", "Live Demonstrations"],
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      ],
      participants: 180,
      category: "Cultural"
    }
  ];

  // Event Categories
  const eventCategories = [
    {
      name: "Academic",
      count: "12 Events",
      description: "Science fairs, debates, quizzes and academic competitions",
      icon: <FaBook className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Sports",
      count: "8 Events",
      description: "Athletic meets, tournaments and fitness activities",
      icon: <FaRunning className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Cultural",
      count: "15 Events",
      description: "Music, dance, drama and artistic performances",
      icon: <FaPalette className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Social",
      count: "6 Events",
      description: "Community service and awareness programs",
      icon: <FaUsers className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  // Format date to readable format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold mb-6 border border-white/20">
              <FaCalendarAlt className="w-5 h-5 mr-2" />
              School Events & Activities
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Events</span>
            </h1>
            <p className="text-2xl md:text-3xl text-purple-100 max-w-4xl mx-auto font-light leading-relaxed">
              Celebrating creativity, excellence, and community through engaging events and activities
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 font-semibold mb-6">
              <FaRegCalendarCheck className="w-5 h-5 mr-2" />
              Upcoming Events
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-6">
              What's <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Coming</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Exciting events and activities planned for the coming months
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-700 border border-white/50 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/5 to-pink-500/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-r ${event.color} rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      {event.icon}
                    </div>
                    <div className="text-right">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-semibold">
                        {event.category}
                      </div>
                      <div className="text-lg font-black text-slate-800 mt-2">
                        {formatDate(event.date)}
                      </div>
                    </div>
                  </div>

                  <div className="h-48 overflow-hidden rounded-xl mb-6">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed font-light mb-6">
                    {event.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-slate-700">
                      <FaClock className="w-4 h-4 text-purple-500 mr-3" />
                      <span className="font-medium">{event.time}</span>
                    </div>
                    <div className="flex items-center text-slate-700">
                      <FaMapMarkerAlt className="w-4 h-4 text-purple-500 mr-3" />
                      <span className="font-medium">{event.venue}</span>
                    </div>
                  </div>

                  <div className="text-sm text-slate-500 font-light">
                    More details will be shared closer to the event date
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold mb-6 border border-white/20">
              <FaTrophy className="w-5 h-5 mr-2" />
              Past Events Gallery
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              Event <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Highlights</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto font-light">
              Relive the memorable moments from our previous events and celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <div 
                key={event.id}
                className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-700 border border-white/20 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/5 to-cyan-500/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  <div className="h-64 overflow-hidden rounded-xl mb-6">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                  <p className="text-blue-300 font-semibold mb-4">{formatDate(event.date)}</p>
                  
                  <p className="text-blue-200 leading-relaxed font-light mb-6">
                    {event.detailedDescription}
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-white font-semibold mb-2">Event Highlights:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {event.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center text-blue-200">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                          <span className="text-sm font-light">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <span className="text-blue-300 text-sm">{event.participants} Participants</span>
                    <span className="text-blue-300 text-sm">{event.category}</span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;