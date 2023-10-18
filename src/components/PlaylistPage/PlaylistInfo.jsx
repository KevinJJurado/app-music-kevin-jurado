import { useNavigate } from "react-router-dom"

const PlaylistInfo = ({ track }) => {

  const navigate = useNavigate()

  const handlePlaylist = () => {
    navigate(`/showplaylist/${track.id}`)
  }

  return (
    <section onClick={handlePlaylist} className='playlistinfo'>
      <div className='playlistinfo__img'>
        <img className='form__ladoA--img' src="/images/LADO_B.png" alt="" />
      </div>
      <div className="playlistinfo__title">{track.to}</div>
      <div className="playlistinfo__message">{track.message}</div>
    </section>
  )
}

export default PlaylistInfo
