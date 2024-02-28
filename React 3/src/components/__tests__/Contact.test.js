import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import  "@testing-library/jest-dom";

describe("Contact us page test Cases", () => {
    // beforeAll(()=>{
    //   console.log("BEFORE ALL");
    // })

    // beforeEach(()=>{
    //   console.log("BEFORE EACH");
    // })

    // afterAll(()=>{
    //   console.log("AFTER  ALL");
    // })

    // afterEach(()=>{
    //   console.log("AFTER EACH");
    // })


    it("Should load contact us component", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
      });
      
      test("Should load button inside contact component", () => {
        render(<Contact />);
      
        // const button=screen.getByRole("button");
        // const button=screen.getByText("Submit");
        const inputName = screen.getByPlaceholderText("Name");
      
        expect(inputName).toBeInTheDocument();
      });
      test("Should load 2 input boxes inside contact component", () => {
        render(<Contact />);
        //Querying
        const inputBoxes = screen.getAllByRole("textbox");
        // const input=screen.getAllByPlaceholderText();
      
        expect(inputBoxes.length).toBe(2);
      });
});


