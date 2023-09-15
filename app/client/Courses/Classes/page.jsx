import React from "react";
import {Grid} from "@mui/material"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import ClassCard from "@/app/components/Classes/ClassCard";
// import { useRouter } from "next/router"; // Import the useRouter hook

const dummyData = [
  {
    courseId: "CSX3001",
    title: "Fundamental Programming",
    instructor: "Lucus",
    classId: "CP101",
    lecturerId: "LUC123",
    dateCreated: "2023-09-10",
    sessionDates: ["2023-09-15", "2023-09-22", "2023-09-29"],
    location:"TrueLab",
    goals: "Never gonna give you up",
    tools: ["MongoDB","UI/UX", "Python"]
  },
  {
    courseId: "CSX3001",
    title: "Fundamental Programming",
    instructor: "Lynn Thit",
    classId: "CP102",
    lecturerId: "LYN456",
    dateCreated: "2023-09-10",
    sessionDates: ["2023-09-15", "2023-09-22", "2023-09-29"],
    location:"TrueLab",
    goals: "Anime girls are real kekw",
    tools: ["SQL","GCP", "Python"]
  },
];

const Page = () => {
  return (
    <div>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ padding: "10px" }}
      >
        <Grid item>
          <Link href="/client/Courses">
            <ArrowBackIosIcon sx={{ marginBottom: "8px" }} />
          </Link>
        </Grid>
        <Grid item sx={{ flex: 1 }}>
          <Typography
            variant="h5"
            gutterBottom
            fontWeight="bold"
            textAlign="center"
            sx={{ marginRight: "10px" }}
          >
            Upcoming Classes
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
        <ClassCard classes={dummyData}/>
        {/* {dummyData.map((course, index) => (
          <Card variant="outlined" key={index} sx={{ marginBottom: "10px" }}>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "10px", // Add padding after the card
              }}
            >
              <Box>
                <Typography variant="h5" component="div">
                  {course.title}
                </Typography>
                <Typography color="textSecondary">
                  {course.instructor}
                </Typography>
              </Box>
              <ArrowForwardIosIcon
                sx={{
                  color: "gray", // Change the color to red (you can use any valid color)
                  opacity: 0.7, // Change the opacity (0.7 means 70% opacity)
                }}
              />
            </CardContent>
          </Card>
        ))} */}
      </Box>
    </div>
  );
};

export default Page;
