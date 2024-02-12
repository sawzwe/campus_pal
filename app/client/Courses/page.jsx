"use client";
import React, { useState, useEffect } from "react";
import CourseCard from "../../components/Course/CourseCard";
import { Box, Grid, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import withAuth from "@/app/auth/WithAuth";
import { UserAuth } from "@/app/auth/AuthContext";

const dummyData = [
  {
    courseId: "CSX3001",
    title: "Fundamental Programming",
    semester: "2023/1",
    prerequisite: "None",
    location: "TrueLab",
  },
  {
    courseId: "CSX3009",
    title: "Algorithm Design",
    semester: "2023/1",
    prerequisite: "None",
    location: "TrueLab",
  },
  // Add more course objects here if needed
];

const Page = () => {
  const { user } = UserAuth();
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push("/client/Login");
    } else {
      setRender(true);
    }
  }, [user]);

  if (render) {
    return (
      <div>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ padding: "10px" }}
        >
          <Grid item>
            <ArrowBackIosIcon sx={{ marginBottom: "8px" }} />
          </Grid>
          <Grid item sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              gutterBottom
              fontWeight="bold"
              textAlign="center"
              sx={{ marginRight: "10px" }}
            >
              Active Courses
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <CourseCard course={dummyData} />
        </Box>
      </div>
    );
  } else {
    return <div>Redirecting...</div>;
  }
};

export default withAuth(Page);
// export default withAuth(Page);
