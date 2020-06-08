// react libraries
import * as React from 'react';

export default ({ color }: any) => (
  <div
    className="color"
    style={{
      backgroundColor: color,
      width: 20,
      height: 20,
      borderRadius: '50%',
      margin: '0 0.25rem'
    }}
  ></div>
);
