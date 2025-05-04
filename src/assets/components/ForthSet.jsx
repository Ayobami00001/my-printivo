import React from 'react'

const ForthSet = () => {
  return (
    <>
    <div className='p-3 mt-2 d-flex flex-column gap-3' >
            <div><span className='fs-2 fw-bold '>You can count on us for:</span></div>
        <div className='card-group d-flex flex-wrap gap-3'>
            <div className='card d-flex shadow-0 border-0 p-xl-5 p-sm-0 p-5 flex-row gap-3'>
                <div><img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746195602/download_untcz0.svg" alt="" /></div>
                <div className=''>
                    <div><h6>Fast Turnaround Within Days</h6></div>
                    <div><p>Your order gets to you within 3-7 working days via DHL or our very own Printivo Direct.</p></div>
                </div>
            </div>
            <div className='card d-flex shadow-0 border-0 p-xl-5 p-sm-0 p-5 flex-row gap-3 '>
                <div><img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746195732/download_ywkjmf.svg" alt="" /></div>
                <div className=''>
                    <div><h6>100% Top Quality</h6></div>
                    <div><p>Only the finest materials, machines and people will be involved in fulfilling your order.</p></div>
                </div>
            </div>
            <div className='card d-flex shadow-0 p-xl-5 p-sm-0 p-5  flex-row gap-3 '>
                <div><img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746195795/download_dkpseg.svg" alt="" /></div>
                <div className=''>
                    <div><h6>Affordable Services</h6></div>
                    <div><p>All products are adequately priced to ensure you get value for your money at all times.</p></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ForthSet