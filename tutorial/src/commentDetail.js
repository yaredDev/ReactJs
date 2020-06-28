import React from 'react'
import ReactDOM from 'react-dom'

const CommentDetail = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/">
                    <img alt="avatar" />
                </a>
            </div>

            <div className="content">
                <a href="/" className="author">
                    Yared
                </a>

                <div className="metadata">
                    <span className="date">Today at 6:00PM</span>
                </div>

                <div className="text">Nice blog post!</div>
            </div>
        </div>
    )
}

export default CommentDetail