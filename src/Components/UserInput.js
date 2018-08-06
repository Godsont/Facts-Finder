import React from 'react';
import CustomInput from './CustomInput'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const UserInput = props => (
  <div className="userinput">
    <DatePicker
      customInput={<CustomInput />}
      selected={props.startDate}
      onChange={props.getDate} />
  </div>
);

export default UserInput;
