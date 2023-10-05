import { useState } from "react"

const TrackInfo = ({ track }) => {
  const [isShowPlayer, setIsShowPlayer] = useState(false)

  const handlePlayer = () => {
    setIsShowPlayer(!isShowPlayer)
  }
  return (
    <div className="trackinfo">
      <article className="trackinfo__article">
        <div className='trackinfo__body'>
          <header className="trackinfo__body--header">
            <img onClick={handlePlayer} src={track?.album.images[0].url} alt="" />
          </header>
          <section className='trackinfo__info'>
            <h3 className="trackinfo__info--name">{track?.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')}</h3>
            <ul className="trackinfo__info--list">
              {
                track?.artists.map(artist => (
                  <li key={artist.id}>{artist.name}</li>
                ))
              }
            </ul>
            <p><span>Album: </span>{track?.album.name}</p>
            <p><span>Release Date: </span>{track?.album.release_date}</p>
          </section>
        </div>
      </article>
      {
        isShowPlayer
        && (
          <iframe className="trackinfo_iframe" style={{borderRadius:'12px'}} src={`https://open.spotify.com/embed/track/${track?.id}?utm_source=generator&theme=0`} width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        )
      }
    </div>
  )
}

export default TrackInfo
