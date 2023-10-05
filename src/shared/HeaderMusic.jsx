import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TrackPlaylist from './TrackPlaylist'
import { useForm } from 'react-hook-form'
import usePlaylist from '../hooks/usePlaylist'
import { useNavigate } from 'react-router-dom'


const HeaderMusic = () => {

  const [showCassete, setShowCassete] = useState(false)
  const [record, setRecord] = useState(false)
  const [showModalAccount, setShowModalAccount] = useState(false)

  const handleCassete = (e) => {
    e.preventDefault()
    setShowCassete(!showCassete)
  }

  const handleShowRecord = () => {
    setRecord(!record)
  }
  const handleCloseRecords = () => {
    setRecord(false)
  }
  const tracksPlaylist = useSelector(store => store.tracks)
  
  const { reset, handleSubmit, register } = useForm()
  const { postPlaylist } = usePlaylist()

  const navigate = useNavigate()

  const submit = (data) => {
    const obj = {
      ...data,
      tracks: tracksPlaylist.map(e => ({id: e.id}))
    }
    postPlaylist(obj)
    reset({
      title: '',
      to: '',
      message: ''
    })
  }

  const handleShowPlaylist = (e) => {
    navigate('/playlist')
  }

  const handleShowAccount = () => {
    setShowModalAccount(!showModalAccount)
  }
  
  return (
    <header className='MusicHeader'>
      <header className="home__header">
        <div className='home__article--title'>
          <span><svg className='home__notes' width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3601 0.00378508L7.22005 0.803785C6.90005 0.843785 6.66005 1.12379 6.66005 1.44378V9.06379C6.09005 8.86379 5.46005 8.78379 4.80005 8.85379C2.75005 9.07379 1.13005 10.7738 1.00005 12.8338C0.961383 13.4177 1.04321 14.0033 1.24044 14.5543C1.43767 15.1052 1.7461 15.6097 2.14655 16.0365C2.54701 16.4632 3.03094 16.803 3.56827 17.0348C4.1056 17.2665 4.68486 17.3853 5.27005 17.3838C7.63005 17.3838 9.55005 15.4738 9.55005 13.1038C9.55005 13.0138 9.55005 12.9238 9.54005 12.8338V5.00378C9.54005 4.72378 9.75005 4.48378 10.0301 4.44378L13.4901 3.99379C13.6182 3.97672 13.7356 3.91343 13.8203 3.81583C13.9051 3.71822 13.9512 3.59302 13.9501 3.46379V0.533785C13.9522 0.458353 13.9379 0.383358 13.9081 0.314008C13.8784 0.244658 13.8339 0.182614 13.7778 0.132185C13.7216 0.0817554 13.6552 0.0441488 13.583 0.0219762C13.5109 -0.000196436 13.4348 -0.00640378 13.3601 0.00378508ZM28.4 2.37379L22.26 3.17378C21.9401 3.21378 21.7001 3.48379 21.7001 3.80379V13.8138C21.1301 13.6138 20.5 13.5338 19.84 13.6038C17.7901 13.8238 16.1701 15.5238 16.0401 17.5838C16.0014 18.1677 16.0832 18.7533 16.2804 19.3043C16.4777 19.8552 16.7861 20.3597 17.1866 20.7865C17.587 21.2132 18.0709 21.553 18.6083 21.7848C19.1456 22.0165 19.7249 22.1353 20.31 22.1338C22.67 22.1338 24.59 20.2238 24.59 17.8538C24.59 17.7638 24.59 17.6738 24.58 17.5838V7.37378C24.58 7.09378 24.79 6.85379 25.07 6.81379L28.5301 6.36379C28.8001 6.32379 29 6.10378 29 5.83378V2.89379C29 2.57379 28.72 2.33379 28.4 2.37379Z" fill="#FF6B00" />
            <path d="M12.09 7.65356L18.23 6.85356C18.55 6.80356 18.83 7.05356 18.83 7.37356V10.3036C18.83 10.5736 18.63 10.8036 18.37 10.8336L14.91 11.2836C14.7747 11.3027 14.6509 11.3698 14.561 11.4726C14.471 11.5753 14.421 11.707 14.42 11.8436V22.0636C14.43 22.1536 14.43 22.2436 14.43 22.3336C14.43 24.7036 12.51 26.6136 10.15 26.6136C7.68995 26.6136 5.71995 24.5536 5.87995 22.0636C5.99995 20.0036 7.61995 18.3136 9.66995 18.0936C10.33 18.0236 10.96 18.1036 11.53 18.3036V8.29356C11.53 7.96356 11.77 7.69356 12.09 7.65356Z" fill="#FF6B00" />
          </svg>
          </span>
          <span className="home__header--text"><p className='text__p1'>SHARE</p><p className='text__p2'>MUSIC</p></span>
        </div>
        <div className="home__header--btns">
          <button onClick={handleShowAccount}>Account</button>
          <button onClick={handleShowRecord} className="home__header--btn2">🎵 Recording</button>
        </div>
      </header>
      <div className={`${showModalAccount ? 'show__modalAccount' : 'modalAccount'}`}>
        <ul className='modalAccount__list'>
          <li onClick={handleShowPlaylist}>Recordings</li>
          <li>Logout</li>
        </ul>
      </div>
      <div className={`${record ? 'show__headerM' : 'headerM'}`}>
        <div className='headerMusic'>
          <button onClick={handleCloseRecords} className='headerMusic__btn--close'><i className='bx bxs-arrow-to-left'></i></button>
          <form onSubmit={handleSubmit(submit)} className='headerMusic__form'>
            <div className='form__cassete'>
              <div className={`${showCassete ? 'form__ladoA': 'showformA'}`} >
                <div className='form__img'>
                  <img className='form__ladoA--img' src="/images/LADO_A.png" alt="" />
                </div>
                {/* <label htmlFor="title">Title</label> */}
                <input {...register('title')} className='form__ladoA--input' type="text" id="title" placeholder='Enter Title'/>
              </div>
              <div className={`${showCassete ? 'form__ladoB': 'showform'}`}>
                {/* <label htmlFor="to">To</label> */}
                <div className='form__img'>
                  <img className='form__ladoA--img' src="/images/LADO_B.png" alt="" />
                </div>
                <input {...register('to')} className='form__ladoA--input' type="text" id="to" placeholder='For:'/>
                {/* <label htmlFor="message">Message</label> */}
                <textarea {...register('message')} placeholder='Enter a Message' className='form__message' id="message" />
              </div>
            </div>
            <button className='cassete__btn' onClick={handleCassete} >{`${showCassete ? 'LADO A ' : 'LADO B'}`}<svg className='arrows' viewBox="0 0 18 20" fill="none"  xmlns="http://www.w3.org/2000/svg"><path d="M1 15H13M1 15L4.5 11.5M1 15L4.5 18.5M4 5H17M17 5L13.5 1.5M17 5L13.5 8.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div className='headerMusic__tracks'>
              {
                tracksPlaylist.map(track => (
                  <TrackPlaylist
                    key={track.id}
                    track={track}
                  />
                ))
              }
            </div>
            <button className='headerMusic__btn'>Create</button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default HeaderMusic
