import { render,screen} from "@testing-library/react"
import RestaurantCard, { withPromotedOffer } from "../RestaurantCard"
import resCardMock from '../mock/resCardMock.json'
import "@testing-library/jest-dom"

it("Should render Restaurant component with props Data",async()=>{
    render(<RestaurantCard resdata={resCardMock}/>)

    //Querying
    const heading=await screen.findByText('BOX8 - Desi Meals')
    
    //Assertion
    expect(heading).toBeInTheDocument()
})

it("should render RestaurantCard component with Promoted Label",async () => {
    // Home Work - test HOC : withPromtedLabel()
    const WrappedRestaurantCard = withPromotedOffer(RestaurantCard);
    render(< WrappedRestaurantCard resdata={resCardMock} offer={resCardMock.info.
        aggregatedDiscountInfoV3}/>)
    
    const labelEle=  screen.getAllByRole('heading')

    expect(labelEle).toBeTruthy()

  });