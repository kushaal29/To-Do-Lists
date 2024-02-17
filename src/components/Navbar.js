import React from 'react'

const Navbar = ({filterItem, menuList}) => {
  return (
   <>
   <nav className='navbar'>
        <div className="btn-group">
            {
                menuList.map((el)=>{
                    return (
                    <button className="btn-group__item" onClick={()=>filterItem(el)}>{el}</button>
                    )
                })
            }

        </div>

    </nav>
   </>
  )
}

export default Navbar
