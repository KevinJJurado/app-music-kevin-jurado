import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ArtistInfo from '../components/ArtistPage/ArtistInfo'
import AlbumArtist from '../components/ArtistPage/AlbumArtist'
import ArtistSongsTop from '../components/ArtistPage/ArtistSongsTop'

const ArtistPage = () => {

  const { id } = useParams()

  const [ artist, getArtist ] = useFetch()

  useEffect(() => {
    getArtist(`/api/artists/${id}`)
  }, [id])

  
  return (
    <div className='artistpage'>
      <Link className='artistpage__link' to='/'><i className='bx bx-chevron-left'></i>Back</Link>
      <ArtistInfo 
        artist={artist}
      />
      <AlbumArtist 
        albums={artist?.albums} 
      />
      <ArtistSongsTop
        tracks={artist?.songsTop}
      /> 
    </div>
  )
}

export default ArtistPage
