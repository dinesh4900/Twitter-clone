import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import {   TwitterTweetEmbed } from 'react-twitter-embed';


// TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton,TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton, TwitterShareButton, TwitterTimelineEmbed
function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>Whats happening</h2>
                <TwitterTweetEmbed tweetId={"1335290421463814145"} />

                {/* <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="cleverqazi"
                    options={{height: 400}} /> */}

                {/* <TwitterShareButton 
                url={"https://facebook.com/cleverprogrammer"}
                options={{text:"#react is awesome", via:"@cleverqazi"}}/> */}
            </div>
        </div>
    )
}

export default Widgets
