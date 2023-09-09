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
      <Box sx={{ display: "flex", paddingTop: "10px", paddingBottom: "10px" }}>
        <Box sx={{ flex: 1, paddingLeft: "10px" }}>
          <MenuIcon onClick={toggleDrawer(true)} />
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
              color: "black", // Change the color to red (you can use any valid color)
              opacity: 0.8, // Change the opacity (0.7 means 70% opacity)
            }}
          />
          <Box sx={{ paddingLeft: "10px" }}>
            <AccountCircleIcon
              sx={{
                color: "black", // Change the color to red (you can use any valid color)
                opacity: 0.8, // Change the opacity (0.7 means 70% opacity)
              }}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
