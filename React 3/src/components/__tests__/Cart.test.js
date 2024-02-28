import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import MOCK_DATA_NEW from "../mock/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA_NEW);
    },
  });
});

it("Should Render restaurant Menu Card", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    );
  });

  const accordianHeader = screen.getByText("Good Morning Breakfasts- (4)");
  //   expect(accordianHeader).toBeInTheDocument();
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("itemList").length).toBe(4);

  const addBtn = screen.getAllByRole("button", { name: "Add +" });

  expect(screen.getByText('0')).toBeInTheDocument();
  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[1]);

  expect(screen.getByText('2')).toBeInTheDocument();

  console.log(addBtn.length);

  expect(screen.getAllByTestId('cartItem').length).toBe(2)
  fireEvent.click(screen.getByRole('button',{name:'Clear Cart'}))
  expect(screen.queryAllByTestIdByTestId('cartItem')).not.toBeInTheDocument();
  expect(screen.getByText('Cart is Empty - ADD ITEMS TO CART')).toBeInTheDocument();

});
