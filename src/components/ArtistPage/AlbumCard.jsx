import React from 'react'

const AlbumCard = ({ album }) => {

  const yearReleaseDate = (new Date(album.release_date)).getFullYear()
  return (
    <article className='albumcard'>
      <header className='albumcard__header'>
        <img src={album.images[0].url} alt="" />
      </header>
      <h4 className='albumcard__name'>{album.name}</h4>
      <span className='albumcard__date'>{yearReleaseDate}</span>
    </article>
  )
}

export default AlbumCard
