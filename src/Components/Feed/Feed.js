import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox.js/TweetBox'
import Post from './Post/Post'

function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* tweetbox */}

            <TweetBox />

            <Post />
            <Post />
            <Post />
            <Post />

        </div>
    )
}

export default Feed
