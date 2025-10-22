// app/components/NewsletterForm.tsx
'use client';

import { useState, FormEvent } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    try {
      // TODO: wire up to your real endpoint/action later.
      // For now we just fake a short delay and succeed.
      await new Promise((r) => setTimeout(r, 600));
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form
      className="mx-auto flex w-full max-w-xl flex-col gap-3 sm:flex-row"
      onSubmit={onSubmit}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-blue-600"
        aria-label="Email address"
      />

      <button
        type="submit"
        disabled={status === 'loading'}
        className="rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
      </button>

      {status === 'success' && (
        <span className="text-sm text-green-700">You’re subscribed! 🎉</span>
      )}
      {status === 'error' && (
        <span className="text-sm text-red-700">
          Something went wrong. Please try again.
        </span>
      )}
    </form>
  );
}
