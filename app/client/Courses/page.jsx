// 'use client'
// import React, { useEffect, useState } from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import Divider from "@mui/material/Divider";
// import Link from "next/link"; // Import Link from Next.js

// const dummyData = [
//   {
//     courseId: "CSX3001",
//     title: "Fundamental Programming",
//     semester: "2023/1",
//     prerequisite: "None",
//     location: "TrueLab",
//   },
//   {
//     courseId: "CSX3009",
//     title: "Algorithm Design",
//     semester: "2023/1",
//     prerequisite: "None",
//     location: "TrueLab",
//   },
//   // Add more course objects here if needed
// ];

// const Page = () => {

//   return (
//     <div>
//       <Grid
//         container
//         alignItems="center"
//         justifyContent="center"
//         sx={{ padding: "10px" }}
//       >
//         <Grid item>
//           <ArrowBackIosIcon sx={{ marginBottom: "8px" }} />
//         </Grid>
//         <Grid item sx={{ flex: 1 }}>
//           <Typography
//             variant="h5"
//             gutterBottom
//             fontWeight="bold"
//             textAlign="center"
//             sx={{ marginRight: "10px" }}
//           >
//             Active Courses
//           </Typography>
//         </Grid>
//       </Grid>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           paddingLeft: "10px",
//           paddingRight: "10px",
//         }}
//       >
//         {dummyData.map((course, index) => (
//           <Link
//             href={`/client/Courses/Classes?courseId=${course.courseId}`}
//             key={index}
//           >
//             <div style={{ textDecoration: "none", cursor: "pointer" }}>
//               <Card
//                 variant="outlined"
//                 sx={{ marginBottom: "10px", position: "relative" }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     height: "190px", // Set the height of the card
//                     "@media (max-width: 768px)": {
//                       // Apply styles for screens smaller than 768px (adjust as needed)
//                       height: "auto", // Reset height for mobile
//                     },
//                   }}
//                 >
//                   {/* Red background portion */}
//                   <Box
//                     style={{
//                       display: "flex",
//                       alignItems: "center", // Center vertically
//                       justifyContent: "center", // Center horizontally
//                       height: "60px", // Height of the red portion
//                       background:
//                         "linear-gradient(90deg, #651428 9.58%, #3E0527 67.41%)",
//                     }}
//                   >
//                     {/* Title */}
//                     <Typography
//                       variant="h6"
//                       component="div"
//                       sx={{
//                         fontWeight: "bold",
//                         color: "white", // White color for the title
//                         textAlign: "center",
//                       }}
//                     >
//                       {course.title}
//                     </Typography>
//                   </Box>
//                   <Grid
//                     container
//                     // spacing={2}
//                     alignItems="stretch"
//                     sx={{ flexGrow: 1 }}
//                   >
//                     {/* Prerequisite Box */}
//                     <Grid item xs={7}>
//                       <Box
//                         sx={{
//                           // backgroundColor: "#FF5733", // Change to the desired background color
//                           padding: "20px 0px 20px 0px",                          display: "flex",
//                           display: "flex",
//                           flexDirection: "column",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           height: "100%", // Fill the available vertical space
//                         }}
//                       >
//                         <Typography
//                           variant="body2"
//                           color="textSecondary"
//                           sx={{
//                             textAlign: "center",
//                             fontWeight: "bold",
//                             color: "#651428",
//                           }}
//                         >
//                           Prerequisite
//                         </Typography>
//                         <Typography
//                           variant="body2"
//                           color="textSecondary"
//                           sx={{
//                             textAlign: "center",
//                           }}
//                         >
//                           Location
//                         </Typography>
//                       </Box>
//                     </Grid>
//                     <Grid item xs={0}>
//                       <Box
//                         sx={{
//                           borderLeft: "2px solid gray",
//                           height: "80%",
//                           marginTop: "5px",
//                           width: "0px",
//                         }}
//                       />
//                     </Grid>

//                     {/* Location Box */}
//                     <Grid item xs={3}>
//                       <Box
//                         sx={{
//                           // backgroundColor: "#33FF61", // Change to the desired background color
//                           padding: "20px 20px 20px 10px",                          display: "flex",
//                           flexDirection: "column",
//                           alignItems: "left",
//                           justifyContent: "center",
//                           height: "100%", // Fill the available vertical space
//                         }}
//                       >
//                         <Typography
//                           variant="body2"
//                           color="textSecondary"
//                           sx={{
//                             textAlign: "left",
//                             fontWeight: "bold",
//                             color: "#651428",
//                           }}
//                         >
//                           {course.prerequisite}
//                         </Typography>
//                         <Typography
//                           variant="body2"
//                           color="textSecondary"
//                           sx={{
//                             textAlign: "left",
//                           }}
//                         >
//                           {course.location}
//                         </Typography>
//                       </Box>
//                     </Grid>
//                     <Grid item xs={1}>
//                       {/* Arrow Box */}
//                       <Box
//                         sx={{
//                           padding: "20px",
//                           // backgroundColor: "#33EE", // Change to the desired background color
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           height: "100%",
//                           width: "100%",
//                         }}
//                       >
//                         <ArrowForwardIosIcon
//                           sx={{
//                             fontSize: "large",
//                             color: "gray",
//                             opacity: 0.7,
//                           }}
//                         />
//                       </Box>
//                     </Grid>
//                   </Grid>
//                 </Box>
//               </Card>
//             </div>
//           </Link>
//         ))}
//       </Box>
//     </div>
//   );
// };

// export default Page;

import React from "react";
import CourseCard from "../../components/Course/CourseCard";
import { Box, Grid, Typography } from "@mui/material";
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
            <CourseCard course={course} key={index} />
          </Link>
        ))}
      </Box>
    </div>
  );
};

export default Page;
