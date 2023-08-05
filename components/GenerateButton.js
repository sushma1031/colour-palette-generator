import React from "react";
import IconButton from "@mui/material/IconButton";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";

export default function GenerateButton() {
  return (
    <div aria-label="generate colour palette">
      <IconButton onClick={()=> console.log("Clicked!")}>
        <AutoFixNormalIcon/>
      </IconButton>
    </div>
  );
}
