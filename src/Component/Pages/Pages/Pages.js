import React, { useEffect, useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
import AnimationPage from "../../Animation/AnimationPage";
import { Puff } from "react-loader-spinner";

const Pages = ({ setOpen, open, anchorRef }) => {
  const [isLoad, setIsLoad] = useState(false);
  // const [open, setOpen] = React.useState(false);
  // const anchorRef = React.useRef(null);

  // const handleToggle = () => {
  //     setOpen((prevOpen) => !prevOpen);
  // };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open, setOpen, anchorRef]);

  useEffect(() => {
    setIsLoad(true);
    setTimeout(() => {
      setIsLoad(false);
    }, 600);
  }, []);

  return (
    <AnimationPage>
      {isLoad && (
        <div className="flex justify-center items-center h-screen w-full transition-all ease-in-out duration-300">
          <Puff
            height="80"
            width="80"
            radius={1}
            color="#57112f"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      <Stack direction="row" spacing={2}>
        <div>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>
                        <NavLink to="/booking-list">Booking List</NavLink>{" "}
                      </MenuItem>
                      {/* <MenuItem onClick={handleClose}><NavLink to="/booking-details">Booking Details</NavLink></MenuItem> */}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </Stack>
    </AnimationPage>
  );
};

export default Pages;
