import { fireEvent, render ,screen} from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should load Header component with Login button", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header/>
    </Provider>
    </BrowserRouter>
  );

  const button =screen.getByRole("button",{name:'Login'});
//   const button =screen.getByText("Cart");
  expect(button).toBeInTheDocument()
  

});

it("Should load Header component with contact button", () => {
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
      </Provider>
      </BrowserRouter>
    );
  
  //   Regex 
    const contact =screen.getByText(/Contact/);
   
    expect(contact).toBeInTheDocument()
  
  });

  
it("Should change the Login button to Logout on Click", () => {
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
      </Provider>
      </BrowserRouter>
    );
  
  //   Regex 
    const LoginBtn =screen.getByRole("button",{name:'Login'});

    fireEvent.click(LoginBtn)

    const LogoutBtn =screen.getByRole("button",{name:'Logout'});
    
    expect(LogoutBtn).toBeInTheDocument()
  
  })
