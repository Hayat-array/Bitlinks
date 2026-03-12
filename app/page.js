import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-purple-50 font-['Poppins'] overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative px-6 py-12 md:py-24 max-w-7xl mx-auto">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse -z-10"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-20 -z-10"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Text Content */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-8 z-10 w-full">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 border border-purple-200 text-purple-700 font-bold text-sm shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </span>
              The Best URL Shortener Market
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-600 leading-tight">
              Short Links.<br className="hidden md:block" /> Big Impact.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
              We are the most straightforward URL Shortener in the world. 
              No invasive tracking, no forced logins. Just paste, shorten, and share instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <Link href="/shorten" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 text-white font-bold text-lg rounded-2xl shadow-xl shadow-purple-500/30 transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer">
                  ⚡ Try It Now
                </button>
              </Link>
              <Link href="https://github.com/Hayat-array/" target="_blank" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-purple-200 hover:border-purple-600 hover:bg-purple-50 text-purple-800 font-bold text-lg rounded-2xl shadow-lg transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path></svg>
                  GitHub
                </button>
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="pt-8 flex items-center justify-center md:justify-start gap-8 border-t border-purple-200/50 w-full">
              <div className="text-center md:text-left">
                <p className="text-2xl font-black text-purple-900">10K+</p>
                <p className="text-sm font-bold text-gray-500 uppercase">Links Shortened</p>
              </div>
              <div className="w-1 h-10 bg-purple-200 rounded-full"></div>
              <div className="text-center md:text-left">
                <p className="text-2xl font-black text-purple-900">100%</p>
                <p className="text-sm font-bold text-gray-500 uppercase">Free</p>
              </div>
            </div>

          </div>

          {/* Right Image Content */}
          <div className="flex-1 w-full max-w-lg relative z-10 hidden sm:flex justify-center items-center mt-12 md:mt-0">
            {/* Floating effect container */}
            <div className="relative w-full aspect-square animate-[float_6s_ease-in-out_infinite]">
              {/* Glow behind image */}
              <div className="absolute inset-4 bg-purple-600/20 blur-2xl rounded-[3rem]"></div>
              
              <div className="relative w-full h-full bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[3rem] shadow-2xl overflow-hidden p-8 flex items-center justify-center">
                <Image 
                  className="mix-blend-multiply drop-shadow-2xl object-contain object-center scale-110" 
                  alt="Bitlinks Vector Graphic" 
                  src={"/fri.png"} 
                  fill={true}
                  priority
                />
              </div>
              
              {/* Floating UI Badges */}
              <div className="absolute -left-6 top-1/4 bg-white p-4 rounded-2xl shadow-xl shadow-purple-200 border border-purple-100 animate-[float_5s_ease-in-out_infinite_animation-delay:1s]">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="absolute -right-4 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl shadow-indigo-200 border border-indigo-100 animate-[float_7s_ease-in-out_infinite_animation-delay:2s]">
                <span className="text-2xl">🛡️</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Inline styles for custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes mt-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-\\[float_6s_ease-in-out_infinite\\] {
          animation: mt-float 6s ease-in-out infinite;
        }
        .animate-\\[float_5s_ease-in-out_infinite_animation-delay\\:1s\\] {
          animation: mt-float 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-\\[float_7s_ease-in-out_infinite_animation-delay\\:2s\\] {
          animation: mt-float 7s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}} />
    </main>
  );
}
