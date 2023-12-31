"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Drawer from "@mui/material/Drawer";
import { Fab, Typography } from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications"; // Import NotificationsIcon
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Import AccountCircleIcon
import Link from "next/link"; // Import Link from Next.js
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [state, setState] = React.useState({
    menuOpen: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ menuOpen: open });
  };

  const list = () => (
    <Box
      // sx={{ width: 250 }}
      className={styles.drawer}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Link href="/client/Profile">
        <Card
          sx={{
            height: "80px",
            margin: "10px",
            backgroundColor: "#FEFEFE",
            display: "flex",
            alignItems: "center",
            paddingLeft: "10px",
          }}
        >
          <img
            src="/abac.svg" // Specify the path to your image in the public folder
            alt="User Avatar"
            width={84} // Set the desired width
            height={84} // Set the desired height
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column", // Display items in a column layout
              marginLeft: "10px", // Add some spacing between the image and text
            }}
          >
            <Typography variant="subtitle1">Monkey D Luffy</Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "0.8rem", color: "#0e0e0e", opacity: "0.6" }}
            >
              Student
            </Typography>
          </div>
        </Card>
      </Link>

      <Divider />

      <List>
        {["Home", "Active Courses", "Classes"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              {text === "Home" ? (
                <Link href="/">
                  <ListItemText primary={text} />
                </Link>
              ) : text === "Active Courses" ? (
                <Link href="/client/Courses">
                  <ListItemText primary={text} />
                </Link>
              ) : text === "Classes" ? (
                <Link href="/client/Courses/Classes">
                  <ListItemText primary={text} />
                </Link>
              ) : (
                <ListItemText primary={text} />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <List>
        {["Profile", "Log Out"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              {text === "Log Out" ? (
                <Link href="/">
                  <ListItemText primary={text} />
                </Link>
              ) : (
                <Link href="/client/Profile">
                  <ListItemText primary={text} />
                </Link>
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div  className={styles.navbarWrapper}>
      <Box
        sx={{
          display: "flex",
          background: "linear-gradient(92deg, #651428 13.31%, #3E0427 93.96%)",
          height: "60px",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flex: 1,
            paddingLeft: "10px",
          }}
        >
          <MenuIcon
            sx={{
              color: "white",
              opacity: 0.8,
            }}
            onClick={toggleDrawer(true)}
          />
          <Drawer
            anchor="left"
            open={state.menuOpen}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", paddingRight: "10px" }}
        >
          <NotificationsIcon
            sx={{
              color: "white",
              opacity: 0.8,
            }}
          />
          <Box sx={{ paddingLeft: "10px" }}>
          <Link href="/client/Profile">
            <img
              src="/abac.svg" // Specify the path to your image in the public folder
              alt="User Avatar"
              width={48} // Set the desired width
              height={48} // Set the desired height
            />
            </Link>
            {/* <AccountCircleIcon
              sx={{
                color: "white",
                opacity: 0.8,
              }}
            /> */}
          </Box>
        </Box>
      </Box>
    </div>
  );
}
