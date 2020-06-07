// react libraries
import * as React from 'react';

// Interface
import { CardProps } from './interface';

// Styles
import './Card.scss';

export default (props: CardProps) => {
  const { classes, children, ...rest } = props;
  return (
    <div className={`card-theme ${classes}`} {...rest}>
      {children}
    </div>
  );
};
