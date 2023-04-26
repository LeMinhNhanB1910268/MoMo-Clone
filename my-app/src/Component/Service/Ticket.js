import React from 'react'
import './Ticket.css'
export default function Ticket() {
  return (
      <div className='content-propose'>
          <div classNameName='mt-4 menu-btn'>
              <button className='btn-option'> <img src='https://static.mservice.io/fileuploads/svg/momo-file-221212140101.svg'></img>Vé xem phim</button>
              <button className='btn-option'><img src='https://static.mservice.io/fileuploads/svg/momo-file-210817152423.svg'></img>Lịch chiếu phim</button>
              <button className='btn-option'><img src='https://static.mservice.io/img/momo-upload-api-211020092535-637703187353201783.png'></img> Rạp chiếu phim</button>
          </div>
          <div className="card mb-3 card-propose">
              <div className="row no-gutters">
                  <div className="col-md-5">
                      <div className="card-body">
                          <h3 className="card-title">Đặt vé xem phim trên MoMo</h3>
                          <div className='card-list'>
                              <p className="card-text"><img src='https://static.mservice.io/styles/desktop/images/svg/check.svg'></img>Du hí các rạp, <b>trải nghiệm phim hay</b></p>
                          </div>
                          <div className='card-list'>
                              <p className="card-text"><img src='https://static.mservice.io/styles/desktop/images/svg/check.svg'></img>Đặt vé trực tiếp, <b>thanh toán xong ngay</b></p>
                          </div>
                          <div className='card-list'>
                              <p className="card-text"><img src='https://static.mservice.io/styles/desktop/images/svg/check.svg'></img><b>Gợi ý cho bạn</b>, suất chiếu gần đây</p>
                          </div>
                          <div className='card-list'>
                              <p className="card-text"><img src='https://static.mservice.io/styles/desktop/images/svg/check.svg'></img><b>Lịch sử đặt vé</b> được lưu lại ngay</p>
                          </div>
                          <div className='card-text card-list'>
                              <div className='row'>
                                  <div className='BH'><div><img src='https://static.mservice.io/fileuploads/svg/momo-file-230321145748.svg'></img></div><span>Review phim</span></div>
                                  <div className='BH'><div><img src='https://static.mservice.io/fileuploads/svg/momo-file-211020092703.svg'></img></div><span>Blog phim</span></div>
                                  <div className='BH'><div><img src='https://static.mservice.io/fileuploads/svg/momo-file-211020092703.svg'></img></div><span>Phim chiếu rạp</span></div>
                                  <div className='BH'><div><img src='https://static.mservice.io/img/momo-upload-api-211020092646-637703188066920742.png'></img></div><span>Rạp phim</span></div>
                                  <div className='BH'><div><img src='https://static.mservice.io/img/momo-upload-api-211020093353-637703192337910251.png'></img></div><span>Lịch chiếu</span></div>
                              </div>
                          </div>
                          <div className='card-list'>
                              <button className='order'>ĐẶT VÉ NGAY</button>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-7 propose-img">
                      <img src="https://static.mservice.io/img/momo-upload-api-211118162051-637728492513549399.jpg" alt="..." />
                  </div>
              </div>
          </div>
      </div>
  )
}
