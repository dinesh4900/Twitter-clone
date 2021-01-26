
import React from 'react';
import './TweetBox.css';
import {Avatar, Button} from '@material-ui/core';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar />
                    <input placeholder="whats happening"></input>
                    
                </div>
                {/* <input className="tweetBox__inputImage" placeholder="Enter image url"></input> */}
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
