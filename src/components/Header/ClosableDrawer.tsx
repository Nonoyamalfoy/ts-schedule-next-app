import React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {makeStyles, createStyles } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useDispatch } from "react-redux";
import  {signOut} from "../../reducks/users/operations";
import DateRangeIcon from '@material-ui/icons/DateRange';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import HomeIcon from '@material-ui/icons/Home';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Router from 'next/router';


const useStyles = makeStyles((theme) => createStyles({
  toolbar: theme.mixins.toolbar,
  drawerList: {
    width: 250,
  },
}))

type Props = {
  open: boolean;
  onClose:  (event: any) => void;
}

const ClosableDrawer = (props: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const selectMenu = (event, path) => {
    Router.push(path)
    props.onClose(event)
  }

  const menus = [
    {func: selectMenu, label: "Home", icon: <HomeIcon/>, id: "home", value: "/top"},
    {func: selectMenu, label: "Calendar", icon: <DateRangeIcon/>, id: "calendar", value: "/calendar"},
    {func: selectMenu, label: "ToDo List", icon: <CheckBoxIcon/>, id: "todoList", value: "/todolist"},
    {func: selectMenu, label: "Diary", icon: <ChromeReaderModeIcon/>, id: "diaries", value: "/diaries"},
  ];


  return(
    <nav> 
      <Drawer
        variant="temporary"
        anchor="right"
        open={props.open}
        onClose={(e) => props.onClose(e)}
        ModalProps={{keepMounted: true}}
      >
        <div
          // onClose={(e) => props.onClose(e)}
          onKeyDown={(e) => props.onClose(e)}
        >
          <Divider />
          <List className={classes.drawerList}>
            {menus.map(menu => (
              <ListItem button key={menu.id} onClick={(e) => menu.func(e, menu.value)}>
                <ListItemIcon>
                  {menu.icon}
                </ListItemIcon>
                <ListItemText primary={menu.label} />
              </ListItem>
            ))}
            <ListItem button key="logout" onClick={(e) => {dispatch(signOut()); props.onClose(e)}}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
    </nav>
  )

}

export default ClosableDrawer;