import React from 'react';
import Calendar from 'rc-calendar';
import 'rc-calendar/assets/index.css';
import DatePicker from 'rc-calendar/lib/Picker';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';
import '../App.css'
import Moment from 'moment';

export default class CalendarPicker extends React.Component {
  constructor(props){
    super(props)
    var moment = new Moment();
    moment = moment.format(this.getFormat());
    this.state = {
      value: moment
    }
    this.props.handleMenuSelect(moment, "date", this.props.data.type);
  }

  onChange(value) {
    // var d = new Date(value);
    // // console.log(d);
    // // console.log(new Moment())

    // var year = d.getFullYear();
    // var month = d.getMonth() + 1;
    // var month = ("" + month).length === 2 ? month : "0" + month;
    // var day = d.getDate();
    // var day = ("" + day).length === 2 ? day : "0" + day;

    // var fulldate = year + "-" + month + "-" + day;
    
    this.setState({
      value: value
    })

    this.props.handleMenuSelect( value , "date", this.props.data.type );
  }

  getFormat(time) {
    return 'YYYY-MM-DD';
  }

  render() {
    const context = this;
    const state = this.state;

    const calendar = (<Calendar
      style={{ zIndex: 1000 }}
      className='calendar_underline'
      dateInputPlaceholder="please input"
    />);

    return (
      <DatePicker
          animation="slide-up"
          calendar={calendar}
          // value={state.value}
          onChange={this.onChange.bind(this)}
          className='calendar_underline'
          defaultValue={new Moment()}
        >
          {
            ({ value }) => {
              return (
                <span className='calendar_underline' tabIndex="0">
                <input
                  placeholder="please select"
                  readOnly
                  tabIndex="-1"
                  className="ant-calendar-picker-input ant-input "
                  value={value && value.format(context.getFormat(state.showTime)) || ''}
                />
                </span>
              );
            }
          }
        </DatePicker>
    )
  }
}

