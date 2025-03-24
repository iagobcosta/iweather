import { getNextDays } from "./getNextDays"

describe("getNextDays", () => {
  it("should be return the next days five", () => {
    const days = getNextDays()

    expect(days).toHaveLength(5)
  })
})
