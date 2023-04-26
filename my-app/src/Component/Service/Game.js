import React from 'react'

export default function Game() {
  return (
    <div className='content-propose'>
    <div classNameName='mt-4 menu-btn'>
      <button className='btn-option'> <img src='https://static.mservice.io/img/momo-upload-api-200522110530-637257423304804595.png'></img>Xem phim online</button>
      <button className='btn-option'> <img src='https://static.mservice.io/img/momo-upload-api-200522110530-637257423304804595.png'></img> Google Play</button>
      <button className='btn-option'> <img src='https://static.mservice.io/fileuploads/svg/momo-file-200703122045.svg'></img> App Store</button>
      <button className='btn-option'> <img src='https://static.mservice.io/img/momo-upload-api-200521154614-637256727747654352.png'></img> Thẻ game</button>
    </div>
    <div className="card mb-3 card-propose">
        <div className="row no-gutters">
            <div className="col-md-5">
                <div className="card-body">
                    <h3 className="card-title">Xem phim online</h3>
                    <div className='card-list'>
                        <p className="card-text"><img src='https://static.mservice.io/styles/desktop/images/svg/check.svg'></img>"Rạp chiếu phim" tại nhà, không cần đi đâu xa</p>
                    </div>
                    <div className='card-list'>
                        <p className="card-text"><img src='https://static.mservice.io/styles/desktop/images/svg/check.svg'></img>Xem phim bom tấn, chất lượng tốt nhất</p>
                    </div>
                    <div className='card-list'>
                        <p className="card-text"><img src='https://static.mservice.io/styles/desktop/images/svg/check.svg'></img>Nhiều gói dịch vụ, đáp ứng mọi nhu cầu</p>
                    </div>
                    <div className='card-list'>
                        <p className="card-text"><img src='https://static.mservice.io/styles/desktop/images/svg/check.svg'></img>Thanh toán đơn giản, một chạm xong ngay</p>
                    </div>
                    <div className='card-text card-list'>
                        <div className='row'>
                            <div className='BH'><div><img src='https://static.mservice.io/placebrand/s/momo-upload-api-200421094705-637230592254590254.png'></img></div><span>Galaxy Play</span></div>
                        </div>
                        <div className='row'>
                            <div className='BH'><div><img src='https://static.mservice.io/placebrand/s/momo-upload-api-200323172254-637205809740663113.jpg'></img></div><span>FPT Play</span></div>
                        </div>
                    </div>
                    <div className='card-list'>
                        <button className='order'>TÌM HIỂU THÊM</button>
                    </div>
                </div>
            </div>
            <div className="col-md-7 propose-img">
                <img src="https://static.mservice.io/img/momo-upload-api-200727151434-637314596749512968.jpg" alt="..." />
            </div>
        </div>
    </div>
</div>
  )
}
