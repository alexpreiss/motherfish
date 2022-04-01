import React from 'react'
import SpotifyPlayer from 'react-spotify-player'

import blood from './images/blood.jpg'

function App () {
  return (
    <div style={{ position: 'relative' }}>
      <img
        style={{
          position: 'fixed',
          overflow: 'hidden',
          width: '100%',
          height: '100vh'
        }}
        alt="blood"
        src={blood}
      />

      <div
        style={{
          background: 'black',
          opacity: '.3',
          position: 'fixed',
          zIndex: '2',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0'
        }}
      ></div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'absolute',
          color: 'white',
          zIndex: '3',
          width: '100%'
        }}
      >
        <div style={{ marginTop: '50px', fontSize: '30px' }}>
          {' '}
          alex preiss || motherfish
        </div>

        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px'
          }}
        >
          <SpotifyPlayer
            size={{ height: '80px', width: '70%' }}
            uri="spotify:track:6TEk7dTCl7wqQRVBSkKhik"
          />
        </div>
        {
          // <div
          //   style={{
          //     marginTop: '75px',
          //     backgroundColor: 'rgba(255, 255, 255)',
          //     color: 'black',
          //     width: '70%',
          //     display: 'flex',
          //     flexDirection: 'column',
          //     alignItems: 'center',
          //     padding: '20px 20px',
          //     fontSize: '25px',
          //     fontFamily: 'Oswald, sans-serif'
          //   }}
          // >
          //   Music
          // </div>
          // <div
          //   style={{
          //     marginTop: '50px',
          //     backgroundColor: 'rgba(255, 255, 255)',
          //     color: 'black',
          //     width: '70%',
          //     display: 'flex',
          //     flexDirection: 'column',
          //     alignItems: 'center',
          //     padding: '30px 20px',
          //     fontSize: '14px',
          //     fontFamily: "'Press Start 2P', cursive"
          //   }}
          // >
          //   Live Stream
          // </div>
        }
      </div>
    </div>
  )
}

export default App
