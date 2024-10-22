// pages/contact.js
import Layout from "../Components/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-16">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          We’d love to hear from you! Reach out to us using the form below.
        </p>
        <form className="mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg text-gray-700">Message</label>
            <textarea
              id="message"
               rows={4}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your message"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  );
}
