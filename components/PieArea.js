import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import PieChart from './PieChart'
import '../styles/PieArea.less'

export default class PieArea extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardName: props.cardName
        }
        this.updateTitle = this.updateTitle.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        var dataset = {
                id: [],
                value: [],
                color: []
            },
            container = '#chart_' + this.props.cardId,
            elem = this.refs['pie-' + this.props.cardId];

        this.props.labels.map((element, i) => {
            dataset.id.push(element[this.props.labelId]);
            dataset.value.push(element.event_total);
            dataset.color.push(element.color_tag);
        });

        this.props.pie[this.props.cardId] = new PieChart({
            dataset: dataset,
            total: this.props.plan.event_quota,
            container: container,
            mouseover: function (id) {
                $(elem).find('.label_list li').each(function () {
                    if ($(this).find('.close_s').data(this.props.labelId) === id) {
                        $(this).css('background-color', '#f0f0f2');
                    }
                });
            },
            mouseout: function (id) {
                $(elem).find('.label_list li').each(function () {
                    if ($(this).find('.close_s').data(this.props.labelId) === id) {
                        $(this).css('background-color', '');
                    }
                });
            }
        });
    }

    updateTitle() {
        this.props.titleChanged(
          this.state.cardName,
          this.props.cardName,
          this.props.cardId
        );
    }

    handleChange(event) {
        this.setState({
            cardName: event.target.value
        })
    }

    render() {
        return (
            <span>
                <div
                  className="example"
                  ref={'pie-' + this.props.cardId}
                  id={'chart_' + this.props.cardId}
                  onpagenavigation>
                </div>
                <input
                  id={'card_name_' + this.props.cardId}
                  ref={'input-text-' + this.props.cardId}
                  type="text"
                  className="card_name"
                  value={this.state.cardName}
                  maxLength="25"
                  onBlur={this.updateTitle}
                  onChange={this.handleChange}>
                </input>
            </span>
        );
    }
}

