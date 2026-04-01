import { useState } from "react";
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";

// Configuration
const WHATSAPP_NUMBER = "349666766329"; // Spain country code + number

const contactCards = [
  {
    title: "Company Name",
    icon: "🏢",
    text: "Official brand and business identity for agricultural fertilizers.",
    value: "Fertilizantes B Nutrientes Ecologicos PL FBNE",
  },
  {
    title: "Phone Number",
    icon: "📞",
    text: "Contact our team for fertilizer enquiries and distribution support.",
    value: "+34 966 676 6329",
  },
  {
    title: "Address",
    icon: "📍",
    text: "Our Spain location for business enquiries and operations.",
    value: "B. Rio Taibila, 40530, Ceuti, Murcia, Spain",
  },
];

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const lines = [
      "🌱 *New Inquiry: B Nutrientes Ecologicos*",
      "",
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      `*Subject:* ${form.subject}`,
      `*Message:* ${form.message}`,
      "",
      `Sent via Website | ${new Date().toLocaleDateString()}`,
    ];

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    const win = window.open(url, "_blank");
    if (!win) window.location.href = url;

    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="relative bg-[#224b29] px-5 pt-4 pb-20 sm:px-8 lg:px-14 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop" alt="bg" className="object-cover w-full h-full" />
        </div>
        
        <div className="mx-auto max-w-7xl relative z-10">
          <Navigation />
          <div className="mx-auto max-w-4xl pt-10 text-center text-white md:pt-14">
            <p className="animate-fade-up text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
              Contact Us
            </p>
            <h1 className="animate-fade-up-delayed mt-5 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Let's talk about fertilizers and crop nutrition.
            </h1>
            <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Contact us for product guidance, dealership enquiries, or help choosing the right fertilizer solution for your soil.
            </p>
          </div>
        </div>
      </header>

      <main className="relative z-10 -mt-12 px-5 pb-24 sm:px-8 lg:px-14">
        <section className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12">
            
            {/* LEFT COLUMN: CONTACT INFO */}
            <div className="lg:col-span-5 space-y-6">
              <div className="grid gap-6">
                {contactCards.map((card, index) => (
                  <article
                    className="animate-fade-up rounded-[1.6rem] border border-emerald-100 bg-white p-6 shadow-sm flex items-start gap-4"
                    key={card.title}
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-2xl">
                      {card.icon}
                    </div>
                    <div>
                      <h2 className="font-serif text-xl text-slate-950">{card.title}</h2>
                      <p className="mt-1 text-sm text-slate-500">{card.text}</p>
                      <p className="mt-3 text-sm font-bold text-emerald-700 break-words">{card.value}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: FORM */}
            <div className="lg:col-span-7">
              <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-xl sm:p-10">
                <h2 className="font-serif text-2xl text-slate-950 sm:text-3xl mb-2">Send a Message</h2>
                <p className="text-slate-500 mb-8">We will redirect you to WhatsApp to complete your request.</p>
                
                <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="rounded-2xl border border-emerald-100 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="rounded-2xl border border-emerald-100 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Subject</label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="rounded-2xl border border-emerald-100 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      placeholder="e.g. Bulk Distribution, Product Advice"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      className="min-h-36 rounded-2xl border border-emerald-100 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="mt-2 md:col-span-2 flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(90deg,#224b29,#d98b26)] px-8 py-4 text-sm font-bold text-white hover:scale-[1.02] transition-transform shadow-lg"
                  >
                    <span>Send Message on WhatsApp</span>
                    <span className="text-xl">→</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== GOOGLE MAP SECTION ===== */}
      <section className="px-5 mb-24 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-7xl h-[450px] overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.5678!2d-1.2117!3d38.1319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63796f7c1d763b%3A0x67356c39f99e4f2a!2sCeut%C3%AD%2C%20Murcia%2C%20Spain!5e0!3m2!1sen!2s!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
}