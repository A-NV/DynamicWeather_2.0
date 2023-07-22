'use client'

import Image from "next/image";
import CityPicker from "./CityPicker"

type Props ={
  city: string;
  results: Root;
  lat: string; 
  long: string;
}

function InformationPanel({ city, lat, long, results }: Props) {
  return (
    <div className="relative h-screen">
      <div className="-z-50 absolute top-0 left-0 w-full h-full brightness-50">
        <Image 
            src="/images/sunny.png"
            alt="sunny" 
            fill
            quality={100}
            objectFit='cover'
          />
      </div>

      <div className="px-10 text-white">
          <div className="text-black py-10">
            <CityPicker />
          </div>

        <div className="flex items-center max-sm:flex-col max-sm:pt-40 md:absolute md:bottom-20 md:left-45 md:justify-between md:w-[90vw]">
          <div className="flex gap-4 max-sm:flex-col max-sm:items-center">
            <p className="text-7xl md:text-8xl">{results.current_weather.temperature.toFixed(0)}°C
            </p>

            <div className="flex flex-col max-sm:items-center justify-center">
              <h1 className="text-3xl md:text-4xl md:font-bold">{decodeURI(city)}</h1>
              <div className='flex space-x-1 text-sm'>
                  <p>
                    {new Date().toLocaleTimeString("en-AU",{	
                      hour: "numeric",
                      minute: "numeric",
                      hour12: false,
                    })}
                  </p>
                      <p>
                        -
                      </p>
                  <p>
                    {new Date().toLocaleDateString("en-AU",{	
                      weekday: "long",
                      day: "numeric",
                      month: "short",
                      year: "2-digit"
                    })}
                  </p>
                </div>
            </div>
              <div className="flex flex-col md:items-center md:justify-center pl-3">
              {/*dynamic icon*/}
              <p>image</p>
              <p>Sunny</p>
              </div>
          </div>
          
            <div className="flex flex-col max-sm:items-center md:text-sm md:justify-center md:text-end">
              <p className="md:text-xl md:font-bold">{Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
              <p>Long/Lat: {long}, {lat}</p>
            </div>
         
        </div>
      </div> 
    </div>
  )
}

export default InformationPanel