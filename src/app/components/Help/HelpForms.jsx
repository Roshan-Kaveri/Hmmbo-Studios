'use client';

import React, { useState } from 'react';

export default function HelpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Technical Support',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Send data to backend or API
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full text-white">
      <div>
        <label className="block mb-1">Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full border border-gray-300 bg-gray-800 rounded px-4 py-2"
        />
      </div>

      <div>
        <label className="block mb-1">Your Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="youremail@domain.com"
          className="w-full border border-gray-300 rounded px-4 bg-gray-800 py-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1">Subject</label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded bg-gray-800 px-4 py-2"
        >
          <option>Technical Support</option>
          <option>Billing</option>
          <option>General Inquiry</option>
        </select>
      </div>

      <div>
        <label className="block mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full border border-gray-300 rounded bg-gray-800 px-4 py-2"
          required
        />
      </div>

      <button type="submit" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/80">
        Send Message
      </button>
    </form>
  );
}
