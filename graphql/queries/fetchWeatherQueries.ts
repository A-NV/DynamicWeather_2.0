import { gql } from '@apollo/client';

const fetchWeatherQuery = gql`
  query MyQuery(
    $current_weather: String
    $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max"
    $hourly: String = "temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,windgusts_10m,uv_index,uv_index_clear_sky"
    $latitude: String!
    $longitude: String!
    $timezone: String!
  ) {
    rootQuery(
      current_weather: $current_weather
      daily: $daily 
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
    ) {
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
      elevation
      generationtime_ms
      current_weather {
        is_day
        time
        temperature
        weathercode
        winddirection
        windspeed
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        weathercode
        uv_index_max
      }
      hourly {
        apparent_temperature
        precipitation
        is_day
        precipitation_probability
        rain
        relativehumidity_2m
        showers
        snow_depth
        snowfall
        temperature_2m
        time
        uv_index_clear_sky
        uv_index
        visibility
        windgusts_10m
      }
      hourly_units {
        apparent_temperature
        is_day
        precipitation
        precipitation_probability
        rain
        showers
        relativehumidity_2m
        snow_depth
        snowfall
        time
        temperature_2m
        uv_index
        visibility
        uv_index_clear_sky
        windgusts_10m
      }
    }
  }
`;

export default fetchWeatherQuery;
