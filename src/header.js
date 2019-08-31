import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import LaunchIcon from "@material-ui/icons/Launch";
import Avatar from "@material-ui/core/Avatar";
import HomeIcon from "./pics/house.png";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import MyHome from "./components/home";
import MyColor from "./components/colors";
import Avata from "./components/Avatar";
import Button from "./components/Button";
import Chips from "./components/Chips";
import Route from "react-router-dom/Route";
import Paper from "@material-ui/core/Paper";
import { BrowserRouter as Router, NavLink,Link} from "react-router-dom";
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import App from "./App";
import Righttop from "./righttop";
import Footer from './footer';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    position: "absolute",

    zIndex: 1
  },
  // appBarShift: {
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   marginLeft: drawerWidth,
  //   transition: theme.transitions.create(["margin", "width"], {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen
  //   })
  // },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    position: "absolute",

    zIndex: 0,
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth + 230
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 230
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  // const [open, setOpen] = React.useState(false);
  const open3 = useSelector(state => state.open3);

  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar>
        <Toolbar className="toolbar">
          <div className="toolbarleft">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => dispatch({ type: "click3" })}
              edge="start"
              // className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            
            <NavLink to="/home">
                <Avatar src = {HomeIcon} />
              </NavLink>
              
            
            <Typography variant="h6" noWrap>
              Design Reference
            </Typography>
          </div>
          <div>
            <Righttop />
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open3}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <App />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open3
        })}
      >
        <div className={classes.drawerHeader} />

        <Paper>
          <div className="paper">
            <Route exact path="/home" component={MyHome} />
            <Route exact path="/colors" component={MyColor} />
            <Route exact path="/Avatar" component={Avata} />
            <Route exact path="/Button" component={Button} />
            <Route exact path="/Chips" component={Chips} />
          </div>
        </Paper>
        <div className="footer">
<Footer/>
</div>
    
      </main>
      <br/>
    </div>
  );
}
