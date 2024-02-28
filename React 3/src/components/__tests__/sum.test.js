import { sum } from "../sum"

test("lets check sum",()=>{
    const result=sum(2,4)
    //Assertion
    expect(result).toBe(6);
})