
const ArtistInfo = ({ artist }) => {
  return (
    <section className="artistInfo">
      <header className="artistInfo__header">
        <img className="artistInfo__header--img" src={artist?.images[0].url} alt="" />
      </header>
      <article className="artistInfo__info">
        <h2 className="artistInfo__info--name">{artist?.name}</h2>
        <ul className="artistInfo__info--list">
          <li className="artistInfo__info--item"><span>Followers: </span><span>{artist?.followers.total}</span></li>
          <li className="artistInfo__info"><span>Popularity: </span><span>{artist?.popularity}</span></li>
          <li className="artistInfo__info">
            <span className="artistInfo__info--genres">Genres: </span>
            <ul className="artistInfo__info--genres-item">
              {
                artist?.genres.map(genre => (
                  <li key={genre}>{genre}</li>
                ))
              }  
            </ul>  
          </li>
        </ul>
      </article>
    </section>
  )
}

export default ArtistInfo
