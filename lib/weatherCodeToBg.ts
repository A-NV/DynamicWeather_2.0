const weatherCodeToBg: {
  [key: number]: {
    Bg: string;
    label: string;
  };
} = {
  0: {
    Bg: "/images/sunny.png",
    label: "Clear Sky",
  },
  1: {
    Bg: "/images/mainlyClear.jpg",
    label: "Mainly clear",
  },
  2: {
    Bg: "/images/partlyCloud.jpg",
    label: "Partly Cloudly",
  },
  3: {
    Bg: "/images/overcast.jpg",
    label: "Overcast",
  },
  
  45: {
    Bg: "/images/fog.jpg",
    label: "Fog",
  },
  48: {
    Bg: "/images/fog.jpg",
    label: "Deposit rime fog",
  },
  51: {
    Bg: "/images/lightRain.jpg",
    label: "Drizzle",
  },
  53: {
    Bg: "/images/lightRain.jpg",
    label: "Drizzle",
  },
  55: {
    Bg: "/images/lightRain.jpg",
    label: "Drizzle",
  },
  56: {
    Bg: "/images/lightRain.jpg",
    label: "Freezing Drizzle",
  },
  57: {
    Bg: "/images/lightRain.jpg",
    label: "Freezing Drizzle",
  },
  61: {
    Bg: "/images/Rain.jpg",
    label: "Rain",
  },
  63: {
    Bg: "/images/Rain.jpg",
    label: "Rain",
  },
  65: {
    Bg: "/images/Rain.jpg",
    label: "Rain",
  },
  66: {
    Bg: "/images/freezingRain.jpg",
    label: "Freezing Rain",
  },
  67: {
    Bg: "/images/freezingRain.jpg",
    label: "Freezing rain",
  },
  71: {
    Bg: "/images/snow.jpg",
    label: "snow",
  },
  73: {
    Bg: "/images/snow.jpg",
    label: "snow",
  },
  75: {
    Bg: "/images/snow.jpg",
    label: "snow",
  },
  77: {
    Bg: "/images/snow.jpg",
    label: "Snow Grains",
  },
  80: {
    Bg: "/images/heavyRain.jpg",
    label: "Rain Showers",
  },
  81: {
    Bg: "/images/heavyRain.jpg",
    label: "Rain Showers",
  },
  82: {
    Bg: "/images/heavyRain.jpg",
    label: "Rain Showers",
  },
  85: {
    Bg: "/images/snowStorm.jpg",
    label: "Snow Showers",
  },
  86: {
    Bg: "/images/snowStorm.jpg",
    label: "Snow Showers",
  },
  95: {
    Bg: "/images/thundersorm.jpg",
    label: "Thunderstorm",
  },
  96: {
    Bg: "/images/thundersorm.jpg",
    label: "Thunderstorm",
  },
  99: {
    Bg: "/images/thundersorm.jpg",
    label: "Thunderstorm",
  },
};

export default weatherCodeToBg;