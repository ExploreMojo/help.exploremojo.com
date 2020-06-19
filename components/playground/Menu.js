import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Box from '@material-ui/core/Box';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import menuData from '../../data/menu.js';

const data = menuData;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList(props) {
  const classes = useStyles();
  const [openStates, setOpenStates] = React.useState([]);

  function onClick(node) {
    let newArray = openStates.slice(0);
    (newArray.indexOf(node.uid) != -1) ? newArray.splice(newArray.indexOf(node.uid), 1) : newArray.push(node.uid);
    setOpenStates(newArray);
    sessionStorage.setItem("openTreeItems", JSON.stringify(newArray));

    node.url && (window.location = node.url);
  }
  
  function compare(arr1,arr2){
    if (arr1.length != arr2.length) return false;
    if (JSON.stringify(arr1.sort()) === JSON.stringify(arr1.sort())) return true;
    return false;
  }

  function getOpenTreeItems() {
    if (typeof window !== 'undefined') {
      let openTreeItems = JSON.parse(sessionStorage.getItem("openTreeItems"));
      return openTreeItems || [];
    }
    return [];
  }
  // setTimeout( ()=>{setOpenStates(getOpenTreeItems());}, 100 );
  console.log('openStates', openStates);
  console.log('getOpenTreeItems()', getOpenTreeItems());
  console.log('compare(openStates, getOpenTreeItems())', compare(openStates, getOpenTreeItems()));
  
  if (compare(openStates, getOpenTreeItems()) == false) {
    // setOpenStates(getOpenTreeItems());
    setTimeout( ()=>{setOpenStates(getOpenTreeItems());}, 1 );
  } 






  let itemIndex = 0;
  function generateTreeItems(item) {
    itemIndex++;
    const uid = 'id-'+itemIndex;
    item.uid = uid;
    //---
    // Default types (spacer, divider etc.)
    switch (item.type) {
      case 'divider':
        return (<Divider key={item.uid}></Divider>);
      case 'spacer':
        return (<div key={item.uid} style={{height: '20px'}}></div>);
      case 'headline':
        return (<div key={item.uid} style={{marginLeft: '10px', color: '#888'}}>{item.label}</div>);
    }

    return (
      <Box key={item.uid}>
        <ListItem button key={item.uid} label={item.label} onClick={onClick.bind(this, item)}>
          <ListItemText primary={item.label} />
          {!item.children ? '' : openStates.indexOf(item.uid) > -1 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openStates.indexOf(item.uid) > -1} timeout="auto" unmountOnExit>
          {item.children && item.children.map((child, index) => {
            return (       
              <List key={item.uid + Math.random()} component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText primary={child.label} onClick={onClick.bind(this, child)} />
                </ListItem>
              </List>
            )
          })}        
        </Collapse> 
      </Box>

    );
  }


  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Navigation
        </ListSubheader>
      }
      className={classes.root}
    >

      {/* 
      <ListItem button onClick={handleClick2}>
        <ListItemText primary="Inbox" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse> */}

      {/* { props.data.children.map((item, index) => generateTreeItems(item)) } */}
      { data.map((item, index) => generateTreeItems(item)) }

    </List>
  );
}
