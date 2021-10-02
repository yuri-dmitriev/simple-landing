import React, { Component } from 'react';

import './button.css';

class Button extends Component {
  render() {
    const { isLink, className, href, text } = this.props;
    let elem;
    const props = {
      className,
    };

    if (isLink) {
      elem = 'a';
      props.href = href;
    } else {
      elem = 'button';
    }

    return (
      React.createElement(elem, props, text)
    );
  }
}

export default Button;
