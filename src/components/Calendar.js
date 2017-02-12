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
    var value = moment.format(this.getFormat());
    this.state = {
      value: value
    }
    this.props.handleMenuSelect(value, "date", this.props.data.type);
  }

  onChange(value) {
    value = value.format(this.getFormat());

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

    // this.props.handleMenuSelect(state.value, "date", this.props.data.type);

    // var moment = new Moment();
    // moment = moment.format(this.getFormat());

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

