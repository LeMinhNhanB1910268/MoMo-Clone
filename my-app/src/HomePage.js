import React, {useState} from 'react'
import './HomePage.css'
import Logo from './MoMo_Logo.png'
import Propose from './Component/Service/Propose'
import Benevolent from './Component/Service/Benevolent'
import Ticket from './Component/Service/Ticket'
import Game from './Component/Service/Game'
import Payment from './Component/Service/Payment'
import PaymentHome from './Component/Service/PaymentHome'
import Finance from './Component/Service/Finance'
import Ecommerce from './Component/Service/Ecommerce'
import Phone from './Component/Service/Phone'
import Tranfer from './Component/Service/Tranfer'
import Travel from './Component/Service/Travel'
import New from './Component/View-News/New'
import Endow from './Component/Endow/Endow'
import BenevolentMoMo from './Component/Benevolent/BenevolentMoMo'
import LifeWithMoMo from './Component/Life/LifeWithMoMo'
export default function HomePage() {
  const [router, setRouter] = useState('MoMo đề xuất')
  const handleChoseItem = (text) => {
    setRouter(text)
  }

  return (
    <div>
        <div className="header container">
            <div className="row navbar">
                <div className="col-9">
                    <nav className="nav">
                        <img src={Logo} className="logo" alt="" />
                            <a className="nav-link menu-dropdown dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#">Dịch vụ</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Chuyển tiền - Nạp tiền</a>
                                <a className="dropdown-item" href="#">Nạp tiền điện thoại</a>
                                <a className="dropdown-item" href="#">Du lịch - Đi lại</a>
                                <a className="dropdown-item" href="#">Thanh toán hóa đơn</a>
                            </div>
                        <a className="nav-link" href="#"><span>Về MoMo</span> <i className="fa-solid fa-angle-down"></i></a>
                        <a className="nav-link" href="#"><span>Tin tức</span> <i className="fa-solid fa-angle-down"></i></a>
                        <a className="nav-link" href="#"><span>Trợ giúp</span> <i className="fa-solid fa-angle-down"></i></a>
                        <a className="nav-link" href="#"><span>Đối tác</span> <i className="fa-solid fa-angle-down"></i></a>
                        <a className="nav-link" href="#"><span>Blog MoMo</span> <i className="fa-solid fa-angle-down"></i></a>
                      </nav>
                </div>
                <div className="col-3">
                    <div className="search">
                        <input className="input-search" placeholder="Bạn tìm gì..." />
                        <i className="fa-solid fa-magnifying-glass input-group-append"></i>
                    </div>
                </div>
            </div>
        </div>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://static.mservice.io/img/momo-upload-api-230404161228-638162215484922447.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://static.mservice.io/img/momo-upload-api-230410092112-638167152728560219.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://static.mservice.io/img/momo-upload-api-230424150952-638179457927112250.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://static.mservice.io/img/momo-upload-api-230424150952-638179457927112250.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://static.mservice.io/img/momo-upload-api-230404160946-638162213869132013.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
           <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </button>
        </div>
        <div className="content">
            <div className='container'>
                <div className='title'>                <h2 className="title-content">Tiện ích và giao dịch</h2></div>
                <p className="content-text">Khám phá hàng trăm tính năng trên siêu ứng dụng giúp bạn có thể thực hiện mọi nhu cầu cuộc sống</p>
                <div className="menu mt-4">
                  <div className="row">
                    <div style={router === 'MoMo đề xuất' ? {borderBottom: 0,borderTop: '2px solid #E47EB6',color: "#E47EB6"}:{}} type="button" className="col item-menu" onClick={()=>{handleChoseItem('MoMo đề xuất')}}>
                    <div>
                        <img src='https://static.mservice.io/fileuploads/svg/momo-file-211217174334.svg'>
                        </img>
                      </div>
                      <span>MoMo đề xuất</span></div>
                    <div  style={router === 'Ví nhân ái' ? {borderBottom: 0,borderTop: '2px solid #E47EB6',color: "#E47EB6"}:{}} type="button" className="col item-menu" onClick={()=>{handleChoseItem('Ví nhân ái')}}>
                    <div>
                        <img src='	https://static.mservice.io/styles/desktop/images/tienich/icon11.svg'>
                        </img>
                      </div>
                      <span>Ví nhân ái</span></div>
                    <div  style={router === 'Mua vé xem phim' ? {borderBottom: 0,borderTop: '2px solid #E47EB6',color: "#E47EB6"}:{}} type="button" className="col item-menu" onClick={()=>{handleChoseItem('Mua vé xem phim')}}>
                    <div>
                        <img src='https://static.mservice.io/styles/desktop/images/tienich/icon9.svg'>
                      </img>
                      </div>
                      <span>Mua vé xem phim</span>
                      </div>
                    <div  style={router === 'Tài chính - Bảo hiểm' ? {borderBottom: 0,borderTop: '2px solid #E47EB6',color: "#E47EB6"}:{}} type="button" className="col item-menu" onClick={()=>{handleChoseItem('Tài chính - Bảo hiểm')}}>
                    <div>
                        <img src='https://static.mservice.io/styles/desktop/images/tienich/icon7.svg'>
                        </img>
                      </div>
                      <span>Tài chính - Bảo hiểm</span>
                      </div>
                    <div  style={router === 'Thanh toán hóa đơn' ? {borderBottom: 0,borderTop: '2px solid #E47EB6',color: "#E47EB6"}:{}} type="button" className="col item-menu" onClick={()=>{handleChoseItem('Thanh toán hóa đơn')}}>
                    <div>
                        <img src='https://static.mservice.io/styles/desktop/images/tienich/icon3.svg'>
                        </img>
                      </div>
                      <span>Thanh toán hóa đơn</span>
                      </div>
                      <div  style={router === 'Dịch vụ - Đi lại' ? {borderBottom: 0,borderTop: '2px solid #E47EB6',color: "#E47EB6"}:{}} type="button" className="col item-menu" onClick={()=>{handleChoseItem('Dịch vụ - Đi lại')}}> 
                      <div>
                        <img src='https://static.mservice.io/styles/desktop/images/tienich/icon8.svg'>
                        </img>
                      </div>
                      <span>Dịch vụ - Đi lại</span>
                      </div>
                      <div  style={router === 'Chuyển - Nhận tiền' ? {borderBottom: 0,borderTop: '2px solid #E47EB6',color: "#E47EB6"}:{}} type="button" className="col item-menu" onClick={()=>{handleChoseItem('Chuyển - Nhận tiền')}}> 
                      <div>
                        <img src='	https://static.mservice.io/styles/desktop/images/tienich/icon5.svg'>
                        </img>
                      </div>
                      <span>Chuyển - Nhận tiền</span>
                      </div>
                      <div  style={router === 'Thương mai điện tử' ? {borderBottom: 0,borderTop: '2px solid #E47EB6',color: "#E47EB6"}:{}} type="button" className="col item-menu" onClick={()=>{handleChoseItem('Thương mai điện tử')}}> 
                      <div>
                        <img src='https://static.mservice.io/fileuploads/svg/momo-file-211103134752.svg'>
                        </img>
                      </div>
                      <span>Thương mai điện tử</span>
                      </div>
                      <div  style={router === 'Nạp tiền điện thoại' ? {borderBottom: 0,borderTop: '2px solid #E47EB6',color: "#E47EB6"}:{}} type="button" className="col item-menu" onClick={()=>{handleChoseItem('Nạp tiền điện thoại')}}> 
                      <div>
                        <img src='https://static.mservice.io/fileuploads/svg/momo-file-211217174334.svg'>
                        </img>
                      </div>
                      <span>Nạp tiền điện thoại</span>
                      </div>
                      <div  style={router === 'Game - ứng dụng' ? {borderBottom: 0,borderTop: '2px solid #E47EB6',color: "#E47EB6"}:{}} type="button" className="col item-menu" onClick={()=>{handleChoseItem('Game - ứng dụng')}}> 
                      <div>
                        <img src='https://static.mservice.io/styles/desktop/images/tienich/icon2.svg'>
                        </img>
                      </div>
                      <span>Game - ứng dụng</span>
                      </div>
                      <div  style={router === 'Game - ứng dụng' ? {borderBottom: 0,borderTop: '2px solid #E47EB6',color: "#E47EB6"}:{}} type="button" className="col item-menu" onClick={()=>{handleChoseItem('Game - ứng dụng')}}> 
                      <div>
                        <img src='https://static.mservice.io/styles/desktop/images/tienich/icon6.svg'>
                        </img>
                      </div>
                      <span>Game - ứng dụng</span>
                      </div>
                      <div  style={router === 'Thanh toán tại nhà' ? {borderBottom: 0,borderTop: '2px solid #E47EB6',color: "#E47EB6"}:{}} type="button" className="col item-menu" onClick={()=>{handleChoseItem('Thanh toán tại nhà')}}> 
                      <div>
                        <img src='https://static.mservice.io/styles/desktop/images/tienich/icon4.svg'>
                        </img>
                      </div>
                      <span>Thành toán tại nhà</span>
                      </div>
                  </div>
                </div>
                <div className='mt-4'>
                { router === 'MoMo đề xuất' && <Propose />}
                  {router === 'Ví nhân ái' && <Benevolent />}
                  {router === 'Mua vé xem phim' && <Ticket />}
                  {router === 'Tài chính - Bảo hiểm' && <Finance />}
                  {router === 'Thanh toán hóa đơn' && <Payment />}
                  {router === 'Dịch vụ - Đi lại' && <Travel />}
                  {router === 'Chuyển - Nhận tiền' && <Tranfer />}
                  {router === 'Thương mai điện tử' && <Ecommerce />}
                  {router === 'Nạp tiền điện thoại' && <Phone />}
                  {router === 'Game - ứng dụng' && <Game />}
                  {router === 'Thanh toán tại nhà' && <PaymentHome />}
                </div>
                <div className='mt-4 ahuhu'>
                  <New />
                </div>
                <div className='mt-4'>
                  <Endow />
                </div>
                <div className='mt-4'>
                  <BenevolentMoMo />
                </div>
                <div className='mt-4'>
                  <LifeWithMoMo />
                </div>
            </div>
        </div>
        <div className='back-to-top'><a href='#top'><i class="fa-solid fa-circle-up"></i></a></div>
        <div className='footer'>
          <div className='container'>
            <div className='row'>
              <div className='col-3'>
                <p>Công Ty Cổ Phần Dịch Vụ Di Động Trực Tuyến (viết tắt M_Service)</p>
                <p>Lầu 6, Toà nhà Phú Mỹ Hưng, số 8 Hoàng Văn Thái, khu phố 1, Phường Tân Phú, Quận 7, Thành phố Hồ Chí Minh</p>
              </div>
              <div className='col-3'>
                <p><a>Về MoMo</a></p>
                <p><a>Blog</a></p>
                <p><a>Liên hệ</a></p>
                <p><a>Điều khoản điều lệ</a></p>
                <p><a>Chính sách quyền riêng tư</a></p>
                </div>
                <div className='col-3'>
                  <p>CHẮM SÓC KHÁCH HÀNG</p>
                  <p>Địa chỉ: Tầng M, Tòa nhà Victory Tower, Số 12 Tân Trào, Phường Tân Phú, Quận 7, Thành phố Hồ Chí Minh</p>
                  <p>Hotline : 1900 5454 41 (1000 đ/phút)</p>
                  <p>Email : hotro@momo.vn</p>
                </div>
                <div className='col-3'>
                  <p>HỢP TÁC DOANH NGHIỆP</p>
                  <p>Hotline : 1900 636 652</p>
                  <p>Email : merchant.care@momo.vn</p>
                  <p>Website : business.momo.vn</p>
                </div>
            </div>
          </div>
        </div>


    </div>
  )
}

