import Link from "next/link";
import Image from "next/image";
export default function Contact() {
  return (
    <main className="bg-purple-100 min-h-screen flex justify-center items-center">
      
      <section className="bg-white shadow-lg rounded-xl p-10 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">Contact Me</h1>
        
        <p className="text-lg mb-6">
          Have questions, suggestions, or feedback? I’d love to hear from you!  
        </p>

        {/* Email Section */}
        <div className="space-y-4 mb-8">
          <p className="text-lg">
            📧 <span className="font-semibold">Personal Email:</span>{" "}
            <Link 
              href="mailto:hayatali12378@gmail.com" 
              className="text-purple-600 underline"
            >
              hayatali12378@gmail.com
            </Link>
          </p>

          <p className="text-lg">
            🎓 <span className="font-semibold">College Email:</span>{" "}
            <Link 
              href="mailto:hayatali.cse27@jecrc.ac.in" 
              className="text-purple-600 underline"
            >
              hayatali.cse27@jecrc.ac.in
            </Link>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <Link 
            href="https://www.linkedin.com/in/hayat-ali-887aab294/" 
            target="_blank"
            className="bg-blue-600 text-white font-bold px-5 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            LinkedIn
          </Link>

          <Link 
            href="https://github.com/Hayat-array/" 
            target="_blank"
            className="bg-gray-800 text-white font-bold px-5 py-2 rounded-lg shadow hover:bg-black"
          >
            GitHub
          </Link>
        </div>

        {/* Back Button */}
        <div>
          <Link href="/">
            <button className="bg-purple-600 text-white font-bold px-6 py-2 rounded-lg shadow-md hover:bg-purple-700">
              Back to Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
