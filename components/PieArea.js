import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import PieChart from './PieChart'

export default class PieArea extends Component {
    // props:
    // plan + updatePlanText
    // this.props.id -> this.props.plan.contract_id
    // this.props.name -> this.props.plan.nickname
    // this.props.labels -> this.props.plan.devices
    componentDidMount() {
        var dataset = {
                uid: [],
                value: [],
                color: []
            },
            container = '#chart_' + this.props.cardId,
            elem = this.refs['pie-' + this.props.cardId];

        this.props.labels.map(function (element, i) {
            dataset.uid.push(element.uid);
            dataset.value.push(element.event_total);
            dataset.color.push(element.color_tag);
        });

        new PieChart({
            dataset: dataset,
            total: this.props.plan.event_quota,
            container: container,
            mouseover: function (uid) {
                $(elem).find('.VCam_menu li').each(function () {
                    if ($(this).find('#close_s').data('uid') === uid) {
                        $(this).css('background-color', '#f0f0f2');
                    }
                });
            },
            mouseout: function (uid) {
                $(elem).find('.VCam_menu li').each(function () {
                    if ($(this).find('#close_s').data('uid') === uid) {
                        $(this).css('background-color', '');
                    }
                });
            }
        });
    }

    updateTitle() {
        this.props.titleChanged(
            $(this.refs['input-text-' + this.props.cardId]).value,
            this.props.name,
            this.props.cardId
        );
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
                  id="device_name"
                  ref={'input-text-' + this.props.cardId}
                  type="text"
                  className={'device_name_' + this.props.cardId}
                  value={this.props.name}
                  maxLength="25"
                  onBlur={this.updateTitle}>
                </input>
            </span>
        );
    }
}

