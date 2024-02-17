import React, { useState } from 'react'
import './style.css'
import MenuApi from './menuApi'
import MenuCard from './MenuCard';
import Navbar from './Navbar';


const uniqueList=[... new Set(MenuApi.map((el)=>{
    return el.category;

})),"All"]

console.log(uniqueList)



const Restraurent = () => {

    const [menuData, setMenuData]= useState(MenuApi);
    const[menuList, setMenuList]= useState(uniqueList);

    const filterItem=(category)=>{
        if(category==="All"){
            setMenuData(MenuApi);
            return;
        }
        const updatadList= MenuApi.filter((el)=>{
            return el.category===category;
        });
        setMenuData(updatadList);
    }
  return (
    <>

    <Navbar filterItem={filterItem} menuList={menuList}/>
   <MenuCard menuData={menuData}/>

    </>
  )
}

export default Restraurent
