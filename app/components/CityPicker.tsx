'use client'

import { Country, City } from "country-state-city";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";

type option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    statecode: string;
  };
  label: string;
} | null;

const options = Country.getAllCountries().map(country =>({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));


const CityPicker = () => {
  const [selectedCountry, setSelectedCountry] =useState<option>(null);
  const [selectedCity, setSelectedCity] = useState<cityOption>(null);
  const router = useRouter();

  const handleSelectedCountry = (option : option) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  }
  
  const handleSelectedCity = (option: cityOption) => {
    setSelectedCity(option);
    router.push(`/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`);
  };

  return ( 
    <div className="space-y-4">
      <div className="space-y-2">
        <Select   
          value={selectedCountry} 
          onChange={handleSelectedCountry}
          options={options} 
          placeholder="Select Country"
        />
      </div>


      {selectedCountry && (
        <div className="space-y-2">
          <Select   
            placeholder="Select City"
            value={selectedCity} 
            onChange={handleSelectedCity}
            options={City.getCitiesOfCountry(selectedCountry.value.isoCode
                )?.map(city => ({
                value: {
                  latitude: city.latitude!,
                  longitude: city.longitude!,
                  countryCode: city.countryCode,
                  name: city.name,
                  statecode: city.stateCode,
                },
                label: city.name,
              }))  
            } 
          />
          </div>
      )}
    </div>

    
   );
}

export default CityPicker;