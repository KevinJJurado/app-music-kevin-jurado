import React from 'react'
import { deleteTracks } from '../store/slices/tracks.slice'
import { useDispatch } from 'react-redux'

const TrackPlaylist = ({track}) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteTracks(track))
  }
  return (
    <section className='tracklist'>
      <header className='tracklist__header'>
        <img className='tracklist__header--img' src={track.album.images[0].url} alt="" />
      </header>
      <article className='tracklist__article'>
        <h3 className='tracklist__article--name'>{track.name}</h3>
        <ul className='tracklist__article--list'>
          {
            track.artists.map(artist => (
              <li key={artist.id}>{artist.name}</li>
            ))
          }
        </ul>
      </article>
      <footer onClick={handleDelete} className='tracklist__footer'>
        <i className='bx bx-minus-circle'></i>
      </footer>
    </section>
  )
}

export default TrackPlaylist
