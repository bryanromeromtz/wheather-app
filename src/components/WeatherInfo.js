import React from 'react'

export default function WeatherInfo(props) {

  console.log(props);

  return (
    <div>
      {
        props.error ?
          <div className="alert alert-danger">
            <p>{props.error}</p>
          </div> : null
      }
      {
        props.temperature && props.city && props.country && props.humidity ? (< div className="info card card-body" >
          <p>Location: {props.city}, {props.country}</p>
          <p>Temperature: {props.temperature} °C, {props.description}</p>
          <p>Humidity: {props.humidity}</p>
          <p>Wind Speed: {props.wind_speed}</p>
        </div >) :
          <div className="card card-body">
            <p>No Request Yet</p>
          </div>
      }
    </div>
  )
}
