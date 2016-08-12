import React from 'react';
import code from '../playground/code.js';
let o;

class Foo {
  constructor(attrs) {
    this.attrs = attrs;
  }
}

o = new Foo({some: 'thing', is: 'weird'});
o = 1+1;
// class Foo extends Bar {
//   constructor() {
//     super;
//   }
// }
//
// o = 




const Input = React.createClass({

  output(s) {
    if (s !== null && typeof s === 'object') {
      return JSON.stringify(s);
    } else {
      return s;
    }
  },

  render() {
    return(
      <div>{this.output(o)}</div>
    );
  }
});

export default Input;
