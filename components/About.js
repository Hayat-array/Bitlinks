"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  const stats = [
    { label: "Links Shortened", value: "10K+" },
    { label: "Happy Users", value: "5K+" },
    { label: "Uptime", value: "99.9%" },
  ];

  return (
    <main className="min-h-screen bg-purple-50 font-['Poppins']">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-indigo-600">
              Our Mission
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              BitLinks was born from a simple realization: the web is too cluttered. 
              We built this tool to provide a clean, fast, and secure way to share 
              your digital world. 
              <br /><br />
              Unlike others, we prioritize **privacy and user experience** above all else. 
              No invasive tracking, no endless redirects—just your links, shorter.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link href="/shorten">
                <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer">
                  Try It Free
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-3 bg-white border-2 border-purple-600 text-purple-600 font-bold rounded-2xl hover:bg-purple-50 transition-all transform hover:-translate-y-1 cursor-pointer">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -z-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20 -top-10 -right-10 animate-pulse"></div>
            <div className="absolute -z-10 w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-20 -bottom-10 -left-10"></div>
            <Image
              src="/group.png"
              alt="Our Team illustration"
              width={600}
              height={600}
              className="relative drop-shadow-2xl brightness-105"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-purple-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-8 text-center space-y-2 rounded-3xl hover:bg-purple-50 transition-colors">
                <p className="text-4xl font-extrabold text-purple-700">{stat.value}</p>
                <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-bold text-gray-800">Why Use BitLinks?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-purple-50 hover:border-purple-200 transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl mb-6">🛡️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Privacy First</h3>
              <p className="text-gray-600">We don&apos;t sell your data. We don&apos;t track your users across the web. Your business is yours.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-purple-50 hover:border-purple-200 transition-all">
              <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-2xl mb-6">⚡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">Our global infrastructure ensures that your short URLs redirect instantly, anywhere in the world.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-purple-50 hover:border-purple-200 transition-all">
              <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center text-2xl mb-6">💎</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Premium Experience</h3>
              <p className="text-gray-600">We believe simple tools should still be beautiful. Our interface is designed for elegance and ease.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
