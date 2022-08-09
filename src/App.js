import React, { useState } from 'react'
import './app.scss'
import { Form } from 'react-bootstrap'
import * as aiIcon from 'react-icons/ai'
import * as biIcon from 'react-icons/bi'

const App = () => {
  const api = {
    key: "aeffa558d018768da17a92c653312927",
    base_url: "https://api.openweathermap.org/data/2.5/"
  }

  const [quary, setQuary] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if(evt.key === "Enter") {
      fetch(`${api.base_url}weather?q=${quary}&units=matric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuary("");

        console.log(result);
      });
    }
  }

  const dateFunct = new Date();
  let day = dateFunct.getDate();
  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let month_name = months[dateFunct.getMonth()];
  let year = dateFunct.getFullYear();

  const dateSlot = `${day} ${month_name}, ${year}`

  return (
    <>
      <div className={weather.weather[0].main === 'Rain' ? "app_box rain p-5" : "app_box sunny p-5"}>
        {/* searchbox */}

        <div className='search_box'>
          <Form.Group className="mb-3 d-flex align-items-center border-bottom ps-3 pe-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" className='input_field text-white shadow-none' placeholder="Search Anywhere..." onChange={e => setQuary(e.target.value)}
            value={quary} onKeyPress={search} />

            <aiIcon.AiOutlineSearch className='fs-2 text-white' />
          </Form.Group>
        </div>

        {/* main contents */}

        {(typeof weather.main != "undefined") ? (
                    <div className='mt-5 d-flex justify-content-center align-items-center'>
                    <div>
                      <h1 className='text-white text-center'>
                        {weather.name}, {weather.sys.country}
                      </h1>
        
                      <div className="date_container text-white text-center">
                        <h5 className='fw-light'>{ dateSlot }</h5>
                      </div>
        
                      <div>
                        <div className="text-center">
                          <div className="text-white">
                            <div className="ico_container">
                              <h1 className='ico_main-div'>
                                {weather.weather[0].main === "Rain" || "Clouds" ? <aiIcon.AiOutlineCloud /> : <biIcon.BiSun />}
                              </h1>
        
                              <h1 className="fw-bold temp_value mt-2">
                                {Math.floor(Math.round(weather.main.humidity))}%
                              </h1>
                              <small className='fs-4'>Humidity</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        ): ('')}
      </div>
    </>
  )
}

export default App