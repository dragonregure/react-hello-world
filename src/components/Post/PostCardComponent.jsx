import React from 'react';
import './PostCardComponent.css';

const PostCardComponent = (props) => {
    return (
        <div className="postCard">
            <h3 onClick={() => {props.detail(props.data.id)}}>{props.data.title}</h3>
            <p>{props.data.body}</p>
            <p>{props.data.author}</p>
            <button onClick={() => {props.remove(props.data.id)}}>Remove</button>
            <button onClick={() => {props.update(props.data)}}>Update</button>
        </div>
    );
}

PostCardComponent.defaultProps = {
    data: {
        body: 'Default Body',
        author: 'Default Author'
    }
}

export default PostCardComponent;