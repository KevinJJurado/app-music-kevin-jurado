import AlbumCard from "./AlbumCard"

const AlbumArtist = ({ albums }) => {
  return (
    <section className="albumartist">
      <h3 className="albumartist__title">Artist's Album</h3>
      <div className="albumartist__body">
        {
          albums?.map(albumInfo => (
            <AlbumCard 
              key={albumInfo.id}
              album={albumInfo}
            />
          ))
        }
      </div>
    </section>
  )
}

export default AlbumArtist
