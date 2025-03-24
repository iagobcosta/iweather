import { CityAPIResponse, CityProps } from "@services/getCityByNameService"

export const mockCityApiResponse: CityAPIResponse = {
  id: "1",
  name: "São Paulo",
  sys: {
    country: "BR",
  },
  coord: {
    lon: 0,
    lat: 0,
  },
}

export const mockCity: CityProps = {
  id: "1",
  name: "São Paulo",
  longitude: 0,
  latitude: 0,
}
