
const PlaylistInfo = ({ track }) => {


  return (
    <section className='playlistinfo'>
      <div className='playlistinfo__img'>
        <img className='' src="/images/LADO_A.png" alt="" />
      </div>
      <div className="playlistinfo__title">{track.title}</div>
    </section>
  )
}

export default PlaylistInfo
