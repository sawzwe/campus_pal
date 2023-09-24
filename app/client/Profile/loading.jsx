import React from "react";

const divStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh", // This will make the div take up the full viewport height
};
const loading = () => {
  return (
    <div style={divStyle}>
      <img src="/loading1.gif" alt="Loading" />
    </div>
  )
}

export default loading
