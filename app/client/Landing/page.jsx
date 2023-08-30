import React from "react";
import Grid from "@mui/material/Grid";

const page = () => {
  const titleStyle = {
    // fontWeight: "bold", // Make it bold
    fontFamily: "Arial, sans-serif", // Choose a suitable font family
    color: "#D21F3C", // Set your desired text color
    textAlign: "center", // Center align the title
  };

  const styledBoxCircleStyles = {
    width: "100%",
    height: "7em",
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  const gridItemStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className="p-7 md:p-20">
      <h1 className="text-3xl md:text-6xl" style={titleStyle}>
        Welcome to Campus Pal
      </h1>

      {/* <h1 style={responsiveTitleStyles}>Welcome to Campus Pal</h1> */}
      <h1 className="pb-5 pt-7 text-sm md:pt-12 md:text-2xl">
        What would you like to do today?
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={6} lg={4} style={gridItemStyles}>
          <div className="text-xs lg:text-lg" style={styledBoxCircleStyles}>
            Sports Booking
          </div>
        </Grid>
        <Grid item xs={6} lg={4} style={gridItemStyles}>
          <div className="text-xs lg:text-lg" style={styledBoxCircleStyles}>
            AU Loop
          </div>
        </Grid>
        <Grid item xs={6} lg={4} style={gridItemStyles}>
          <div className="text-xs lg:text-lg" style={styledBoxCircleStyles}>
            Tutorial Sessions
          </div>
        </Grid>
        <Grid item xs={6} lg={4} style={gridItemStyles}>
          <div className="text-xs lg:text-lg" style={styledBoxCircleStyles}>
            Fight Club
          </div>
        </Grid>
        <Grid item xs={6} lg={4} style={gridItemStyles}>
          <div className="text-xs lg:text-lg" style={styledBoxCircleStyles}>
            Doki Doki Literature Club
          </div>
        </Grid>
        <Grid item xs={6} lg={4} style={gridItemStyles}>
          <div className="text-xs lg:text-lg" style={styledBoxCircleStyles}>
            Rent a Girlfriend
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default page;
