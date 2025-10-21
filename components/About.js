import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

// const poppins = localFont({
//   src: "./../fonts/Poppins-ExtraBold.ttf", // adjust path if needed
//   variable: "--font-poppins",
//   weight: "100 900",
// });

export default function About() {
  return (
    <main className="bg-purple-100 min-h-[30vw] text-center">
      <section className="grid grid-cols-2 h-[80vh]">
        {/* Left Side Text */}
        <div className="flex flex-col justify-center items-center gap-6 px-6">
          <p className={`text-4xl font-bold`}>
            About Us
          </p>
          <p className="text-lg leading-relaxed">
            Welcome to our URL Shortener! 🚀  
            <br />
            We built this tool with one simple goal: to make sharing links easy, fast, 
            and secure — without unnecessary tracking or login requirements.  
            <br />
            Unlike other platforms that collect your data, our focus is **privacy, speed, 
            and simplicity**. Whether you are a student, professional, or a business, 
            our service ensures that your links stay short and neat.
          </p>
          <div className="flex gap-3">
            <Link href="/shorten">
              <button className="bg-purple-500 shadow-lg rounded-lg p-3 font-bold text-white cursor-pointer">
                Start Shortening
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-white border-2 border-purple-500 text-purple-500 shadow-lg rounded-lg p-3 font-bold cursor-pointer">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center items-center relative">
          <Image
            className="mix-blend-darken"
            alt="Vector illustration of teamwork"
            src={"/group.png"} // replace with your own image
            width={500}
            height={500}
            priority
          />
        </div>
      </section>
    </main>
  );
}
