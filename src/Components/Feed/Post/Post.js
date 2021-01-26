import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar,
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            dinesh{" "}
                                <span className="post__headerSpecial">
                                    <VerifiedUserIcon className="post__verified"/> @dinesh
                                </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Damu BSDK</p>
                    </div>
                </div>
                <img src="https://media.giphy.com/media/kLXJDTt370giGPYF17/giphy.gif" alt="gif" />
                <div className="post__footer">
                <ChatBubbleOutlineRoundedIcon fontSize="small" />
                <RepeatIcon fontSize="small"/>
                <FavoriteBorderIcon fontSize="small"/>
                <PublishIcon fontSize="small"/>

                </div>
            </div>
        </div>
    )
}

export default Post
