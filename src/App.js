import React from 'react';
import './App.css';
import 'highlight.js/styles/idea.css';
import JSONTree from 'react-json-tree';
import Highlight from 'react-highlight';
import code from './playground/code';

const App = React.createClass({
  evaluateCode(func) {
    try {
      return func();
    } catch (e) {
      console.error('Error in evaluateCode:', e);
      return `Error in evaluateCode: ${e}`;
    }
  },

  formattedOutput(output) {
    // return output;
    // return JSON.stringify(output, null, '  ');
    if (output !== null && typeof s === 'object') {
      // cannot render objects directly in JSX
      // also add pretty printing
      return JSON.stringify(output, null, '  ');
    } else if (Array.isArray(output)) {
      // pretty-printed arrays take up too much space
      return JSON.stringify(output);
    } else {
      return output;
    }
  },

  render() {
    const returnValue = this.evaluateCode(code.fnToEvaluate);
    return (
      <div className='App'>
        {returnValue &&
          <div>
            <h2>Returned Value</h2>
            <pre className='output'>
              {this.formattedOutput(returnValue)}
            </pre>
          </div>
        }

        {returnValue &&
          <div>
            <h2>Pretty Output</h2>
            <JSONTree data={returnValue} />
          </div>
        }

        <br />
        <br />
        <h2>Compiled Source Code (ES5)</h2>
        <Highlight language='javascript' className='es5Source'>
          { code.compiledSource }
        </Highlight>
        <br />
        <br />
      </div>
    );
  }
});

export default App;
