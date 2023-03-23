import React from 'react'
import SpotifyPlayer from 'react-spotify-player'

import paper from './images/paper.png'
import guitarMan from './images/guitarman.png'
import kojiro from './images/kojiro.png'
import alexpreiss from './images/alexpreiss.png'
import spotifyLogo from './images/logo-spotify.png'
import appleMusicLogo from './images/logo-apple-music.png'
import youtubeLogo from './images/logo-youtube.png'
import soundcloudLogo from './images/logo-sound-cloud.png'
import instagramLogo from './images/logo-instagram.png'
import tiktokLogo from './images/logo-tiktok.png'
import dcfn from './images/dcfn1.png'

function link (href, imgSrc, text) {
  return (
    <a
      href={href}
      style={{
        width: '75%',
        maxWidth: '800px',
        background: 'white',
        marginTop: '30px',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        padding: '20px 0px',
        justifyContent: 'space-around',
        textDecoration: 'none',
        backgroundColor: 'rgba(235, 64, 52, 0)',
        boxShadow: '0px 1px 1px 0px black',
        borderRadius: '10px'
      }}
    >
      <div
        style={{
          width: '33%',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <img
          alt="spotify logo"
          src={imgSrc}
          style={{ height: '40px', marginLeft: '20px' }}
        />
      </div>
      <div style={{ width: '33%', textAlign: 'center', fontWeight: 'bold' }}>
        <div>{text}</div>
      </div>
      <div style={{ width: '33%', color: 'white' }}></div>
    </a>
  )
}

// function link (href, icon, text) {
//   return (
//     <a
//       style={{
//         width: '80%',
//         maxWidth: '800px',
//         display: 'flex',
//         justifyContent: 'space-around',
//         backgroundImage: `url(${paper})`,
//         marginTop: '30px',
//         alignItems: 'center',
//         padding: '10px 20px 10px 20px'
//       }}
//       href={href}
//     >
//       <div style={{ width: '33%' }}>
//         <img src={icon} alt="itunes logo" style={{ height: '40px' }} />
//       </div>
//       <div style={{ width: '33%' }}>
//         <img src={text} alt="itunes text" style={{ height: '40px' }} />
//       </div>
//       <div style={{ width: '33%' }}></div>
//     </a>
//   )
// }

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
        alt="paper"
        src={paper}
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
          width: '100%',
          paddingBottom: '150px'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '95%',
            marginTop: '30px',
            maxWidth: '800px'
          }}
        >
          <img
            style={{ width: '20%', objectFit: 'scale-down' }}
            alt="drawing of face"
            src={kojiro}
          />
          <img
            style={{ width: '50%', objectFit: 'scale-down' }}
            alt="alex preiss"
            src={alexpreiss}
          />
          <img
            style={{ width: '25%', objectFit: 'scale-down' }}
            alt="guitar player"
            src={guitarMan}
          />
        </div>

        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px'
          }}
        >
          <div style={{ width: '80%', maxWidth: '800px' }}>
            <SpotifyPlayer
              size={{ height: '80px', width: '100%' }}
              uri="spotify:track:1dHbJMZhZiN3tUfHg8NRjR"
            />
          </div>
        </div>

        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px'
          }}
        >
          <div style={{ width: '80%', maxWidth: '800px' }}>
            <SpotifyPlayer
              size={{ height: '80px', width: '100%' }}
              uri="spotify:track:6TEk7dTCl7wqQRVBSkKhik"
            />
          </div>
        </div>

        {link('https://ffm.to/dcfn', dcfn, 'D,C,FN pre-save')}

        {link(
          'https://open.spotify.com/artist/2LSPkV9a9Gsk4xMWSkLUov?si=0rwgXikEQMqYccULI45CSg',
          spotifyLogo,
          'Spotify'
        )}

        {link(
          'https://music.apple.com/us/artist/alex-preiss/1555415354',
          appleMusicLogo,
          'Apple Music'
        )}

        {link('https://www.youtube.com/c/alexfuck', youtubeLogo, 'YouTube')}

        {link(
          'https://soundcloud.com/alexspreiss',
          soundcloudLogo,
          'Soundcloud'
        )}

        {link('https://www.tiktok.com/@alex.preiss/', tiktokLogo, 'TikTok')}

        {link(
          'https://instagram.com/alex._.preiss',
          instagramLogo,
          'Instagram'
        )}
      </div>
    </div>
  )
}

export default App
