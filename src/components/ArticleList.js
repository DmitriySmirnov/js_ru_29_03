import React, {Component, PropTypes} from 'react'
import Article from './Article'
import selectSingleItem from '../HOC/selectSingleItem'

class AricleList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.getList()}
                </ul>
            </div>
        )
    }

    getList() {
        return this.props.articles.map((article, index) =>
            <li key={article.id}>
                <Article
                    article={article}
                    isSelected={this.props.selectedItemId == article.id}
                    selectArticle={this.props.selectItemCommand }
                />
            </li>
        )
    }
}

export default selectSingleItem(AricleList)