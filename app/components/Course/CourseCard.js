"use client"
import React, { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link"; // Import Link from Next.js

const CourseCard = ({ course }) => {
    const [courses, setCourses] = useState(course);

    return (

        courses.map((course, index) => (
            <Link
                href={`/client/Courses/Classes?courseId=${course.courseId}`}
                key={index}
            >
                <Card variant="outlined" sx={{ marginBottom: "10px", position: "relative", boxShadow: "0px 4px 50px -7px rgba(0, 0, 0, 0.25)", borderRadius: 1.5 }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            height: "190px", // Set the height of the card
                            "@media (max-width: 768px)": {
                                // Apply styles for screens smaller than 768px (adjust as needed)
                                height: "auto", // Reset height for mobile
                            },
                        }}
                    >
                        {/* Red background portion */}
                        <Box
                            style={{
                                display: "flex",
                                alignItems: "center", // Center vertically
                                justifyContent: "center", // Center horizontally
                                height: "40px", // Height of the red portion
                                background: "linear-gradient(90deg, #651428 9.58%, #3E0527 67.41%)",
                            }}
                        >
                            {/* Title */}
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    // fontWeight: "bold",
                                    color: "white", // White color for the title
                                    textAlign: "center",
                                }}
                            >
                                {course.title}
                            </Typography>
                        </Box>
                        <Grid container alignItems="stretch" sx={{ flexGrow: 1 }}>
                            {/* Image Box */}
                            <Grid item xs={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img
                                    src="/Course/programming.png" // Replace with the actual path to your image in the public folder
                                    alt="Course Image"
                                    width="72"
                                    height="72"
                                />
                            </Grid>
                            {/* Prerequisite Box */}
                            <Grid item xs={4}>
                                <Box
                                    sx={{
                                        padding: "20px 0px 20px 0px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "left",
                                        justifyContent: "center",
                                        height: "100%", // Fill the available vertical space
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        sx={{
                                            textAlign: "left",
                                            fontWeight: "bold",
                                            color: "#651428",
                                        }}
                                    >
                                        Prerequisite
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        sx={{
                                            textAlign: "left",
                                        }}
                                    >
                                        Location
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={0}>
                                <Box
                                    sx={{
                                        borderLeft: "2px solid gray",
                                        height: "80%",
                                        marginTop: "5px",
                                        width: "0px",
                                    }}
                                />
                            </Grid>

                            {/* Location Box */}
                            <Grid item xs={3}>
                                <Box
                                    sx={{
                                        padding: "20px 20px 20px 10px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "left",
                                        justifyContent: "center",
                                        height: "100%",
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        sx={{
                                            textAlign: "left",
                                            fontWeight: "bold",
                                            color: "#651428",
                                        }}
                                    >
                                        {course.prerequisite}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        sx={{
                                            textAlign: "left",
                                        }}
                                    >
                                        {course.location}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={1}>
                                {/* Arrow Box */}
                                <Box
                                    sx={{
                                        padding: "20px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                        width: "100%",
                                    }}
                                >
                                    <ArrowForwardIosIcon
                                        sx={{
                                            fontSize: "large",
                                            color: "gray",
                                            opacity: 0.7,
                                        }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Card>
            </Link>
        ))

    );
};

export default CourseCard;


// 'use client'
// import React, { useState } from "react";
// import Card from "@mui/material/Card";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import Link from "next/link"; // Import Link from Next.js

// const CourseCard = ({ course }) => {
//     const [courses, setCourses] = useState(course);

//     return (
//         courses.map((course, index) => (
//             <Link
//                 href={`/client/Courses/Classes?courseId=${course.courseId}`}
//                 key={index}
//             >
//                 <Card variant="outlined" sx={{ marginBottom: "10px", position: "relative", boxShadow: "0px 4px 50px -7px rgba(0, 0, 0, 0.25)" }}>
//                     <Box
//                         sx={{
//                             display: "flex",
//                             flexDirection: "column",
//                             height: "190px", // Set the height of the card
//                             "@media (max-width: 768px)": {
//                                 // Apply styles for screens smaller than 768px (adjust as needed)
//                                 height: "auto", // Reset height for mobile
//                             },
//                         }}
//                     >
//                         {/* Red background portion */}
//                         <Box
//                             style={{
//                                 display: "flex",
//                                 alignItems: "center", // Center vertically
//                                 justifyContent: "center", // Center horizontally
//                                 height: "52px", // Height of the red portion
//                                 background: "linear-gradient(90deg, #651428 9.58%, #3E0527 67.41%)",
//                             }}
//                         >
//                             {/* Title */}
//                             <Typography
//                                 variant="h6"
//                                 component="div"
//                                 sx={{
//                                     fontWeight: "bold",
//                                     color: "white", // White color for the title
//                                     textAlign: "center",
//                                 }}
//                             >
//                                 {course.title}
//                             </Typography>
//                         </Box>
//                         <Box
//                             sx={{
//                                 display: "flex",
//                                 flexDirection: "row",
//                                 alignItems: "stretch",
//                                 flexGrow: 1,
//                             }}
//                         >
//                             {/* Image Box */}
//                             <Box
//                                 sx={{
//                                     flex: "0 0 25%", // Set width to 25%
//                                     display: "flex",
//                                     justifyContent: "center",
//                                     alignItems: "center",
//                                 }}
//                             >
//                                 <img
//                                     src="/Course/programming.png" // Replace with the actual path to your image in the public folder
//                                     alt="Course Image"
//                                     width="72"
//                                     height="72"
//                                 />
//                             </Box>
//                             {/* Prerequisite Box */}
//                             <Box
//                                 sx={{
//                                     flex: "0 0 33.33%", // Set width to 33.33%
//                                     padding: "20px 0px 20px 0px",
//                                     display: "flex",
//                                     flexDirection: "column",
//                                     alignItems: "left",
//                                     justifyContent: "center",
//                                 }}
//                             >
//                                 <Typography
//                                     variant="body2"
//                                     color="textSecondary"
//                                     sx={{
//                                         textAlign: "left",
//                                         fontWeight: "bold",
//                                         color: "#651428",
//                                     }}
//                                 >
//                                     Prerequisite
//                                 </Typography>
//                                 <Typography
//                                     variant="body2"
//                                     color="textSecondary"
//                                     sx={{
//                                         textAlign: "left",
//                                     }}
//                                 >
//                                     Location
//                                 </Typography>
//                             </Box>

//                             {/* Location Box */}
//                             <Box
//                                 sx={{
//                                     flex: "0 0 33.33%", // Set width to 33.33%
//                                     padding: "20px 20px 20px 10px",
//                                     display: "flex",
//                                     flexDirection: "column",
//                                     alignItems: "left",
//                                     justifyContent: "center",
//                                 }}
//                             >
//                                 <Typography
//                                     variant="body2"
//                                     color="textSecondary"
//                                     sx={{
//                                         textAlign: "left",
//                                         fontWeight: "bold",
//                                         color: "#651428",
//                                     }}
//                                 >
//                                     {course.prerequisite}
//                                 </Typography>
//                                 <Typography
//                                     variant="body2"
//                                     color="textSecondary"
//                                     sx={{
//                                         textAlign: "left",
//                                     }}
//                                 >
//                                     {course.location}
//                                 </Typography>
//                             </Box>

//                             {/* Arrow Box */}
//                             <Box
//                                 sx={{
//                                     flex: "0 0 10%", // Set width to 8.33%
//                                     paddingLeft: "5px",
//                                     display: "flex",
//                                     alignItems: "center",
//                                     justifyContent: "center",
//                                 }}
//                             >
//                                 <ArrowForwardIosIcon
//                                     sx={{
//                                         fontSize: "large",
//                                         color: "gray",
//                                         opacity: 0.7,
//                                     }}
//                                 />
//                             </Box>
//                         </Box>
//                     </Box>
//                 </Card>
//             </Link>
//         ))
//     );
// };

// export default CourseCard;

