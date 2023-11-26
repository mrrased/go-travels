import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Pages from "../../Pages/Pages/Pages";
import { faCaretDown, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from "../../../Hooks/useAuth";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const [anchor, setAnchor] = React.useState();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const anchorRef = React.useRef(null);
  const { user, logOutUser, isRole } = useAuth();

  const navigate = useNavigate();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    setAnchor(anchor);
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="absolute w-full z-10">
      <div className="hidden md:flex items-center sm:justify-between mx-5">
        <div>
          <div classNAme="hidden md:flex items-center">
            <FontAwesomeIcon
              icon={faPlane}
              size="2xl"
              className="mr-4 text-pink-black bg-smooth-yellow-150 p-2 rounded-full"
            />
          </div>
        </div>
        <div className="hidden md:flex space-x-4 text-base font-semibold capitalize font-sans">
          {isRole && (
            <NavLink
              to={"/dashboard"}
              className="
                        px-5 
                        py-3 
                        m-2 
                        text-white 
                        hover:bg-smooth-yellow-150 
                        hover:text-black 
                        transition-colors 
                        duration-400"
            >
              Dashboard
            </NavLink>
          )}

          <NavLink
            to={"/"}
            className="
                    px-5 
                    py-3 
                    m-2 
                    text-white 
                    hover:bg-smooth-yellow-150 
                    hover:text-black 
                    transition-colors 
                    duration-400"
          >
            Home
          </NavLink>

          <NavLink
            to={"/about"}
            className="
                    px-5 
                    py-3 
                    m-2 
                    text-white 
                    hover:bg-smooth-yellow-150 
                    hover:text-black"
          >
            About
          </NavLink>

          <button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            className="
                        px-5 
                        py-3 
                        m-2
                         text-white
                          hover:bg-smooth-yellow-150
                           hover:text-black"
          >
            Pages{" "}
            <FontAwesomeIcon
              icon={faCaretDown}
              size="lg"
              className="ml-2 text-smooth-gray-50"
            />
          </button>

          <button
            className="
                    px-5 
                    py-3 
                    m-2 
                    text-white 
                    hover:bg-smooth-yellow-150 
                    hover:text-black"
          >
            Blog
          </button>

          <NavLink
            to={"/contact"}
            className="px-5 py-3 m-2 text-white hover:bg-smooth-yellow-150 hover:text-black"
          >
            Contact
          </NavLink>

          <button
            onClick={() => navigate("/register")}
            className={`px-5 py-3 m-2 drop-shadow-md bg-white hover:bg-smooth-yellow-150 hover:text-black ${
              user.email ? "hidden" : "block"
            }`}
          >
            register
          </button>

          <button
            onClick={() => (user.email ? logOutUser() : navigate("/login"))}
            className="px-5 py-3 m-2 drop-shadow-md bg-smooth-yellow-150 hover:bg-white hover:text-black"
          >{`${user.email ? user?.displayName : "Login"}`}</button>
        </div>
      </div>
      {
        <Pages
          id={"composition-button"}
          open={open}
          setOpen={setOpen}
          anchorRef={anchorRef}
        />
      }
      <div className="lg:hidden">
        <FormatListBulletedIcon
          className={`transition-all duration-600 ease-in-out ${
            state.right === false ? "text-white ml-2 " : "text-[#622243] ml-2"
          } `}
          onClick={toggleDrawer("right", true)}
        />
      </div>
      <MobileNav toggleDrawer={toggleDrawer} anchor={anchor} state={state} />
    </div>
  );
};

export default NavBar;
