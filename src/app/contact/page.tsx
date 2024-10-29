"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    if (!formData.from_name || !formData.from_email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all fields",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      if (form.current) {
        await emailjs.sendForm(
          "service_z40xhts",
          "template_wxaiv2a",
          form.current,
          {
            publicKey: "4EHBTpBpTsVuliNfI",
          }
        );
        setStatus({
          type: "success",
          message: "Message sent successfully!",
        });
        setFormData({ from_name: "", from_email: "", message: "" });
        form.current.reset();
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 
                       text-white focus:outline-none focus:ring-2 focus:ring-green-500 
                       focus:border-transparent transition duration-200"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">
              Email
            </label>
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 
                       text-white focus:outline-none focus:ring-2 focus:ring-green-500 
                       focus:border-transparent transition duration-200"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 
                       text-white focus:outline-none focus:ring-2 focus:ring-green-500 
                       focus:border-transparent transition duration-200 resize-none"
              placeholder="Your message here..."
            />
          </div>

          {status.message && (
            <div
              className={`p-4 rounded-md ${
                status.type === "success"
                  ? "bg-green-900/50 text-green-200"
                  : "bg-red-900/50 text-red-200"
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 rounded-md bg-green-600 text-white font-medium
                     hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 
                     focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 
                     disabled:cursor-not-allowed transition duration-200"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
