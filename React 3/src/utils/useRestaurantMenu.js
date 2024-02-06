import { useEffect, useState } from "react"

const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null)
    useEffect(() => {
        fetchMenu();
      }, []);
    
      const fetchMenu = async () => {
        const data = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
        );
        const json = await data.json();
        console.log(json.data);
        setResInfo(json.data);
      };

      return resInfo;
}

export default useRestaurantMenu;