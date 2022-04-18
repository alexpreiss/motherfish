import React from 'react'
import SpotifyPlayer from 'react-spotify-player'

import blood from './images/blood.jpg'
import spotifyLogo from './images/logo-spotify.png'
import appleMusicLogo from './images/logo-apple-music.png'
import youtubeLogo from './images/logo-youtube.png'
import soundcloudLogo from './images/logo-sound-cloud.png'
import instagramLogo from './images/logo-instagram.png'
import tiktokLogo from './images/logo-tiktok.png'
import selfControlCover from './images/self-control-art.JPEG'

function link (href, imgSrc, text) {
  return (
    <a
      href={href}
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
          width: '100%',
          paddingBottom: '150px'
        }}
      >
        <div style={{ marginTop: '50px', fontSize: '30px' }}>
          {' '}
          alex preiss || motherfish
        </div>

        <a
          href="https://distrokid.com/hyperfollow/alexpreiss/self-control"
          style={{
            display: 'flex',
            width: '75%',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '50px',
            background: 'white',
            padding: '20px 0px',
            textDecoration: 'none'
          }}
        >
          <img
            style={{ height: '150px' }}
            alt="self control cover"
            src={selfControlCover}
          />
          <div
            style={{
              fontWeight: 'bold',
              color: 'black',
              marginTop: '15px'
            }}
          >
            self control
          </div>
          <div
            style={{
              color: 'black',
              marginTop: '5px'
            }}
          >
            Releases May 1st
          </div>
          <div
            style={{
              color: 'black',
              marginTop: '10px',
              fontSize: '10px'
            }}
          >
            Click here to Pre-save
          </div>
        </a>

        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px'
          }}
        >
          <SpotifyPlayer
            size={{ height: '80px', width: '75%' }}
            uri="spotify:track:6TEk7dTCl7wqQRVBSkKhik"
          />
        </div>

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

        {link(
          'https://www.youtube.com/c/motherfish',
          youtubeLogo,
          'YouTube / Live Stream'
        )}

        {link(
          'https://soundcloud.com/alexspreiss',
          soundcloudLogo,
          'SoundCloud'
        )}

        {link('https://www.tiktok.com/@alex.preiss/', tiktokLogo, 'TikTok')}

        {link(
          'https://instagram.com/alex._.preiss',
          instagramLogo,
          'Instagram'
        )}

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
