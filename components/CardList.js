import React, { Component, PropTypes } from 'react'
import Card from './Card'

/*
 * List of Wheel-Cards component
 */
export default class CardList extends Component {
    render () {
        return (
            <ul id="plan_management">
                { this.props.cards.map((element, i) => {
                    return (
                        <Card
                            key={'key-' + element[this.props.cardId]}
                            card={element}
                            cardId={this.props.cardId}
                            labels={element[this.props.labelsId]}
                            titleChanged={this.props.titleChanged}
                            delLabelClicked={this.props.delLabelClicked}
                            addLabelClicked={this.props.addLabelClicked}
                            addLabelText={this.props.addLabelText}
                          />
                    )
                }) }
                <li id="add_plan_box">
                    <a onClick={this.props.addCardClicked}>
                        <img src="images/add.png"/>
                        { this.props.addCardText }
                    </a>
                </li>
            </ul>
        );
    }
}
