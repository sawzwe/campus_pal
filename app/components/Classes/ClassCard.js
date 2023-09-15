"use client"
import React, { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link"; // Import Link from Next.js

const ClassCard = ({ classes }) => {
    // Use a different variable name for the state
    const [classData, setClassData] = useState(classes);

    return (
        classData.map((classItem, index) => (
            <Link
                href={`/client/Courses/Classes?courseId=${classItem.courseId}`}
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
                                {classItem.title}
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
                            <Grid item xs={3}>
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
                                        Tutor
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
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        sx={{
                                            textAlign: "left",
                                        }}
                                    >
                                        Goals
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        sx={{
                                            textAlign: "left",
                                        }}
                                    >
                                        Tools
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={0}>
                                <Box
                                    sx={{
                                        borderLeft: "2px solid gray",
                                        height: "90%",
                                        marginTop: "5px",
                                        width: "0px",
                                    }}
                                />
                            </Grid>

                            {/* Location Box */}
                            <Grid item xs={4}>
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
                                        {classItem.instructor}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        sx={{
                                            textAlign: "left",
                                        }}
                                    >
                                        {classItem.location}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        sx={{
                                            textAlign: "left",
                                        }}
                                    >
                                        {classItem.goals}
                                    </Typography>

                                    {classItem.tools.map((tool, toolIndex) => (
                                        <Box
                                            key={toolIndex}
                                            sx={{
                                                display: "inline-flex",
                                                border: "1px solid gray",
                                                borderRadius: "4px",
                                                margin: "2px 4px", // Adjust margin as needed
                                            }}
                                        >
                                            <Typography
                                                variant="body2"
                                                color="textSecondary"
                                                sx={{
                                                    padding: "4px 8px", // Adjust padding as needed
                                                    textAlign: "left",
                                                }}
                                            >
                                                {tool}
                                            </Typography>
                                        </Box>
                                    ))}


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

export default ClassCard;
