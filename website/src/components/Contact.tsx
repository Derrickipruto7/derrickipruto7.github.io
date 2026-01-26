'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4 text-slate-700">
              <div>
                <p className="font-semibold">Email</p>
                <p>your.email@example.com</p>
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p>+1 (XXX) XXX-XXXX</p>
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p>Your City, Country</p>
              </div>
              <div>
                <p className="font-semibold">Social Links</p>
                <div className="flex gap-4 mt-2">
                  <a href="#" className="text-primary hover:underline">LinkedIn</a>
                  <a href="#" className="text-primary hover:underline">GitHub</a>
                  <a href="#" className="text-primary hover:underline">Twitter</a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-slate-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-slate-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-slate-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-secondary transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
