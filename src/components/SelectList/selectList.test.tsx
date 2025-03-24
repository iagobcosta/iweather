import { render, screen, fireEvent } from "@testing-library/react-native"
import { SelectList } from "@components/SelectList"

describe("Component: SelectList", () => {
  it("should be return city details selected.", () => {
    const data = [
      { id: "1", name: "Fortaleza", latitude: 123, longitude: 456 },
      { id: "2", name: "Rio grande do sul", latitude: 789, longitude: 987 },
    ]

    const onPress = jest.fn()

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />)

    const selectedCity = screen.getByText(/fortaleza/i)
    fireEvent.press(selectedCity)

    //expectativa de item selecionado
    expect(onPress).toHaveBeenCalledWith(data[0])

    // verificando a quantidade que foi selecionada.
    expect(onPress).toHaveBeenCalledTimes(1)
  })

  it("not should be show options when data props is empty", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />)
    const options = screen.getByTestId("options")
    expect(options.children).toHaveLength(0)
  })
})
