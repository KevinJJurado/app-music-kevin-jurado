import React from 'react'
import TrackCard from '../HomePage/TrackCard'

const ArtistSongsTop = ({ tracks }) => {
  return (
    <section className='artisttopsongs'>
      <h3 className='artisttopsongs__title'>Artist's Top Songs</h3>
      <div className='artisttopsongs__body'>
        {
          tracks?.map(trackInfo => (
            <TrackCard 
              key={trackInfo.id}
              track={trackInfo}
            />
          ))
        }
      </div>
    </section>
  )
}

export default ArtistSongsTop
