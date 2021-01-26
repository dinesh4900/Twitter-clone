import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>Whats happening</h2>
                <TwitterTweetEmbed tweetId={"1354099932202889216"} />

                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="cleverqazi"
                    options={{height: 400}} />

                <TwitterShareButton 
                url={"https://facebook.com/cleverprogrammer"}
                options={{text:"#react is awesome", via:"@cleverqazi"}}/>
            </div>
        </div>
    )
}

export default Widgets
