import { useEffect, useRef, useState } from "react"
import useFetch from "../hooks/useFetch"
import TrackCard from "../components/HomePage/TrackCard"
import { useDispatch } from "react-redux"


const HomePage = () => {

  const [listTraks, getlistTracks] = useFetch()
  const [inputValue, setInputValue] = useState('metal')
  const [quantityPerPage, setQuantityPerPage] = useState(10)


  useEffect(() => {
    getlistTracks(`/api/tracks?limit=${quantityPerPage}&q=${inputValue}`)
  }, [inputValue, quantityPerPage])

  const inputSearch = useRef()

  const dispatch = useDispatch()

  const handleSearch = (e) => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const handleTracksPerPage = (e) => {
    setQuantityPerPage(e.target.value)
  }


  return (
    <div className="home">
      <div className="home__body">
        <form className="home__form" onSubmit={handleSearch}>
          <input placeholder="🔍  Search" ref={inputSearch} type="text" />
          <select onChange={handleTracksPerPage} defaultValue='10'>
            {
              [2, 4, 6, 8, 10, 15, 20].map(tracksPerPage => (
                <option key={tracksPerPage} value={tracksPerPage}>{tracksPerPage}</option>
              ))
            }
          </select>
        </form>
        
        <div className="home__traks">
          <h3 className="home__traks--title">Tracks</h3>
          {
            listTraks?.tracks.items.map(track => (
              <TrackCard
                key={track.id}
                track={track}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage
