import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import { HorizontalBarChart } from "./HorizontalBarChart";
import { BackToGraph } from "./BackToGraph";
import { ColumnGraph } from "./ColumnGraph";
import { FullStackedBar } from "./FullStackedBar";
import { Donut } from "./Doughnut";
import AreaGraph from "./AreaGraph";
import BenchmarkLine from "./ComposedChart";
import { LineChart } from "./LineChart";
import { SmallMultiples } from "./SmallMultiples";
import MapChart from "./MapChart";
import { PieChart } from "./PieChart";
import TreeMapGraph from "./TreeMap";
import { ScatterPlot } from "./ScatterPlot";
import DotPlot from "./DotPlot";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";

const Chartİnfo = () => {
  const { t } = useTranslation();
  return (
    <Box pt={0} px={0}>
      <Typography
        variant="h3"
        gutterBottom
        style={{
          padding: 16,
          fontSize: 30,
          fontFamily: "Cursive",
          margin: "auto",
          color: "white",
        }}
      >
        {t("qft2")}
      </Typography>

      <Paper
        style={{
          padding: 16,
          border: "5px solid #FF385C",
          borderRadius: "25px",
          backgroundColor: "#FEFBE7",
        }}
        elevation={24}
      >
        <Grid container style={{ maxHeight: 350, overflowY: "scroll" }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#FEFBE7" }}
            >
              <Typography variant="h5">{t("tex1")}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#FEFBE7" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <ColumnGraph />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, met pablo instamer kanto.Lorem
                    ipsum dolor sit.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#FEFBE7" }}
            >
              <Typography variant="h5">{t("tex3")}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#FEFBE7" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <img
                    src={require("../styles/icon-array.png")}
                    style={{ height: "250px", width: "550px" }}
                    alt="logo"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, met pablo instamer kanto.Lorem
                    ipsum dolor sit.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#FEFBE7" }}
            >
              <Typography variant="h5">{t("tex4")}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#FEFBE7" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <img
                    src={require("../styles/percent.jpg")}
                    style={{ height: "250px", width: "550px" }}
                    alt="logo"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, met pablo instamer kanto.Lorem
                    ipsum dolor sit.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#FEFBE7" }}
            >
              <Typography variant="h5">{t("tex7")}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#FEFBE7" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FullStackedBar />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, met pablo instamer kanto.Lorem
                    ipsum dolor sit.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#FEFBE7" }}
            >
              <Typography variant="h5">{t("tex8")}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#FEFBE7" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <BenchmarkLine />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, met pablo instamer kanto.Lorem
                    ipsum dolor sit.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#FEFBE7" }}
            >
              <Typography variant="h5">{t("tex12")}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#FEFBE7" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <LineChart />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, met pablo instamer kanto.Lorem
                    ipsum dolor sit.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#FEFBE7" }}
            >
              <Typography variant="h5">{t("tex14")}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#FEFBE7" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <SmallMultiples />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, met pablo instamer kanto.Lorem
                    ipsum dolor sit.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#FEFBE7" }}
            >
              <Typography variant="h5">{t("tex16")}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#FEFBE7" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <MapChart />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, met pablo instamer kanto.Lorem
                    ipsum dolor sit.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#FEFBE7" }}
            >
              <Typography variant="h5">{t("tex16")}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#FEFBE7" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <SmallMultiples />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, met pablo instamer kanto.Lorem
                    ipsum dolor sit.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#FEFBE7" }}
            >
              <Typography variant="h5">{t("tex17")}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#FEFBE7" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <PieChart />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, met pablo instamer kanto.Lorem
                    ipsum dolor sit.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#FEFBE7" }}
            >
              <Typography variant="h5">{t("tex18")}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#FEFBE7" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FullStackedBar />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, met pablo instamer kanto.Lorem
                    ipsum dolor sit.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#FEFBE7" }}
            >
              <Typography variant="h5">{t("tex19")}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#FEFBE7" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TreeMapGraph />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, met pablo instamer kanto.Lorem
                    ipsum dolor sit.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#FEFBE7" }}
            >
              <Typography variant="h5">{t("tex20")}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#FEFBE7" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <img
                    src={require("../styles/diagram.png")}
                    style={{ height: "250px", width: "550px" }}
                    alt="logo"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, met pablo instamer kanto.Lorem
                    ipsum dolor sit.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#FEFBE7" }}
            >
              <Typography variant="h5">{t("tex21")}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#FEFBE7" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <ScatterPlot />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, met pablo instamer kanto.Lorem
                    ipsum dolor sit.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#FEFBE7" }}
            >
              <Typography variant="h5">{t("tex6")}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#FEFBE7" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <AreaGraph />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, met pablo instamer kanto.Lorem
                    ipsum dolor sit.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#FEFBE7" }}
            >
              <Typography variant="h5">{t("tex10")}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#FEFBE7" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <BackToGraph />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, met pablo instamer kanto.Lorem
                    ipsum dolor sit.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#FEFBE7" }}
            >
              <Typography variant="h5">{t("tex9")}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#FEFBE7" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <HorizontalBarChart />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, met pablo instamer kanto.Lorem
                    ipsum dolor sit.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#FEFBE7" }}
            >
              <Typography variant="h5">{t("tex15")}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#FEFBE7" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <ColumnGraph />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, met pablo instamer kanto.Lorem
                    ipsum dolor sit.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#FEFBE7" }}
            >
              <Typography variant="h5">{t("tex11")}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#FEFBE7" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <DotPlot />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, met pablo instamer kanto.Lorem
                    ipsum dolor sit.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#FEFBE7" }}
            >
              <Typography variant="h5">{t("tex2")}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#FEFBE7" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Donut />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, met pablo instamer kanto.Lorem
                    ipsum dolor sit.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#FEFBE7" }}
            >
              <Typography variant="h5">{t("tex5")}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#FEFBE7" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FullStackedBar />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, met pablo instamer kanto.Lorem
                    ipsum dolor sit.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Chartİnfo;
