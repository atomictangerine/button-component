import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

class Button extends PureComponent {
  render() {
    const {
      onClick,
      type,
      text,
      disabled,
    } = this.props;
    
    // Ideally, would have liked to take the logic out of the className to make it easier to read
    // this would be something good to test too, that the right class names show up depending on the type
    return (
      <button
        className={`button ${disabled ? `button--${type}__disabled` : `button--${type}`}`}
        onClick={onClick}
      >
        <span>{text}</span>
      </button>
    )
  }
}

// Instead of .string I would have like to make these enums in a constants file so that
// people don't have to keep typing 'primary', etc and risk typos.
Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.object, //ideally we would have an svg class and we would check for that here
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  type: 'primary',
  disabled: false,
}

export default Button;