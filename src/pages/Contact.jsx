import React from "react";
import Title from "../components/Title"
const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center  py-20 mt-20">

      <Title title={"Contact Us"} text={'Have questions or need help with your food order? We’d love to hear from you!'} />

      {/* Contact Section */}
      <div className="w-full max-w-6xl px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Send us a message
          </h2>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-medium transition active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col justify-center bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Get in touch
          </h2>
          <p className="text-gray-600 mb-4">
            We’re here to help with your orders, feedback, or any questions you
            may have.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              📍 <span className="font-medium">Address:</span> 123 Food Street,
              Flavor City, USA
            </p>
            <p>
              📞 <span className="font-medium">Phone:</span> +1 (234) 567-890
            </p>
            <p>
              📧 <span className="font-medium">Email:</span>{" "}
              support@foodorder.com
            </p>
          </div>

          {/* Map Embed */}
          <div className="mt-6">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0923512168283!2d-122.4194154846818!3d37.77492927975961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5f0b77f1%3A0x1234567890abcdef!2sFood%20Restaurant!5e0!3m2!1sen!2sus!4v1696458945629"
              className="w-full h-64 rounded-lg border-none"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
