import React from "react";
import IconButton from "@mui/material/IconButton";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";

export default function GenerateButton(props) {
  const onHover = props.hoverEffect
    ? {}
    : {
        "&.MuiButtonBase-root:hover": {
          bgcolor: "transparent",
        },
      };
  return (
    <div aria-label="generate colour palette">
      <IconButton sx={onHover} onClick={props.handleClick}>
        <AutoFixNormalIcon sx={{ color: "#2c2c2c" }} />
      </IconButton>
    </div>
  );
}
