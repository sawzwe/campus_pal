import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link"; // Import Link from Next.js

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
        {dummyData.map((course, index) => (
          <Link
            href={`/client/Courses/Classes?courseId=${course.courseId}`}
            key={index}
          >
            <div style={{ textDecoration: "none", cursor: "pointer" }}>
              <Card
                variant="outlined"
                sx={{
                  marginBottom: "10px",
                  height: "190px", // Set the height of the card
                  "@media (max-width: 768px)": {
                    // Apply styles for screens smaller than 768px (adjust as needed)
                    height: "auto", // Reset height for mobile
                  },
                }}
              >
                {/* Red background portion */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center", // Center vertically
                    justifyContent: "center", // Center horizontally
                    height: "60px", // Height of the red portion
                    background:
                      "linear-gradient(90deg, #651428 9.58%, #3E0527 67.41%)",
                  }}
                >
                  {/* Title */}
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      color: "white", // White color for the title
                      textAlign: "center",
                    }}
                  >
                    {course.title}
                  </Typography>
                </div>

                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "10px", // Add top padding
                  }}
                >
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                          textAlign: "center",
                          fontWeight: "bold", // Make the text bold
                          color: "#651428", // Set the color to #651428
                        }}
                      >
                        Prerequisite: {course.prerequisite}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        Location: {course.location}
                      </Typography>
                    </Grid>
                    {/* <Grid
                      item
                      xs={12}
                      sm={6}
                      sx={{
                        textAlign: "right",
                        borderLeft: "1px solid #651428", // Vertical line separator
                        paddingLeft: "8px", // Add left padding to separate from the icon
                      }}
                    ></Grid> */}
                  </Grid>
                  <Grid item xs={12} sm={6} sx={{ textAlign: "right" }}>
                    <ArrowForwardIosIcon
                      sx={{
                        fontSize: "large",
                        color: "gray",
                        opacity: 0.7,
                        marginTop: "10px", // Add top margin for the icon
                      }}
                    />
                  </Grid>
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
