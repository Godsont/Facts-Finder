import React from 'react';
import PropTypes from 'prop-types'

const CustomInput = props => (
  <button
    className="customDOB"
    onClick={props.onClick}>
    {props.value}
  </button>
)

CustomInput.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string
};

export default CustomInput;