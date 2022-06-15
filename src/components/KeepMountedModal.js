import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "../index.css";
import i18n from "../constants/i18n";
import { useTranslation } from "react-i18next";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal({
  title,
  description,
  url,
  content,
  bold,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();

  return (
    <div>
      <Button
        className="btn2"
        variant="contained"
        sx={{ mt: 1, mr: 1 }}
        onClick={handleOpen}
        color="secondary"
      >
        {t("modal")}
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style} style={{ height: "450px", overflowY: "scroll" }}>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems={"center"}
            alignContent={"center"}
          >
            <Grid item xs={12}>
              <Typography
                id="keep-mounted-modal-title"
                variant="h4"
                component="h2"
              >
                {title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                {description}
              </Typography>
            </Grid>
            {content}
            <Grid
              item
              justifyContent={"center"}
              alignItems="center"
              alignContent={"center"}
              xs={12}
              style={{
                width: 450,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  width: "450px",
                  borderRadius: "10px",
                }}
                src={url}
              ></img>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
