"use client";

import React, { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      // TODO: replace with your real endpoint later if you wish.
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
      setEmail("");
    } catch (e) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="border rounded px-3 py-2 w-full"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-4 py-2 rounded bg-black text-white"
      >
        {status === "loading" ? "Joining..." : "Join"}
      </button>
      {status === "success" && <span className="text-green-600 ml-2">Thanks! 🎉</span>}
      {status === "error" && <span className="text-red-600 ml-2">Try again.</span>}
    </form>
  );
}
