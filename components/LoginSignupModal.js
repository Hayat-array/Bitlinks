'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

export default function LoginSignupModal({ initialMode = 'login', onClose }) {
  const router = useRouter();
  const { login } = useAuth();
  const [isSignup, setIsSignup] = useState(initialMode === 'signup');
  const [loading, setLoading] = useState(false);

  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  // ── Login ──────────────────────────────────────────────
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm),
      });
      const data = await res.json();
      if (res.ok) {
        const user = data.user || data;
        login({ email: user.email, name: user.name });
        onClose();
        router.push('/shorten');
      } else {
        alert(data.error || 'Login failed. Please check your credentials.');
      }
    } catch {
      alert('Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // ── Signup ─────────────────────────────────────────────
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (signupForm.password !== signupForm.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: signupForm.name,
          email: signupForm.email,
          password: signupForm.password,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        alert('Account created! Please log in.');
        setIsSignup(false);
        setSignupForm({ name: '', email: '', password: '', confirmPassword: '' });
      } else {
        alert(data.error || 'Signup failed.');
      }
    } catch {
      alert('Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    /* backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-4 overflow-hidden relative">

        {/* ── Close button ── */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold cursor-pointer transition-colors"
          aria-label="Close"
        >
          ×
        </button>

        {/* ── Header ── */}
        <div className="bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 px-6 pt-8 pb-6 text-white text-center">
          <h2 className="text-2xl font-bold mb-1">
            {isSignup ? '✨ Create Account' : '👋 Welcome Back'}
          </h2>
          <p className="text-purple-200 text-sm">
            {isSignup ? "Join BitLinks today — it's free!" : "Sign in to access your links"}
          </p>
        </div>

        {/* ── Toggle tabs ── */}
        <div className="relative flex h-11 w-full border-b border-gray-200">
          <div
            className={`absolute bottom-0 h-0.5 w-1/2 bg-purple-600 transition-all duration-300 ${isSignup ? 'left-1/2' : 'left-0'}`}
          />
          <button
            type="button"
            onClick={() => setIsSignup(false)}
            className={`w-1/2 h-full font-semibold text-sm transition-colors cursor-pointer ${!isSignup ? 'text-purple-700' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setIsSignup(true)}
            className={`w-1/2 h-full font-semibold text-sm transition-colors cursor-pointer ${isSignup ? 'text-purple-700' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Sign Up
          </button>
        </div>

        {/* ── Forms ── */}
        <div className="p-6">
          {!isSignup ? (
            /* LOGIN FORM */
            <form onSubmit={handleLoginSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email Address"
                required
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                className="w-full h-11 px-4 rounded-xl border-2 border-gray-200 text-sm outline-none focus:border-purple-500 transition-colors placeholder-gray-400"
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                className="w-full h-11 px-4 rounded-xl border-2 border-gray-200 text-sm outline-none focus:border-purple-500 transition-colors placeholder-gray-400"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full h-11 bg-gradient-to-r from-purple-700 to-purple-500 text-white rounded-xl font-semibold mt-1 cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {loading ? 'Logging in…' : 'Login'}
              </button>
              <p className="text-center text-sm text-gray-500 mt-1">
                No account?{' '}
                <button type="button" onClick={() => setIsSignup(true)} className="text-purple-600 font-semibold hover:underline cursor-pointer">
                  Sign up free
                </button>
              </p>
            </form>
          ) : (
            /* SIGNUP FORM */
            <form onSubmit={handleSignupSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={signupForm.name}
                onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                className="w-full h-11 px-4 rounded-xl border-2 border-gray-200 text-sm outline-none focus:border-purple-500 transition-colors placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={signupForm.email}
                onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                className="w-full h-11 px-4 rounded-xl border-2 border-gray-200 text-sm outline-none focus:border-purple-500 transition-colors placeholder-gray-400"
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={signupForm.password}
                onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                className="w-full h-11 px-4 rounded-xl border-2 border-gray-200 text-sm outline-none focus:border-purple-500 transition-colors placeholder-gray-400"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={signupForm.confirmPassword}
                onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
                className="w-full h-11 px-4 rounded-xl border-2 border-gray-200 text-sm outline-none focus:border-purple-500 transition-colors placeholder-gray-400"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full h-11 bg-gradient-to-r from-purple-700 to-purple-500 text-white rounded-xl font-semibold mt-1 cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {loading ? 'Creating account…' : 'Create Account'}
              </button>
              <p className="text-center text-sm text-gray-500 mt-1">
                Already have an account?{' '}
                <button type="button" onClick={() => setIsSignup(false)} className="text-purple-600 font-semibold hover:underline cursor-pointer">
                  Log in
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
