import React from "react";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import html2canvas from "html2canvas";

export default function DownloadButton() {
  function handleDownload() {
    const palette = document.getElementById("palette");
    html2canvas(palette).then((canvas) => {
      const data = canvas.toDataURL("image/jpeg");
      const downloadLink = document.createElement("a");
      downloadLink.href = data;
      downloadLink.download = "palette.jpeg";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  return (
    <div className="download-btn">
      <Button
        variant="contained"
        startIcon={<DownloadIcon />}
        style={{ backgroundColor: "#111215" }}
        onClick={handleDownload}
      >
        Download
      </Button>
    </div>
  );
}
