import React, { Component, PropTypes } from 'react'
import CardList from './components/CardList'
import 'babel-core/polyfill'
import { render } from 'react-dom'

var plans = [{
    "status":1,
    "contract_id":1,
    "start_time":"2015/09/30",
    "event_quota":5000,
    "devices":[{
        "event_total":800,
        "nickname":"8714C72MVTKYXV3B111A",
        "uid":"8714C72MVTKYXV3B111A",
        "color_tag":"#ffaf69"
    },{
        "event_total":1500,
        "nickname":"test1",
        "uid":"test1",
        "color_tag":"#7a96f8"
    }],
    "price":"38.95",
    "currency":"usd",
    "payer_account":"luis",
    "is_valid":true,
    "ticket_id":
    "I-144A3YDUJGP8",
    "end_time":"2016-09-30T00:00:00Z",
    "desc":"event 5000 / 1 year",
    "nickname":"abc",
    "contract_period":"Annual",
    "product_id":8
},{
    "status":1,
    "contract_id":25,
    "start_time":"2015/11/10",
    "event_quota":5000,
    "devices":[{
        "event_total":5000,
        "nickname":"YGZJ63VS159GSLAN111A",
        "uid":"YGZJ63VS159GSLAN111A",
        "color_tag":"#7a96f8"
    }],
    "price":"35.95",
    "currency":"usd",
    "payer_account":"pepe",
    "is_valid":true,
    "ticket_id":"I-MVECDJY0BBBR",
    "end_time":"2016-01-10T00:00:00Z",
    "desc":"event 5000 / 1 month",
    "nickname":"5000",
    "contract_period":"Monthly",
    "product_id":4
},{
    "status":1,
    "contract_id":26,
    "start_time":"2015/11/11",
    "event_quota":5000,
    "devices":[{
        "event_total":5000,
        "nickname":"ZRTDVGRK2PVNBJ6XKZP1",
        "uid":"ZRTDVGRK2PVNBJ6XKZP1",
        "color_tag":"#79cbd3"
    }],
    "price":"35.95",
    "currency":"usd",
    "payer_account":"garcia",
    "is_valid":true,
    "ticket_id":"I-4ANAD7T3UV6T",
    "end_time":"2016-01-11T00:00:00Z",
    "desc":"event 5000 / 1 month",
    "nickname":"5000",
    "contract_period":"Monthly",
    "product_id":4
}];


class PlanList extends Component {
    _dummy(params) {
        console.log('dummy')
    }

    render() {
        return (
            <CardList
                cards={plans}
                cardId='contract_id'
                labelsId='devices'
                labelId='uid'
                titleChanged={this._dummy.bind(this)}
                delLabelClicked={this._dummy.bind(this)}
                addLabelClicked={this._dummy.bind(this)}
                addLabelText='Binding Camera'
                addCardClicked={this._dummy.bind(this)}
                addCardText='Add Plan'
              />
        )
    }
}

render(
  <PlanList></PlanList>,
  document.getElementById('root')
)
