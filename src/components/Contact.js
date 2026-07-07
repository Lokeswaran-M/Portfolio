import React, { useState, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const contactCards = [
  {
    title: 'Email',
    value: 'lokeswaraninfo@gmail.com',
    type: 'email',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    bg: 'bg-purple-100'
  },
  {
    title: 'Phone',
    value: '+91 6381626046',
    type: 'phone',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    bg: 'bg-pink-100'
  },
  {
    title: 'Location',
    value: 'Chennai, Tamil Nadu, India',
    type: null,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    bg: 'bg-indigo-100'
  }
];

const socialPlatforms = [
  {
    name: 'github',
    url: 'https://github.com/Lokeswaran-M',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    name: 'whatsapp',
    url: 'https://wa.me/916381626046?text=Hello%20Lokeswaran,%20I%20want%20to%20connect%20with%20you!',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.4 0 .02 5.38.02 12c0 2.12.56 4.2 1.62 6.03L0 24l6.18-1.6A11.94 11.94 0 0 0 12.04 24c6.64 0 12.02-5.38 12.02-12 0-3.2-1.25-6.2-3.54-8.52ZM12.04 21.8c-1.8 0-3.56-.48-5.1-1.38l-.36-.22-3.66.94.98-3.56-.24-.38A9.77 9.77 0 0 1 2.26 12c0-5.4 4.38-9.78 9.78-9.78 2.62 0 5.08 1.02 6.92 2.86A9.7 9.7 0 0 1 21.82 12c0 5.4-4.38 9.8-9.78 9.8Zm5.36-7.34c-.3-.16-1.78-.88-2.06-.98-.28-.1-.48-.16-.68.16-.2.3-.78.98-.96 1.18-.18.2-.36.22-.66.08-.3-.16-1.28-.48-2.44-1.54-.9-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.46.14-.62.14-.14.3-.36.46-.54.16-.18.2-.3.3-.5.1-.2.04-.38-.02-.54-.08-.16-.68-1.64-.94-2.24-.24-.58-.5-.5-.68-.5h-.58c-.2 0-.54.08-.82.38-.28.3-1.08 1.06-1.08 2.58s1.1 3 1.26 3.2c.16.2 2.16 3.3 5.24 4.62.74.32 1.32.5 1.76.64.74.24 1.42.2 1.96.12.6-.08 1.78-.72 2.04-1.42.26-.7.26-1.3.18-1.42-.08-.12-.28-.2-.58-.36Z" />
      </svg>
    )
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/lokeswaran-m/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    )
  }
];

const ToastIcon = ({ type }) => (
  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20">
    {type === 'success' ? (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    )}
  </div>
);

const Contact = () => {
  const [copied, setCopied] = useState({ email: false, phone: false });
  const [isDownloading, setIsDownloading] = useState(false);
  const [toast, setToast] = useState(null);
  const form = useRef();
  const toastTimer = useRef(null);

  const showToast = useCallback((message, type) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ message, type });
    toastTimer.current = setTimeout(() => setToast(null), 4000);
  }, []);

  const sendEmail = useCallback((e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_8axny8k',
        'template_jmvp81n',
        form.current,
        'ZXiCxjcc6G7eqFIhV'
      )
      .then(
        (result) => {
          showToast('Message sent successfully!', 'success');
          form.current.reset();
        },
        () => {
          showToast('Failed to send message.', 'error');
        }
      );
  }, [showToast]);

  const copyToClipboard = useCallback((text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(prev => ({ ...prev, [type]: true }));
    setTimeout(() => setCopied(prev => ({ ...prev, [type]: false })), 2000);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const downloadResume = useCallback(async () => {
    setIsDownloading(true);
    try {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Lokeswaran-M.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      window.open('/resume.pdf', '_blank');
    } finally {
      setIsDownloading(false);
    }
  }, []);

  const dismissToast = useCallback(() => setToast(null), []);

  const toastClasses = useMemo(() =>
    `fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl border ${
      toast?.type === 'success'
        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white border-green-400'
        : 'bg-gradient-to-r from-red-500 to-rose-600 text-white border-red-400'
    }`,
    [toast?.type]
  );

  return (
    <section
      id="contact"
      className="relative py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Connect</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
            Feel free to reach out for collaborations, job opportunities, or just a friendly chat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className={`w-14 h-14 ${item.bg} rounded-full flex items-center justify-center mb-4`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-700 mb-2">{item.title}</h3>
              {item.type ? (
                <div className="flex items-center justify-center">
                  <p className="text-gray-600 text-sm truncate max-w-[200px]">{item.value}</p>
                  <button
                    onClick={() => copyToClipboard(item.value, item.type)}
                    className="ml-2 text-purple-600 hover:text-purple-800 transition-colors"
                    aria-label={`Copy ${item.title}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
                </div>
              ) : (
                <p className="text-gray-600 text-sm">{item.value}</p>
              )}
              {item.type && copied[item.type] && (
                <span className="text-sm text-green-600 mt-1">Copied!</span>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=lokeswaraninfo@gmail.com&su=Job Inquiry&body=Hello, I'd like to discuss a job opportunity!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
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
            className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {isDownloading ? 'Downloading...' : 'Download Resume'}
          </motion.button>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-700 text-center mb-8 flex items-center justify-center gap-3">
            Connect With Me
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-red-400 animate-pulse">
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
                className={`group relative w-24 h-24 rounded-3xl shadow-lg flex flex-col items-center justify-center transition-all duration-500 ${
                  platform.name === 'github'
                    ? 'bg-gradient-to-br from-gray-900 to-black text-white'
                    : platform.name === 'linkedin'
                    ? 'bg-gradient-to-br from-blue-500 to-blue-700 text-white'
                    : 'bg-gradient-to-br from-green-400 to-green-600 text-white'
                }`}
              >
                <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/30 transition-all duration-500"></div>
                <div className="relative z-10 scale-125 mb-2">{platform.icon}</div>
                <span className="relative z-10 text-xs font-semibold capitalize tracking-wide">{platform.name}</span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="w-full max-w-lg mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-500"></div>
          <h4 className="text-2xl font-bold text-slate-700 text-center mb-2">
            Contact <span className="text-pink-500">Me</span>
          </h4>
          <p className="text-center text-gray-500 text-sm mb-6">
            Fill out the form and I'll get back to you soon.
          </p>

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
              className="w-full py-3 rounded-xl bg-gray-900 text-white font-semibold shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex justify-end mt-12">
          <motion.button
            onClick={scrollToTop}
            className="text-sm font-semibold text-gray-400 hover:text-pink-500 transition-colors duration-300 flex items-center"
            whileHover={{ y: -3 }}
          >
            Back to top
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={toastClasses}
          >
            <ToastIcon type={toast.type} />
            <div>
              <p className="font-semibold text-sm">
                {toast.type === 'success' ? 'Success!' : 'Error!'}
              </p>
              <p className="text-sm opacity-90">{toast.message}</p>
            </div>
            <button
              onClick={dismissToast}
              className="ml-4 hover:opacity-70 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;