import React, { useState } from 'react'
import Editor from './Editor'
import Indicator from './Indicator'

const App = () => {
  const [runState, setRunState] = useState(null);
  const [loading, setLoading] = useState(false);

  const run = () => {
    setLoading(() => true);
    setRunState((prev) => runState === null ? true : !prev);
  };

  const isLoaded = () => setLoading(() => false);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <h2>Performance Test</h2>
      <h1>JS vs JS</h1>
      {
        ['editor_1', 'editor_2', 'editor_3'].map(item => {
          return <Editor key={item} runState={runState} name={item} isLoaded={isLoaded}/>
        })
      }
      <Indicator />
      <input
        type='button'
        onClick={run}
        disabled={loading}
        value={runState === null ? 'RUN' : loading ? 'running...' : 'RETRY'}
        style={{
          textAlign: 'center',
          height: '52px',
          width: '180px',
          borderRadius: '15px',
          textDecoration: 'none',
          cursor: 'pointer'
        }}
      />
    </div>
  )
}

export default App
