import React, {useState} from 'react'
import NewInfo from './NewInfo'
import PromotionInfo from './PromotionInfo'
import Blog from './Blog'
import Inform from './Inform'
import Communicate from './Communicate'
import EventInfo from './EventInfo'
export default function New() {
  const [router, setRouter] = useState('Mới nhất')
  const handleChoseItem = (text) => {
    setRouter(text)
  }
  return (
    <div className='container'>
        <div className='title'>
          <h3 className='title-content'> Có gì mới trên MoMo?</h3>
        </div>
        <div className=''></div>
        <div className='row'>
          <div className='col-2'></div>
          <div className='col-8'>          
            <nav className="nav nav-menu">
              <a className="nav-link" style={router === 'Mới nhất' ? {borderBottom: '2px solid #E47EB6',color: "#E47EB6"}:{}} type="button"  onClick={()=>{handleChoseItem('Mới nhất')}}>Mới nhất</a>
              <a className="nav-link" style={router === 'Sự kiện' ? {borderBottom: '2px solid #E47EB6',color: "#E47EB6"}:{}} type="button"  onClick={()=>{handleChoseItem('Sự kiện')}}><span>Sự kiện</span></a>
              <a className="nav-link" style={router === 'Khuyến mãi' ? {borderBottom: '2px solid #E47EB6',color: "#E47EB6"}:{}} type="button"  onClick={()=>{handleChoseItem('Khuyến mãi')}}><span>Khuyến mãi</span></a>
              <a className="nav-link" style={router === 'Thông báo' ? {borderBottom: '2px solid #E47EB6',color: "#E47EB6"}:{}} type="button"  onClick={()=>{handleChoseItem('Thông báo')}}><span>Thông báo</span></a>
              <a className="nav-link" style={router === 'Cộng đồng' ? {borderBottom: '2px solid #E47EB6',color: "#E47EB6"}:{}} type="button"  onClick={()=>{handleChoseItem('Cộng đồng')}}><span>Cộng động</span></a>
              <a className="nav-link" style={router === 'Blog MoMo' ? {borderBottom: '2px solid #E47EB6',color: "#E47EB6"}:{}} type="button"  onClick={()=>{handleChoseItem('Blog MoMo')}}><span>Blog MoMo</span></a>
            </nav>
          </div>
          <div className='col-2'></div>
        </div>
        <div>
          { router === 'Mới nhất' && <NewInfo />}
          { router === 'Sự kiện' && <EventInfo />}
          { router === 'Khuyến mãi' && <PromotionInfo />}
          { router === 'Thông báo' && <Inform />}
          { router === 'Cộng đồng' && <Communicate />}
          { router === 'Blog MoMo' && <Blog />}
        </div>

    </div>
  )
}
