import { getClient } from "@/apollo-client";
import CalloutCard from "@/app/components/CalloutCard";
import HumidityChart from "@/app/components/HumidityChart";
import InformationPanel from "@/app/components/InformationPanel";
import RainChart from "@/app/components/RainChart";
import StatCard from "@/app/components/StatCard";
import TempChart from "@/app/components/TempChart";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export const revalidate = 60;

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  }
}

async function WeatherPage({params: { city, lat, long }}: Props) {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: 'Australia/Sydney'
    }
  })

  const results: Root = data.rootQuery;
  console.log(results);

  return (
    <div>
       <>
        <InformationPanel 
          city={city}
          results={results}
          lat={lat}
          long={long}
        />
      </>

      <br className="my-2"/>

      <div className="">
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Today&apos;s Overview</h2>
            <p className="text-sm text-gray-400">
              Last Updated at: {" "}
              {new Date(results.current_weather.time).toLocaleString()} ({results.timezone})
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            <div className="flex justify-center items-center gap-8">
                <SunIcon className="h-12 w-12 text-yellow-300"/>
              <p>
                {new Date(results.daily.sunrise[0]).toLocaleTimeString("en-AU", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </p>
            </div>

              <div className="flex justify-center items-center gap-8">
                <MoonIcon className="h-10 w-10 text-gray-400"/>
                <p>
                  {new Date(results.daily.sunset[0]).toLocaleTimeString("en-AU", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </p>
              </div>

            <StatCard 
              title="Maximum Temperature"
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°`}
              color="yellow"
            />

            <StatCard 
              title="Minimum Temperature"
              metric={`${results.daily.temperature_2m_min[0].toFixed(1)}°`}
              color="green"
            />

          <div>
            <StatCard 
              title="UV Index"
              metric={`${results.daily.uv_index_max[0].toFixed(1)}°`}
              color="rose"
            />
            {Number(results.daily.uv_index_max[0].toFixed(1))> 5 && (
              <CalloutCard
                message={"The UV is high today, be sure to wear SPF!"}
                warning
              />
            )}
            </div>

            <div className="flex space-x-3">
            <StatCard 
              title="Wind Speed"
              metric={`${results.current_weather.windspeed.toFixed(1)} km/h`}
              color="cyan"
            />

            <StatCard 
              title="Wind Direction"
              metric={`${results.current_weather.winddirection.toFixed(1)}°`}
              color="indigo"
            />
            

            </div>

          </div>
        </div>
              <div className="space-y-3">
                <TempChart results={results} />
                <RainChart results={results} />
                <HumidityChart results={results} />
              </div>
      </div>
    </div>
  )
}

export default WeatherPage