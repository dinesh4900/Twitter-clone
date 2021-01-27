import React, { useState } from 'react';
import './TweetBox.css';
import {Avatar, Button} from '@material-ui/core';
import db from '../../../firebase'
//import firebase from 'firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'dinesh',
            username: 'dinesh',
            verified: true,
            text: tweetMessage,
            avatar: "https://pbs.twimg.com/profile_images/944872237743587329/HOwZkXLk_400x400.jpg",
            image: tweetImage,
        });
        setTweetImage("");
        setTweetMessage("");
    }


    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/944872237743587329/HOwZkXLk_400x400.jpg"/>
                    <input 
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        placeholder="Whats happening?">
                    </input>
                    
                </div>
                <input 
                    onChange={(e) => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__inputImage" 
                    placeholder="Enter image url">
                </input>
                <Button type="submit" onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
