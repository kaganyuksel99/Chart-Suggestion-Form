import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

const CollapseBar = ({ ...props }) => {
  return (
    <Box pt={2}>
      <Accordion>
        <AccordionSummary
          style={{ backgroundColor: "#dff9fb", color: "black" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{ backgroundColor: "#333333", color: "white" }}
        >
          <Typography>{props.description}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CollapseBar;
