import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const validateName = (value) => {
    return /^[A-Za-z\s]+$/.test(value);
  };

  const validateEmail = (value) => {
    return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value);
  };

  const validatePhone = (value) => {
    return /^\d{11}$/.test(value);
  };

  const validateMessage = (value) => {
    return value.trim().length >= 60;
  };

  const handleNext = () => {
    setError('');
    
     if (step === 1) {
      if (!validateName(name)) {
        toast.error('Name must contain only letters (no digits or special characters)');
        return;
      }
    } else if (step === 2) {
      if (!validateEmail(email)) {
        toast.error('Email must follow the format example@gmail.com');
        return;
      }
    } else if (step === 3) {
      if (!validatePhone(phone)) {
        toast.error('Phone number must be exactly 11 digits');
        return;
      }
    }
    
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    setError('');
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    setError('');
    
    if (!validateMessage(message)) {
      toast.error('Message must be at least 60 characters');
      return;
    }
    
    console.log({ name, email, phone, message });
    toast.success('Form submitted successfully!');
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setStep(1);
  };

  const isNextDisabled = () => {
    if (step === 1 && name.trim() === '') return true;
    if (step === 2 && email.trim() === '') return true;
    if (step === 3 && phone.trim() === '') return true;
    if (step === 4 && message.trim() === '') return true;
    return false;
  };

  // Handle input changes with validation
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setError('');
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError('');
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Only allow digits
    if (value === '' || /^\d+$/.test(value)) {
      setPhone(value);
      setError('');
    }
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
    setError('');
  };

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white p-4 flex flex-col items-center pb-8">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="w-full max-w-6xl mt-8">
        <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-4">
          Let's Connect
        </h1>
        <p className="text-center text-gray-400 text-xl mb-12">
          Choose your preferred way to reach out
        </p>

        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="bg-gray-800 p-8 rounded-3xl shadow-xl w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4 group">
                <div className="bg-blue-900 p-4 rounded-xl transform transition-transform duration-300 group-hover:translate-y-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p>umairarshad6697@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="bg-green-900 p-4 rounded-xl transform transition-transform duration-300 group-hover:translate-y-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p>0334-7775040</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="bg-red-900 p-4 rounded-xl transform transition-transform duration-300 group-hover:translate-y-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p>Islamabad, Pakistan</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="bg-purple-900 p-4 rounded-xl transform transition-transform duration-300 group-hover:translate-y-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400">Calendly</p>
                  <a href="#" className="text-blue-400 hover:underline">Schedule a meeting with Me</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-3xl shadow-xl w-full md:w-1/2">
            {step === 1 && (
              <>
                <h2 className="text-2xl font-bold mb-6">What's your name?</h2>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={handleNameChange}
                  className="w-full p-4 bg-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-2xl font-bold mb-6">What's your email?</h2>
                <input
                  type="email"
                  placeholder="Enter your email (example@gmail.com)"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full p-4 bg-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="text-2xl font-bold mb-6">What's your Phone No</h2>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength={11}
                  className="w-full p-4 bg-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
              </>
            )}

            {step === 4 && (
              <>
                <h2 className="text-2xl font-bold mb-6">Your message</h2>
                <textarea
                  placeholder="Type your message here (minimum 60 characters)..."
                  value={message}
                  onChange={handleMessageChange}
                  className="w-full p-4 bg-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  rows="4"
                />
                <p className="mt-2 text-sm text-gray-500">
                  Characters: {message.length}/60 {message.length < 60 ? "(minimum 60 required)" : ""}
                </p>
              </>
            )}

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl transition duration-300"
                >
                  Back
                </button>
              )}
              
              {step < 4 ? (
                <button
                  onClick={handleNext}
                  className={`px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl transition duration-300 ${
                    isNextDisabled() ? "opacity-50 cursor-not-allowed" : ""
                  } ${step === 1 ? "ml-auto" : ""}`}
                  disabled={isNextDisabled()}
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className={`px-6 py-3 bg-green-600 hover:bg-green-500 rounded-xl transition duration-300 flex items-center gap-2 ${
                    isNextDisabled() ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isNextDisabled()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Submit
                </button>
              )}
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {[1, 2, 3, 4].map((num) => (
                <div 
                  key={num}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    step === num ? "w-8 bg-blue-500" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;