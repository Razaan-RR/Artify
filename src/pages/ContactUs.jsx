import React from "react";

function ContactUs() {
  return (
    <div className="bg-[#e9edf2] min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Contact <span className="text-indigo-600">Us</span>
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed text-center mb-12 max-w-2xl mx-auto">
          Have a question, suggestion, or need help with your Artify account?
          We're here to assist you. Reach out to us anytime—we’d love to hear
          from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-700">📩 support@artify.com</p>
            <p className="text-gray-500 text-sm mt-1">
              We usually respond within 24 hours.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-700">📞 +1 (555) 123-4567</p>
            <p className="text-gray-500 text-sm mt-1">
              Available from 9am – 6pm (Mon–Fri)
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
