import React, { Component, PropTypes } from 'react'
import AddLabelButton from './AddLabelButton'
import LabelList from './LabelList'
import PieArea from './PieArea'

export default class Card extends Component {
    render() {
        return (
            <li
              id="plan_box"
              className={ 'card_' + this.props.card[this.props.cardId] }
              data-plan-id={ this.props.card[this.props.cardId] }
              data-value={ this.props.card.event_quota}
              style={{ 'textAlign': 'center' }}>
                <PieArea
                    labels={this.props.labels}
                    plan={this.props.card}
                    cardId={this.props.card[this.props.cardId]}
                    titleChanged={this.props.titleChanged} />
                <LabelList
                    labels={this.props.labels}
                    card={this.props.card}
                    delLabelClicked={this.props.delLabelClicked} />
                <AddLabelButton
                    card={this.props.card}
                    addLabelClicked={this.props.addLabelClicked}
                    addLabelText={this.props.addLabelText} />
            </li>
        );
    }
}
