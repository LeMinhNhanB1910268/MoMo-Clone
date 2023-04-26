import React, {useState} from 'react'
import './Endow.css'
export default function Endow() {

    return (
      <div className='container'>
        <div className='title'>
            <h3 className='title-content'>Ưu đãi nóng, tham gia ngay!</h3>
        </div>
        <div className='row'>
            <div className='col-4'>
            <div class="card">
                <img src="https://static.mservice.io/img/momo-upload-api-230302103558-638133501589511276.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Rinh quà 800K cho khách hàng mới</h5>
                    <p class="card-text">Nhập HELLOMOMO và liên kết ngân hàng để nhận gói quà đến 800K</p>
                    <div className='footer-card text-center'><a>Xem chi tiết {'>'}</a></div>
                </div>
            </div>
            </div>
            <div className='col-4'>
            <div class="card">
                <img src="https://static.mservice.io/img/momo-upload-api-221213083633-638065173934604373.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Miễn phí 3 tháng gói iCloud+ 50GB</h5>
                    <p class="card-text">Nhận 50GB iCloud+ miễn phí khi thanh toán bằng Ví MoMo</p>
                    <div className='footer-card text-center'><a>Xem chi tiết {'>'}</a></div>
                </div>
            </div>
            </div>
            <div className='col-4'>
            <div class="card">
                <img src="https://static.mservice.io/img/momo-upload-api-230407142843-638164745233386556.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Giới thiệu MoMo: Nhận ngay quà 600K</h5>
                    <p class="card-text">Cơ hội nhận ngay 50K Tiền Mặt và gói quà 550K thanh toán đa dịch vụ</p>
                    <div className='footer-card text-center'><a>Xem chi tiết {'>'}</a></div>
                </div>
            </div>
            </div>
        </div>
  
      </div>
    )
  }