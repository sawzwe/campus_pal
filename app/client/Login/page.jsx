// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Button from "@mui/material/Button";
// import { Box } from "@mui/material";
// import { UserAuth } from "@/app/auth/AuthContext";
// const Page = () => {
//   const router = useRouter();
//   const { user, signInWithGoogle } = UserAuth();
//   // console.log("User", user);
//   useEffect(() => {
//     if (user) {
//       router.push("/");
//     }
//   }, [user, router]);

//   const handleSignIn = async () => {
//     try {
//       await signInWithGoogle();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <>
//       <Box sx={{ marginTop: "80px" }}>
//         <div>Client Login Page</div>
//         <Button onClick={handleSignIn}>Sign in with Google</Button>
//       </Box>
//     </>
//   );
// };

// export default Page;

"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { UserAuth } from "@/app/auth/AuthContext";

const Page = () => {
  const router = useRouter();
  const { user, signInWithGoogle } = UserAuth();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Box
        sx={{
          marginBottom: "20vh",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Welcome to Tutor Plus
          </Typography>
          {/* <Typography variant="subtitle1">Studying made easy</Typography> */}
        </Box>

        <Button
          variant="outlined"
          onClick={handleSignIn}
          sx={{ textTransform: "none" }}
        >
          Sign in with Google
        </Button>
      </Box>
    </Box>
  );
};

export default Page;
