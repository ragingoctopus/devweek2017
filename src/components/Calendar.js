import React from 'react';
import Calendar from 'rc-calendar';
import 'rc-calendar/assets/index.css';
import DatePicker from 'rc-calendar/lib/Picker';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';

export default class CalendarPicker extends React.Component {
  constructor(){
    super()
    this.state = {
      value: ""
    }
  }

  onChange(value) {
    var d = new Date(value);

    var year = d.getFullYear();
    var month = "0" + d.getMonth();
    var day = d.getDay();

    var fulldate = year + "-" + month + "-" + day;
    this.setState({
      value: value
    })
  }

  getFormat(time) {
    return 'YYYY-MM-DD';
  }

  render() {
    const context = this;
    const state = this.state;

    const calendar = (<Calendar
      style={{ zIndex: 1000 }}
      dateInputPlaceholder="please input"
    />);

    return (
      <DatePicker
          animation="slide-up"
          calendar={calendar}
          value={state.value}
          onChange={this.onChange.bind(this)}
        >
          {
            ({ value }) => {
              return (
                <span tabIndex="0">
                <input
                  placeholder="please select"
                  style={{ width: 250 }}
                  readOnly
                  tabIndex="-1"
                  className="ant-calendar-picker-input ant-input"
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

