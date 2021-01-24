import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import SaveAltOutlinedIcon from '@material-ui/icons/SaveAltOutlined';


function Post() {
    return (
        <div className="post">
            <div className="contain__post">
                <div className="post__avatar">
                    <Avatar
                        src="https://www.the-star.co.ke/favicon.png"
                    >
                    </Avatar>
                </div>
                <div className="post__content">
                    <div className="post__header">
                        <h4 className="feed__name">@TheStar, Kenya</h4>
                        <MoreHorizRoundedIcon className="post__moreIcon" />
                    </div>
                    <h3>Russia accuses US of meddling, but says open to dialogue</h3>
                    <img className="media__image" src="https://pbs.twimg.com/media/EshMSFkXMAAoWbl?format=jpg&name=medium" alt="Stivo"></img>
                </div>
                
            </div>
            <div className="icons__meta">
                <BookmarkBorderRoundedIcon></BookmarkBorderRoundedIcon>
                <FavoriteBorderRoundedIcon></FavoriteBorderRoundedIcon>
                <SaveAltOutlinedIcon></SaveAltOutlinedIcon>
            </div>  
        </div>
    )
}

export default Post
