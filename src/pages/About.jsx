import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  const jobRol = [
    {
      role: 'Full stack Developer',
      company: 'Digital Agency',
      period: '2024 - 2025',
      description: 'Developed responsive websites and web applications for clients.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-500 to-gray-300">
      <section id="about" className="pt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-0">
              Hi, I'm <span className="text-indigo-600">Yash</span>
            </h1>
            <h2 className="text-2xl text-gray-300 mb- 1">web and app development</h2>
            <p className="text-lg text-gray-200 mb-8">
              I'm a passionate developer/designer with 1 years of experience creating
              beautiful, functional digital experiences. I specialize in [full stack developer]
              and love solving complex problems with elegant solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-md">
                View My Work
              </Link>
              <button onClick={()=>handlecv} className="flex items-center gap-2 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium transition">
                <FaFileDownload /> Download CV
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-60 h-60 sm:w-80 sm:h-80 bg-indigo-100 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <div className="w-full h-full bg-gray-300 flex justify-center items-center">
                <img
                  src="public\image.png"
                  alt="Yash"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">My Experience</h2>
        <div className="space-y-8">
          {jobRol.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                <span className="text-indigo-600 font-medium">{exp.company}</span>
              </div>
              <p className="text-gray-500 mb-4">{exp.period}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">
              <FaGithub size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">
              <FaTwitter size={24} />
            </a>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition shadow-md">
            Send Me a Message
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default About;