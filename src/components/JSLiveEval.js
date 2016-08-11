import React from 'react';
import './JSLiveEval.css';
// import input from "../input.js";
import input from "../input";

const JSLiveEval = React.createClass({

  // componentWillReceiveProps(nextProps) {
  // }

  render() {
    console.log(input);
    return(
      <div className="JSLiveEval">
        <h1>JSLiveEval</h1>
        <p>{{ input }}</p>
        {{ /*<div class="flexContainer">
          <pre><code class="evalInput"> {{ this.props.evalInput }}</code></pre>
          <pre><code class="evalOutput"> {{ this.state.evalOutput }}</code></pre>
          </div> */ }}
      </div>
    );
  }
});

export default JSLiveEval;
