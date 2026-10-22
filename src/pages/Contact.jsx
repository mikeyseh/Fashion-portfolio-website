import { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("Message sent. We will be in touch.");
        e.target.reset();
      } else {
        setFormStatus("Error sending message.");
      }
    } catch (error) {
      setFormStatus("Error connecting to server.");
    }
  };

  return (
    <div className="py-24 px-8 max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-display mb-4">Contact</h1>
        <p className="text-ela-gray uppercase tracking-widest text-xs">
          For inquiries, collaborations, and custom pieces.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-ela-gray">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full bg-ela-dark border border-neutral-800 text-ela-white px-4 py-3 focus:outline-none focus:border-ela-red transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-ela-gray">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-ela-dark border border-neutral-800 text-ela-white px-4 py-3 focus:outline-none focus:border-ela-red transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-ela-gray">
            Message
          </label>
          <textarea
            name="message"
            required
            rows="5"
            className="w-full bg-ela-dark border border-neutral-800 text-ela-white px-4 py-3 focus:outline-none focus:border-ela-red transition-colors"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-ela-red text-ela-white font-display py-4 tracking-widest hover:bg-red-700 transition"
        >
          Send Message
        </button>
        {formStatus && (
          <p className="text-center text-sm font-semibold text-ela-red uppercase tracking-widest mt-4">
            {formStatus}
          </p>
        )}
      </form>
    </div>
  );
}
