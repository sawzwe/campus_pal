"use client";

import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import LandingCard from "@/app/components/Course/LandingCard";
import Link from "next/link";

const dummyOfferedCoursesData = [
  {
    title: "Principles of Statistics",
    prerequisite: "None",
    location: "TrueLab",
  },
  {
    title: "Fundamentals of Programming",
    prerequisite: "None",
    location: "TrueLab",
  },
  {
    title: "Object-Oriented Programming",
    prerequisite: "CSX-3001",
    location: "TrueLab",
  },
  {
    title: "Data Structure & Algorithms",
    prerequisite: "None",
    location: "TrueLab",
  },
];

const BannerSlideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/banner1.jpg", "/banner2.jpg", "/banner3.jpg"];

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
      <img
        src={images[currentImage]}
        alt={`Banner ${currentImage + 1}`}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </div>
  );
};

const Page = () => {
  const titleStyle = {
    // fontWeight: "bold", // Make it bold
    fontFamily: "Poppins, sans-serif", // Choose a suitable font family
    fontWeight: "bold",
    color: "#D21F3C", // Set your desired text color
    textAlign: "center", // Center align the title
  };

  const styledBoxCircleStyles = {
    width: "100%",
    height: "100%",
    paddingRight: "0.5em",
    paddingLeft: "0.5em",
    paddingTop: "2em",
    paddingBottom: "0.5em",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    position: "relative",
  };

  const gridItemStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1em",
  };

  const textStyles = {
    fontFamily: "Arial, sans-serif",
    color: "#333", // Set your desired text color
    fontSize: "1em", // Adjust the font size as needed
    lineHeight: "1.5", // Adjust the line height as needed
    textAlign: "left",
    paddingBottom: "1em", // Adjust the padding as needed
    paddingLeft: "0em", // Adjust the padding as needed
  };

  const imageStyles = {
    height: "100px", // Set your desired fixed height here
    width: "auto", // Maintain aspect ratio
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    objectFit: "cover", // Maintain aspect ratio and cover the container
  };

  // State to control the visibility of the dialog
  const [isDialogOpen, setDialogOpen] = useState(false);

  // State to store the selected course when a card is clicked
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Event handler to open the dialog and set the selected course
  const handleCardClick = (course) => {
    setSelectedCourse(course);
    setDialogOpen(true);
  };

  // Event handler to close the dialog
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const [isSuccessNotificationOpen, setIsSuccessNotificationOpen] =
    useState(false);

  const showSuccessNotification = () => {
    setIsSuccessNotificationOpen(true);
  };

  const closeSuccessNotification = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSuccessNotificationOpen(false);
  };

  return (
    // <>
    //   <div className="banner">
    //     <BannerSlideshow />
    //   </div>
    //   <div className="pt-3 p-7 md:p-20">
    //     <h1 className="text-2xl md:text-5xl" style={titleStyle}>
    //       Welcome to VMS Tutoring
    //     </h1>
    //     <div
    //       style={{
    //         display: "flex",
    //         alignItems: "center",
    //         width: "50%",
    //         margin: "0 auto",
    //       }}
    //     >
    //       <h1
    //         className="pb-3 pt-5 text-sm md:pt-12 md:text-2xl"
    //         style={{ textAlign: "left" }}
    //       >
    //         Offered Courses:
    //       </h1>
    //     </div>
    //     <Grid container spacing={4} style={gridItemStyles}>
    //       <Grid item xs={12} md={12} lg={6}>
    //         <div className="text-xs lg:text-lg" style={styledBoxCircleStyles}>
    //           <Grid container spacing={2}>
    //             <Grid item xs={6} md={5} lg={5}>
    //               <img
    //                 src="/spreadsheet.svg"
    //                 alt="My Image"
    //                 style={imageStyles}
    //               />
    //             </Grid>
    //             <Grid item xs={5} md={7} lg={5}>
    //               <p style={textStyles}>
    //                 <b>Principles of Statistics</b>
    //                 <br />
    //                 <br />
    //                 Pre-requisites: None
    //                 <br />
    //                 Location: TrueLab
    //               </p>
    //             </Grid>
    //             <Grid
    //               item
    //               xs={1}
    //               md={7}
    //               lg={2}
    //               style={{
    //                 display: "flex",
    //                 alignItems: "center",
    //                 justifyContent: "center",
    //               }}
    //             >
    //               <MdOutlineKeyboardArrowRight style={{ fontSize: "32px" }} />
    //             </Grid>
    //           </Grid>
    //         </div>
    //       </Grid>
    //     </Grid>
    //     <Grid container spacing={4} style={gridItemStyles}>
    //       <Grid item xs={12} md={12} lg={6}>
    //         <div className="text-xs lg:text-lg" style={styledBoxCircleStyles}>
    //           <Grid container spacing={2}>
    //             <Grid item xs={6} md={5} lg={5}>
    //               <img src="/co_op.svg" alt="My Image" style={imageStyles} />
    //             </Grid>
    //             <Grid item xs={5} md={7} lg={5}>
    //               <p style={textStyles}>
    //                 <b>Fundamentals of Programming</b>
    //                 <br />
    //                 <br />
    //                 Pre-requisites: None
    //                 <br />
    //                 Location: TrueLab
    //               </p>
    //             </Grid>
    //             <Grid
    //               item
    //               xs={1}
    //               md={7}
    //               lg={2}
    //               style={{
    //                 display: "flex",
    //                 alignItems: "center",
    //                 justifyContent: "center",
    //               }}
    //             >
    //               <MdOutlineKeyboardArrowRight style={{ fontSize: "32px" }} />
    //             </Grid>
    //           </Grid>
    //         </div>
    //       </Grid>
    //     </Grid>
    //     <Grid container spacing={4} style={gridItemStyles}>
    //       <Grid item xs={12} md={12} lg={6}>
    //         <div className="text-xs lg:text-lg" style={styledBoxCircleStyles}>
    //           <Grid container spacing={2}>
    //             <Grid item xs={6} md={5} lg={5}>
    //               <img src="/oop.svg" alt="My Image" style={imageStyles} />
    //             </Grid>
    //             <Grid item xs={5} md={5} lg={5}>
    //               <p style={textStyles}>
    //                 <b>Object-Oriented Programming</b>
    //                 <br />
    //                 <br />
    //                 Pre-requisites: None
    //                 <br />
    //                 Location: TrueLab
    //               </p>
    //             </Grid>
    //             <Grid
    //               item
    //               xs={1}
    //               md={2}
    //               lg={2}
    //               style={{
    //                 display: "flex",
    //                 alignItems: "center",
    //                 justifyContent: "center",
    //               }}
    //             >
    //               <MdOutlineKeyboardArrowRight style={{ fontSize: "32px" }} />
    //             </Grid>
    //           </Grid>
    //         </div>
    //       </Grid>
    //     </Grid>
    //   </div>
    // </>

    <>
      <div className="banner">
        <BannerSlideshow />
        <h1 className="pt-1 text-2xl md:text-5xl" style={titleStyle}>
          Welcome to VMS Tutoring
        </h1>
      </div>
      <div className="pt-3 p-3 md:p-20">
        <div>
          <h1
            className="pb-3 pt-5 text-xl md:pt-12 md:text-2xl"
            style={{
              textAlign: "left",
              fontFamily: "Helvetica, sans-serif",
            }}
          >
            Offered Courses:
          </h1>
        </div>
        <Grid container spacing={4}>
          {dummyOfferedCoursesData.map((course, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <LandingCard course={course} onCardClick={handleCardClick} />
            </Grid>
          ))}
        </Grid>
      </div>

      {/* Confirmation Dialog */}
      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        aria-labelledby="confirmation-dialog-title"
        aria-describedby="confirmation-dialog-description"
      >
        <Slide
          direction="up"
          in={isDialogOpen}
          mountOnEnter
          unmountOnExit
          timeout={{ enter: 700, exit: 700 }}
        >
          <div>
            <DialogTitle
              id="confirmation-dialog-title"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1em",
                textAlign: "center",
                paddingTop: "1.5em",
              }}
            >
              Do you confirm to register for {selectedCourse?.title}?
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                id="confirmation-dialog-description"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1em",
                  textAlign: "center",
                }}
              >
                <img
                  src="/confirm.svg" // Replace with the actual path to your image in the public folder
                  alt="Confirmation Image"
                  style={{
                    width: "100px", // Adjust the width as needed
                    height: "auto", // Maintain aspect ratio
                    marginRight: "1em", // Add spacing between the image and text
                  }}
                />
                <span>Select your schedule after confirmation.</span>
              </DialogContentText>
            </DialogContent>
            <DialogActions
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1em",
                textAlign: "center",
              }}
            >
              <Button onClick={handleCloseDialog} color="primary">
                No, thanks
              </Button>
              <Button
                onClick={() => {
                  handleCloseDialog();
                  showSuccessNotification();
                }}
                color="primary"
              >
                Confirm
              </Button>
            </DialogActions>
          </div>
        </Slide>
      </Dialog>
      <Snackbar
        open={isSuccessNotificationOpen}
        autoHideDuration={4000}
        onClose={closeSuccessNotification}
        anchorOrigin={{
          vertical: "top", // Show the notification at the top
          horizontal: "center", // Center it horizontally
        }}
        style={{
          paddingTop: "20px", // Add padding to the top
          transition: "opacity 2s ease-in-out", // Adjust the duration as needed
        }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={closeSuccessNotification}
          severity="success"
        >
          You&apos;ve successfully registered for {selectedCourse?.title}.{" "}
          <Link>Take me there</Link>.
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default Page;
