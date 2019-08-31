import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import rootReducer from "./reducers/rootReducer";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import HomeIcon from "@material-ui/icons/Home";
import { useSelector, useDispatch } from "react-redux";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import WidgetsIcon from "@material-ui/icons/Widgets";
import TimelineIcon from "@material-ui/icons/Timeline";
import BlurOnIcon from "@material-ui/icons/BlurOn";
import { BrowserRouter as Router, NavLink,Link } from "react-router-dom";
import Route from "react-router-dom/Route";
import MyHome from "./components/home";
import Avata from "./components/Avatar";
import Button from "./components/Button";
import Chips from "./components/Chips";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  paddingLeft: theme.spacing(4)
}));

export default function App() {
  const open1 = useSelector(state => state.open1);
  const open2 = useSelector(state => state.open2);
  const sublist1 = useSelector(state => state.sublist1);
  
  const sublist2 = useSelector(state => state.sublist2);
  const dispatch = useDispatch();
  const classes = useStyles();

  const SubComponents1 = sublist1.map(list => (
    
    
    <ListItem  >
    
    
      <ListItemIcon>
        <NavigateNextIcon />
      </ListItemIcon>
       <NavLink key={list} to={"/"+list}>
      <ListItemText primary={list} />
       </NavLink>
     
    </ListItem>
   
  ));
  const SubComponents2 = sublist2.map(list => (
    
    <ListItem >
      <ListItemIcon>
        <NavigateNextIcon />
      </ListItemIcon>
      <NavLink key={list} to={"/"+list}>
      <ListItemText primary={list} />
      </NavLink>
    </ListItem>
  
  ));
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     Nested List Items
      //   </ListSubheader>
      // }
      className={classes.root}
    >
      <div className="left">
        <NavLink to="/home" exact>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Homes" />
          </ListItem>
        </NavLink>
        <NavLink to="/colors" exact>
          <ListItem button>
            <ListItemIcon>
              <ColorLensIcon />
            </ListItemIcon>
            <ListItemText primary="Colors" />
          </ListItem>
        </NavLink>
        <ListItem button onClick={() => dispatch({ type: "click1" })}>
          <ListItemIcon>
            <WidgetsIcon />
          </ListItemIcon>
          <ListItemText primary="Components" />
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {SubComponents1}
          </List>
        </Collapse>
        <ListItem button onClick={() => dispatch({ type: "click2" })}>
          <ListItemIcon>
            <TimelineIcon />
          </ListItemIcon>
          <ListItemText primary="Charts" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {SubComponents2}
          </List>
        </Collapse>
        <ListItem button>
          <ListItemIcon>
            <BlurOnIcon />
          </ListItemIcon>
          <ListItemText primary="Iconography" />
        </ListItem>
      </div>
    </List>
  );
}
