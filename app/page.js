// import Landing from "/app/client/Landing/page.jsx";
// import Login from "/app/client/Login/page.jsx";

// export default async function Home() {
//   return (
//     <>
//       <Login />
//     </>
//   );
// }

// "use client"
// import React, { useState, useEffect } from "react";
// import Landing from "/app/client/Landing/page.jsx";
// import Login from "/app/client/Login/page.jsx";

// import { UserAuth } from "../auth/AuthContext"
// const Home = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const { user } = UserAuth();

//   useEffect(() => {
//     const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
//     setIsLoggedIn(!!storedIsLoggedIn);
//   }, []);

//   if (!user) {
//     return <Login />;
//   }

//   return <>

//     <Landing />

//   </>;
// };

// export default Home;

"use client"
import React, { useEffect } from "react";
import Landing from "/app/client/Landing/page.jsx";
import Login from "/app/client/Login/page.jsx";
import withAuth from "./auth/WithAuth"
import { UserAuth } from "./auth/AuthContext";
import { Typography } from "@mui/material";
const Home = () => {
  const { user } = UserAuth();
  console.log("Home User",user);
  // if (!user) {
  //   return (<>
  //     <Login />
  //   </>);
  // }

  return <Landing />;
  // return <Login />;

};

export default withAuth(Home);
// export default Home;



