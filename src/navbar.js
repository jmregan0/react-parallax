import * as React from 'react';

export default () => {
  return (
    <div style={{
      width: '100vw',
      height: '4rem',
      backgroundColor: '#857375',
      opacity: '0.9',
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transition: 'top 0.3s'
    }}>
      <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%'}}>
        <button
          style={{border: 'none', outline: 'none', fontFamily: 'Barlow', cursor: 'pointer', background: 'none', paddingTop: '1rem'}}
          onClick={() => {window.open("#")}}><u>Link1</u></button>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <p style={{fontFamily: 'Barlow', margin: 0, paddingTop: '1rem', color: 'black', fontSize: '24px'}}>Your Name</p>
          </div>
        <button
          style={{border: 'none', outline: 'none', fontFamily: 'Barlow', cursor: 'pointer', background: 'none', paddingTop: '1rem'}}
          onClick={() => {window.open("#")}}><u>Link2</u></button>
      </div>
    </div>
  )
}
