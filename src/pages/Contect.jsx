import React, { useState } from 'react';
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiLinkedin,
  FiGithub,
  FiUser,
  FiMessageSquare,
  FiAlertCircle
} from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { motion } from 'framer-motion';

const Contact = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isExistingClient, setIsExistingClient] = useState(false);
  const [messageHistory, setMessageHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setResponse("");
    
    try {
      const response = await fetch('http://localhost:5000/message', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }
      
      setResponse(data.message);
      
      // Check if this is an existing client
      if (data.existingClient) {
        setIsExistingClient(true);
        // If your backend sends message history, display it
        if (data.messageHistory) {
          setMessageHistory(data.messageHistory);
        }
      } else {
        setIsExistingClient(false);
        setSubmitted(true);
      }
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsError(true);
      setResponse(error.message || "An error occurred while sending your message");
    } finally {
      setIsLoading(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8"
      id="contact"
    >

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
             Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 sm:p-10 text-white relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full"></div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <FiMapPin className="h-5 w-5 text-white" />
                </div>
                Contact Information
              </h2>

              <div className="space-y-8">
                <motion.div variants={itemVariants} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <FiMapPin className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-blue-100">Lucknow, India</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <FiPhone className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-blue-100">+91 8787256663</p>
                    <p className="text-sm text-blue-200 mt-1">Available 9AM - 6PM IST</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <FiMail className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-blue-100">yashmaurya3377@gmail.com</p>
                    <p className="text-sm text-blue-200 mt-1">Fast response guaranteed</p>
                  </div>
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="mt-12">
                <h3 className="text-xl font-bold mb-6">Follow me online</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <FiLinkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/yash-maurya-3377", label: "LinkedIn" },
                    { icon: <FiGithub className="h-5 w-5" />, href: "https://github.com/yashmaurya3377", label: "GitHub" },
                    { icon: <SiLeetcode className="h-5 w-5" />, href: "https://leetcode.com/yashmaurya3377", label: "LeetCode" },
                    { icon: <FiMail className="h-5 w-5" />, href: "mailto:yashmaurya3377@gmail.com", label: "Email" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition duration-200 flex items-center justify-center backdrop-blur-sm"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send me a message
            </h2>

            {isError && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-start"
              >
                <FiAlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-red-800 font-medium">Error</h3>
                  <p className="text-red-700 text-sm mt-1">{response}</p>
                </div>
              </motion.div>
            )}

            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-600">I'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Send another message
                </button>
              </motion.div>
            ) : isExistingClient ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-blue-50 border border-blue-200 rounded-xl p-6"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiUser className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2 text-center">Welcome back, {name}!</h3>
                <p className="text-gray-600 text-center mb-4">
                  We've added your new message to your existing records.
                </p>
                
                {messageHistory.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-800 mb-2">Your message history:</h4>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {messageHistory.map((msg, index) => (
                        <div key={index} className="bg-white p-3 rounded-lg border border-gray-200">
                          <p className="text-sm text-gray-700">{msg.content}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(msg.timestamp).toLocaleDateString()}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <button
                  onClick={() => {
                    setIsExistingClient(false);
                    setMessage("");
                    setResponse("");
                  }}
                  className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl transition duration-200"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants} className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 pl-11 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-gray-50/50"
                      placeholder="Your name"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 pl-11 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-gray-50/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <FiMessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows="5"
                      className="w-full px-4 py-3 pl-11 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-gray-50/50 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-xl font-medium transition duration-200 ${isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white shadow-md hover:shadow-lg`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;