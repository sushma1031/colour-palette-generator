import React from "react";
import IconButton from "@mui/material/IconButton";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";

export default function GenerateButton(props) {
  return (
    <div aria-label="generate colour palette">
      <IconButton
        type="submit"
        sx={{
          "&.MuiButtonBase-root:hover": {
            bgcolor: "transparent",
          },
        }}
        onClick={props.handleSubmit}
      >
        <AutoFixNormalIcon
          sx={{ color: "#2c2c2c", backgroundColor: "#f4f4f4" }}
        />
      </IconButton>
    </div>
  );
}
