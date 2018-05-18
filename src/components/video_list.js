import React from 'react';
import VideoListItems from './video_list_item';

const VideoList = (props) => {
    const videositems = props.videos.map((video)=>{
        return <VideoListItems 
            onVideoListUpdate={props.onVideoUpdate}
            key={video.etag} 
            video={video} 
        />
    })
    return (
        <ul className="col-md-4 list-group">
           {videositems}
        </ul>
    );
};

export default VideoList;