import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect, useState } from "react"
import TrackInfo from "../components/TrackPage/TrackInfo"
import TracksRelated from "../components/TrackPage/TracksRelated"

const TrackPage = () => {

  
  const { id } = useParams()

  const [track, getTrack] = useFetch()

  useEffect(() => {
    getTrack(`/api/tracks/${id}`)
  }, [id])


  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }
  
  

  return (
    <div className="trackpage">
      <div className="trackpage__btnBack" onClick={handleBack}><i className='bx bx-chevron-left'></i>Back</div>
      <TrackInfo
        track={track}
      />
      <TracksRelated
        artist={track?.artists[0].name}
      />
    </div>
  )
}

export default TrackPage
