"use client";

import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-purple-50 flex justify-center items-center font-['Poppins'] p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-8 lg:gap-12 bg-white rounded-3xl md:rounded-[40px] shadow-2xl shadow-purple-200/50 p-6 sm:p-8 md:p-12 border border-purple-50 overflow-hidden relative">
        
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-purple-100 rounded-full blur-3xl -mr-16 -mt-16 md:-mr-20 md:-mt-20 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-indigo-100 rounded-full blur-3xl -ml-12 -mb-12 md:-ml-16 md:-mb-16 opacity-50"></div>

        {/* Left Side: Contact Info */}
        <div className="flex-1 space-y-8 md:space-y-10 relative order-2 md:order-1">
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-indigo-600">
              Get in Touch
            </h1>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Have a question, feedback, or just want to say hi? We&apos;d love to hear from you. 
              Our team typically responds within 24 hours.
            </p>
          </div>

          <div className="space-y-5 md:space-y-6">
            <div className="flex items-start sm:items-center gap-3 md:gap-4 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-colors rounded-xl md:rounded-2xl flex items-center justify-center text-purple-600 text-lg sm:text-xl">
                ✉️
              </div>
              <div className="space-y-0.5 overflow-hidden">
                <p className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest">Email Us</p>
                <Link 
                  href="mailto:hayatali12378@gmail.com" 
                  className="text-gray-800 font-bold hover:text-purple-600 transition-colors text-sm sm:text-base block truncate"
                  title="hayatali12378@gmail.com"
                >
                  hayatali12378@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-start sm:items-center gap-3 md:gap-4 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors rounded-xl md:rounded-2xl flex items-center justify-center text-indigo-600 text-lg sm:text-xl">
                🎓
              </div>
              <div className="space-y-0.5 overflow-hidden">
                <p className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest">Academic</p>
                <Link 
                  href="mailto:hayatali.cse27@jecrc.ac.in" 
                  className="text-gray-800 font-bold hover:text-indigo-600 transition-colors text-sm sm:text-base block truncate"
                  title="hayatali.cse27@jecrc.ac.in"
                >
                  hayatali.cse27@jecrc.ac.in
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-4 md:pt-8 flex flex-row gap-3 sm:gap-4">
            <Link 
              href="https://www.linkedin.com/in/hayat-ali-887aab294/" 
              target="_blank"
              className="flex-1 text-center px-4 sm:px-6 py-2.5 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-200 cursor-pointer"
            >
              LinkedIn
            </Link>
            <Link 
              href="https://github.com/Hayat-array/" 
              target="_blank"
              className="flex-1 text-center px-4 sm:px-6 py-2.5 sm:py-2 bg-gray-900 hover:bg-black text-white text-sm sm:text-base font-bold rounded-xl transition-all shadow-lg hover:shadow-gray-200 cursor-pointer"
            >
              GitHub
            </Link>
          </div>
        </div>

        {/* Right Side: Quick Message / CTA */}
        <div className="flex-1 bg-purple-50 rounded-2xl md:rounded-[32px] p-6 lg:p-8 space-y-5 lg:space-y-6 flex flex-col justify-center text-center relative order-1 md:order-2">
          <div className="space-y-1.5 lg:space-y-2">
            <h2 className="text-xl lg:text-2xl font-bold text-purple-900">Need Help?</h2>
            <p className="text-sm lg:text-base text-purple-600/80">Check our FAQ or start shortening links right away.</p>
          </div>
          <div className="space-y-3 lg:space-y-4">
            <Link href="/shorten" className="block">
              <button className="w-full py-3 lg:py-4 bg-white text-purple-700 text-sm lg:text-base font-bold rounded-xl lg:rounded-2xl shadow-md hover:shadow-purple-200 transition-all cursor-pointer">
                Go to Shortener
              </button>
            </Link>
            <Link href="/" className="block">
              <button className="w-full py-3 lg:py-4 bg-purple-700 text-white text-sm lg:text-base font-bold rounded-xl lg:rounded-2xl shadow-lg hover:bg-purple-800 transition-all cursor-pointer">
                Back to Home
              </button>
            </Link>
          </div>
          <p className="text-[10px] lg:text-xs text-purple-400 mt-2">
            By contacting us, you agree to our privacy policy.
          </p>
        </div>

      </div>
    </main>
  );
}

