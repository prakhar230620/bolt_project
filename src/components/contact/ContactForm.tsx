import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Input from '../ui/Input';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Input
          label="Your Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          label="Your Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <Input
          label="Subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-all duration-300 flex items-center justify-center"
      >
        Send Message
        <Send className="ml-2 h-5 w-5" />
      </button>
    </form>
  );
};

export default ContactForm;