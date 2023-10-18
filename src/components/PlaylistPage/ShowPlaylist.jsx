
import { useNavigate, useParams } from 'react-router-dom'
import usePlaylist from '../../hooks/usePlaylist'
import { useEffect, useState } from 'react'
import TrackPlaylist from '../../shared/TrackPlaylist'

const ShowPlaylist = () => {
  const [showCassete, setShowCassete] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()

  const { playlist, getPlaylist } = usePlaylist()
  useEffect(() => {
    getPlaylist()
  }, [])

  const tracks = () => {
    return playlist.find(track => track?.id === id)
  }

  const handleCassete = (e) => {
    e.preventDefault()
    setShowCassete(!showCassete)
  }
  const handleBack = () => {
    navigate(-1)
  }

  const track = tracks()
  // console.log(track)
  return (
    <section className='showplaylist'>
      <div  onClick={handleBack} className="showplaylist__btnBack"><i className='bx bx-chevron-left'></i>Back</div>
      <div className='form__cassete'>
        <div className={`${showCassete ? 'showplaylist__ladoA' : 'showplaylistformA'}`} >
          <div className='form__img'>
            <img className='form__ladoA--img' src="/images/LADO_A.png" alt="" />
          </div>
          <div className="playlistinfo__title">{track?.title}</div>
        </div>
        <div className={`${showCassete ? 'showplaylist__ladoB' : 'showplaylistform'}`}>
          {/* <label htmlFor="to">To</label> */}
          <div className='form__img'>
            <img className='form__ladoA--img' src="/images/LADO_B.png" alt="" />
          </div>
          <div className="playlistinfo__title">{track?.to}</div>
          <div className="playlistinfo__message">{track?.message}</div>
        </div>
      </div>
      <button className='showplaylist__btn' onClick={handleCassete} >{`${showCassete ? 'LADO A ' : 'LADO B'}`}<svg className='arrow_white' viewBox="0 0 18 20" fill="none"  xmlns="http://www.w3.org/2000/svg"><path d="M1 15H13M1 15L4.5 11.5M1 15L4.5 18.5M4 5H17M17 5L13.5 1.5M17 5L13.5 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <div className='showplaylist__tracks'>
        {
          track?.tracks.map(t => (
            <TrackPlaylist
              key={t.id}
              track={t}
            />
          ))
        }
      </div>
    </section>
  )
}

export default ShowPlaylist
