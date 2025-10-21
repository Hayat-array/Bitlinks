// // // // 'use client';

// // // // import { useState } from 'react';
// // // // import { useRouter } from 'next/navigation';
// // // // import { useAuth } from '../context/AuthContext';

// // // // export default function LoginSignupForm() {
// // // //   const router = useRouter();
// // // //   const { isLoggedIn, setIsLoggedIn } = useAuth();
// // // //   const [isSignup, setIsSignup] = useState(false);

// // // //   const [loginForm, setLoginForm] = useState({ email: "", password: "" });
// // // //   const [signupForm, setSignupForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });

// // // //   // Toggle functions
// // // //   const handleSignupClick = () => setIsSignup(true);
// // // //   const handleLoginClick = () => setIsSignup(false);
// // // //   const handleSignupLinkClick = (e) => {
// // // //     e.preventDefault();
// // // //     setIsSignup(true);
// // // //   };

// // // //   // Login
// // // //   const handleLoginSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     const res = await fetch("/api/login", {
// // // //       method: "POST",
// // // //       headers: { "Content-Type": "application/json" },
// // // //       body: JSON.stringify(loginForm),
// // // //     });
// // // //     const data = await res.json();

// // // //     if (res.ok) {
// // // //       alert("Login successful!");
// // // //       setIsLoggedIn(true);
// // // //       router.push("/dashboard");
// // // //     } else {
// // // //       alert(data.error);
// // // //     }
// // // //   };

// // // //   // Signup
// // // //   const handleSignupSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     if (signupForm.password !== signupForm.confirmPassword) {
// // // //       alert("Passwords don't match!");
// // // //       return;
// // // //     }

// // // //     const res = await fetch("/api/signup", {
// // // //       method: "POST",
// // // //       headers: { "Content-Type": "application/json" },
// // // //       body: JSON.stringify({
// // // //         name: signupForm.name,
// // // //         email: signupForm.email,
// // // //         password: signupForm.password
// // // //       }),
// // // //     });
// // // //     const data = await res.json();
// // // //     alert(data.message || data.error);
// // // //   };

// // // //   // Hide form if logged in
// // // //   if (isLoggedIn) return null;

// // // //   return (
// // // //     <div className="min-h-screen w-full bg-[#d1bbf3] bg-gradient-to-r flex items-center justify-center font-['Poppins']">
// // // //       <div className="bg-white p-6 rounded-2xl shadow-xl max-w-xs w-full mx-4 overflow-hidden">
// // // //         {/* Title Section */}
// // // //         <div className="flex w-full mb-6 overflow-hidden">
// // // //           <div className={`w-1/2 text-3xl font-semibold text-center transition-all duration-700 ease-in-out transform ${isSignup ? '-translate-x-full' : 'translate-x-0'}`}>
// // // //             Login Form
// // // //           </div>
// // // //           <div className={`w-1/2 text-3xl font-semibold text-center transition-all duration-700 ease-in-out transform ${isSignup ? '-translate-x-full' : 'translate-x-0'}`}>
// // // //             Signup Form
// // // //           </div>
// // // //         </div>

// // // //         {/* Toggle Controls */}
// // // //         <div className="relative flex h-10 w-full border border-gray-300 rounded-2xl mb-5 overflow-hidden">
// // // //           <div className={`absolute h-full w-1/2 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 rounded-2xl transition-all duration-700 ease-in-out transform ${isSignup ? 'translate-x-full' : 'translate-x-0'}`} />
// // // //           <button type="button" onClick={handleLoginClick} className={`relative z-10 w-1/2 h-full text-base font-medium transition-colors duration-300 ${!isSignup ? 'text-white cursor-default select-none' : 'text-black cursor-pointer'}`}>Login</button>
// // // //           <button type="button" onClick={handleSignupClick} className={`relative z-10 w-1/2 h-full text-base font-medium transition-colors duration-300 ${isSignup ? 'text-white cursor-default select-none' : 'text-black cursor-pointer'}`}>Signup</button>
// // // //         </div>

// // // //         {/* Forms */}
// // // //         <div className="w-full overflow-hidden">
// // // //           <div className={`flex w-full transition-all duration-700 ease-in-out transform ${isSignup ? '-translate-x-full' : 'translate-x-0'}`}>
// // // //             {/* Login Form */}
// // // //             <form onSubmit={handleLoginSubmit} className="w-full flex-shrink-0">
// // // //               <input type="email" placeholder="Email Address" required value={loginForm.email} onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
// // // //               <input type="password" placeholder="Password" required value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
// // // //               <button type="submit" className="w-full h-10 bg-purple-700 text-white rounded-xl mt-4">Login</button>
// // // //               <p className="text-center mt-3 text-sm">Not a member? <a href="#" onClick={handleSignupLinkClick} className="text-purple-500">Signup now</a></p>
// // // //             </form>

// // // //             {/* Signup Form */}
// // // //             <form onSubmit={handleSignupSubmit} className="w-full flex-shrink-0 ml-0">
// // // //               <input type="text" placeholder="Name" required value={signupForm.name} onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
// // // //               <input type="email" placeholder="Email Address" required value={signupForm.email} onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
// // // //               <input type="password" placeholder="Password" required value={signupForm.password} onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
// // // //               <input type="password" placeholder="Confirm Password" required value={signupForm.confirmPassword} onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
// // // //               <button type="submit" className="w-full h-10 bg-purple-700 text-white rounded-xl mt-4">Signup</button>
// // // //             </form>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // 'use client';

// // // import { useState } from 'react';
// // // import { useRouter } from 'next/navigation';
// // // import { useAuth } from '../context/AuthContext';

// // // export default function LoginSignupForm() {
// // //   const router = useRouter();
// // //   const { currentUser, login } = useAuth(); // ✅ use currentUser & login
// // //   const [isSignup, setIsSignup] = useState(false);

// // //   const [loginForm, setLoginForm] = useState({ email: "", password: "" });
// // //   const [signupForm, setSignupForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });

// // //   // Toggle functions
// // //   const handleSignupClick = () => setIsSignup(true);
// // //   const handleLoginClick = () => setIsSignup(false);
// // //   const handleSignupLinkClick = (e) => {
// // //     e.preventDefault();
// // //     setIsSignup(true);
// // //   };

// // //   // Login
// // //   const handleLoginSubmit = async (e) => {
// // //     e.preventDefault();
// // //     const res = await fetch("/api/login", {
// // //       method: "POST",
// // //       headers: { "Content-Type": "application/json" },
// // //       body: JSON.stringify(loginForm),
// // //     });
// // //     const data = await res.json();

// // //     if (res.ok) {
// // //       alert("Login successful!");
// // //       login({ email: loginForm.email }); // ✅ use login() instead of setIsLoggedIn
// // //       router.push("/dashboard");
// // //     } else {
// // //       alert(data.error);
// // //     }
// // //   };

// // //   // Signup
// // //   const handleSignupSubmit = async (e) => {
// // //     e.preventDefault();

// // //     if (signupForm.password !== signupForm.confirmPassword) {
// // //       alert("Passwords don't match!");
// // //       return;
// // //     }

// // //     const res = await fetch("/api/signup", {
// // //       method: "POST",
// // //       headers: { "Content-Type": "application/json" },
// // //       body: JSON.stringify({
// // //         name: signupForm.name,
// // //         email: signupForm.email,
// // //         password: signupForm.password
// // //       }),
// // //     });
// // //     const data = await res.json();
// // //     alert(data.message || data.error);
// // //   };

// // //   // Hide form if logged in
// // //   if (currentUser) return null;

// // //   return (
// // //     <div className="min-h-screen w-full bg-[#d1bbf3] bg-gradient-to-r flex items-center justify-center font-['Poppins']">
// // //       <div className="bg-white p-6 rounded-2xl shadow-xl max-w-xs w-full mx-4 overflow-hidden">
// // //         {/* Title Section */}
// // //         <div className="flex w-full mb-6 overflow-hidden">
// // //           <div className={`w-1/2 text-3xl font-semibold text-center transition-all duration-700 ease-in-out transform ${isSignup ? '-translate-x-full' : 'translate-x-0'}`}>
// // //             Login Form
// // //           </div>
// // //           <div className={`w-1/2 text-3xl font-semibold text-center transition-all duration-700 ease-in-out transform ${isSignup ? '-translate-x-full' : 'translate-x-0'}`}>
// // //             Signup Form
// // //           </div>
// // //         </div>

// // //         {/* Toggle Controls */}
// // //         <div className="relative flex h-10 w-full border border-gray-300 rounded-2xl mb-5 overflow-hidden">
// // //           <div className={`absolute h-full w-1/2 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 rounded-2xl transition-all duration-700 ease-in-out transform ${isSignup ? 'translate-x-full' : 'translate-x-0'}`} />
// // //           <button type="button" onClick={handleLoginClick} className={`relative z-10 w-1/2 h-full text-base font-medium transition-colors duration-300 ${!isSignup ? 'text-white cursor-default select-none' : 'text-black cursor-pointer'}`}>Login</button>
// // //           <button type="button" onClick={handleSignupClick} className={`relative z-10 w-1/2 h-full text-base font-medium transition-colors duration-300 ${isSignup ? 'text-white cursor-default select-none' : 'text-black cursor-pointer'}`}>Signup</button>
// // //         </div>

// // //         {/* Forms */}
// // //         <div className="w-full overflow-hidden">
// // //           <div className={`flex w-full transition-all duration-700 ease-in-out transform ${isSignup ? '-translate-x-full' : 'translate-x-0'}`}>
// // //             {/* Login Form */}
// // //             <form onSubmit={handleLoginSubmit} className="w-full flex-shrink-0">
// // //               <input type="email" placeholder="Email Address" required value={loginForm.email} onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
// // //               <input type="password" placeholder="Password" required value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
// // //               <button type="submit" className="w-full h-10 bg-purple-700 text-white rounded-xl mt-4 cursor-pointer ">Login</button>
// // //               <p className="text-center mt-3 text-sm">Not a member? <a href="#" onClick={handleSignupLinkClick} className="text-purple-500 cursor-pointer">Signup now</a></p>
// // //             </form>

// // //             {/* Signup Form */}
// // //             <form onSubmit={handleSignupSubmit} className="w-full flex-shrink-0 ml-0">
// // //               <input type="text" placeholder="Name" required value={signupForm.name} onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
// // //               <input type="email" placeholder="Email Address" required value={signupForm.email} onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
// // //               <input type="password" placeholder="Password" required value={signupForm.password} onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
// // //               <input type="password" placeholder="Confirm Password" required value={signupForm.confirmPassword} onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
// // //               <button type="submit" className="w-full h-10 bg-purple-700 text-white rounded-xl mt-4 cursor-pointer">Signup</button>
// // //             </form>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // 'use client';

// // import { useState } from 'react';
// // import { useRouter } from 'next/navigation';
// // import { useAuth } from '../context/AuthContext';

// // export default function LoginSignupForm() {
// //   const router = useRouter();
// //   const { currentUser, login } = useAuth(); // use AuthContext
// //   const [isSignup, setIsSignup] = useState(false);

// //   const [loginForm, setLoginForm] = useState({ email: "", password: "" });
// //   const [signupForm, setSignupForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });

// //   // Toggle functions
// //   const handleSignupClick = () => setIsSignup(true);
// //   const handleLoginClick = () => setIsSignup(false);
// //   const handleSignupLinkClick = (e) => {
// //     e.preventDefault();
// //     setIsSignup(true);
// //   };

// //   // Login
// //   const handleLoginSubmit = async (e) => {
// //     e.preventDefault();
// //     // Simulate login
// //     login({ email: loginForm.email });
// //     router.push("/dashboard");
// //   };

// //   // Signup
// //   const handleSignupSubmit = async (e) => {
// //     e.preventDefault();

// //     if (signupForm.password !== signupForm.confirmPassword) {
// //       alert("Passwords don't match!");
// //       return;
// //     }

// //     // Simulate signup
// //     login({ email: signupForm.email, name: signupForm.name });
// //     router.push("/dashboard");
// //   };

// //   // Hide the entire form if user exists (logged in)
// //   if (currentUser) return null;

// //   return (
// //     <div className="min-h-screen w-full bg-[#d1bbf3] bg-gradient-to-r flex items-center justify-center font-['Poppins']">
// //       <div className="bg-white p-6 rounded-2xl shadow-xl max-w-xs w-full mx-4 overflow-hidden">
// //         {/* Title Section */}
// //         <div className="flex w-full mb-6 overflow-hidden">
// //           <div className={`w-1/2 text-3xl font-semibold text-center transition-all duration-700 ease-in-out transform ${isSignup ? '-translate-x-full' : 'translate-x-0'}`}>
// //             Login Form
// //           </div>
// //           <div className={`w-1/2 text-3xl font-semibold text-center transition-all duration-700 ease-in-out transform ${isSignup ? '-translate-x-full' : 'translate-x-0'}`}>
// //             Signup Form
// //           </div>
// //         </div>

// //         {/* Toggle Controls */}
// //         <div className="relative flex h-10 w-full border border-gray-300 rounded-2xl mb-5 overflow-hidden">
// //           <div className={`absolute h-full w-1/2 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 rounded-2xl transition-all duration-700 ease-in-out transform ${isSignup ? 'translate-x-full' : 'translate-x-0'}`} />
// //           <button type="button" onClick={handleLoginClick} className={`relative z-10 w-1/2 h-full text-base font-medium transition-colors duration-300 ${!isSignup ? 'text-white cursor-default select-none' : 'text-black cursor-pointer'}`}>Login</button>
// //           <button type="button" onClick={handleSignupClick} className={`relative z-10 w-1/2 h-full text-base font-medium transition-colors duration-300 ${isSignup ? 'text-white cursor-default select-none' : 'text-black cursor-pointer'}`}>Signup</button>
// //         </div>

// //         {/* Forms */}
// //         <div className="w-full overflow-hidden">
// //           <div className={`flex w-full transition-all duration-700 ease-in-out transform ${isSignup ? '-translate-x-full' : 'translate-x-0'}`}>
// //             {/* Login Form */}
// //             <form onSubmit={handleLoginSubmit} className="w-full flex-shrink-0">
// //               <input type="email" placeholder="Email Address" required value={loginForm.email} onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
// //               <input type="password" placeholder="Password" required value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
// //               <button type="submit" className="w-full h-10 bg-purple-700 text-white rounded-xl mt-4 cursor-pointer ">Login</button>
// //               <p className="text-center mt-3 text-sm">Not a member? <a href="#" onClick={handleSignupLinkClick} className="text-purple-500 cursor-pointer">Signup now</a></p>
// //             </form>

// //             {/* Signup Form */}
// //             <form onSubmit={handleSignupSubmit} className="w-full flex-shrink-0 ml-0">
// //               <input type="text" placeholder="Name" required value={signupForm.name} onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
// //               <input type="email" placeholder="Email Address" required value={signupForm.email} onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
// //               <input type="password" placeholder="Password" required value={signupForm.password} onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
// //               <input type="password" placeholder="Confirm Password" required value={signupForm.confirmPassword} onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
// //               <button type="submit" className="w-full h-10 bg-purple-700 text-white rounded-xl mt-4 cursor-pointer">Signup</button>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useAuth } from '../context/AuthContext';

// export default function LoginSignupForm() {
//   const router = useRouter();
//   const { currentUser, login } = useAuth(); // use AuthContext
//   const [isSignup, setIsSignup] = useState(false);

//   const [loginForm, setLoginForm] = useState({ email: "", password: "" });
//   const [signupForm, setSignupForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });

//   // Toggle functions
//   const handleSignupClick = () => setIsSignup(true);
//   const handleLoginClick = () => setIsSignup(false);
//   const handleSignupLinkClick = (e) => {
//     e.preventDefault();
//     setIsSignup(true);
//   };

//   // Login handler
//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const user = users.find(u => u.email === loginForm.email && u.password === loginForm.password);

//     if (user) {
//       alert("Login successful!");
//       login({ email: user.email, name: user.name }); // set user in AuthContext
//       router.push("/dashboard");
//     } else {
//       alert("Invalid email or password");
//     }
//   };

//   // Signup handler
//   const handleSignupSubmit = (e) => {
//     e.preventDefault();

//     if (signupForm.password !== signupForm.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const userExists = users.find(u => u.email === signupForm.email);

//     if (userExists) {
//       alert("User already exists. Please login.");
//       setIsSignup(false);
//       return;
//     }

//     const newUser = {
//       name: signupForm.name,
//       email: signupForm.email,
//       password: signupForm.password
//     };

//     users.push(newUser);
//     localStorage.setItem("users", JSON.stringify(users));
//     alert("Signup successful! Please login now.");

//     // Switch to login form
//     setIsSignup(false);
//     setSignupForm({ name: "", email: "", password: "", confirmPassword: "" });
//   };

//   // Hide form completely if user is logged in
//   if (currentUser) return null;

//   return (
//     <div className="min-h-screen w-full bg-[#d1bbf3] bg-gradient-to-r flex items-center justify-center font-['Poppins']">
//       <div className="bg-white p-6 rounded-2xl shadow-xl max-w-xs w-full mx-4 overflow-hidden">
//         {/* Title */}
//         <div className="flex w-full mb-6 overflow-hidden">
//           <div className={`w-1/2 text-3xl font-semibold text-center transition-all duration-700 ease-in-out transform ${isSignup ? '-translate-x-full' : 'translate-x-0'}`}>
//             Login Form
//           </div>
//           <div className={`w-1/2 text-3xl font-semibold text-center transition-all duration-700 ease-in-out transform ${isSignup ? '-translate-x-full' : 'translate-x-0'}`}>
//             Signup Form
//           </div>
//         </div>

//         {/* Toggle Buttons */}
//         <div className="relative flex h-10 w-full border border-gray-300 rounded-2xl mb-5 overflow-hidden">
//           <div className={`absolute h-full w-1/2 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 rounded-2xl transition-all duration-700 ease-in-out transform ${isSignup ? 'translate-x-full' : 'translate-x-0'}`} />
//           <button type="button" onClick={handleLoginClick} className={`relative z-10 w-1/2 h-full text-base font-medium transition-colors duration-300 ${!isSignup ? 'text-white cursor-default select-none' : 'text-black cursor-pointer'}`}>Login</button>
//           <button type="button" onClick={handleSignupClick} className={`relative z-10 w-1/2 h-full text-base font-medium transition-colors duration-300 ${isSignup ? 'text-white cursor-default select-none' : 'text-black cursor-pointer'}`}>Signup</button>
//         </div>

//         {/* Forms */}
//         <div className="w-full overflow-hidden">
//           <div className={`flex w-full transition-all duration-700 ease-in-out transform ${isSignup ? '-translate-x-full' : 'translate-x-0'}`}>
//             {/* Login Form */}
//             <form onSubmit={handleLoginSubmit} className="w-full flex-shrink-0">
//               <input type="email" placeholder="Email Address" required value={loginForm.email} onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
//               <input type="password" placeholder="Password" required value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
//               <button type="submit" className="w-full h-10 bg-purple-700 text-white rounded-xl mt-4 cursor-pointer ">Login</button>
//               <p className="text-center mt-3 text-sm">Not a member? <a href="#" onClick={handleSignupLinkClick} className="text-purple-500 cursor-pointer">Signup now</a></p>
//             </form>

//             {/* Signup Form */}
//             <form onSubmit={handleSignupSubmit} className="w-full flex-shrink-0 ml-0">
//               <input type="text" placeholder="Name" required value={signupForm.name} onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
//               <input type="email" placeholder="Email Address" required value={signupForm.email} onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
//               <input type="password" placeholder="Password" required value={signupForm.password} onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
//               <input type="password" placeholder="Confirm Password" required value={signupForm.confirmPassword} onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
//               <button type="submit" className="w-full h-10 bg-purple-700 text-white rounded-xl mt-4 cursor-pointer">Signup</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

export default function LoginSignupForm() {
  const router = useRouter();
  const { currentUser, login } = useAuth(); // AuthContext
  const [isSignup, setIsSignup] = useState(false);

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });

  // Toggle functions
  const handleSignupClick = () => setIsSignup(true);
  const handleLoginClick = () => setIsSignup(false);
  const handleSignupLinkClick = (e) => {
    e.preventDefault();
    setIsSignup(true);
  };

  // Login handler
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginForm),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login successful!");
        login({ email: data.email, name: data.name }); // set user in AuthContext
        router.push("/dashboard");
      } else {
        alert(data.error);
      }
    } catch (err) {
      alert("Server error. Please try again.");
    }
  };

  // Signup handler
  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    if (signupForm.password !== signupForm.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: signupForm.name,
          email: signupForm.email,
          password: signupForm.password
        }),
      });

      const data = await res.json();
      alert(data.message || data.error);

      if (res.ok) {
        setIsSignup(false); // switch to login form
        setSignupForm({ name: "", email: "", password: "", confirmPassword: "" });
      }
    } catch (err) {
      alert("Server error. Please try again.");
    }
  };

  // Hide form completely if user is logged in
  if (currentUser) return null;

  return (
    <div className="min-h-screen w-full bg-[#d1bbf3] bg-gradient-to-r flex items-center justify-center font-['Poppins']">
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-xs w-full mx-4 overflow-hidden">
        {/* Title */}
        <div className="flex w-full mb-6 overflow-hidden">
          <div className={`w-1/2 text-3xl font-semibold text-center transition-all duration-700 ease-in-out transform ${isSignup ? '-translate-x-full' : 'translate-x-0'}`}>
            Login Form
          </div>
          <div className={`w-1/2 text-3xl font-semibold text-center transition-all duration-700 ease-in-out transform ${isSignup ? '-translate-x-full' : 'translate-x-0'}`}>
            Signup Form
          </div>
        </div>

        {/* Toggle Buttons */}
        <div className="relative flex h-10 w-full border border-gray-300 rounded-2xl mb-5 overflow-hidden">
          <div className={`absolute h-full w-1/2 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 rounded-2xl transition-all duration-700 ease-in-out transform ${isSignup ? 'translate-x-full' : 'translate-x-0'}`} />
          <button type="button" onClick={handleLoginClick} className={`relative z-10 w-1/2 h-full text-base font-medium transition-colors duration-300 ${!isSignup ? 'text-white cursor-default select-none' : 'text-black cursor-pointer'}`}>Login</button>
          <button type="button" onClick={handleSignupClick} className={`relative z-10 w-1/2 h-full text-base font-medium transition-colors duration-300 ${isSignup ? 'text-white cursor-default select-none' : 'text-black cursor-pointer'}`}>Signup</button>
        </div>

        {/* Forms */}
        <div className="w-full overflow-hidden">
          <div className={`flex w-full transition-all duration-700 ease-in-out transform ${isSignup ? '-translate-x-full' : 'translate-x-0'}`}>
            {/* Login Form */}
            <form onSubmit={handleLoginSubmit} className="w-full flex-shrink-0">
              <input type="email" placeholder="Email Address" required value={loginForm.email} onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
              <input type="password" placeholder="Password" required value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
              <button type="submit" className="w-full h-10 bg-purple-700 text-white rounded-xl mt-4 cursor-pointer ">Login</button>
              <p className="text-center mt-3 text-sm">Not a member? <a href="#" onClick={handleSignupLinkClick} className="text-purple-500 cursor-pointer">Signup now</a></p>
            </form>

            {/* Signup Form */}
            <form onSubmit={handleSignupSubmit} className="w-full flex-shrink-0 ml-0">
              <input type="text" placeholder="Name" required value={signupForm.name} onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
              <input type="email" placeholder="Email Address" required value={signupForm.email} onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
              <input type="password" placeholder="Password" required value={signupForm.password} onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
              <input type="password" placeholder="Confirm Password" required value={signupForm.confirmPassword} onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
              <button type="submit" className="w-full h-10 bg-purple-700 text-white rounded-xl mt-4 cursor-pointer">Signup</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
