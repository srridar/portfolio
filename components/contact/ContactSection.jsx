import React, { useState } from "react";
import { toast } from "sonner";



const fieldClass =
  "w-full border-0  bg-transparent px-0 py-2.5 text-[15px] text-[#1f1c17] " +
  "placeholder:text-[#1f1c17]/35 transition-colors focus:border-[#1f1c17] focus:outline-none focus:ring-0";

const labelClass = "mb-1 block text-sm font-semibold uppercase tracking-[0.10em] text-[#1f1c17]/55";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Unable to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="px-6 py-24 text-[#1f1c17]"
      style={{ background: "#f1ece2" }}
    >
      <div className="mx-auto grid max-w-6xl gap-14  pt-14 lg:grid-cols-12">

        <div className="lg:col-span-5">
          <h2  className="text-5xl  md:text-6xl">
            Let&rsquo;s build
            <br />
            <span className="font-normal">something.</span>
          </h2>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-[#1f1c17]/70">
            Have a project in mind or want to collaborate? Send a message
            straight to my inbox and I&rsquo;ll get back to you.
          </p>
        </div>

   
        <form onSubmit={handleSubmit} className="space-y-8 lg:col-span-6 lg:col-start-7">
          <div>
            <label htmlFor="name" className={labelClass}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={fieldClass}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass} >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={fieldClass}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className={labelClass} >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your idea, offer, or query here..."
              rows={5}
              className={`${fieldClass} resize-none`}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 bg-[#1f1c17] px-7 py-2 text-sm rounded font-semibold text-[#f1ece2] transition-colors hover:bg-[#676665] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send message"}
            <span aria-hidden>&rarr;</span>
          </button>
        </form>
      </div>
    </section>
  );
}