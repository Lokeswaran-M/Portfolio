import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [copied, setCopied] = useState({ email: false, phone: false });
  const [isDownloading, setIsDownloading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8axny8k',     // Service ID
        'template_jmvp81n',    // Template ID
        form.current,
        'ZXiCxjcc6G7eqFIhV'    // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message.');
        }
      );
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [type]: true });
    setTimeout(() => setCopied({ ...copied, [type]: false }), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const downloadResume = async () => {
    setIsDownloading(true);
    try {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Lokeswaran-M.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      window.open('/resume.pdf', '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  const socialPlatforms = [
    {
      name: 'github',
      url: 'https://github.com/Lokeswaran-M',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'whatsapp',
      url: 'https://wa.me/916381626046?text=Hello%20Lokeswaran,%20I%20want%20to%20connect%20with%20you!',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.4 0 .02 5.38.02 12c0 2.12.56 4.2 1.62 6.03L0 24l6.18-1.6A11.94 11.94 0 0 0 12.04 24c6.64 0 12.02-5.38 12.02-12 0-3.2-1.25-6.2-3.54-8.52ZM12.04 21.8c-1.8 0-3.56-.48-5.1-1.38l-.36-.22-3.66.94.98-3.56-.24-.38A9.77 9.77 0 0 1 2.26 12c0-5.4 4.38-9.78 9.78-9.78 2.62 0 5.08 1.02 6.92 2.86A9.7 9.7 0 0 1 21.82 12c0 5.4-4.38 9.8-9.78 9.8Zm5.36-7.34c-.3-.16-1.78-.88-2.06-.98-.28-.1-.48-.16-.68.16-.2.3-.78.98-.96 1.18-.18.2-.36.22-.66.08-.3-.16-1.28-.48-2.44-1.54-.9-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.46.14-.62.14-.14.3-.36.46-.54.16-.18.2-.3.3-.5.1-.2.04-.38-.02-.54-.08-.16-.68-1.64-.94-2.24-.24-.58-.5-.5-.68-.5h-.58c-.2 0-.54.08-.82.38-.28.3-1.08 1.06-1.08 2.58s1.1 3 1.26 3.2c.16.2 2.16 3.3 5.24 4.62.74.32 1.32.5 1.76.64.74.24 1.42.2 1.96.12.6-.08 1.78-.72 2.04-1.42.26-.7.26-1.3.18-1.42-.08-.12-.28-.2-.58-.36Z" />
        </svg>
      )
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lokeswaran-m/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    }
  ];

  return (
    <section
      id="contact"
      className="relative py-16 px-4 md:px-8 text-center overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 rounded-full -translate-x-16 -translate-y-16 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-200 rounded-full translate-x-20 translate-y-20 opacity-50"></div>

      {/* Main container */}
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
          Let's Connect
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-12"></div>

        <p className="text-xl text-gray-700 mb-16 max-w-2xl mx-auto leading-relaxed">
          "Feel free to reach out to me for collaborations, job opportunities, or just a friendly chat!"
        </p>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <div className="flex items-center justify-center">
              <p className="text-gray-600 truncate">lokeswaraninfo@gmail.com</p>
              <button
                onClick={() => copyToClipboard('lokeswaraninfo@gmail.com', 'email')}
                className="ml-2 text-purple-600 hover:text-purple-800 transition-colors"
                aria-label="Copy email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
              </button>
            </div>
            {copied.email && <span className="text-sm text-green-600 block mt-1">Copied to clipboard!</span>}
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Phone</h3>
            <div className="flex items-center justify-center">
              <p className="text-gray-600 truncate">+91 6381626046</p>
              <button
                onClick={() => copyToClipboard('+91 6381626046', 'phone')}
                className="ml-2 text-pink-600 hover:text-pink-800 transition-colors"
                aria-label="Copy phone number"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
              </button>
            </div>
            {copied.phone && <span className="text-sm text-green-600 block mt-1">Copied to clipboard!</span>}
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Location</h3>
            <p className="text-gray-600">Chennai, Tamil Nadu, India</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=lokeswaraninfo@gmail.com&su=Job Inquiry&body=Hello, I'd like to discuss a job opportunity!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Email
          </motion.a>

          <motion.button
            onClick={downloadResume}
            disabled={isDownloading}
            className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {isDownloading ? 'Downloading...' : 'Download Resume'}
          </motion.button>
        </div>

        {/* Social Media Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center justify-center gap-3">
            Connect With Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 text-red-500 animate-pulse"
              aria-hidden="true"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {socialPlatforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative overflow-hidden w-24 h-24 rounded-3xl backdrop-blur-lg border border-white/20 shadow-xl flex flex-col items-center justify-center transition-all duration-500 ${
                  platform.name === 'github'
                    ? 'bg-gradient-to-br from-gray-900 to-black text-white hover:shadow-gray-500/40'
                    : platform.name === 'linkedin'
                    ? 'bg-gradient-to-br from-blue-500 to-blue-700 text-white hover:shadow-blue-500/40'
                    : 'bg-gradient-to-br from-green-400 to-green-600 text-white hover:shadow-green-500/40'
                }`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/10"></div>
                <div className="relative z-10 text-white scale-125 mb-2">{platform.icon}</div>
                <span className="relative z-10 text-xs font-semibold capitalize tracking-wide">{platform.name}</span>
                <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/30 transition-all duration-500"></div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Contact Form – redesigned proper UI container */}
     {/* Small Contact Form */}
<div className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 relative overflow-hidden">

  {/* Top Gradient Line */}
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-600"></div>

  {/* Heading */}
  <div className="text-center mb-6">
    <h4 className="text-3xl font-bold text-gray-800">
      Contact <span className="text-pink-500">Me</span>
    </h4>

    <p className="text-gray-500 text-sm mt-2">
  Feel free to reach out for collaborations or opportunities.
    </p>
  </div>

  {/* Form */}
  <form ref={form} onSubmit={sendEmail} className="space-y-4">

    <input
      type="text"
      name="user_name"
      placeholder="Full Name"
      required
      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300"
    />

    <input
      type="email"
      name="user_email"
      placeholder="Your Email"
      required
      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300"
    />

    <input
      type="text"
      name="user_subject"
      placeholder="Subject"
      required
      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300"
    />

    <textarea
      name="user_message"
      rows="4"
      placeholder="Your Message..."
      required
      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300 resize-none"
    ></textarea>

    <button
      type="submit"
      className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-300"
    >
      Send Message 🚀
    </button>

  </form>
</div>
    
      </div>
          {/* Back to top */}
        <div className="flex items-center justify-end space-x-4 mt-12">
          <motion.button
            onClick={scrollToTop}
            className="text-sm font-semibold text-gray-400 hover:text-pink-400 transition-colors duration-300 flex items-center"
            whileHover={{ y: -3 }}
            aria-label="Scroll to top"
          >
            Back to top
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
    </section>
  );
};

export default Contact;




