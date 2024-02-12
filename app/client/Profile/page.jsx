"use client";

import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { TextField, Box } from "@mui/material";
import { UserAuth } from "@/app/auth/AuthContext";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const [loggedName, setLoggedName] = useState("");
  const [render, setRender] = useState(false);

  const { user, loading } = UserAuth();

  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    // Check for authentication status on component mount
    if (typeof window !== "undefined") {
      const storedName = localStorage.getItem("name");
      if (storedName) {
        setLoggedName(storedName);
      }
    }
  }, []);

  useEffect(() => {
    if (!user) {
      router.push("/client/Login");
    } else {
      setRender(true);
    }
  }, [user]);

  if (render) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "40vh",
        }}
      >
        <Card style={{ width: "80vw" }}>
          <CardContent style={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                alt="User Avatar"
                src="/abac.svg"
                sx={{ width: 100, height: 100 }}
              />
              <Typography variant="h5">Student</Typography>
            </Box>
            <Box>
              <TextField
                // disabled
                id="username"
                label="Username"
                value={loggedName}
                sx={{ marginBottom: "10px", width: "100%" }}
              />
              <TextField
                disabled
                id="filled-disabled"
                label="Email"
                defaultValue="Monkey D Luffy"
                sx={{ width: "100%" }}
              />
            </Box>
            <Box>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ marginTop: "10px" }}
              >
                Interested Fields/Topics
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </div>
    );
  } else {
    return <div>Redirecting...</div>;
  }
};

export default Page;
