import React, { Component } from 'react'
import '../styles/LabelList.less'

export default class LabelList extends Component {
    deleteLabel(card, label) {
        this.props.delLabelClicked(card, label);
    }

    labelMouseOver(label) {
        var labelId = label[this.props.labelId],
            cardId = this.props.card[this.props.cardId];
        this.props.pie[cardId].hover(labelId);
    }

    labelMouseOut(label) {
        var labelId = label[this.props.labelId],
            cardId = this.props.card[this.props.cardId];
        this.props.pie[cardId].out(labelId);
    }

    render() {
        return (
            <ul className="label_list">
                { this.props.labels.map((element, i) => {
                    return (
                        <li
                          key={'key-tag-' + element.uid}
                          id={'tag-' + element.uid}
                          onMouseEnter={this.labelMouseOver.bind(this, element)}
                          onMouseLeave={this.labelMouseOut.bind(this, element)}>
                            <a>
                                <span
                                  className="dot dot1"
                                  style={{"background": element.color_tag}}></span>
                                {element.nickname}
                            </a>
                            <a onClick={this.deleteLabel(this.props.card, element)}>
                                <img
                                  src="static/images/vcam_close.png"
                                  className="close_s"
                                  data-uid={element.uid}>
                                </img>
                            </a>
                        </li>
                    )
                }) }
            </ul>
        );
    }
}
