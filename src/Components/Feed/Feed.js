import React,{useEffect, useState} from 'react';
import './Feed.css';
import TweetBox from './TweetBox.js/TweetBox';
import Post from './Post/Post';
//import { Avatar } from '@material-ui/core'
import Flipmove from 'react-flip-move';

import db from '../../firebase';

function Feed() {
    const [post, setPosts] = useState([]);

    useEffect((reverse) => {
        db.collection('posts').onSnapshot(snapshot =>(
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    },[]);

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            <Flipmove >
                {post.map((post) => (
                    <Post 
                        key={post.text}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar= {post.avatar} 
                        image={post.image}
                    />
                ))}
            </Flipmove>
    
        </div>
    )
}

export default Feed