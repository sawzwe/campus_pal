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
    <div className="p-5 md:p-20">
      <h1 className="text-5xl md:text-6xl" style={titleStyle}>
        Welcome to Campus Pal
      </h1>

      {/* <h1 style={responsiveTitleStyles}>Welcome to Campus Pal</h1> */}
      <h1 className="pt-10 text-xl xs: pt-12 xs: text-s">Category</h1>
      <Grid container spacing={4}>
        <Grid item xs={4} style={gridItemStyles}>
          <div style={styledBoxCircleStyles}>Item A</div>
        </Grid>
        <Grid item xs={4} style={gridItemStyles}>
          <div style={styledBoxCircleStyles}>Item B</div>
        </Grid>
        <Grid item xs={4} style={gridItemStyles}>
          <div style={styledBoxCircleStyles}>Item C</div>
        </Grid>
        <Grid item xs={4} style={gridItemStyles}>
          <div style={styledBoxCircleStyles}>Item C</div>
        </Grid>
        <Grid item xs={4} style={gridItemStyles}>
          <div style={styledBoxCircleStyles}>Item D</div>
        </Grid>
        <Grid item xs={4} style={gridItemStyles}>
          <div style={styledBoxCircleStyles}>Item E</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default page;
