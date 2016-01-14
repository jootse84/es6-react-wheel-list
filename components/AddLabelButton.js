import React, { Component } from 'react'
import '../styles/AddLabelButton.less'

export default class AddLabelButton extends Component {
    render() {
        return (
            <a className="add_label"
              onClick={this.props.addLabelClicked(this.props.card)}>
              {this.props.addLabelText}
            </a>
        );
    }
}
