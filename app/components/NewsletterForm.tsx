"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [region, setRegion] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder submit — replace with your API/Service later.
    alert(`Thanks! We’ll keep you posted.\nEmail: ${email}\nRole: ${role}\nRegion: ${region}`);
    setEmail("");
    setRole("");
    setRegion("");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-8 rounded-xl border bg-white/60 p-4 shadow-sm backdrop-blur"
    >
      <div className="grid gap-3 sm:grid-cols-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full rounded-md border px-3 py-2"
          aria-label="Email address"
        />
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role (e.g., Counsel, PM, Engineer)"
          className="w-full rounded-md border px-3 py-2"
          aria-label="Role"
        />
        <input
          type="text"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          placeholder="Region (e.g., US, EU, Africa)"
          className="w-full rounded-md border px-3 py-2"
          aria-label="Region"
        />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Once a month. No spam. Practical templates and what works.
        </p>
        <button
          type="submit"
          className="rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}
