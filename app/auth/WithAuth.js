// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from 'react';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { UserAuth } from './AuthContext';

// function withAuth(Component) {
//   return function AuthenticatedComponent(props) {
//     const router = useRouter();
//     const { user } = UserAuth();
//     const [isAuthChecked, setIsAuthChecked] = useState(false);
//     const auth = getAuth();

//     useEffect(() => {
//       const unsubscribe = onAuthStateChanged(auth, (user) => {
//         if (!user) {
//           router.push('/client/Login'); // Redirect to login if no user
//         } else {
//           setIsAuthChecked(true); // Auth state confirmed, allow rendering
//         }
//       });

//       return () => unsubscribe(); // Cleanup subscription on unmount
//     }, [router]);

//     // Prevent rendering until the auth check is complete
//     if (!isAuthChecked) {
//       return null; // or a loading indicator
//     }

//     // Render the component only after auth check is complete
//     return <Component {...props} />;
//   };
// }

// export default withAuth;

//// V2
// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from 'react';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { UserAuth } from './AuthContext';

// function withAuth(Component) {
//   return function AuthenticatedComponent(props) {
//     const { user: contextUser } = UserAuth(); // Assuming this is updated after auth changes
//     const router = useRouter();
//     const [isAuthChecked, setIsAuthChecked] = useState(false);
//     const auth = getAuth();

//     useEffect(() => {
//       // Immediately use context user if available
//       if (contextUser) {
//         setIsAuthChecked(true);
//         return;
//       }

//       const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
//         if (!firebaseUser) {
//           router.push('/client/Login'); // Redirect if no user
//         } else {
//           setIsAuthChecked(true); // Auth state confirmed, allow rendering
//         }
//       });

//       return () => unsubscribe(); // Cleanup on unmount
//     }, [contextUser, router]);

//     if (!isAuthChecked) {
//       return null; // or a more user-friendly loading indicator
//     }

//     return <Component {...props} />;
//   };
// }

// export default withAuth;

// "use client";
// import { useRouter } from "next/router"; // Import from "next/router"
// import { useEffect, useState } from "react";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { UserAuth } from "./AuthContext";

// function withAuth(Component) {
//   return function AuthenticatedComponent(props) {
//     const { user: contextUser } = UserAuth(); // Assuming this is updated after auth changes
//     const router = useRouter(); // Call `useRouter` at the top level
//     const [isAuthChecked, setIsAuthChecked] = useState(false);

//     // This effect will only run on the client side
//     useEffect(() => {
//       if (typeof window !== "undefined") {
//         const auth = getAuth();

//         // Immediately use context user if available
//         if (contextUser) {
//           setIsAuthChecked(true);
//           return;
//         }

//         const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
//           if (!firebaseUser) {
//             router.push("/client/Login"); // Redirect if no user
//           } else {
//             setIsAuthChecked(true); // Auth state confirmed, allow rendering
//           }
//         });

//         return () => unsubscribe(); // Cleanup on unmount
//       }
//     }, [contextUser, router]); // Include `router` in the dependency array

//     if (!isAuthChecked) {
//       return null; // or a more user-friendly loading indicator
//     }

//     return <Component {...props} />;
//   };
// }

// export default withAuth;

"use client";
import { useState, useEffect } from "react";
import { UserAuth } from "./AuthContext";
import { redirect, useRouter } from "next/navigation";

export default function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const { user } = UserAuth();
    const [redirected, setRedirected] = useState(false); // State to track if redirection has occurred
    const router = useRouter();

    useEffect(() => {
      // Check if user is not authenticated and redirection hasn't occurred
      if (!user && !redirected) {
        router.push("/client/Login");
        setRedirected(true); // Set redirected to true to prevent repeated redirections
      }
    }, [user, redirected]); // Include redirected in the dependency array

    return user ? <Component {...props} /> : null;
  };
}
