'use client';

// ConditionalWrapper - no longer blocks content
// Login/Signup is optional; users can browse without logging in
const ConditionalWrapper = ({ children }) => {
  return <>{children}</>;
};

export default ConditionalWrapper;
