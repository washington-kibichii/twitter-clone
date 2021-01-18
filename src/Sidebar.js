import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ExploreRoundedIcon from '@material-ui/icons/ExploreRounded';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* {Twitter Icon} */}
            <TwitterIcon />
            <SidebarOption Icon={ HomeRoundedIcon } text="Home" />
            <SidebarOption Icon={ ExploreRoundedIcon } text="Explore"/>
            <SidebarOption Icon={ NotificationsNoneRoundedIcon } text="Notifications"/>
            <SidebarOption Icon={ EmailRoundedIcon } text="Messages"/>
            <SidebarOption Icon={ BookmarkBorderRoundedIcon } text="Bookmarks"/>
            <SidebarOption Icon={ FeaturedPlayListIcon } text="Lists"/>
            <SidebarOption Icon={ PersonOutlinedIcon } text="Profile"/>
            <SidebarOption Icon={ MoreHorizRoundedIcon } text="More"/>

            {/* {Tweet Button -> } */}
        </div>
    )
}

export default Sidebar
