import React from 'react'
import './FirstSet.css'

const FirstSet = () => {
  return (
    <>
    <div className='m-0 mt-5 m-md-5'>
      <div className='d-flex justify-content-between'>
      <h3>Popular Products</h3>
      <a href="#" className='text-danger'>See All Products</a>
      </div>
      <div className="card-container">
          {/* Card 1 */}
          <div className="card">
            <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746538056/1440201227_two-sided-business-cards-by-printivo_jdnrsh.png" alt="Product 1" className="card-img" />
            <div className="card-body">
            <p className='buproduct'>Two-sided Business Cards</p>
              <p className="card-price">₦15,100 <span>per 100</span></p>
              <button className="press btn-primary">Browse Two-sided Bu...</button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card">
            <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746538201/1572522725_flyer-1sided_h3ofms.png" alt="Product 2" className="card-img" />
            <p className='buproduct'>A5 flyers (Single Sided)</p>
            <div className="card-body">
              <p className="card-price">₦25,800 <span>per 100</span> </p>
              <button className=" press  btn-primary">Browse A5 flyers (S...</button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card">
            <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746538209/1656003107_social-media--15_frzisp.png" alt="Product 3" className="card-img" />
            <p className='buproduct m-3'>Round Stickers (3.5" Diameter)</p>
            <div className="card-body">
              <p className="card-price">₦17,800 <span>per 100</span> </p>
              <button className="press btn-primary">Browse Round Sticke...</button>
            </div>
          </div>          {/* Card 4 */}
          <div className="card">
            <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746538217/1661456358_social-media--16_xfdhk2.png" alt="Product 3" className="card-img" />
            <p className='buproduct'>Simple Mugs</p>
            <div className="card-body">
              <p className="card-price">₦4,800 <span>per 1</span> </p>
              <button className="press btn-primary">Browse Simple Mugs</button>
            </div>
          </div>          {/* Card 5 */}
          <div className="card">
            <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746538437/1439790190_postcard_qkp27y.jpg" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <p className="card-price">₦22,300 <span>per 50</span> </p>
              <button className="press btn-primary">Browse Postcards (A...</button>
            </div>
          </div>          {/* Card 6 */}
          <div className="card">
            <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746538525/1446183154_big_rollup_banner_fb3z6g.png" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <p className="card-price">₦60,500 <span>per 1</span> </p>
              <button className="press btn-primary">Browse Roll Up Bann...</button>
            </div>
          </div>          {/* Card 7 */}
          <div className="card">
            <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746538202/1572259118_product-5-_1_ldokbb.png" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <p className="card-price">₦71,000 <span>per 100</span> </p>
              <button className="press btn-primary">Browse A2 Posters</button>
            </div>
          </div>          {/* Card 8 */}
          <div className="card">
            <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746538205/1473167305_trifold-brochure-printing_gltx2f.png" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <p className="card-price">₦47,500 <span>per 100</span> </p>
              <button className="press btn-primary">Browse Trifold Broc...</button>
            </div>
          </div>          {/* Card 9 */}
          <div className="card">
            <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746538203/1456215784_12_tt01yt.png" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <p className="card-price">₦25,800 <span>per 1</span> </p>
              <button className="press btn-primary">Browse Landscape ID...</button>
            </div>
          </div>          {/* Card 10 */}
          <div className="card">
            <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746538209/1485151940_White-tshirt_bgn8vx.png" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <p className="card-price">₦25,800 <span>per 100</span> </p>
              <button className="press btn-primary">Browse Off White T-...</button>
            </div>
          </div>          {/* Card 11 */}
          <div className="card">
            <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746538199/1572258123_product-3-_1_c3trex.png" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <p className="card-price">₦25,800 <span>per 100</span> </p>
              <button className="press btn-primary">Browse A4 Branded P...</button>
            </div>
          </div>          {/* Card 12 */}
          <div className="card">
            <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746538201/1607424257_63f28e7a-da1d-4685-a297-964e186a2170_ptu2jt.jpg" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <p className="card-price">₦25,800 <span>per 100</span> </p>
              <button className="press btn-primary">Browse A4 Courier B...</button>
            </div>
          </div>          {/* Card 13 */}
          <div className="card">
            <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746538203/1473159158_Christmas-card-for-this-wonderful-season_n9obkc.png" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <p className="card-price">₦25,800 <span>per 100</span> </p>
              <button className="press btn-primary">Browse Greeting Car...</button>
            </div>
          </div>          {/* Card 14 */}
          <div className="card">
            <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746538204/1473165427_stickers_irekmu.png" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <p className="card-price">₦25,800 <span>per 100</span> </p>
              <button className="press btn-primary">Browse Stickers</button>
            </div>
          </div> 
          {/* Card 15 */}
          <div className="card">
            <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746538885/pexels-min-o-2151190130-31556676_pppj7t.jpg" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <p className="card-price">₦25,800 <span>per 100</span> </p>
              <button className="press btn-primary">Browse Cards</button>
            </div>
            </div>
          {/* Card 16 */}
          <div className="card">
            <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746538898/pexels-psco-191429_xmsgtk.jpg" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <p className="card-price">₦25,800 <span>per 100</span> </p>
              <button className="press btn-primary">Browse yours</button>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default FirstSet