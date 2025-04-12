import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";

import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ArticleIcon from "@mui/icons-material/Article";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import LayersIcon from "@mui/icons-material/Layers";

import "../styles/Header.css";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openLang = Boolean(anchorEl);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Shop", icon: <StorefrontIcon /> },
    { text: "Blog", icon: <ArticleIcon /> },
    { text: "Contact", icon: <ContactPageIcon /> },
    { text: "Pages", icon: <LayersIcon /> }
  ];

  return (
    <AppBar position="fixed" elevation={0} className="main-header">
      <Toolbar className="toolbar">

        {/* Left Section - Hamburger + Logo */}
        <Box className="left-section">
          {isMobile && (
            <IconButton
              onClick={toggleDrawer(true)}
              edge="start"
              className="mobile-menu-icon"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          )}
          <img src="src/assets/logo.png" alt="Logo" className="logo-img" />
        </Box>

        {/* Center nav links - only desktop */}
        {!isMobile && (
          <Box className="nav-links desktop-only">
            {navLinks.map(({ text }) => (
              <Button key={text} className="nav-button active">
                {text}
              </Button>
            ))}
          </Box>
        )}

        {/* Right Section */}
        <Box className="icon-group">
          <IconButton aria-label="search">
            <SearchIcon />
          </IconButton>
          <IconButton aria-label="cart">
            <ShoppingBagOutlinedIcon />
          </IconButton>

          {/* Only visible on Desktop */}
          {!isMobile && (
            <>
              <IconButton aria-label="favorites">
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton aria-label="account">
                <AccountCircleOutlinedIcon />
              </IconButton>
              <Button
                aria-controls="language-menu"
                aria-haspopup="true"
                onClick={handleLanguageClick}
                endIcon={<LanguageIcon />}
              >
                English
              </Button>

              <Menu
                id="language-menu"
                anchorEl={anchorEl}
                open={openLang}
                onClose={handleLanguageClose}
              >
                <MenuItem onClick={handleLanguageClose}>English</MenuItem>
                <MenuItem onClick={handleLanguageClose}>Hindi</MenuItem>
                <MenuItem onClick={handleLanguageClose}>Marathi</MenuItem>
              </Menu>
            </>
          )}
        </Box>

        {/* Drawer for Mobile Navigation */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 220 }}
            role="presentation"
            onClick={toggleDrawer(false)}
          >
            <List>
              {navLinks.map(({ text, icon }) => (
                <ListItem button key={text}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
