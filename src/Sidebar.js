import React from "react";
import "./Sidebar.css";
import MovieCreationIcon from "@material-ui/icons/MovieCreation";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";

import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
// import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import NotificationsNoneIcon from "@material-ui/icons//NotificationsNone";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <MovieCreationIcon className="sidebar__movieIcon" />

      <SidebarOption active Icon={HomeIcon} text="Dashboard" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notification" />
      <SidebarOption Icon={SearchIcon} text="Search" />
      {/* <SidebarOption Icon={CreditScoreIcon} text="Gossip Score" /> */}
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Saved" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />

      {/* Button -> Tweet */}
      <Button variant="outlined" className="sidebar__buzz" fullWidth>
        Gossip
      </Button>
    </div>
  );
}

export default Sidebar;
