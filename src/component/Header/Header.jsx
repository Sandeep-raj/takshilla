import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";

import "./Header.css";
import TaxLogo from "../../assets/images/taxlogo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickRoute = (pathname) => {
    navigate({
      pathname: pathname,
    });
  };

  return (
    <AppBar component={"nav"} className="headerNav" elevation={7}>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ width: "100%" }}>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            style={{ width: "100%" }}
          >
            <img
              src={TaxLogo}
              alt="taxlogo"
              className="taxLogo"
              onClick={() => {
                handleClickRoute("/");
              }}
            />

            <div style={{ flexGrow: 1 }} />

            <button
              className="navbtn"
              onClick={() => {
                handleClickRoute("/about");
              }}
            >
              About
            </button>
            <button
              className="navbtn"
              onClick={() => {
                handleClickRoute("/faculty");
              }}
            >
              Faculty
            </button>
            <button
              className="navbtn"
              onClick={() => {
                handleClickRoute("/register");
              }}
            >
              Register
            </button>
            <button
              className="navbtn"
              onClick={() => {
                handleClickRoute("/contact");
              }}
            >
              Contact
            </button>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ fontSize: "8vh" }} />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                key="About"
                onClick={() => {
                  handleCloseNavMenu();
                  handleClickRoute("/about");
                }}
                className="menubtn"
              >
                <Typography textAlign="center">About</Typography>
              </MenuItem>
              <MenuItem
                key="Faculty"
                onClick={() => {
                  handleCloseNavMenu();
                  handleClickRoute("/faculty");
                }}
                className="menubtn"
              >
                <Typography textAlign="center">Faculty</Typography>
              </MenuItem>
              <MenuItem
                key="About"
                onClick={() => {
                  handleCloseNavMenu();
                  handleClickRoute("/register");
                }}
                className="menubtn"
              >
                <Typography textAlign="center">Register</Typography>
              </MenuItem>
              <MenuItem
                key="About"
                onClick={() => {
                  handleCloseNavMenu();
                  handleClickRoute("/contact");
                }}
                className="menubtn"
              >
                <Typography textAlign="center">Contact</Typography>
              </MenuItem>
            </Menu>

            <img
              src={TaxLogo}
              alt="taxlogo"
              style={{
                width: "50vw",
                height: "7vh",
                margin: "auto",
                filter:
                  "brightness(0) invert(1) sepia(0) saturate(10000%) hue-rotate(0deg)",
              }}
              onClick={() => {
                handleClickRoute("/");
              }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
