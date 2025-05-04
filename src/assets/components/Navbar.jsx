import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    
<nav className='all' >
  <div className="navbar  ms-lg-5 d-flex justify-content-between align-items-center">
    <img className='w-xs-25' src="image/Printivo logo.svg" alt=""/>  
  
  <div className=' d-lg-flex gap-5 me-5 '>
    <ul class="  d-lg-flex  d-none gap-3 list-unstyled">
      <li>All product</li>
      <li>Become a Reseller</li>
      <li>Merch Store</li>
      <li>Marketplace</li>
    </ul>
    <div>
      <div className='d-flex gap-3'>
        <button class="border-0 bg-transparent text-danger " >Sign in</button>
        <p><a href="" className='d-none d-lg-flex'>Create Account</a></p>
      <img src={"image/cart.svg"} alt="" />
      </div>
    </div>
  </div>

  </div>
</nav>



    </>
  )
}

export default Navbar