// // 'use client';

// // import { useAuth } from "@/context/AuthContext";
// // import Navbar from "@/components/Navbar";
// // import LoginSignupForm from "@/components/LoginSignupForm";

// // export default function ConditionalWrapper({ children }) {
// //   const { isLoggedIn } = useAuth();

// //   if (!isLoggedIn) return <LoginSignupForm />;

// //   return (
// //     <>
// //       <Navbar />
// //       {children}
// //     </>
// //   );
// // }
// // 'use client';

// // import { useAuth } from '@/context/AuthContext';
// // import Navbar from './Navbar';
// // import LoginSignupForm from './LoginSignupForm';

// // export default function ConditionalLayout({ children }) {
// //   const { isLoggedIn } = useAuth(); // ✅ top-level hook

// //   return (
// //     <>
// //       {isLoggedIn ? (
// //         <>
// //           <Navbar />
// //           {children}
// //         </>
// //       ) : (
// //         <LoginSignupForm /> // ✅ render without affecting hooks
// //       )}
// //     </>
// //   );
// // }
// const ConditionalWrapper = ({ children }) => {
//   const { currentUser } = useAuth();

//   if (!currentUser) {
//     return <LoginSignupForm />;
//   }

//   return <>{children}</>;
// };
'use client';  // <<< MUST BE FIRST LINE
import { useAuth } from "@/context/AuthContext";
import LoginSignupForm from "./LoginSignupForm";

const ConditionalWrapper = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <LoginSignupForm />;
  }

  return <>{children}</>;
};

export default ConditionalWrapper;
