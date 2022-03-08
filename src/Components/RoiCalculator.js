import {
  Box,
  Typography,
  makeStyles,
  Button,
  Dialog,
  Slide,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import React, { useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";
const useStyles = makeStyles((theme) => ({
  mainbox: {
    paddingTop: "20px",
    "& h1": {
      fontSize: "50px",
      color: "#000",
      fontWeight: "700",
    },
  },
  mainbtn: {
    "& button": {},
  },
  displayflex: {
    display: "flex",
    justifyContent: "space-between",
  },
  imgbox: {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    width: "20px",
    height: "20px",
    borderRadius: "50px",
    "& img": {
      width: "100%",
    },
  },
  disbox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
  },
  inputbox: {
    border: "1px solid grey",
    padding: "15px",
    "& p": {
      textAlign: "right",
      color: "#000",
      fontWeight: "700",
    },
  },
  box1: {
    padding: "10px",
    width: "44px",
    borderRight: "24px",
    backgroundColor: "#c4c0c07d",
    borderRadius: "50px",
  },
  mainboc: {
    paddingTop: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export default function RoiCalculator() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [selectedValue, setSelectedValue] = React.useState([false]);
  const [open, setOpen] = useState();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Box className={classes.mainbox}>
        <Typography variant="h1">RoiCalculator Design </Typography>
      </Box>
      <Box className={classes.mainbtn}>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          RoiCalculator
        </Button>
      </Box>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent style={{ minWidth: "550px" }}>
          <DialogContentText
            id="alert-dialog-slide-description"
            style={{ color: "#52565c" }}
          >
            <Box className={classes.displayflex}>
              <Box>
                <Typography>Roi Calculator</Typography>
              </Box>
              <Box>
                <ClearIcon onClick={handleClose} />
              </Box>
            </Box>
          </DialogContentText>
          <Box className={classes.disbox}>
            <Box className={classes.imgbox}>
              <img src="/images/roilogo.png" alt="" style={{ width: "100%" }} />
            </Box>
            <Box pl={1}>
              <Typography>CAKE</Typography>
            </Box>
            <Box>
              {" "}
              <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </Box>
            <Box>
              <Typography>USD</Typography>
            </Box>
          </Box>
          <Box className={classes.inputbox}>
            <Typography>0.000 USD</Typography>
          </Box>
          <Box className={classes.mainboc}>
            <Box display="flex">
              <Box className={classes.box1}>$1000</Box>&nbsp;
              <Box className={classes.box1}>$1000</Box>
            </Box>
            <Box>
              <Typography className={classes.cake}>~ CAKE 0.000</Typography>
            </Box>
          </Box>
        </DialogContent>

        <DialogActions>
          {/* <Box>
            <Box>
              <Typography>hi</Typography>
            </Box>
          </Box> */}
        </DialogActions>
      </Dialog>
    </Box>
  );
}
