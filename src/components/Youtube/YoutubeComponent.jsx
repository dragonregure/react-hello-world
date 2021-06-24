import React from 'react';
import './YoutubeComponent.css';

const YoutubeComponent = (props) => {
    return (
        <div className="youtube-video">
            <div className="youtube-thumbnail">
                <img src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg" alt="Something"></img>
                <p className="youtube-time">{props.time}</p>
            </div>
            <p className="youtube-title">{props.title}</p>
            <p className="youtube-description">{props.description}</p>
        </div>
    )
}

YoutubeComponent.defaultProps = {
    title: "Untitled",
    description: "Default",
    time: "00.00",
}

export default YoutubeComponent;
