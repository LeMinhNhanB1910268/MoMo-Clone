import React from 'react'
import './Propose.css'
export default function Propose(){
  return (
    <div className='content-propose'>
        <div classNameName='mt-4 menu-btn'>
            <button className='btn-option'> <img src='https://static.mservice.io/fileuploads/svg/momo-file-230329174618.svg'></img> Bảo hiểm ô tô</button>
            <button className='btn-option'><img src='https://static.mservice.io/fileuploads/svg/momo-file-221212140101.svg'></img> Vé xem phim</button>
            <button className='btn-option'> <img src='https://static.mservice.io/fileuploads/svg/momo-file-201210105714.svg'></img> Trái tim MoMo</button>
            <button className='btn-option'> <img src='https://static.mservice.io/fileuploads/svg/momo-file-211110095250.svg'></img> Vé máy bay</button>
            <button className='btn-option'> <img src='https://static.mservice.io/img/momo-upload-api-210929101551-637685073519953125.png'></img> Vay nhanh</button>
            <button className='btn-option'> <img src='https://static.mservice.io/fileuploads/svg/momo-file-221013112959.svg'></img> Khách sạn theo giờ</button>
        </div>
        <div className="card mb-3 card-propose">
          <div className="row no-gutters">
            <div className="col-md-5">
              <div className="card-body">
                <h3 className="card-title"> Mua bảo hiểm ôtô trên MoMo</h3>
                <div className='card-list'>
                  <p className="card-text"><img src='https://static.mservice.io/styles/desktop/images/svg/check.svg'></img>Phí bảo hiểm tốt nhất</p>
                </div>
                <div className='card-list'>
                  <p className="card-text"><img src='https://static.mservice.io/styles/desktop/images/svg/check.svg'></img>Báo giá từ các nhà Bảo hiểm hàng đầu</p>
                </div>
                <div className='card-list'>
                  <p className="card-text"><img src='https://static.mservice.io/styles/desktop/images/svg/check.svg'></img>Mua và Cấp hợp đồng siêu tốc</p>
                </div>
                <div className='card-list'>
                  <p className="card-text"><img src='https://static.mservice.io/styles/desktop/images/svg/check.svg'></img>Quản lý dễ dàng trên điện thoại</p>
                </div>
                <div className='card-text card-list'>
                  <div className='row'>
                    <div className='BH'><div><img src='https://static.mservice.io/fileuploads/svg/momo-file-230330180158.svg'></img></div><span>Bảo hiểm vật chất</span></div>
                    <div className='BH'><div><img src='https://static.mservice.io/fileuploads/svg/momo-file-230330180158.svg'></img></div><span>Bảo hiểm bắt buộc</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 propose-img">
              <img src="https://static.mservice.io/img/momo-upload-api-230425115941-638180207817678809.jpeg" alt="..." />
            </div>
          </div>
        </div>
    </div>
  )
}
