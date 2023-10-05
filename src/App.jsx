
import { Route, Routes } from 'react-router-dom'
import './App.css'
import './styles/LoginPage.css'
import './styles/Home.css'
import './styles/TrackCard.css'
import './styles/HeaderMusic.css'
import './styles/TrackPlaylist.css'
import './styles/TracksRelated.css'
import './styles/ArtistPage.css'
import './styles/TrackPage.css'
import './styles/TrackInfo.css'
import './styles/PlaylistPage.css'
import './styles/ArtistInfo.css'
import './styles/AlbumArtist.css'
import './styles/AlbumCard.css'
import './styles/ArtistSongsTop.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { useEffect } from 'react'
import { setCredentialsSlice } from './store/slices/credentials.slice'
import { useDispatch } from 'react-redux'
import ProtectedRoutes from './pages/ProtectedRoutes'
import TrackPage from './pages/TrackPage'
import ArtistPage from './pages/ArtistPage'
import PlaylistPage from './pages/PlaylistPage'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('uesrname')
    const email = localStorage.getItem('email')
    const obj = { token, username, email }
    dispatch(setCredentialsSlice(obj))
  }, [])

  return (
    <div className='principal'>
      <Routes>    
        <Route path='/auth/login' element={<LoginPage/>}/>
        <Route path='/auth/register' element={<RegisterPage/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/track/:id' element={<TrackPage/>}/>
          <Route path='/artist/:id' element={<ArtistPage/>}/>
          <Route path='/playlist' element={<PlaylistPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
