import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900"
});

export default function Home() {
  return (
    <main className="bg-purple-100 text-center min-w-screen min-h-[35vw] "> 
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className={`text-3xl font-bold ${poppins.className} `}>
            The Best URL shortener in the Market
          </p>
          <p className="px-8">
            We are the most straight forward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL Shorterner
          </p>
          <div className='flex gap-3'>
                <Link href="/shorten"><button className='bg-purple-500 cursor-pointer shadow-lg rounded-lg p-3 font-bold text-white py-1'>Try Now</button></Link>
                <Link href="/github"><button className='bg-purple-500 cursor-pointer shadow-lg rounded-lg p-3 font-bold text-white py-1'>GitHub</button></Link>
            </div>

        </div>
        <div className=" flex justify-start relative ">
          <Image className="mix-blend-darken" alt="An Image of a vector" src={"/fri.png"} fill={true}/>
        </div>

      </section>
    </main>
  );
}
