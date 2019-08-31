import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LaunchIcon from "@material-ui/icons/Launch";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import "./styles.css";
import { BrowserRouter as Router, NavLink,Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  // root: {
  //   flexGrow: 1,
  // },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  // title: {
  //   flexGrow: 1,
  // },
}));

export default function MenuAppBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <LaunchIcon />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={open}
        onClose={handleClose}
      >
        <a href="https://material-ui.com/">
        <MenuItem onClick={handleClose}>
        Material-UI</MenuItem></a>
      
        <a href="https://reactjs.org/">
        <MenuItem onClick={handleClose}>React</MenuItem></a>
        <a href="https://github.com/uber/react-vis">
        <MenuItem onClick={handleClose}>React-Vis</MenuItem></a>
      </Menu>
    </div>
  );
}
