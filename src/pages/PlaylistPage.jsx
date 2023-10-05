import React, { useEffect } from 'react'
import usePlaylist from '../hooks/usePlaylist'
import PlaylistInfo from '../components/PlaylistPage/PlaylistInfo'
import { useNavigate } from 'react-router-dom'

const PlaylistPage = () => {

  const { getPlaylist, playlist } = usePlaylist()

  const navigate = useNavigate()

  useEffect(() => {
    getPlaylist()
  }, [])

  console.log(playlist)
  const handleBack = () => {
    navigate(-1)
  }
  
  return (
    <article className='PlaylistPage'>
      <div  onClick={handleBack} className="trackpage__btnBack"><i className='bx bx-chevron-left'></i>Back</div>
      <div className='playlis__info'>
        {
          playlist.map(track => (
            <PlaylistInfo
              key={track.id}
              track={track}
            />
          ))
        }
      </div>
    </article>
  )
}

export default PlaylistPage
