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
        props.temperature ?
          <div className="card card-body mt-2 animated fadeInUp" >
            {
              props.city && props.country &&
              <p><i className="fas fa-location-arrow"></i> Location: {props.city}, {props.country}</p>
            }
            {
              props.temperature &&
              <p><i className="fas fa-temperature-low"></i> Temperature: {props.temperature} °C, {props.description}</p>
            }
            {
              props.humidity &&
              <p><i className="fas fa-water"></i> Humidity: {props.humidity}</p>
            }
            {
              props.wind_speed &&
              <p><i className="fas fa-wind"></i>  Wind Speed: {props.wind_speed}</p>
            }
          </div>
          :
          <div className="container-no-request card card-body mt-2">
            <i class="search fas fa-search-location"></i>
            <p className="no-request">No Request Yet</p>
          </div>
      }
    </div>
  )
}
