/* eslint-disable react/style-prop-object */
import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";

const MobileNav = ({ toggleDrawer, anchor, state }) => {
  const navigate = useNavigate();
  const itemsList = [
    {
      text: "Home",
      // icon: <DashboardIcon />,
      onClick: () => navigate("/"),
    },
    {
      text: "About",
      // icon: <AddShoppingCartIcon />,
      onClick: () => navigate("/about"),
    },
    {
      text: "Pages",
      // icon: <AddCircleOutlineIcon />,
    },
    {
      text: "Blogs",
      // icon: <PersonAddAltIcon />,
    },
    {
      text: "Contact",
      // icon: <UpdateIcon />,
      onClick: () => navigate("/contact"),
    },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {itemsList.map((list, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={list.onClick}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={list.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      <React.Fragment key={anchor}>
        {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default MobileNav;
