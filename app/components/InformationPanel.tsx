'use client'

import Image from "next/image";
import CityPicker from "./CityPicker"
import { motion } from "framer-motion";
import weatherCodeToString from "@/lib/weatherCodeToString";
import weatherCodeToBg from "@/lib/weatherCodeToBg";

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
            src={weatherCodeToBg[results.current_weather.weathercode].Bg}
            alt={weatherCodeToBg[results.current_weather.weathercode].label}
            fill
            quality={100}
            objectFit='cover'
          />
      </div>

      <div className="px-10 text-white">
          <div className="text-black py-10">
            <CityPicker />
          </div>

        <div className="flex items-center max-md:flex-col max-md:pt-40 md:absolute md:bottom-20 md:left-45 md:justify-between md:w-[90vw]">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
        >
          <div className="flex gap-4 max-md:flex-col max-md:items-center">
            <p className="text-7xl md:text-8xl">{results.current_weather.temperature.toFixed(0)}°C</p>

            <div className="flex flex-col max-md:items-center justify-center">
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
              <div className="flex flex-col items-center justify-center pl-3 md:">
                <Image 
                  src={`https://www.weatherbit.io/static/img/icons/${weatherCodeToString[results.current_weather.weathercode].icon}.png`}
                  alt={weatherCodeToString[results.current_weather.weathercode].label}
                  width={75}
                  height={75}
                />
                  <p className="max-md:text-3xl ">
                    {weatherCodeToString[results.current_weather.weathercode].label}
                  </p>
              </div>
          </div>
          </motion.div>

          <motion.div
          initial={{
            x: +500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
        >
            <div className="flex flex-col text-sm max-md:pt-2 max-md:items-center  md:justify-center md:text-end">
              <p className="md:text-xl md:font-bold">{Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
              <p>Long/Lat: {long}, {lat}</p>
            </div>

         </motion.div>
        </div>
      </div> 
     
    </div>
  )
}

export default InformationPanel