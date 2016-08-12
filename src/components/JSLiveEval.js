import React from 'react';
import './JSLiveEval.css';
import Input from "./Input.js";

const JSLiveEval = React.createClass({

  // componentWillReceiveProps(nextProps) {
  // }

  render() {
    console.log(input);
    return(
      <div className="JSLiveEval">
        <h1>JSLiveEval</h1>
        <Input />
        { /*<div class="flexContainer">
          <pre><code class="evalInput"> {{ this.props.evalInput }}</code></pre>
          <pre><code class="evalOutput"> {{ this.state.evalOutput }}</code></pre>
          </div> */ }
      </div>
    );
  }
});

export default JSLiveEval;
