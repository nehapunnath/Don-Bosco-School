import React from 'react';
import { Link } from 'react-router-dom';

const Academics = () => {
  // Academic programs data
  const programs = [
    {
      id: 1,
      title: "Primary Education",
      grade: "Grades 1-5",
      description: "Foundational learning with focus on literacy, numeracy, and holistic development",
      features: ["Interactive Learning", "Basic Computer Skills", "Arts & Crafts", "Physical Education"],
      image: "https://images.unsplash.com/photo-1588072432836-e100327d50a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Middle School",
      grade: "Grades 6-8",
      description: "Building strong academic foundation with specialized subject teachers",
      features: ["Science Lab", "Mathematics", "Social Studies", "Language Arts"],
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "High School",
      grade: "Grades 9-12",
      description: "Comprehensive preparation for higher education and career paths",
      features: ["Science & Commerce Streams", "College Preparation", "Career Counseling", "Advanced Placement"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  // Curriculum features
  const curriculumFeatures = [
    {
      icon: "📚",
      title: "Comprehensive Curriculum",
      description: "Aligned with national education standards and global best practices"
    },
    {
      icon: "🔬",
      title: "Science & Technology",
      description: "State-of-the-art labs and technology integration in learning"
    },
    {
      icon: "🎨",
      title: "Arts & Creativity",
      description: "Encouraging creative expression through various art forms"
    },
    {
      icon: "⚽",
      title: "Sports & Fitness",
      description: "Physical education and sports for holistic development"
    }
  ];

  // Academic calendar
  const academicCalendar = [
    { period: "First Term", duration: "April - June", events: ["Academic Orientation", "Unit Test 1", "Annual Sports Day"] },
    { period: "Second Term", duration: "July - September", events: ["Mid-term Exams", "Science Exhibition", "Independence Day Celebration"] },
    { period: "Third Term", duration: "October - December", events: ["Annual Day", "Final Exams", "Christmas Celebration"] },
    { period: "Summer Break", duration: "January - March", events: ["Summer Camp", "Faculty Training", "Infrastructure Upgrade"] }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Excellence in Education: Nurturing Minds, Building Futures
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive educational programs are designed to foster intellectual growth, 
              character development, and lifelong learning skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{program.grade}</p>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Features */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Curriculum Approach</h2>
            <p className="text-lg text-gray-600">
              A balanced and innovative approach to education that prepares students for the future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculumFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Academic Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Calendar 2024</h2>
            <p className="text-lg text-gray-600">
              Important dates and events throughout the academic year
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicCalendar.map((term, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-2">{term.period}</h3>
                <p className="text-gray-500 mb-4 font-semibold">{term.duration}</p>
                <ul className="space-y-2">
                  {term.events.map((event, eventIndex) => (
                    <li key={eventIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Faculty</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated and qualified educators committed to student success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4">
                95%
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualified Faculty</h3>
              <p className="text-gray-600">Postgraduate and doctoral degree holders</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4">
                15+
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Years Experience</h3>
              <p className="text-gray-600">Average teaching experience per faculty</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4">
                1:25
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Student Ratio</h3>
              <p className="text-gray-600">Optimal teacher-student ratio</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Don Bosco?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Discover how our academic programs can help your child achieve their full potential
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Schedule a Visit
            </Link>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Academics;