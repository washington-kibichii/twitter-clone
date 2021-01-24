import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
    return (
        <div className="tweetBox">
           <form>
                <div className="tweetBox__input">
                    <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQGCz9dV6hpG5A/profile-displayphoto-shrink_100_100/0/1604762699772?e=1616630400&v=beta&t=ydcu_FcM3NIZHpJ8Q7RXevm2aoyKdZyB0BBYlqGhOkY">
                    </Avatar>
                    <input placeholder="What's happening?"></input>
                </div>
                
                <Button className="tweetBox__tweetButton">Tweet</Button>
           </form> 
        </div>
    )
}

export default TweetBox
