import React from 'react';
import Calendar from 'rc-calendar';
import 'rc-calendar/assets/index.css';
import DatePicker from 'rc-calendar/lib/Picker';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';

export default class CalendarPicker extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
  }

  onChange(value) {
    var d = new Date(value);

    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var month = ("" + month).length === 2 ? month : "0" + month;
    var day = d.getDate();
    var day = ("" + day).length === 2 ? day : "0" + day;

    var fulldate = year + "-" + month + "-" + day;
    
    this.setState({
      value: value
    })

    this.props.handleMenuSelect( fulldate , "date", this.props.data.type );
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

