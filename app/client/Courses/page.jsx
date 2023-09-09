import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link"; // Import Link from Next.js

const dummyData = [
  {
    courseId: "CSX3001",
    title: "Fundamental Programming",
    semester: "2023/1",
  },
  {
    courseId: "CSX3009",
    title: "Algorithm Design",
    semester: "2023/1",
  },
  // Add more course objects here if needed
];

const Page = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center", // Align items vertically within the flex container
            padding: "10px", // Add padding between ArrowBackIosIcon and Typography
          }}
        >
          <ArrowBackIosIcon />
          <Typography variant="h4" gutterBottom>
            Active Courses
          </Typography>
        </Box>
        {/* {dummyData.map((course, index) => (
          <Link
            href="/client/Courses/Classes" // Specify the link URL here
            key={index}
          >
            <div style={{ textDecoration: "none", cursor: "pointer" }}>
              <Card
                variant="outlined"
                sx={{
                  marginBottom: "10px",
                  "&:hover": {
                    transform: "scale(1.05)", // Add hover animation
                    transition: "transform 0.3s ease-in-out",
                  },
                }}
              >
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
                    <Typography color="textSecondary">{course.semester}</Typography>
                  </Box>
                  <ArrowForwardIosIcon
                    sx={{
                      color: "gray", // Change the color to red (you can use any valid color)
                      opacity: 0.7, // Change the opacity (0.7 means 70% opacity)
                    }}
                  />
                </CardContent>
              </Card>
            </div>
          </Link>
        ))} */}
        {dummyData.map((course, index) => (
          <Link
            href={`/client/Courses/Classes?courseId=${course.courseId}`} // Pass courseId as a query parameter
            key={index}
          >
            <div style={{ textDecoration: "none", cursor: "pointer" }}>
              <Card
                variant="outlined"
                sx={{
                  marginBottom: "10px",
                  "&:hover": {
                    transform: "scale(1.05)", // Add hover animation
                    transition: "transform 0.3s ease-in-out",
                  },
                }}
              >
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
                      {course.semester}
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
            </div>
          </Link>
        ))}
      </Box>
    </div>
  );
};

export default Page;
