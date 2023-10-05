import React from 'react'
import { addTrack } from '../../store/slices/tracks.slice'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const TrackCard = ({ track }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAddTrack = () => {
    dispatch(addTrack(track))
  }

  const handleArtist = (id) => {
    navigate(`/artist/${id}`)
  }

  return (
    <section className='card'>
      <header className='card__header'>
        <img className='card__header--img' src={track.album.images[0].url} alt="" />
      </header>
      <article className='card__body'>
        <Link className='card__body--link' to={`/track/${track.id}`}><h3 className='card__body--name'>{track.name.normalize('NFD').replace(/[\u0300-\u036f]/g,'')}</h3></Link>    
        <ul className='card__body--list'>
          {
            track.artists.map(artist => (
              <li onClick={() => handleArtist(artist.id)} key={artist.id}>{artist.name}</li>
            ))
          }
        </ul>
      </article>
      <footer className='card__footer'>
        <a className='card__footer--icon' target='_blank' href={track.external_urls.spotify}>
          <i className='bx bxl-spotify spo' ></i>
        </a>
        <button className='card__footer--icon add' onClick={handleAddTrack}>
          <i className='bx bx-plus-circle'></i>
        </button>
      </footer>
    </section>
  )
}

export default TrackCard
