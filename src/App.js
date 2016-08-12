import React from 'react';
import './App.css';
import 'highlight.js/styles/idea.css';
import JSONTree from 'react-json-tree';
import Highlight from 'react-highlight';
import code from './playground/code';

const App = React.createClass({

  evaluateCode(func) {
    try {
      let x = func();
      console.clear();
      return x;
    } catch (e) {
      console.log("Error in evaluateCode:", e);
      return `Error in evaluateCode: ${JSON.stringify(e)}`
    }
  },

  formattedOutput(output) {
    // return output;
    // return JSON.stringify(output, null, '  ');
    if (output !== null && typeof s === 'object') {
      // cannot render objects directly in JSX
      // also add pretty printing
      return JSON.stringify(output, null, '  ');
    } else if (typeof Array.isArray(output)) {
      // pretty-printed arrays take up too much space
      return JSON.stringify(output);
    } else {
      return output;
    }
  },

  render() {
    return (
      <div className="App">
        <h1 className="title">JS Live Eval</h1>
        <h2>Output</h2>
        <pre className="output">
          { this.formattedOutput(this.evaluateCode(code.fnToEvaluate)) }
        </pre>

        <h2>Pretty Output</h2>
        <JSONTree data={ this.evaluateCode(code.fnToEvaluate) } />

        <h2>Compiled Source Code (ES5)</h2>
        <Highlight language="javascript" className="es5Source">
          { code.compiledSource }
        </Highlight>
        <br />
        <br />
      </div>
    );
  }
});

export default App;
