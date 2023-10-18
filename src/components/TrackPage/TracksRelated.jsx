import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import TrackCard from "../HomePage/TrackCard"

const TracksRelated = ({ artist }) => {

  const [ tracksList, getTracksList ] = useFetch()

  useEffect(() => {
    if (artist) {
      getTracksList(`/api/tracks?limit=10&q=${artist}`)
    }
  }, [artist])

  
  return (
    <section className="trackRelated">
      <h3 className="trackRelated__title">Track Related</h3>
      <div className="trackRelated__artists">
        {
          tracksList?.tracks.items.map(track => (
            <TrackCard 
              key={track.id}
              track={track}
            />
          ))
        }
      </div>
    </section>
  )
}

export default TracksRelated
