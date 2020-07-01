import React from 'react'
import ReactDOM from 'react-dom'

const CommentDetail = props => {
    console.log(props);
    
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/">
                    <img alt="avatar" />
                </a>
            </div>

            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>

                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>

                <div className="text">Nice blog post!</div>
            </div>
        </div>
    )
}

export default CommentDetail