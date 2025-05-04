import React from 'react'
import Navbar from './Navbar'
import './Header.css'

const Header = () => {
  return (
    <>
    <div className='first ps-3'>
      <div><Navbar/> </div>
      <div className='d-block d-sm-none d-lg-none'>
        <div><button className='btn btn-light fs-3 mt-3'>Mean</button></div>
      </div>
      <div className=''>
      <div className='quality mx-md-3 mx-lg-5 mt-4  display-1'>Quality Prints</div>
      <div className='shipped mx-md-3 mx-lg-5  mt-3  fs-2 fw-semibold '>Shipped to your doorstep</div>
      {/* <form action="">
      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label mx-md-3 mx-lg-5 ">What would you like to print today?</label>
    <input type="email" className="first-input form-control  mx-md-3 mx-lg-5 "  id="exampleInputEmail1" placeholder='Search for Business cards, T-shirts,Mugs, etc' />
  </div>
  <img className='first-img  d-none  d-md-flex  ' src="image/Card3_n9kqin.png" alt="" />
      </form> */}
      <div className="form-image-container d-flex flex-column flex-md-row align-items-center">
  <form action="" className="flex-grow-1">
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label mx-md-3 mx-lg-5">
        What would you like to print today?
      </label>
      <input type="email" className="first-input form-control mx-md-3 mx-lg-5" id="exampleInputEmail1" placeholder="Search for Business cards, T-shirts, Mugs, etc" />
    </div>
  </form>
  <img
    className="first-img d-none d-md-flex" src="image/Card3_n9kqin.png" alt="" />
</div>
      </div>
    </div>
    </>
  )
}

export default Header