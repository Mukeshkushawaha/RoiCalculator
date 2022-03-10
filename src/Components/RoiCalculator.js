import {
  Box,
  Typography,
  makeStyles,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import { Switch } from "@material-ui/core";
import React, { useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import SwitchButton from "./SwitchButton";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  mainbox: {
    textAlign: "center",
    paddingTop: "20px",
    "& h1": {
      fontSize: "50px",
      color: "#000",
      fontWeight: "700",
    },
  },
  mainbtn: {
    display: "flex",
    justifyContent: "center",
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
    borderRadius: "10px",
    padding: "15px",
    backgroundColor: "#f5f5f5",

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
  timeframe: {
    width: "100%",
    paddingTop: "10px",
  },
  timeFrameMain: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
  btn1: {
    padding: "10px",
    width: "50px",
    borderRight: "24px",
    backgroundColor: "#c4c0c07d",
    borderRadius: "50px",
    textAlign: "center",
  },
  AccBox: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn2: {
    width: "90px",
    borderRight: "24px",
    backgroundColor: "#c4c0c07d",
    borderRadius: "50px",
    textAlign: "center",
  },
  btnyellow: {
    // padding: "10px",
    width: "90px",
    borderRight: "24px",
    backgroundColor: "#ffcf33",
    borderRadius: "50px",
    textAlign: "center",
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
        <Button variant="contained" color="secondary" onClick={handleClickOpen}>
          Click Here
        </Button>
      </Box>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent style={{ minWidth: "551px" }}>
          <DialogContentText
            id="alert-dialog-slide-description"
            style={{ color: "#52565c" }}
          >
            <Box className={classes.displayflex}>
              <Box>
                <Typography
                  style={{ color: "#000", fontWeight: "600", fontSize: "20px" }}
                >
                  Roi Calculator
                </Typography>
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
              <Switch
                style={{ color: "#ffffff" }}
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
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
          <Box className={classes.timeframe}>
            <Box>
              <Typography>Timeframe</Typography>
            </Box>
            {/* I know that is a tab button but i don't have time */}
            <Box className={classes.timeFrameMain}>
              <Button className={classes.btnyellow}>1 Days</Button>
              <Button className={classes.btn2}>7 Days</Button>

              <Button className={classes.btn2}>30 Days</Button>
              <Button className={classes.btn2}>1 Years</Button>
              <Button className={classes.btn2}>5 Years</Button>
            </Box>
          </Box>

          <Box className={classes.AccBox}>
            <Box paddingTop="10px">
              <Typography style={{ color: "#00", fontWeight: "700" }}>
                Enable Accelerated APY
              </Typography>
            </Box>
            <Box>
              <SwitchButton />
            </Box>
          </Box>
          <Box className={classes.timeframe}>
            <Box>
              <Typography>Select Tier</Typography>
            </Box>
            <Box className={classes.timeFrameMain}>
              <Button className={classes.btnyellow}>Tier 1</Button>
              <Button className={classes.btn2}>Tier 2</Button>

              <Button className={classes.btn2}>Tier 3</Button>
              <Button className={classes.btn2}>Tier 4</Button>
              <Button className={classes.btn2}>Tier 5</Button>
            </Box>
          </Box>

          <Box marginTop="10px" className={classes.disbox}>
            <Box>
              <Typography>ROI at Current Rates</Typography>
            </Box>
          </Box>
          <Box className={classes.inputbox}>
            <Typography>0.00 USD</Typography>
          </Box>
          <Box style={{ paddingTop: "5px", textAlign: "right" }}>
            <Typography className={classes.cake}>
              ~0.000 CAKE + 0.000000 DON
            </Typography>
          </Box>

          <Box marginTop="10px">
            <Accordion>
              <AccordionSummary className={classes.accordinbox}>
                <Box
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography className={classes.heading}>
                    Show Details
                  </Typography>
                  <ExpandMoreIcon />
                </Box>
              </AccordionSummary>
              <Box className={classes.AccBox}>
                <Box padding="10px">
                  <Typography>APY</Typography>
                </Box>
                <Box padding="10px">
                  <Typography style={{ color: "#ffcf33" }}>9.0%</Typography>
                </Box>
              </Box>

              <AccordionDetails style={{ padding: "0px", marginLeft: "-12px" }}>
                <ul>
                  <li>Calculated based on current rates</li>
                  <li>Calculated based on current rates</li>
                  <li>Calculated based on current rates</li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </Box>
        </DialogContent>
        <DialogActions style={{ minWidth: "551px" }}></DialogActions>
      </Dialog>
    </Box>
  );
}
