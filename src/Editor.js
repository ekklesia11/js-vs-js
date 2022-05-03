import React, { useState, useEffect } from 'react'
import AceEditor from 'react-ace'
import Result from './Result'

import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

const Editor = ({ runState, name, isLoaded }) => {
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (runState !== null) {
      setTimeout(() => {
        RunCode(code);
        isLoaded();
      }, 0);
    }
  }, [runState]);

  const RunCode = (script) => {
    try {
      const res = new Function(script)();
      setResult(() => {
        if (!isNaN(res)) {
          return res.toFixed(2)
        } else {
          return null;
        }
      });
    } catch (err) {
      console.log('ERROR:: ', err);
      setResult(() => 'error');
    }
  };

  const handleSetCode = (value) => {
    setCode(() => `
      try {
        const start = performance.now();
        ${value}
        const end = performance.now() - start;
        return end;
      } catch (err) {
        throw err;
      }
    `);
  }

  return (
    <div style={{ marginBottom: '24px' }}>
      <AceEditor
        mode='javascript'
        theme='monokai'
        onChange={handleSetCode}
        name={name}
        placeholder='write code ...'
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          tabSize: 2,
          useWorker: false,
        }}
        height='200px'
        width='400px'
        wrapEnabled={true}
        style={{
          borderRadius: '15px 15px 0 0',
        }}
      />
      <Result result={result} />
    </div>
  )
}

export default Editor
