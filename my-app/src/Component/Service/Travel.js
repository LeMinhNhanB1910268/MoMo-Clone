import React from 'react'

export default function Travel() {
  return (
    <div className='content-propose'>
    <div classNameName='mt-4 menu-btn'>
      <button className='btn-option'> <img src='https://static.mservice.io/fileuploads/svg/momo-file-211110095226.svg'></img>Trải nghiệm</button>
      <button className='btn-option'> <img src='https://static.mservice.io/fileuploads/svg/momo-file-211110095250.svg'></img> Vé máy bay</button>
      <button className='btn-option'> <img src='https://static.mservice.io/fileuploads/svg/momo-file-211110095211.svg'></img> Đặt khách sạn</button>
      <button className='btn-option'> <img src='https://static.mservice.io/fileuploads/svg/momo-file-211110102648.svg'></img> Vé tàu hỏa</button>
        <button className='btn-option'> <img src='https://static.mservice.io/fileuploads/svg/momo-file-211110095234.svg'></img> Vé xe khách</button>
        <button className='btn-option'><img src='https://static.mservice.io/fileuploads/svg/momo-file-221013112959.svg'></img> Khách sạn theo giờ</button>
    </div>
    <div className="card mb-3 card-propose">
        <div className="row no-gutters">
            <div className="col-md-5">
                <div className="card-body">
                    <h3 className="card-title">Du lịch - Đi lại trên MoMo</h3>
                    <div className='card-list'>
                        <p className="card-text"><img src='https://static.mservice.io/styles/desktop/images/svg/check.svg'></img>Giá vé cạnh tranh, ưu đãi hấp dẫn</p>
                    </div>
                    <div className='card-list'>
                        <p className="card-text"><img src='https://static.mservice.io/styles/desktop/images/svg/check.svg'></img>Chủ động, linh hoạt tùy chỉnh mọi thứ trong chuyến đi theo ý muốn</p>
                    </div>
                    <div className='card-list'>
                        <p className="card-text"><img src='https://static.mservice.io/styles/desktop/images/svg/check.svg'></img>Dễ dàng so sánh giá vé, thời gian khởi hành, hãng bay/tàu/xe</p>
                    </div>
                    <div className='card-list'>
                        <p className="card-text"><img src='https://static.mservice.io/styles/desktop/images/svg/check.svg'></img>Mở Ví, quản lý cả chuyến đi</p>
                    </div>
                    <div className='card-list'>
                        <button className='order'>ĐẶT VÉ NGAY</button>
                    </div>
                </div>
            </div>
            <div className="col-md-7 propose-img">
                <img src="https://static.mservice.io/img/momo-upload-api-211216154723-637752664438961346.jpg" alt="..." />
            </div>
        </div>
    </div>
</div>
  )
}
