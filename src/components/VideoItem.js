import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video }) => {
    return (
        <div className="video-item item">
            <img 
                src={video.snippet.thumbnails.medium.url} 
                alt={video.snippet.description}
                className="ui image"
            />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
                {/* <div className="description">
                    {video.snippet.description}
                </div> */}
            </div>
        </div>

    );
};

export default VideoItem;