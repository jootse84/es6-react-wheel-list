import React, { Component } from 'react'

export default class LabelList extends Component {
    // this.props.labels -> this.props.plan.devices
    // this.props.card -> this.props.plan
    render() {
        return (
            <ul className="VCam_menu">
                { this.props.labels.map((element, i) => {
                    return (
                        <li
                          key={'key-tag-' + element.uid}
                          id={'tag-' + element.uid}
                          data-color={element.color_tag}
                          data-value={element.event_total}
                          data-nickname={element.nickname}>
                            <a className="VCam1">
                                <span
                                  id="dot1"
                                  className="dot"
                                  style={{ "background": element.color_tag }}></span>
                                { element.nickname }
                            </a>
                            <a
                              data-blockui="unbindingCamera"
                              data-url="unbindingCamera"
                              onClick={ this.props.delLabelClicked(this.props.card, element) }>
                                <img
                                  src="images/close.png"
                                  id="close_s"
                                  data-uid={ element.uid }>
                                </img>
                            </a>
                        </li>
                    )
                }) }
            </ul>
        );
    }
}
