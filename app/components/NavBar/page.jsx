// "use client";
// import React, {useState,useEffect} from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import Drawer from "@mui/material/Drawer";
// import { Fab, Typography } from "@mui/material";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import MenuIcon from "@mui/icons-material/Menu";
// import NotificationsIcon from "@mui/icons-material/Notifications"; // Import NotificationsIcon
// import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Import AccountCircleIcon
// import Link from "next/link"; // Import Link from Next.js
// import styles from "./NavBar.module.css";
// import { useRouter } from "next/navigation";
// import { UserAuth } from "../../auth/AuthContext";
// import { resolve } from "styled-jsx/css";

// export default function NavBar() {
//   const { user, signInWithGoogle, logOut } = UserAuth();
//   // console.log(user);

//   const [loading,setLoading] = useState(true);

//   const [state, setState] = React.useState({
//     menuOpen: false,
//   });

//   // Add the useRouter hook
//   const router = useRouter();

//   const handleSignIn = async () => {
//     try {
//       await signInWithGoogle();
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   // // Function to handle signout
//   // const handleSignOut = () => {
//   //   // Clear isLoggedIn state in local storage
//   //   localStorage.clear();
//   //   logOut();

//   //   // Redirect the user to the login page
//   //   router.replace("/client/Login");
//   // };

//   const handleSignOut = async () => {
//     try{
//       logOut();
//     }catch (err) {
//       console.log(err);
//     }
//   }
//   const toggleDrawer = (open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     setState({ menuOpen: open });
//   };

//   useEffect(() => {
//     const checkAuthentication = async () =>{
//       await new Promise ((resolve) => setTimeout(resolve,50))
//       setLoading(false)
//     }
//     checkAuthentication();
//   },[user])

//   const list = () => (
//     <Box
//       // sx={{ width: 250 }}
//       className={styles.drawer}
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       <Link href="/client/Profile">
//         <Card
//           sx={{
//             height: "80px",
//             margin: "10px",
//             backgroundColor: "#FEFEFE",
//             display: "flex",
//             alignItems: "center",
//             paddingLeft: "10px",
//           }}
//         >
//           <img
//             src="/abac.svg" // Specify the path to your image in the public folder
//             alt="User Avatar"
//             width={84} // Set the desired width
//             height={84} // Set the desired height
//           />

//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column", // Display items in a column layout
//               marginLeft: "10px", // Add some spacing between the image and text
//             }}
//           >
//             <Typography variant="subtitle1">{user?.displayName}</Typography>
//             <Typography
//               variant="body1"
//               sx={{ fontSize: "0.8rem", color: "#0e0e0e", opacity: "0.6" }}
//             >
//               Student
//             </Typography>
//           </div>
//         </Card>
//       </Link>

//       <Divider />

//       <List>
//         {/* <Box onClick={handleSignIn}>
//           <Typography>Test Login</Typography>
//         </Box>
//         <Box onClick={handleSignOut}>
//           <Typography>Test Logiut</Typography>
//         </Box> */}
//         {["Home", "Active Courses", "Classes"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               {text === "Home" ? (
//                 <Link href="/">
//                   <ListItemText primary={text} />
//                 </Link>
//               ) : text === "Active Courses" ? (
//                 <Link href="/client/Courses">
//                   <ListItemText primary={text} />
//                 </Link>
//               ) : text === "Classes" ? (
//                 <Link href="/client/Courses/Classes">
//                   <ListItemText primary={text} />
//                 </Link>
//               ) : (
//                 <ListItemText primary={text} />
//               )}
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>

//       <Divider />
//       <List>
//         {["Profile", "Log Out"].map((text, index) => (
//           <ListItem key={text} disablePadding sx={{ width: "100%" }}>
//             {/* Ensure ListItem fills the width */}
//             {text === "Log Out" ? (
//               <ListItemButton onClick={handleSignOut} sx={{ width: "100%" }}>
//                 {/* Fill width for the button */}
//                 <ListItemIcon>
//                   <MailIcon />
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             ) : (
//               <Link
//                 href="/client/Profile"
//                 passHref
//                 style={{ width: "100%", textDecoration: "none" }}
//               >
//                 {" "}
//                 {/* Wrap ListItemButton with Link */}
//                 <ListItemButton sx={{ width: "100%" }}>
//                   {" "}
//                   {/* Ensure button fills width */}
//                   <ListItemIcon>
//                     <AccountCircleIcon />
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItemButton>
//               </Link>
//             )}
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div className={styles.navbarWrapper}>
//       <Box
//         sx={{
//           display: "flex",
//           background: "linear-gradient(92deg, #651428 13.31%, #3E0427 93.96%)",
//           height: "60px",
//           paddingTop: "10px",
//           paddingBottom: "10px",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             flex: 1,
//             paddingLeft: "10px",
//           }}
//         >
//           <MenuIcon
//             sx={{
//               color: "white",
//               opacity: 0.8,
//             }}
//             onClick={toggleDrawer(true)}
//           />
//           <Drawer
//             anchor="left"
//             open={state.menuOpen}
//             onClose={toggleDrawer(false)}
//           >
//             {list()}
//           </Drawer>
//         </Box>
//         <Box
//           sx={{ display: "flex", alignItems: "center", paddingRight: "10px" }}
//         >
//           <NotificationsIcon
//             sx={{
//               color: "white",
//               opacity: 0.8,
//             }}
//           />
//           <Box sx={{ paddingLeft: "10px" }}>
//             <Link href="/client/Profile">
//               <img
//                 src="/abac.svg" // Specify the path to your image in the public folder
//                 alt="User Avatar"
//                 width={48} // Set the desired width
//                 height={48} // Set the desired height
//               />
//             </Link>
//             {/* <AccountCircleIcon
//               sx={{
//                 color: "white",
//                 opacity: 0.8,
//               }}
//             /> */}
//           </Box>
//         </Box>
//       </Box>
//     </div>
//   );
// }

//New Nav
"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserAuth } from "../../auth/AuthContext";
import styles from "./NavBar.module.css";
import withAuth from "../../auth/WithAuth";

// export default function NavBar() {
function NavBar() {
  const { user, signInWithGoogle, logOut } = UserAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      // router.replace("/client/Login");
    } catch (err) {
      console.error(err);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMenuOpen(open);
  };

  const drawerList = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className={styles.drawer}
    >
      <Box>
        {" "}
        <Button onClick={handleSignIn}>Sign in with Google</Button>
      </Box>
      <Link href="/client/Profile" passHref>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "10px",
            padding: "10px",
            backgroundColor: "#FEFEFE",
          }}
        >
          <img src="/abac.svg" alt="User Avatar" width={84} height={84} />
          <Box sx={{ marginLeft: "10px" }}>
            <Typography variant="subtitle1">{user?.displayName}</Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "0.8rem", color: "#0e0e0e", opacity: "0.6" }}
            >
              Student
            </Typography>
          </Box>
        </Card>
      </Link>

      <Divider />

      <List>
        {["Home", "Active Courses", "Classes"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link
              href={
                text === "Home"
                  ? "/"
                  : text === "Active Courses"
                  ? "/client/Courses"
                  : "/client/Courses/Classes"
              }
              passHref
              style={{ width: "100%", textDecoration: "none" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {["Profile", "Log Out"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ width: "100%" }}>
            {text === "Log Out" ? (
              <ListItemButton onClick={handleSignOut}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            ) : (
              <Link
                href="/client/Profile"
                passHref
                style={{ width: "100%", textDecoration: "none" }}
              >
                <ListItemButton sx={{ width: "100%" }}>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className={styles.navbarWrapper}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(92deg, #651428 13.31%, #3E0427 93.96%)",
          height: "60px",
          padding: "10px",
        }}
      >
        <MenuIcon
          sx={{ color: "white", opacity: 0.8 }}
          onClick={toggleDrawer(true)}
        />
        <Drawer anchor="left" open={menuOpen} onClose={toggleDrawer(false)}>
          {drawerList()}
        </Drawer>
        <NotificationsIcon sx={{ color: "white", opacity: 0.8 }} />
        <Link href="/client/Profile" passHref>
          <img src="/abac.svg" alt="User Avatar" width={48} height={48} />
        </Link>
      </Box>
    </div>
  );
}

export default withAuth(NavBar);
// export default NavBar;
