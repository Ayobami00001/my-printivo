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
            <img src="src/assets/1440201227_two-sided-business-cards-by-printivo.png" alt="Product 1" className="card-img" />
            <div className="card-body">
            <p className='buproduct'>Two-sided Business Cards</p>
              <p className="card-price">₦15,100 <span>per 100</span></p>
              <button className="press btn-primary">Browse Two-sided Bu...</button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card">
            <img src="src/assets/1572522725_flyer-1sided.png" alt="Product 2" className="card-img" />
            <p className='buproduct'>A5 flyers (Single Sided)</p>
            <div className="card-body">
              <p className="card-price">₦25,800 <span>per 100</span> </p>
              <button className=" press  btn-primary">Browse A5 flyers (S...</button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card">
            <img src="src/assets/1656003107_social-media--15.png" alt="Product 3" className="card-img" />
            <p className='buproduct m-3'>Round Stickers (3.5" Diameter)</p>
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-price">₦17,800 <span>per 100</span> </p>
              <button className="press btn-primary">Buy Now</button>
            </div>
          </div>          {/* Card 4 */}
          <div className="card">
            <img src="src/assets/1661456358_social-media--16.png" alt="Product 3" className="card-img" />
            <p className='buproduct'>Simple Mugs</p>
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-price">₦4,800 <span>per 1</span> </p>
              <button className="press btn-primary">Buy Now</button>
            </div>
          </div>          {/* Card 5 */}
          <div className="card">
            <img src="src/assets/1439790190_postcard.jpg" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-price">₦22,300 <span>per 50</span> </p>
              <button className="press btn-primary">Buy Now</button>
            </div>
          </div>          {/* Card 6 */}
          <div className="card">
            <img src="src/assets/1446183154_big rollup banner.png" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-price">₦60,500 <span>per 1</span> </p>
              <button className="press btn-primary">Buy Now</button>
            </div>
          </div>          {/* Card 7 */}
          <div className="card">
            <img src="src/assets/1572259118_product-5-(1).png" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-price">₦71,000 <span>per 100</span> </p>
              <button className="press btn-primary">Buy Now</button>
            </div>
          </div>          {/* Card 8 */}
          <div className="card">
            <img src="src/assets/1473167305_trifold-brochure-printing.png" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-price">₦47,500 <span>per 100</span> </p>
              <button className="press btn-primary">Buy Now</button>
            </div>
          </div>          {/* Card 9 */}
          <div className="card">
            <img src="src/assets/1456215784_12.png" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-price">₦25,800 <span>per 1</span> </p>
              <button className="press btn-primary">Buy Now</button>
            </div>
          </div>          {/* Card 10 */}
          <div className="card">
            <img src="src/assets/1485151940_White-tshirt.png" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-price">₦25,800 <span>per 100</span> </p>
              <button className="press btn-primary">Buy Now</button>
            </div>
          </div>          {/* Card 11 */}
          <div className="card">
            <img src="src/assets/1572258123_product-3-(1).png" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-price">₦25,800 <span>per 100</span> </p>
              <button className="press btn-primary">Buy Now</button>
            </div>
          </div>          {/* Card 12 */}
          <div className="card">
            <img src="src/assets/1607424257_63f28e7a-da1d-4685-a297-964e186a2170.jpeg" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-price">₦25,800 <span>per 100</span> </p>
              <button className="press btn-primary">Buy Now</button>
            </div>
          </div>          {/* Card 13 */}
          <div className="card">
            <img src="src/assets/1473159158_Christmas-card-for-this-wonderful-season.png" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-price">₦25,800 <span>per 100</span> </p>
              <button className="press btn-primary">Buy Now</button>
            </div>
          </div>          {/* Card 14 */}
          <div className="card">
            <img src="src/assets/1473165427_stickers.png" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-price">₦25,800 <span>per 100</span> </p>
              <button className="press btn-primary">Buy Now</button>
            </div>
          </div> 
          {/* Card 15 */}
          <div className="card">
            <img src="src/assets/pexels-min-o-2151190130-31556676.jpg" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-price">₦25,800 <span>per 100</span> </p>
              <button className="press btn-primary">Buy Now</button>
            </div>
            </div>
          {/* Card 16 */}
          <div className="card">
            <img src="src/assets/pexels-psco-191429.jpg" alt="Product 3" className="card-img" />
            <p className='buproduct'>Two-sided Business Cards</p>
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-price">₦25,800 <span>per 100</span> </p>
              <button className="press btn-primary">Buy Now</button>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default FirstSet