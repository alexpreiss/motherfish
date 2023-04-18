import React from 'react'
// import SpotifyPlayer from 'react-spotify-player'

import waterTemple from './images/water-temple.jpg'
// import alexpreiss from './images/alexpreiss.png'
import spotifyLogo from './images/logo-spotify.png'
import appleMusicLogo from './images/logo-apple-music.png'
import youtubeLogo from './images/logo-youtube.png'
import soundcloudLogo from './images/logo-sound-cloud.png'
import instagramLogo from './images/logo-instagram.png'
import tiktokLogo from './images/logo-tiktok.png'

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
        backgroundColor: 'white',
        // boxShadow: '0px 1px 1px 0px black',
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
        src={waterTemple}
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
          <div style={{ color: 'white' }}>alex preiss</div>
        </div>

        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px'
          }}
        >
          <div
            style={{
              width: '80%',
              maxWidth: '800px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1P0QO-1OHcg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
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
          <div
            style={{
              width: '80%',
              maxWidth: '800px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/videoseries?list=PLUjGOk0IMHGTqKVZ4TG9VhIerEx3qstag"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {link(
          'https://www.youtube.com/channel/UCKx3YtPJvUL9EZI2FC95q5w',
          youtubeLogo,
          'YouTube'
        )}

        {link('https://soundcloud.com/alexfuck', soundcloudLogo, 'Soundcloud')}

        {link(
          'https://open.spotify.com/artist/2LSPkV9a9Gsk4xMWSkLUov?si=0rwgXikEQMqYccULI45CSg',
          spotifyLogo,
          'Spotify'
        )}

        {link(
          'https://open.spotify.com/artist/5orDqEWdsiG6KcltddRwRq',
          spotifyLogo,
          'Spotify (shyman)'
        )}

        {link(
          'https://music.apple.com/us/artist/alex-preiss/1555415354',
          appleMusicLogo,
          'Apple Music'
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
