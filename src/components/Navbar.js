import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuIcon from "@mui/icons-material/Menu";
import i18n from "../constants/i18n";
import { useTranslation } from "react-i18next";
import "../index.css";
export default function Navbar() {
  const [lang, setLang] = useState("Türkçe");
  const [selected, setSelected] = useState("Türkçe");
  const { t } = useTranslation();
  /*const handleChange = (event) => {
    if (lang === "Türkçe") {
      i18n.changeLanguage("en");
      setLang("English");
    } else {
      i18n.changeLanguage("tr");
      setLang("Türkçe");
    }
  };*/

  useEffect(() => {
    if (selected === "Türkçe") {
      i18n.changeLanguage("tr");
      setLang("Türkçe");
      localStorage.setItem("language", "tr");
    } else {
      i18n.changeLanguage("en");
      setLang("English");
      localStorage.setItem("language", "en");
    }
  }, [selected]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="navbar"
        position="fixed"
        style={{
          backgroundColor: "#2A2A2E",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* {<MenuIcon />} */}
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ color: "white" }}
          >
            {t("ab")}
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="large">
            <InputLabel id="demo-select-small" style={{ color: "white" }}>
              Dil
            </InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              label="Age"
              //onChange={handleChange}
              style={{
                color: "white",
                fontFamily: "Helvet",
                fontStyle: "bold",
              }}
            >
              <MenuItem value="Türkçe" onClick={() => setSelected("Türkçe")}>
                TR
              </MenuItem>
              <MenuItem value="English" onClick={() => setSelected("English")}>
                ENG
              </MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
