import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-500 to-gray-200">
      <section className="flex flex-col items-center justify-center min-h-[90vh] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mb-5">
          <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm{' '}
            <TypeAnimation
              sequence={['', 500, 'Y', 200, 'Ya', 200, 'Yas', 200, 'Yash', 1000]}
              wrapper="span"
              cursor={false}
              repeat={Infinity}
              className="text-blue-600 inline-block"
            />
          </h1>

          <h2 className="text-xl sm:text-2xl text-gray-600 mb-2 font-medium">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Frontend Developer | UI/UX Enthusiast
            </span>
          </h2>
        </div>
        <div className="text-center max-w-3xl mb-12 min-h-[120px]">
          <div className="inline-block px-6 py-3  rounded-3xl shadow-sm mb-4">
            <TypeAnimation
              sequence={[
                'Full-stack Developer',
                1000,
                'React Specialist',
                1000,
                'Node.js Backend',
                1000,
                '2 Years Experience',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-xl md:text-2xl font-medium text-gray-800"
            />
          </div>
          <p className="mt-4 text-lg text-gray-600 mb-2 max-w-2xl mx-auto leading-relaxed">
            I craft <span className="font-semibold text-blue-600">responsive</span>, <span className="font-semibold text-purple-600">user-friendly</span> web experiences with modern technologies and pixel-perfect design.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <Link
            to="projects"
            className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            View My Work →
          </Link>
          <Link
            to="contact"
            className="px-8 py-3.5 bg-white text-gray-800 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Me
          </Link>
        </div>
      </section>

    
    </div>
  );
};

export default Home;