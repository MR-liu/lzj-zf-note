import React from 'react';
// import objectC from './template/z.js';
import objectC from './template/html.js';

function App() {
  const T = [];
  const [content, setContent] = React.useState('0.Async');

  for (const key in objectC) {
    T.push(<a className={content === key ? 'active' : ''} key={`oc_${key}`} onClick={() => setContent(key)}>{key}</a>);
  }

  return (
    <div className="App">
      <content>
        <div className="nav-box">
        笔记
          <div className="nav">
            {
              T
            }
          </div>
        </div>
        <div className="html-box">
          <div className="html" dangerouslySetInnerHTML={{ __html: objectC[content] }} />
        </div>
      </content>
    </div>
  );
}

export default App;
