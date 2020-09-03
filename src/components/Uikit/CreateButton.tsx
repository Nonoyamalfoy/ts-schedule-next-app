import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import { IconButton } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => createStyles({
  create: {
    [theme.breakpoints.up(1000)]: {
      right: "calc(50% - 500px)",
      bottom: "80px",
      transform: "translateX(50%)",
    },
    backgroundColor: "#20295f",
    color: "white",
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 10,
    boxShadow: "0 3px 5px rgba(0,0,0,0.5)",
    "&:hover": {
      backgroundColor: "#20295f",
      color: "grey",
    },
  },
}));

const CreateButton = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const createClass = props.className ? props.className : classes.create;
  return (
    <IconButton
      className={createClass}
      size={props.size}
      onClick={() => dispatch(props.onClick)}
    >
      <CreateIcon />
    </IconButton>
  );
};

export default CreateButton;
