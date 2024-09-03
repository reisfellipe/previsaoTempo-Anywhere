import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInfo from './components/WeatherInfo/WeatherInfo'

function App() {
  const [weather, setWeather] = useState({})
  const inputRef = useRef()

  async function searchCity(){
    const city = inputRef.current.value
    const key = "6e1646304d105d961cbf9bd4aa2d8241";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    setWeather(apiInfo.data)


  }

  return (
    <>
      <div>
        
        <h1>Fellipe Reis | Previsão do tempo</h1>
        <input ref={inputRef} type="text" placeholder='Qual a cidade?'/>
        <button onClick={searchCity}>Buscar</button>

        <WeatherInfo weather={weather}/>

      </div>
    </>
  )
}

export default App
