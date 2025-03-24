import {
  getStorageCity,
  saveStorageCity,
  removeStorageCity,
} from "@libs/asyncStorage/cityStorage"
import { mockCity } from "@__tests__/mocks/api/mockCityApiResponse"

describe("Storage: CityStorage", () => {
  it("should be return null when don't have a city storaged", async () => {
    const response = await getStorageCity()
    expect(response).toBeNull()
  })

  it("should be return city storage", async () => {
    await saveStorageCity(mockCity)

    const response = await getStorageCity()

    expect(response).toEqual(mockCity)
  })

  it("should be return remove city storage", async () => {
    await saveStorageCity(mockCity)
    await removeStorageCity()

    const response = await getStorageCity()

    expect(response).toBeNull()
  })
})
