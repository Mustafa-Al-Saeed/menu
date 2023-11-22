import './index.css';
import Header from './Components/Header.js';
import Nav from './Components/Navbar.js';
import Category from './Components/Category.js';
import ItemsList from './Components/ItemsList.js';
import { AllData } from "./data.js"
import { useState } from 'react';

function App() {

  const [data , setData] = useState(AllData.items)

  const AllCategories = [...AllData.buttons]  

  const filterCategories = ( cat ) => {
    if (cat === "الكل") {
      setData(AllData.items)
    }else {
      const newArr = AllData.items.filter((item) => {
        return(
          item.category === cat          
        )
      }) 
      setData(newArr)
    }
  } 

  const searchMeals = (search) => {
    if(search.trim() !== ""){
      const newSearch = AllData.items.filter((item) => {
        return(
          item.title === search.trim()
        )
      })
      setData(newSearch)
    }
  }

  return (
    <div className=' bg-[#F8F8F8]'>
      <Nav search={searchMeals} />
      <Header/>
      <Category buttons={AllCategories} filter={filterCategories}/>
      <ItemsList data={data} />
    </div>
  );
}

export default App;