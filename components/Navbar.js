// import React from 'react'
// import Link from 'next/link'

// const Navbar = () => {
//   return (
//     <nav className='h-16 bg-purple-700 flex justify-between px-3 text-white items-center'>
//         <div className="logo font-bold text-2xl w-1/3">
//           <Link href="/"> BitLinks  </Link>
//         </div>
//         <ul className='flex gap-4  justify-center items-start '>
//             <Link href="/"><li>Home</li></Link>
//             <Link href="/about"><li>About</li></Link>
//             <Link href="/shorten"><li>Shorted</li></Link>
//             <Link href="/contact"><li>Contact Us</li></Link>
//             <li className='flex gap-3'>
//                 <Link href="/shorten"><button className='bg-purple-500 shadow-lg cursor-pointer rounded-lg p-3 font-bold py-1'>Try Now</button></Link>
//                 <Link href="/github"><button className='bg-purple-500 shadow-lg cursor-pointer rounded-lg p-3 font-bold py-1'>GitHub</button></Link>
//             </li>

//         </ul>
//     </nav>
//   )
// }

// export default Navbar

'use client';
import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';  // ✅ import the auth hook

const Navbar = () => {
  const { currentUser, logout } = useAuth(); // ✅ get currentUser & logout

  return (
    <nav className='h-16 bg-purple-700 flex justify-between px-3 text-white items-center'>
      <div className="logo font-bold text-2xl w-1/3">
        <Link href="/">BitLinks</Link>
      </div>

      <ul className='flex gap-4 justify-center items-center'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/shorten"><li>Shorted</li></Link>
        <Link href="/contact"><li>Contact Us</li></Link>
        <li className='flex gap-3'>
          <Link href="/shorten">
            <button className='bg-purple-500 shadow-lg cursor-pointer rounded-lg p-3 font-bold py-1'>
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className='bg-purple-500 shadow-lg cursor-pointer rounded-lg p-3 font-bold py-1'>
              GitHub
            </button>
          </Link>
        </li>
      </ul>

      {currentUser && (
        <div className="flex items-center gap-4">
          <span>{currentUser.email}</span>
          <button
            onClick={logout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
