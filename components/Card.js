import React, { Component, PropTypes } from 'react'
import AddLabelButton from './AddLabelButton'
import LabelList from './LabelList'
import PieArea from './PieArea'

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pie: {}
        };
    }

    render() {
        return (
            <li
              id="plan_box"
              className={'card_' + this.props.card[this.props.cardId]}
              data-id={this.props.card[this.props.cardId]}
              data-value={this.props.card.event_quota}
              style={{'textAlign': 'center'}}>
                <PieArea
                    labels={this.props.labels}
                    labelId={this.props.labelId}
                    plan={this.props.card}
                    cardId={this.props.card[this.props.cardId]}
                    cardName={this.props.cardName}
                    pie={this.state.pie}
                    titleChanged={this.props.titleChanged} />
                <LabelList
                    labels={this.props.labels}
                    card={this.props.card}
                    cardId={this.props.cardId}
                    pie={this.state.pie}
                    labelId={this.props.labelId}
                    delLabelClicked={this.props.delLabelClicked} />
                <AddLabelButton
                    card={this.props.card}
                    addLabelClicked={this.props.addLabelClicked}
                    addLabelText={this.props.addLabelText} />
            </li>
        );
    }
}
