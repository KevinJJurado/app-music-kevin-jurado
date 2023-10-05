import axios from 'axios'
import React, { useState } from 'react'
import getConfigToken from '../services/getConfigToken'

const useFetch = () => {
  const [infoApi, setInfoApi] = useState()

  const baseUrl = 'https://playlist-share-dev.fl0.io'

  const getApi = (path) => {
    const url = `${baseUrl}${path}`
    axios.get(url, getConfigToken())
    .then(res => setInfoApi(res.data))
    .catch(err => console.log(err))
  }
  return [infoApi, getApi]
}

export default useFetch
