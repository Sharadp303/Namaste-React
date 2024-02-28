import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mock/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should Search Res List for 'cafe' text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(9);

  const searchBTN = screen.getByRole("button", { name: "Search" });
  expect(searchBTN).toBeInTheDocument();

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "cafe" } });

  fireEvent.click(searchBTN);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(2);
});


it("Should Filter Top rated restaurants",async ()=>{
    await act(async ()=>{
        render(
            <BrowserRouter>
            <Body/>
            </BrowserRouter>
        )
    })

    const topResBtn=screen.getByRole('button',{name:'Top rated Restaurants'})
    expect(topResBtn).toBeInTheDocument();

    fireEvent.click(topResBtn)
    const cardAfterFilter=screen.getAllByTestId('resCard')
    expect(cardAfterFilter.length).toBe(4)

})
