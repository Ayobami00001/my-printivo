import React from 'react'

const ThirdSet = () => {
  return (
    <>
        <div className=' p-5' style={{backgroundColor: '#edf6fd'}}>
            <div className='d-flex gap-3 flex-column py-5   justify-content-center'>
                <div><span className='fs-2 fw-bold '>What Customers Say About Us 🙌🏾</span></div>
                <div className='card-group d-flex flex-wrap gap-2'>
                    <div className="card  d-flex flex-row p-4 py-xl-5 p-sm-0 gap-2 ">
                        <div><img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746187274/download_bcufib.svg" alt="" className='' /></div>
                        <div>
                            <div><span>Amina Ebele <a href="#" >@DeliciousAmina</a></span></div>
                            <div>I am now the unofficial @Printivo ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!</div>
                        </div>
                    </div>
                    <div className="card d-flex  flex-row p-5 py-xl-5 p-sm-0 gap-2 ">
                        <div><img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746187274/download_bcufib.svg" alt="" /></div>
                        <div>
                            <div><span>Oluwatosin</span><a href="#">@tosingirlfx</a></div>
                            <div><p><a href="@Pritivo"></a>delivered my mugs in 24hrs. Thank you so much! It's nice doing business with you. More to come.</p></div>
                        </div>
                    </div>
                    <div className="card d-flex flex-row p-5 py-xl-5 p-sm-0 gap-2">
                        <div className='top-2'><img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746187274/download_bcufib.svg" alt="" /></div>
                        <div>
                            <div><span>Oluwatosin</span><a href="#"> @olgablark</a></div>
                            <div>These guys @Printivo are really awesome and affordable. Excellent customer service and delivery too. Thank you.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ThirdSet