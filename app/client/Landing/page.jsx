"use client";

import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

const BannerSlideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/banner1.jpg", // Replace with the actual image URLs
    "/banner2.jpg",
    "/banner3.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <img src={images[currentImage]} alt={`Banner ${currentImage + 1}`} />
    </div>
  );
};

const page = () => {
  const titleStyle = {
    // fontWeight: "bold", // Make it bold
    fontFamily: "Arial, sans-serif", // Choose a suitable font family
    color: "#D21F3C", // Set your desired text color
    textAlign: "center", // Center align the title
  };

  const styledBoxCircleStyles = {
    width: "100%",
    height: "100%",
    paddingRight: "0.5em",
    paddingLeft: "0.5em",
    paddingTop: "0.5em",
    paddingBottom: "0.5em",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  const gridItemStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const textStyles = {
    fontFamily: "Arial, sans-serif",
    color: "#333", // Set your desired text color
    fontSize: "1em", // Adjust the font size as needed
    lineHeight: "1.5", // Adjust the line height as needed
    textAlign: "left",
    padding: "0.5em", // Adjust the padding as needed
    paddingLeft: "0em", // Adjust the padding as needed
  };

  const imageStyles = {
    height: "100px", // Set your desired fixed height here
    width: "auto", // Maintain aspect ratio
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    objectFit: "cover", // Maintain aspect ratio and cover the container
  };

  return (
    <>
      <div className="banner">
        <BannerSlideshow />
      </div>
      <div className="pt-3 p-7 md:p-20">
        <h1 className="text-2xl md:text-6xl" style={titleStyle}>
          Welcome to VMS Tutoring
        </h1>
        <h1 className="pb-3 pt-7 text-sm md:pt-12 md:text-2xl">
          Offered Courses:
        </h1>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12} style={gridItemStyles}>
            <div className="text-xs lg:text-lg" style={styledBoxCircleStyles}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={5} lg={5}>
                  <img
                    src="/spreadsheet.svg"
                    alt="My Image"
                    style={imageStyles}
                  />
                </Grid>
                <Grid item xs={6} md={7} lg={7}>
                  <p style={textStyles}>
                    Course: Principles of Statistics
                    <br />
                    <br />
                    Pre-requisites: None
                    <br />
                    Location: TrueLab
                  </p>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={12} style={gridItemStyles}>
            <div className="text-xs lg:text-lg" style={styledBoxCircleStyles}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={5} lg={5}>
                  <img src="/co_op.svg" alt="My Image" style={imageStyles} />
                </Grid>
                <Grid item xs={6} md={7} lg={7}>
                  <p style={textStyles}>
                    Course: Fundamentals of Programming
                    <br />
                    <br />
                    Pre-requisites: None
                    <br />
                    Location: TrueLab
                  </p>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={12} style={gridItemStyles}>
            <div className="text-xs lg:text-lg" style={styledBoxCircleStyles}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={5} lg={5}>
                  <img src="/oop.svg" alt="My Image" style={imageStyles} />
                </Grid>
                <Grid item xs={6} md={7} lg={7}>
                  <p style={textStyles}>
                    Course: Object-Oriented Programming
                    <br />
                    <br />
                    Pre-requisites: None
                    <br />
                    Location: TrueLab
                  </p>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default page;
