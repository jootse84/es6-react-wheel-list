import React, { Component } from 'react'

export default class AddLabelButton extends Component {
    render() {
        return (
            <a
              className="binding_camera"
              data-blockui="binding_page"
              onClick={ this.props.addLabelClicked(this.props.card) }
              data-url="binding_page">
              {this.props.addLabelText}
            </a>
        );
    }
}
