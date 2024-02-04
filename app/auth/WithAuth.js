// // import { useRouter } from "next/navigation";
// // import { useEffect } from 'react';
// // import {UserAuth} from './AuthContext'

// // function withAuth(Component) {
// //   return function AuthenticatedComponent(props) {
// //     const { user } = UserAuth();
// //     const router = useRouter();

// //     useEffect(() => {
// //       if (!user) {
// //         router.push('/'); 
// //       }
// //     }, [user, router]);

// //     return user ? <Component {...props} /> : null; 
// //   };
// // }

// // export default withAuth;

// // File: withAuth.js

// "use client"
// import { useRouter } from "next/navigation";
// import { useEffect } from 'react';
// import { UserAuth } from './AuthContext';
// import Login from "/app/client/Login/page.jsx";
// function withAuth(Component) {
//   return function AuthenticatedComponent(props) {
//     const { user } = UserAuth();
//     const router = useRouter();

//     useEffect(() => {
//       // If there's no user, don't redirect, just stay on the login page
//       if (!user) {
//         // router.push('/'); // Comment this out to avoid redirecting
//       }
//     }, [user, router]);

//     // If there's a user, render the component that was passed in with props
//     return user ? <Component {...props} /> : (<><Login /></>); // Render Login component instead of null

//   };
// }

// export default withAuth;



"use client"
import { useRouter } from "next/navigation";
import { useEffect } from 'react';
import { UserAuth } from './AuthContext';

function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const { user } = UserAuth();
    const router = useRouter();

    useEffect(() => {
      // If there's no user, redirect to the login page
      if (!user) {
        router.push('/client/Login'); // Adjust this line to point to the correct login route
      }
    }, [user, router]);

    // If there's a user, render the component that was passed in with props
    // Otherwise, render null or a loading indicator while redirecting
    return user ? <Component {...props} /> : null;
  };
}

export default withAuth;

