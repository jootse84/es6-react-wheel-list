import React, { Component, PropTypes } from 'react'
import Card from './Card'
import '../styles/PlanList.less'

/*
 * List of Wheel-Cards component
 */
export default class CardList extends Component {
    render () {
        return (
            <ul id="card-list">
                { this.props.cards.map((element, i) => {
                    return (
                        <Card
                            key={'key-' + element[this.props.cardId]}
                            card={element}
                            cardId={this.props.cardId}
                            labels={element[this.props.labelsId]}
                            labelId={this.props.labelId}
                            titleChanged={this.props.titleChanged}
                            delLabelClicked={this.props.delLabelClicked}
                            addLabelClicked={this.props.addLabelClicked}
                            addLabelText={this.props.addLabelText}
                          />
                    )
                }) }
                <li id="add_card_box">
                    <a onClick={this.props.addCardClicked}>
                        <img src="static/images/ic_add.png"/>
                        { this.props.addCardText }
                    </a>
                </li>
            </ul>
        );
    }
}
