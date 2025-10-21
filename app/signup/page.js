// // 'use client';

// // import { useState } from 'react';
// // import { useRouter } from 'next/navigation';

// // export default function LoginSignupForm() {
// //   const router = useRouter();
// //   const [isSignup, setIsSignup] = useState(false);
// //   const [showForgotPassword, setShowForgotPassword] = useState(false);
  
// //   // Login form state
// //   const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  
// //   // Signup form state
// //   const [signupForm, setSignupForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  
// //   // Forgot password form state
// //   const [forgotPasswordForm, setForgotPasswordForm] = useState({ email: "" });

// //   const handleSignupClick = () => {
// //     setIsSignup(true);
// //     setShowForgotPassword(false);
// //   };

// //   const handleLoginClick = () => {
// //     setIsSignup(false);
// //     setShowForgotPassword(false);
// //   };

// //   const handleSignupLinkClick = (e) => {
// //     e.preventDefault();
// //     setIsSignup(true);
// //     setShowForgotPassword(false);
// //   };

// //   const handleForgotPasswordClick = (e) => {
// //     e.preventDefault();
// //     setShowForgotPassword(true);
// //   };

// //   const handleBackToLogin = (e) => {
// //     e.preventDefault();
// //     setShowForgotPassword(false);
// //   };

// //   const handleLoginSubmit = async (e) => {
// //     e.preventDefault();
// //     const res = await fetch("/api/login", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify(loginForm),
// //     });
// //     const data = await res.json();

// //     if (res.ok) {
// //       alert("Login successful!");
// //       router.push("/dashboard"); // redirect after login
// //     } else {
// //       alert(data.error);
// //     }
// //   };

// //   const handleSignupSubmit = async (e) => {
// //     e.preventDefault();
    
// //     // Check if passwords match
// //     if (signupForm.password !== signupForm.confirmPassword) {
// //       alert("Passwords don't match!");
// //       return;
// //     }

// //     const res = await fetch("/api/signup", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({
// //         name: signupForm.name,
// //         email: signupForm.email,
// //         password: signupForm.password
// //       }),
// //     });
// //     const data = await res.json();
    
// //     if (res.ok) {
// //       alert("Signup successful! Please login with your credentials.");
// //       // Clear signup form
// //       setSignupForm({ name: "", email: "", password: "", confirmPassword: "" });
// //       // Switch to login form automatically
// //       setIsSignup(false);
// //     } else {
// //       alert(data.error);
// //     }
// //   };

// //   const handleForgotPasswordSubmit = async (e) => {
// //     e.preventDefault();
    
// //     const res = await fetch("/api/forgot-password", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ email: forgotPasswordForm.email }),
// //     });
// //     const data = await res.json();
    
// //     if (res.ok) {
// //       alert("Password reset link sent to your email!");
// //       setForgotPasswordForm({ email: "" });
// //       setShowForgotPassword(false);
// //     } else {
// //       alert(data.error || "Failed to send reset email");
// //     }
// //   };

// //   // Show forgot password form
// //   if (showForgotPassword) {
// //     return (
// //       <div className="min-h-screen w-full bg-[#d1bbf3] bg-gradient-to-r flex items-center justify-center font-['Poppins']">
// //         <div className="bg-white p-6 rounded-2xl shadow-xl max-w-xs w-full mx-4">
// //           {/* Title */}
// //           <div className="text-3xl font-semibold text-center mb-6">
// //             Reset Password
// //           </div>

// //           <form onSubmit={handleForgotPasswordSubmit}>
// //             <div className="mb-4">
// //               <input
// //                 type="email"
// //                 placeholder="Enter your email address"
// //                 required
// //                 value={forgotPasswordForm.email}
// //                 onChange={(e) => setForgotPasswordForm({ email: e.target.value })}
// //                 className="w-full h-10 px-3 rounded-xl border border-gray-300 border-b-2 text-base outline-none transition-all duration-300 focus:border-purple-500 focus:placeholder-purple-500 placeholder-gray-400"
// //               />
// //             </div>
            
// //             <div className="relative h-10 w-full rounded-xl overflow-hidden group mb-4">
// //               <div className="absolute h-full w-[300%] -left-full bg-gradient-to-l from-purple-900 via-purple-700 to-purple-500 rounded-xl transition-all duration-400 ease-in-out group-hover:left-0" />
// //               <button
// //                 type="submit"
// //                 className="relative z-10 h-full w-full bg-transparent border-none text-white text-lg font-medium cursor-pointer rounded-xl"
// //               >
// //                 Send Reset Link
// //               </button>
// //             </div>
            
// //             <div className="text-center">
// //               <a 
// //                 href="#" 
// //                 onClick={handleBackToLogin}
// //                 className="text-purple-500 hover:underline text-sm"
// //               >
// //                 Back to Login
// //               </a>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen w-full bg-[#d1bbf3] bg-gradient-to-r flex items-center justify-center font-['Poppins']">
// //       <div className="bg-white p-6 rounded-2xl shadow-xl max-w-xs w-full mx-4 overflow-hidden">
// //         {/* Title Section */}
// //         <div className="flex w-full mb-6 overflow-hidden">
// //           <div 
// //             className={`w-1/2 text-3xl font-semibold text-center transition-all duration-700 ease-in-out transform ${
// //               isSignup ? '-translate-x-full' : 'translate-x-0'
// //             }`}
// //           >
// //             Login Form
// //           </div>
// //           <div 
// //             className={`w-1/2 text-3xl font-semibold text-center transition-all duration-700 ease-in-out transform ${
// //               isSignup ? '-translate-x-full' : 'translate-x-0'
// //             }`}
// //           >
// //             Signup Form
// //           </div>
// //         </div>

// //         {/* Toggle Controls */}
// //         <div className="relative flex h-10 w-full border border-gray-300 rounded-2xl mb-5 overflow-hidden">
// //           {/* Sliding Background */}
// //           <div 
// //             className={`absolute h-full w-1/2 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 rounded-2xl transition-all duration-700 ease-in-out transform ${
// //               isSignup ? 'translate-x-full' : 'translate-x-0'
// //             }`}
// //           />
          
// //           {/* Login Button */}
// //           <button
// //             type="button"
// //             onClick={handleLoginClick}
// //             className={`relative z-10 w-1/2 h-full text-base font-medium transition-colors duration-300 ${
// //               !isSignup ? 'text-white cursor-default select-none' : 'text-black cursor-pointer'
// //             }`}
// //           >
// //             Login
// //           </button>
          
// //           {/* Signup Button */}
// //           <button
// //             type="button"
// //             onClick={handleSignupClick}
// //             className={`relative z-10 w-1/2 h-full text-base font-medium transition-colors duration-300 ${
// //               isSignup ? 'text-white cursor-default select-none' : 'text-black cursor-pointer'
// //             }`}
// //           >
// //             Signup
// //           </button>
// //         </div>

// //         {/* Forms Container */}
// //         <div className="w-full overflow-hidden">
// //           <div 
// //             className={`flex w-full transition-all duration-700 ease-in-out transform ${
// //               isSignup ? '-translate-x-2/2' : 'translate-x-0'
// //             }`}
// //           >
// //             {/* Login Form */}
// //             <form onSubmit={handleLoginSubmit} className="w-full flex-shrink-0">
// //               <div className="mb-4">
// //                 <input
// //                   type="email"
// //                   placeholder="Email Address"
// //                   required
// //                   value={loginForm.email}
// //                   onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
// //                   className="w-full h-10 px-3 rounded-xl border border-gray-300 border-b-2 text-base outline-none transition-all duration-300 focus:border-purple-500 focus:placeholder-purple-500 placeholder-gray-400"
// //                 />
// //               </div>
              
// //               <div className="mb-2">
// //                 <input
// //                   type="password"
// //                   placeholder="Password"
// //                   required
// //                   value={loginForm.password}
// //                   onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
// //                   className="w-full h-10 px-3 rounded-xl border border-gray-300 border-b-2 text-base outline-none transition-all duration-300 focus:border-purple-500 focus:placeholder-purple-500 placeholder-gray-400"
// //                 />
// //               </div>
              
// //               <div className="mb-4">
// //                 <a 
// //                   href="#" 
// //                   onClick={handleForgotPasswordClick}
// //                   className="text-purple-500 text-xs hover:underline"
// //                 >
// //                   Forgot password?
// //                 </a>
// //               </div>
              
// //               <div className="relative h-10 w-full rounded-xl overflow-hidden group mb-6">
// //                 <div className="absolute h-full w-[300%] -left-full bg-gradient-to-l from-purple-900 via-purple-700 to-purple-500 rounded-xl transition-all duration-400 ease-in-out group-hover:left-0" />
// //                 <button
// //                   type="submit"
// //                   className="relative z-10 h-full w-full bg-transparent border-none text-white text-lg font-medium cursor-pointer rounded-xl"
// //                 >
// //                   Login
// //                 </button>
// //               </div>
              
// //               <div className="text-center">
// //                 <span className="text-gray-700 text-sm">Not a member? </span>
// //                 <a 
// //                   href="#" 
// //                   onClick={handleSignupLinkClick}
// //                   className="text-purple-500 hover:underline text-sm"
// //                 >
// //                   Signup now
// //                 </a>
// //               </div>
// //             </form>

// //             {/* Signup Form */}
// //             <form onSubmit={handleSignupSubmit} className="w-full flex-shrink-0 ml-0">
// //               <div className="mb-4">
// //                 <input
// //                   type="text"
// //                   placeholder="Name"
// //                   required
// //                   value={signupForm.name}
// //                   onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
// //                   className="w-full h-10 px-3 rounded-xl border border-gray-300 border-b-2 text-base outline-none transition-all duration-300 focus:border-purple-500 focus:placeholder-purple-500 placeholder-gray-400"
// //                 />
// //               </div>

// //               <div className="mb-4">
// //                 <input
// //                   type="email"
// //                   placeholder="Email Address"
// //                   required
// //                   value={signupForm.email}
// //                   onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
// //                   className="w-full h-10 px-3 rounded-xl border border-gray-300 border-b-2 text-base outline-none transition-all duration-300 focus:border-purple-500 focus:placeholder-purple-500 placeholder-gray-400"
// //                 />
// //               </div>
              
// //               <div className="mb-4">
// //                 <input
// //                   type="password"
// //                   placeholder="Password"
// //                   required
// //                   value={signupForm.password}
// //                   onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
// //                   className="w-full h-10 px-3 rounded-xl border border-gray-300 border-b-2 text-base outline-none transition-all duration-300 focus:border-purple-500 focus:placeholder-purple-500 placeholder-gray-400"
// //                 />
// //               </div>
              
// //               <div className="mb-4">
// //                 <input
// //                   type="password"
// //                   placeholder="Confirm password"
// //                   required
// //                   value={signupForm.confirmPassword}
// //                   onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
// //                   className="w-full h-10 px-3 rounded-xl border border-gray-300 border-b-2 text-base outline-none transition-all duration-300 focus:border-purple-500 focus:placeholder-purple-500 placeholder-gray-400"
// //                 />
// //               </div>
              
// //               <div className="relative h-10 w-full rounded-xl overflow-hidden group">
// //                 <div className="absolute h-full w-[300%] -left-full bg-gradient-to-l from-purple-900 via-purple-700 to-purple-500 rounded-xl transition-all duration-400 ease-in-out group-hover:left-0" />
// //                 <button
// //                   type="submit"
// //                   className="relative z-10 h-full w-full bg-transparent border-none text-white text-lg font-medium cursor-pointer rounded-xl"
// //                 >
// //                   Signup
// //                 </button>
// //               </div>
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
//   const { isLoggedIn, setIsLoggedIn } = useAuth();
//   const [isSignup, setIsSignup] = useState(false);

//   const [loginForm, setLoginForm] = useState({ email: "", password: "" });
//   const [signupForm, setSignupForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch("/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(loginForm),
//     });
//     const data = await res.json();

//     if (res.ok) {
//       alert("Login successful!");
//       setIsLoggedIn(true);   // ✅ set login state
//       router.push("/dashboard");
//     } else {
//       alert(data.error);
//     }


//   const router = useRouter();
//   const [isSignup, setIsSignup] = useState(false);
  
//   // Login form state
//   const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  
//   // Signup form state
//   const [signupForm, setSignupForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });

//   const handleSignupClick = () => {
//     setIsSignup(true);
//   };

//   const handleLoginClick = () => {
//     setIsSignup(false);
//   };

//   const handleSignupLinkClick = (e) => {
//     e.preventDefault();
//     setIsSignup(true);
//   };

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch("/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(loginForm),
//     });
//     const data = await res.json();

//     if (res.ok) {
//       alert("Login successful!");
//       router.push("/dashboard"); // redirect after login
//     } else {
//       alert(data.error);
//     }
//   };

//   const handleSignupSubmit = async (e) => {
//     e.preventDefault();
    
//     // Check if passwords match
//     if (signupForm.password !== signupForm.confirmPassword) {
//       alert("Passwords don't match!");
//       return;
//     }

//     const res = await fetch("/api/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: signupForm.name,
//         email: signupForm.email,
//         password: signupForm.password
//       }),
//     });
//     const data = await res.json();
//     alert(data.message || data.error);
//   };
//   if (isLoggedIn) {
//     return false; // you could also return <p>You are logged in</p>
//   }
// }

//   return (
//     <div className="min-h-screen w-full bg-[#d1bbf3] bg-gradient-to-r  flex items-center justify-center font-['Poppins']">
//       <div className="bg-white p-6 rounded-2xl shadow-xl max-w-xs w-full mx-4 overflow-hidden">
//         {/* Title Section */}
//         <div className="flex w-full mb-6 overflow-hidden">
//           <div 
//             className={`w-1/2 text-3xl font-semibold text-center transition-all duration-700 ease-in-out transform ${
//               isSignup ? '-translate-x-full' : 'translate-x-0'
//             }`}
//           >
//             Login Form
//           </div>
//           <div 
//             className={`w-1/2 text-3xl font-semibold text-center transition-all duration-700 ease-in-out transform ${
//               isSignup ? '-translate-x-full' : 'translate-x-0'
//             }`}
//           >
//             Signup Form
//           </div>
//         </div>

//         {/* Toggle Controls */}
//         <div className="relative flex h-10 w-full border border-gray-300 rounded-2xl mb-5 overflow-hidden">
//           {/* Sliding Background */}
//           <div 
//             className={`absolute h-full w-1/2 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 rounded-2xl transition-all duration-700 ease-in-out transform ${
//               isSignup ? 'translate-x-full' : 'translate-x-0'
//             }`}
//           />
          
//           {/* Login Button */}
//           <button
//             type="button"
//             onClick={handleLoginClick}
//             className={`relative z-10 w-1/2 h-full text-base font-medium transition-colors duration-300 ${
//               !isSignup ? 'text-white cursor-default select-none' : 'text-black cursor-pointer'
//             }`}
//           >
//             Login
//           </button>
          
//           {/* Signup Button */}
//           <button
//             type="button"
//             onClick={handleSignupClick}
//             className={`relative z-10 w-1/2 h-full text-base font-medium transition-colors duration-300 ${
//               isSignup ? 'text-white cursor-default select-none' : 'text-black cursor-pointer'
//             }`}
//           >
//             Signup
//           </button>
//         </div>

//         {/* Forms Container */}
//         <div className="w-full overflow-hidden">
//           <div 
//             className={`flex w-full transition-all duration-700 ease-in-out transform ${
//               isSignup ? '-translate-x-2/2' : 'translate-x-0'
//             }`}
//           >
//             {/* Login Form */}
//             <form onSubmit={handleLoginSubmit} className="w-full flex-shrink-0">
//               <div className="mb-4">
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   required
//                   value={loginForm.email}
//                   onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
//                   className="w-full h-10 px-3 rounded-xl border border-gray-300 border-b-2 text-base outline-none transition-all duration-300 focus:border-purple-500 focus:placeholder-purple-500 placeholder-gray-400"
//                 />
//               </div>
              
//               <div className="mb-2">
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   required
//                   value={loginForm.password}
//                   onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
//                   className="w-full h-10 px-3 rounded-xl border border-gray-300 border-b-2 text-base outline-none transition-all duration-300 focus:border-purple-500 focus:placeholder-purple-500 placeholder-gray-400"
//                 />
//               </div>
              
//               <div className="mb-4">
//                 <a href="#" className="text-purple-500 text-xs hover:underline">
//                   Forgot password?
//                 </a>
//               </div>
              
//               <div className="relative h-10 w-full rounded-xl overflow-hidden group mb-6">
//                 <div className="absolute h-full w-[300%] -left-full bg-gradient-to-l from-purple-900 via-purple-700 to-purple-500 rounded-xl transition-all duration-400 ease-in-out group-hover:left-0" />
//                 <button
//                   type="submit"
//                   className="relative z-10 h-full w-full bg-transparent border-none text-white text-lg font-medium cursor-pointer rounded-xl"
//                 >
//                   Login
//                 </button>
//               </div>
              
//               <div className="text-center">
//                 <span className="text-gray-700 text-sm">Not a member? </span>
//                 <a 
//                   href="#" 
//                   onClick={handleSignupLinkClick}
//                   className="text-purple-500 hover:underline text-sm"
//                 >
//                   Signup now
//                 </a>
//               </div>
//             </form>

//             {/* Signup Form */}
//             <form onSubmit={handleSignupSubmit} className="w-full flex-shrink-0 ml-0">
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   required
//                   value={signupForm.name}
//                   onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
//                   className="w-full h-10 px-3 rounded-xl border border-gray-300 border-b-2 text-base outline-none transition-all duration-300 focus:border-purple-500 focus:placeholder-purple-500 placeholder-gray-400"
//                 />
//               </div>

//               <div className="mb-4">
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   required
//                   value={signupForm.email}
//                   onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
//                   className="w-full h-10 px-3 rounded-xl border border-gray-300 border-b-2 text-base outline-none transition-all duration-300 focus:border-purple-500 focus:placeholder-purple-500 placeholder-gray-400"
//                 />
//               </div>
              
//               <div className="mb-4">
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   required
//                   value={signupForm.password}
//                   onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
//                   className="w-full h-10 px-3 rounded-xl border border-gray-300 border-b-2 text-base outline-none transition-all duration-300 focus:border-purple-500 focus:placeholder-purple-500 placeholder-gray-400"
//                 />
//               </div>
              
//               <div className="mb-4">
//                 <input
//                   type="password"
//                   placeholder="Confirm password"
//                   required
//                   value={signupForm.confirmPassword}
//                   onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
//                   className="w-full h-10 px-3 rounded-xl border border-gray-300 border-b-2 text-base outline-none transition-all duration-300 focus:border-purple-500 focus:placeholder-purple-500 placeholder-gray-400"
//                 />
//               </div>
              
//               <div className="relative h-10 w-full rounded-xl overflow-hidden group">
//                 <div className="absolute h-full w-[300%] -left-full bg-gradient-to-l from-purple-900 via-purple-700 to-purple-500 rounded-xl transition-all duration-400 ease-in-out group-hover:left-0" />
//                 <button
//                   type="submit"
//                   className="relative z-10 h-full w-full bg-transparent border-none text-white text-lg font-medium cursor-pointer rounded-xl"
//                 >
//                   Signup
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // "use client";
// // import { useState } from "react";

// // export default function SignupPage() {
// //   const [form, setForm] = useState({ name: "", email: "", password: "" });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const res = await fetch("/api/signup", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify(form),
// //     });
// //     const data = await res.json();
// //     alert(data.message || data.error);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="p-4">
// //       <input
// //         placeholder="Name"
// //         value={form.name}
// //         onChange={(e) => setForm({ ...form, name: e.target.value })}
// //       />
// //       <input
// //         placeholder="Email"
// //         type="email"
// //         value={form.email}
// //         onChange={(e) => setForm({ ...form, email: e.target.value })}
// //       />
// //       <input
// //         placeholder="Password"
// //         type="password"
// //         value={form.password}
// //         onChange={(e) => setForm({ ...form, password: e.target.value })}
// //       />
// //       <button type="submit">Signup</button>
// //     </form>
// //   );
// // }


// // "use client";
// // import { useState } from "react";
// // import { useRouter } from "next/navigation";

// // export default function SignupPage() {
// //   const [form, setForm] = useState({ name: "", email: "", password: "" });
// //   const router = useRouter();

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // ✅ get old users
// //     let users = JSON.parse(localStorage.getItem("users")) || [];

// //     // check if email already exists
// //     if (users.some((u) => u.email === form.email)) {
// //       alert("User already exists!");
// //       return;
// //     }

// //     // ✅ add new user
// //     users.push(form);

// //     // ✅ save back to localStorage
// //     localStorage.setItem("users", JSON.stringify(users));

// //     alert("Signup successful! Please login.");
// //     router.push("/login"); // redirect to login page
// //   };

// //   return (
// //     <div className="flex justify-center items-center min-h-screen">
// //       <form onSubmit={handleSubmit} className="p-6 border rounded-lg shadow-md w-80">
// //         <h2 className="text-xl mb-4">Signup</h2>
// //         <input
// //           type="text"
// //           name="name"
// //           placeholder="Name"
// //           value={form.name}
// //           onChange={handleChange}
// //           className="border p-2 w-full mb-2"
// //           required
// //         />
// //         <input
// //           type="email"
// //           name="email"
// //           placeholder="Email"
// //           value={form.email}
// //           onChange={handleChange}
// //           className="border p-2 w-full mb-2"
// //           required
// //         />
// //         <input
// //           type="password"
// //           name="password"
// //           placeholder="Password"
// //           value={form.password}
// //           onChange={handleChange}
// //           className="border p-2 w-full mb-4"
// //           required
// //         />
// //         <button type="submit" className="bg-blue-500 text-white px-4 py-2 w-full rounded">
// //           Signup
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }


// // "use client";
// // import { useState } from "react";

// // export default function SignupPage() {
// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //   });

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // Get existing users from localStorage (or empty array if none)
// //     const users = JSON.parse(localStorage.getItem("users")) || [];

// //     // Check if email already exists
// //     const userExists = users.find((user) => user.email === form.email);
// //     if (userExists) {
// //       alert("User already exists with this email!");
// //       return;
// //     }

// //     // Add new user
// //     const newUser = { ...form, id: Date.now() }; // simple unique id
// //     users.push(newUser);

// //     // Save back to localStorage
// //     localStorage.setItem("users", JSON.stringify(users));

// //     alert("Account created successfully!");
// //     setForm({ name: "", email: "", password: "" }); // reset form
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-purple-200 bg-cover bg-center">
// //       <div className="bg-white/80 shadow-lg rounded-2xl p-8 w-96">
// //         <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <input
// //             type="text"
// //             name="name"
// //             placeholder="Full Name"
// //             value={form.name}
// //             onChange={handleChange}
// //             className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             required
// //           />
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Email"
// //             value={form.email}
// //             onChange={handleChange}
// //             className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             required
// //           />
// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="Password"
// //             value={form.password}
// //             onChange={handleChange}
// //             className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             required
// //           />
// //           <button
// //             type="submit"
// //             className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
// //           >
// //             Create Account
// //           </button>
// //         </form>
// //         <p className="text-center text-sm mt-4">
// //           Already have an account?{" "}
// //           <a href="/login" className="text-blue-600 hover:underline">
// //             Login
// //           </a>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }


// // "use client";
// // import { useState } from "react";

// // export default function SignupPage() {
// //   const [form, setForm] = useState({ name: "", email: "", password: "" });
// //   const [message, setMessage] = useState("");

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await fetch("/api/signup", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(form),
// //       });

// //       const data = await res.json();
// //       if (res.ok) {
// //         setMessage("✅ Account created successfully!");
// //         setForm({ name: "", email: "", password: "" });
// //       } else {
// //         setMessage("❌ " + data.error);
// //       }
// //     } catch (err) {
// //       setMessage("❌ Something went wrong");
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-purple-200 bg-cover bg-center">
// //       <div className="bg-white/80 shadow-lg rounded-2xl p-8 w-96">
// //         <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <input
// //             type="text"
// //             name="name"
// //             placeholder="Full Name"
// //             value={form.name}
// //             onChange={handleChange}
// //             className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             required
// //           />
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Email"
// //             value={form.email}
// //             onChange={handleChange}
// //             className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             required
// //           />
// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="Password"
// //             value={form.password}
// //             onChange={handleChange}
// //             className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             required
// //           />
// //           <button
// //             type="submit"
// //             className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
// //           >
// //             Create Account
// //           </button>
// //         </form>
// //         {message && (
// //           <p className="text-center text-sm mt-4 font-semibold">{message}</p>
// //         )}
// //         <p className="text-center text-sm mt-4">
// //           Already have an account?{" "}
// //           <a href="/login" className="text-blue-600 hover:underline">
// //             Login
// //           </a>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function LoginSignupForm() {
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
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

  // Login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginForm),
    });
    const data = await res.json();

    if (res.ok) {
      alert("Login successful!");
      setIsLoggedIn(true);
      router.push("/dashboard");
    } else {
      alert(data.error);
    }
  };

  // Signup
  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    if (signupForm.password !== signupForm.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

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
  };

  // Hide form if logged in
  if (isLoggedIn) return null;

  return (
    <div className="min-h-screen w-full bg-[#d1bbf3] bg-gradient-to-r flex items-center justify-center font-['Poppins']">
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-xs w-full mx-4 overflow-hidden">
        {/* Title Section */}
        <div className="flex w-full mb-6 overflow-hidden">
          <div className={`w-1/2 text-3xl font-semibold text-center transition-all duration-700 ease-in-out transform ${isSignup ? '-translate-x-full' : 'translate-x-0'}`}>
            Login Form
          </div>
          <div className={`w-1/2 text-3xl font-semibold text-center transition-all duration-700 ease-in-out transform ${isSignup ? '-translate-x-full' : 'translate-x-0'}`}>
            Signup Form
          </div>
        </div>

        {/* Toggle Controls */}
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
              <button type="submit" className="w-full h-10 bg-purple-700 text-white rounded-xl mt-4">Login</button>
              <p className="text-center mt-3 text-sm">Not a member? <a href="#" onClick={handleSignupLinkClick} className="text-purple-500">Signup now</a></p>
            </form>

            {/* Signup Form */}
            <form onSubmit={handleSignupSubmit} className="w-full flex-shrink-0 ml-0">
              <input type="text" placeholder="Name" required value={signupForm.name} onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
              <input type="email" placeholder="Email Address" required value={signupForm.email} onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
              <input type="password" placeholder="Password" required value={signupForm.password} onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
              <input type="password" placeholder="Confirm Password" required value={signupForm.confirmPassword} onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })} className="w-full h-10 px-3 mb-2 rounded-xl border border-gray-300 border-b-2 text-base outline-none focus:border-purple-500 placeholder-gray-400" />
              <button type="submit" className="w-full h-10 bg-purple-700 text-white rounded-xl mt-4">Signup</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
