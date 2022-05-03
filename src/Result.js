import React from 'react'

const bgSet = {
  best: '#2F8DFF',
  good: '#0BDA51',
  worse: '#EEC758',
  worst: 'orange',
  error: 'red',
  null: '#000',
};

const Result = ({ result, loading }) => {
  const getBackgroundColor = (value) => {
    let key;

    if (value === null || value === 'error') {
      return bgSet[`${value}`];
    }

    value = parseFloat(value);

    if (value < 500) {
      key = 'best';
    } else if (value < 1000) {
      key = 'good';
    } else if (value < 10000) {
      key = 'worse';
    } else {
      key = 'worst';
    }

    return bgSet[key];
  };

  const getResultDisplay = (value) => {
    if (value === null) {
      return null;
    } else if (value === 'error') {
      return 'ERROR';
    } else {
      return <div>performance: <span style={{ color: 'white' }}>{value}</span> ms</div>
    }
  };

  return (
    <div
      style={{
        backgroundColor: getBackgroundColor(result),
        height: '30px',
        width: '400px',
        zIndex: 10,
        borderRadius: '0 0 15px 15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        padding: '12px 0'
      }}
    >
      {
        loading
        ? <span style={{ color: 'white' }}>running ...</span>
        : getResultDisplay(result)
      }
    </div>
  )
}

export default Result
