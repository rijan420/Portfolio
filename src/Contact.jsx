import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

function SectionEyebrow({ icon, children }) {
  return (
    <div className="inline-flex items-center gap-2 text-blue-600 bg-blue-50 text-xs font-medium px-3 py-1 rounded-full mb-3">
      {icon} {children}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* CONTACT HERO */}
      <section className="bg-slate-950 text-white">

        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 text-center">

          <SectionEyebrow icon="💬">
            Get in touch
          </SectionEyebrow>

          <h1 className="text-3xl sm:text-4xl font-semibold">
            Let's Talk
          </h1>

          <p className="text-slate-400 mt-2 max-w-md mx-auto">
            Have a project, question, or opportunity?
            I'd love to hear from you.
          </p>

        </div>

      </section>

      {/* CONTACT CONTENT */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 grid md:grid-cols-[1fr_1.3fr] gap-10">

        {/* LEFT SIDE */}
        <div>

          <h2 className="text-xl font-semibold text-slate-900">
            Let's work together.
          </h2>

          <p className="text-slate-500 mt-2 leading-relaxed">
            I'm always interested in learning new things,
            working on interesting projects and connecting
            with new people.
          </p>

          {/* EMAIL */}
          <div className="flex items-center gap-3 mt-6">

            <div className="w-9 h-9 rounded-md bg-blue-50 flex items-center justify-center shrink-0">
              <Mail
                className="text-blue-600"
                size={16}
              />
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Email
              </p>

              <p className="text-sm font-medium text-slate-900">
                rijang420@gmail.com
              </p>
            </div>

          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-3 mt-4">

            <div className="w-9 h-9 rounded-md bg-blue-50 flex items-center justify-center shrink-0">
              <MapPin
                className="text-blue-600"
                size={16}
              />
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Location
              </p>

              <p className="text-sm font-medium text-slate-900">
                Biratnagar, Nepal
              </p>
            </div>

          </div>

          {/* SOCIAL */}
          <div className="mt-6">

            <p className="text-xs text-slate-500 mb-2">
              Social
            </p>

            <div className="flex gap-4 text-slate-600">

             <a href="https://github.com/rijan420">
             <FaGithub
                size={18}
                className="hover:text-blue-600 transition-colors cursor-pointer"
                />
                </a> 

            <a href="https://www.linkedin.com/in/rijan-gautam-a48548343/">
             <FaLinkedin
                size={18}
                className="hover:text-blue-600 transition-colors cursor-pointer"
                />
                </a> 

            <a href="https://www.instagram.com/reezangautam/">
              <FaInstagram
                size={18}
                className="hover:text-blue-600 transition-colors cursor-pointer"
                />
                </a>
                

            </div>
          </div>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-slate-200 rounded-xl p-6 grid sm:grid-cols-2 gap-4"
        >

          {/* NAME */}
          <div className="flex flex-col gap-1.5">

            <label className="text-sm font-medium text-slate-700">
              Name
            </label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="border border-slate-200 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500"
            />

          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-1.5">

            <label className="text-sm font-medium text-slate-700">
              Email
            </label>

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="border border-slate-200 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500"
            />

          </div>

          {/* SUBJECT */}
          <div className="flex flex-col gap-1.5 sm:col-span-2">

            <label className="text-sm font-medium text-slate-700">
              Subject
            </label>

            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="border border-slate-200 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 text-slate-600"
            >
              <option value="">
                Select a subject
              </option>

              <option value="project">
                Project inquiry
              </option>

              <option value="job">
                Job opportunity
              </option>

              <option value="other">
                Other
              </option>

            </select>

          </div>

          {/* MESSAGE */}
          <div className="flex flex-col gap-1.5 sm:col-span-2">

            <label className="text-sm font-medium text-slate-700">
              Message
            </label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={5}
              className="border border-slate-200 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 resize-none"
            />

          </div>

          {/* SUBMIT */}
          <div className="sm:col-span-2">

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 transition-colors text-white text-sm font-medium py-2.5 rounded-md"
            >
              {sent ? "Message Sent ✓" : "Send Message"}

              {!sent && <Send size={14} />}
            </button>

          </div>

        </form>

      </section>
    </>
  );
}