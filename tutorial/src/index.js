import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './commentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Mongi" timeAgo="Today at 4:50PM" />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Mwamba" timeAgo="Today at 6:50PM" />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Kimwana" timeAgo="Today at 7:00PM" />
            </ApprovalCard>

        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))