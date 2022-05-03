import React from 'react'

const bgSet = {
  best: '#2F8DFF',
  good: '#0BDA51',
  worse: '#EEC758',
  worst: 'orange',
  error: 'red',
  null: '#000',
};

const Indicator = () => {
  return (
    <div style={{ display: 'flex', marginBottom: '24px' }}>
      {
        Object.entries(bgSet).map(([key, value]) => {
          return (
            <div
              key={key}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: '8px',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  marginRight: '4px',
                  backgroundColor: value,
                }}
              />
              {key}
            </div>
          )
        })
      }
    </div>
  )
}

export default Indicator
