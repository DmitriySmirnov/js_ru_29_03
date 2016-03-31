import React, { Component } from 'react'

class Article extends Component{
    state = {
        isOpen: false,
        areCommentsVisible: false
    }
    render(){
        const {title, text} =  this.props.article;
        const body = this.state.isOpen?<section>{text}</section>:null
        const comments =  this.state.isOpen?this.getCommentsBlock():null

        return (
            <div>
                <h3 onClick={this.handleTitleClick}>{title}</h3>
                {body}
                {comments}
            </div>
        )
    }

    handleTitleClick = (env) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleCommentsClick = (env) => {
        this.setState({
            areCommentsVisible: !this.state.areCommentsVisible
        });
    }

    getCommentsBlock = () => {
        const comments = this.props.article.comments;
        if(comments == null) {
            return null;
        }

        var commentHeaderText = null;
        var commentsList = null;
        if(this.state.areCommentsVisible){
            commentHeaderText = "Hide comments";
            const commentsListItems = comments.map((comment)=>
            <li key={comment.id}>{comment.text}</li>);
            commentsList = <ul>{commentsListItems}</ul>
        }
        else{
            commentHeaderText = "Show comments";
        }

        const commentHeader = <h4 onClick={this.handleCommentsClick}>{commentHeaderText}</h4>

        return (<div>
            {commentHeader}
            {commentsList}
            </div>)
    }

}

export default Article