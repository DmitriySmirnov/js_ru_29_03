import React, {Component} from 'react'
import Article from './Article'

class ArticleList extends Component {
    render() {
        return (
            <div>
                <h3>Articles in my library</h3>
                <ul>
                    {this.getListItems()}
                </ul>
            </div>
        )
    }

    getListItems() {
        return this.props.articles.map((article) =>
            <li key={article.id}><Article article={article}/></li>
        );
    }
}

export default ArticleList