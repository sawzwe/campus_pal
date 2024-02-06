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
      router.push("/client/Login");
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
