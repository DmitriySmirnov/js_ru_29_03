import React, {Component as ReactComponent} from 'react'

export default(Component) => class SelectSingleItem extends ReactComponent {
    state = {
        selectedItemId: null
    }

    selectItem = (id, ev) => {
        if (ev) ev.preventDefault();

        this.setState({
            selectedItemId: this.state.selectedItemId == id ? null : id
        });
    }

    render() {
        return <Component
            {...this.props}
            selectItemCommand={this.selectItem}
            selectedItemId={this.state.selectedItemId}
        />
    }
}