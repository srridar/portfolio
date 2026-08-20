import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactSection() {

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev, [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
        return;
      }

      toast.success(data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      toast.error("Unable to send message.");
    } finally {
      setLoading(false);
    }
  }


  return (
    <section id="contact" className="min-h-screen py-20  text-slate-100 flex items-center justify-center relative overflow-hidden font-mono">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="w-full max-w-xl mx-auto px-4 z-10">

        <div className="bg-slate-900 border border-slate-800 rounded-t-xl p-3 flex items-center justify-between border-b-0">
          <div className="grid grid-cols-2 gap- 0.1 w-6 h-6 items-center">
            <div className="w-2.5 h-2.5 bg-sky-500  hover:opacity-80 transition-opacity" />
            <div className="w-2.5 h-2.5 bg-sky-500  hover:opacity-80 transition-opacity" />
            <div className="w-2.5 h-2.5 bg-sky-500  hover:opacity-80 transition-opacity" />
            <div className="w-2.5 h-2.5 bg-sky-500  hover:opacity-80 transition-opacity" />
          </div>
          <div className="flex items-center gap-2  text-slate-400 font-sans ">
            <span>contact.me</span>
          </div>
          <div className="w-12" />
        </div>


        <div className="bg-slate-900/90 border border-slate-800 rounded-b-xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">

          <div className="mb-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center justify-center gap-2">
              <span className="text-sky-400">&lt;</span>
              Get In Touch
              <span className="text-sky-400">/&gt;</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 font-sans">
              Have a project in mind or want to collaborate? Send a message directly to my inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 text-slate-200">

            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-sky-400" />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="'Your Name'"
                className="w-full px-4 py-2.5 bg-slate-950/80 text-slate-100 placeholder-slate-600 border border-slate-800 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all text-sm"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@gmail.com"
                className="w-full px-4 py-2.5 bg-slate-950/80 text-slate-100 placeholder-slate-600 border border-slate-800 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all text-sm"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your idea, offer, or query here..."
                rows={5}
                className="w-full px-4 py-2.5 bg-slate-950/80 text-slate-100 placeholder-slate-600 border border-slate-800 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all text-sm resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-[0.99] cursor-pointer text-sm"
            >
              <span> {loading ? "Sending..." : "Send Message"} </span>
              <Send className="w-4 h-4" />
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}