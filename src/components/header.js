// import React from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { ImageList, ImageListItem } from "@mui/material";
// import poclogo from "../assets/imges/poc-logo"

export default function Header() {
  return (
    <AppBar sx={{ bgcolor: "white", boxShadow: "none" }}>
      <Container maxWidth="xl">
      <Toolbar  sx={{ display:"flex", justifyContent:"space-between" }}>
        <Typography variant="h3" color={"black"}>
          ABCDE
        </Typography>
        {/* <ImageList>
          <ImageListItem>
            <img src="./assets/imges/poc-logo.png" alt="dg"></img>
          </ImageListItem>
        </ImageList> */}
        <Box>
          <Button
            sx={{
              color: "#101010",
              fontSize: 18,
              fontFamily: "IBM Plex Sans",
              fontWeight: 400,
              textTransform: "none",
            }}
          >
            Dashbord
          </Button>
          <Button
            sx={{
              color: "#101010",
              fontSize: 18,
              fontFamily: "IBM Plex Sans",
              fontWeight: 400,
              textTransform: "none",
            }}
          >
            Data Access
          </Button>
          <Button
            sx={{
              color: "#101010",
              fontSize: 18,
              fontFamily: "IBM Plex Sans",
              fontWeight: 400,
              textTransform: "none",
            }}
          >
            Test AI model
          </Button>
          <Button
            sx={{
              color: "#101010",
              fontSize: 18,
              fontFamily: "IBM Plex Sans",
              fontWeight: 400,
              textTransform: "none",
            }}
          >
            Developer Tools
          </Button>
          <Button
            sx={{
              color: "#101010",
              fontSize: 18,
              fontFamily: "IBM Plex Sans",
              fontWeight: 400,
              textTransform: "none",
            }}
          >
            My requests
          </Button>
          <Button
            sx={{
              color: "#101010",
              fontSize: 18,
              fontFamily: "IBM Plex Sans",
              fontWeight: 400,
              textTransform: "none",
            }}
          >
            About Us
          </Button>
        </Box>
        <Box>

        </Box>
      </Toolbar>
      </Container>
    </AppBar>
  );
}
