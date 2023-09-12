
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
import Poclogo from "../assets/images/poc.png";
import HelpIcon from "../assets/images/help.svg";
import Notification from "../assets/images/notification.svg";
import UserImg from "../assets/images/user-img.png";
import Image from 'next/image';
import {} from "@mui/material";


export default function Header() {
  return (
    <AppBar sx={{ bgcolor: "white", boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar className="px-0 d-flex align-items-center">
          <Box className="logo">
          <Image src={Poclogo} alt="logo"/>
          </Box>
          <Box className="ml-60">
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
          <Box  className="ml-auto d-flex align-items-center">
          <Image src={HelpIcon} alt="helphicon" />
          <Image src={Notification} alt="notification" className="mx-32"/>
          <Image src={UserImg} alt="userimg" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
