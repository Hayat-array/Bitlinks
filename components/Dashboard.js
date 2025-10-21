// // 'use client';

// // import { useEffect, useState } from 'react';
// // import { useAuth } from '../contexts/AuthContext';
// // import { useRouter } from 'next/navigation';

// // export default function Dashboard() {
// //   const { user, logout } = useAuth();
// //   const router = useRouter();
// //   const [showLogoutModal, setShowLogoutModal] = useState(false);

// //   useEffect(() => {
// //     if (!user) {
// //       router.push('/login');
// //     }
// //   }, [user, router]);

// //   const handleLogoutClick = () => {
// //     setShowLogoutModal(true);
// //   };

// //   const handleConfirmLogout = () => {
// //     logout();
// //     setShowLogoutModal(false);
// //   };

// //   const handleCancelLogout = () => {
// //     setShowLogoutModal(false);
// //   };

// //   if (!user) return null;

// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       {/* Header */}
// //       <header className="bg-white shadow-sm">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex justify-between items-center py-4">
// //             <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
// //             <div className="flex items-center space-x-4">
// //               <span className="text-gray-700">Welcome, {user.name || user.email}!</span>
// //               <button
// //                 onClick={handleLogoutClick}
// //                 className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
// //               >
// //                 Logout
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Main Content */}
// //       <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
// //         <div className="bg-white rounded-lg shadow p-6">
// //           <h2 className="text-xl font-semibold mb-4">Your Dashboard</h2>
// //           <p className="text-gray-600">This is your protected dashboard area.</p>
// //         </div>
// //       </main>

// //       {/* Logout Confirmation Modal */}
// //       {showLogoutModal && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// //           <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full mx-4">
// //             <h3 className="text-xl font-semibold text-center mb-4">Confirm Logout</h3>
// //             <p className="text-gray-600 text-center mb-6">
// //               Are you sure you want to logout?
// //             </p>
// //             <div className="flex space-x-3">
// //               <button
// //                 onClick={handleCancelLogout}
// //                 className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg transition-colors duration-200"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleConfirmLogout}
// //                 className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors duration-200"
// //               >
// //                 Logout
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function DashboardPage() {
//   const router = useRouter();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (!storedUser) router.push("/login");
//     else setUser(JSON.parse(storedUser));
//   }, [router]);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     router.push("/login");
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl">Dashboard</h1>
//       {user && <p>Welcome, {user.name}</p>}
//       <button
//         onClick={handleLogout}
//         className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }
"use client";
import { useAuth } from "../contexts/AuthContext";

export default function DashboardPage() {
  const { user, logout } = useAuth();

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Welcome, {user.name} 👋</h1>
      <p>Email: {user.email}</p>
      <button
        onClick={logout}
        className="bg-red-600 text-white px-4 py-2 rounded mt-4"
      >
        Logout
      </button>
    </div>
  );
}

