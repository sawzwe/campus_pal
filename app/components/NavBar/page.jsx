"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
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
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          background: "linear-gradient(92deg, #651428 13.31%, #3E0427 93.96%)",
          height: "60px",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", flex: 1, paddingLeft: "10px" }}>
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
            <AccountCircleIcon
              sx={{
                color: "white",
                opacity: 0.8,
              }}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
