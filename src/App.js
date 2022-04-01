import React from 'react'
import SpotifyPlayer from 'react-spotify-player'

import blood from './images/blood.jpg'
import spotifyLogo from './images/logo-spotify.png'

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
            size={{ height: '80px', width: '75%' }}
            uri="spotify:track:6TEk7dTCl7wqQRVBSkKhik"
          />
        </div>

        <a
          href="https://open.spotify.com/artist/2LSPkV9a9Gsk4xMWSkLUov?si=0rwgXikEQMqYccULI45CSg"
          style={{
            width: '75%',
            background: 'white',
            marginTop: '30px',
            color: 'black',
            display: 'flex',
            alignItems: 'center',
            padding: '20px 0px',
            justifyContent: 'space-around',
            textDecoration: 'none'
          }}
        >
          <div style={{ width: '33%' }}>
            <img
              alt="spotify logo"
              src={spotifyLogo}
              style={{ height: '40px', marginLeft: '20px' }}
            />
          </div>
          <div
            style={{ width: '33%', textAlign: 'center', fontWeight: 'bold' }}
          >
            <div>Spotify</div>
          </div>
          <div style={{ width: '33%', color: 'white' }}>empty</div>
        </a>

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
