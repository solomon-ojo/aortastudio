"use client"

import type React from "react"

import { useState } from "react"

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
    privacyPolicy: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, privacyPolicy: e.target.checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSuccess(true)
      setFormData({
        name: "",
        company: "",
        email: "",
        message: "",
        privacyPolicy: false,
      })
    } catch (err) {
      setError("Oops! Something went wrong while submitting the form.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Get in touch:</h3>
          </div>

          <div className="bg-black">
            {isSuccess ? (
              <div className="text-center py-12">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-300 mb-4">
                  Thank you!
                  <br />
                  We'll get back
                  <br />
                  to you ASAP!
                </h2>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-white focus:border-yellow-300 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm text-white/70 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-white focus:border-yellow-300 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-white/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-white focus:border-yellow-300 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-white/70 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-white focus:border-yellow-300 focus:outline-none resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="privacy-policy"
                      name="privacyPolicy"
                      type="checkbox"
                      checked={formData.privacyPolicy}
                      onChange={handleCheckboxChange}
                      required
                      className="w-4 h-4 border border-white/20 rounded bg-transparent focus:ring-yellow-300 focus:ring-2"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacy-policy" className="text-white/70">
                      By clicking, you are confirming that you have read, understood and agree to Itekako{" "}
                      <a href="/privacy-policy" className="text-yellow-300 hover:underline">
                        Privacy policy
                      </a>
                    </label>
                  </div>
                </div>

                {error && <div className="text-red-500 text-sm">{error}</div>}

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-300 text-black font-medium py-3 px-6 rounded-md hover:bg-yellow-400 transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
