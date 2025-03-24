import { api } from "./api"
import { mockCityApiResponse } from "@__tests__/mocks/api/mockCityApiResponse"
import { getCityByNameService } from "./getCityByNameService"

describe("Service: getCityByNameService", () => {
  it("should return a city details", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityApiResponse })

    const response = await getCityByNameService("São Paulo")

    expect(response.length).toBeGreaterThan(0)
  })
})
