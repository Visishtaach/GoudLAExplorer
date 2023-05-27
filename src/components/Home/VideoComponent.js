import React from 'react'
import data from '../../../src/Particles_v02.json'

const video = {
  "v": "5.7.4",
  "fr": 25,
  "ip": 0,
  "op": 250,
  "w": 1920,
  "h": 440,
  "nm": "Particles_v02",
  "ddd": 0,
  "assets": [
    {
      "id": "image_0",
      "w": 12,
      "h": 12,
      "u": "",
      "p": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMBAMAAACkW0HUAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJFBMVEVHcEwAyf8Ayf8AzP8AyP8Ayf8Ayf8Ayf8Ayf8AzP8Axv8Ayf+823mWAAAADHRSTlMA3+0PlbLQWWgeLaSQn3TKAAAAQ0lEQVQI12NgmKKk6MzAwC6kpKS4gGGiEhAkMziBKA0GEKmkCqEUIZQagxCI0oYoUWcwBFEBDFxJQIUGDAwWgdkFDAAD3Aw5Ui16NQAAAABJRU5ErkJggg==",
      "e": 1
    },
    {
      "id": "image_1",
      "w": 12,
      "h": 12,
      "u": "",
      "p": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMBAMAAACkW0HUAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAKlBMVEVHcEwAyf8Ayf8AzP8Ayf8AyP8Ayf8Ayf8AyP8Ayf8Ayf8Ayv8Ayv8Ayv9I8eDVAAAADnRSTlMA8z0P1S7GJqiJejVb5RHZc4cAAABFSURBVAjXY2DQEBRZwMDAIygoKGbAoAikBCcwNIIoYQYQKSgNoYRglCOIEmdYCKIcGNiApGwAA/NEQUFXBgYG5k3qDAwAY7UIvKqTU0sAAAAASUVORK5CYII=",
      "e": 1
    },
  ]
  }
const VideoComponent = () => {
    const assets = data.assets;
    console.log(assets)
    // Object.entries(data).forEach(([key, value])=>{
    //     console.log('keys', key)
    // })
  return (
    <div>
     {video.assets.map((asset,index) => (
      // <img src={asset.p}/>
        <video
          key={asset.id}
          width={data.w}
          height={data.h}
          controls
        >
          <source src={asset.p} type="video/mp4" />
        </video>
      ))} 
    </div>
  )
}

export default VideoComponent
