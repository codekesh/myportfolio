import React, { forwardRef } from "react";
import Typography from "@mui/material/Typography";

export const About = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} id="about">
        <Typography
          variant="h3"
          align="center"
          sx={{ my: 10, color: "rgb(2, 102, 124)" }}
        >
          About
        </Typography>

        <div className="wrap animate pop">
          <div className="overlayAbout">
            <div className="overlayAbout-content animate slide-left delay-2">
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  color: "white",
                }}
              >
                Keshav Tulsyan
              </Typography>
              <p
                className="animate slide-left pop delay-5"
                style={{ color: "white", marginBottom: "2.5rem" }}
              >
                Kingdom: <em>Plantae</em>
              </p>
            </div>
            <div className="image-content animate slide delay-5"></div>
            <div className="dots animate">
              <div className="dot animate slide-up delay-6"></div>
              <div className="dot animate slide-up delay-7"></div>
              <div className="dot animate slide-up delay-8"></div>
            </div>
          </div>
          <div className="text">
            <Typography
              variant="body1"
              sx={{ fontSize: "max(10pt, 2.5vmin)", lineHeight: 1.4 }}
            >
              Trees are woody perennial plants that are a member of the kingdom.
              All species of trees are grouped by their genus, family, and
              order. This helps make identifying and studying trees easier.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "max(10pt, 2.5vmin)", lineHeight: 1.4 }}
            >
              Trees are woody perennial plants that are a member of the kingdom.
              All species of trees are grouped by their genus, family, and
              order. This helps make identifying and studying trees easier.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "max(10pt, 2.5vmin)", lineHeight: 1.4 }}
            >
              Trees are woody perennial plants that are a member of the kingdom.
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
});
