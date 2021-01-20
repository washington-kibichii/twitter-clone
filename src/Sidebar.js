import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import { Button } from '@material-ui/core'

function Sidebar() {
    return   (
        <div className="sidebar">
            {/* {Twitter Icon} */}
            <TwitterIcon className="sidebar__twitterIcon" />
            <SidebarOption active Icon={ HomeOutlinedIcon } text="Home" />
            <SidebarOption Icon={ ExploreOutlinedIcon } text="Explore"/>
            <SidebarOption Icon={ NotificationsNoneRoundedIcon } text="Notifications"/>
            <SidebarOption Icon={ EmailOutlinedIcon } text="Messages"/>
            <SidebarOption Icon={ BookmarkBorderRoundedIcon } text="Bookmarks"/>
            <SidebarOption Icon={ FeaturedPlayListOutlinedIcon } text="Lists"/>
            <SidebarOption Icon={ PersonOutlinedIcon } text="Profile"/>
            <SidebarOption Icon={ MoreHorizRoundedIcon } text="More"/>

            {/* {Tweet Button -> } */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
