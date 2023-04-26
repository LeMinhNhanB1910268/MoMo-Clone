import React, {useState} from 'react'
import './BenevolentMoMo.css'
import Partner from './Partner'
import Pig from './Pig'
import MoMoHeart from './MoMoHeart'
import News from './News'
export default function BenevolentMoMo() {
    const [router, setRouter] = useState('Trái tim MoMo')
    const handleChoseItem = (text) => {
      setRouter(text)
    }
    return (
      <div className='container'>
        <div className='title'>
            <h3 className='title-content'>Ví Nhân Ái MoMo</h3>
            <h5 className='text-center'>Chung tay quyên góp giúp đỡ các hoàn cảnh khó khăn trên khắp cả nước.</h5>
        </div>
        <div className='row'>
          <div className='col-2'></div>
          <div className='col-8'>          
            <nav className="nav nav-menu">
              <a className="nav-link" style={router === 'Trái tim MoMo' ? {borderBottom: '2px solid #E47EB6',color: "#E47EB6"}:{}} type="button"  onClick={()=>{handleChoseItem('Trái tim MoMo')}}>Trái tim MoMo</a>
              <a className="nav-link" style={router === 'Heo đất MoMo' ? {borderBottom: '2px solid #E47EB6',color: "#E47EB6"}:{}} type="button"  onClick={()=>{handleChoseItem('Heo đất MoMo')}}><span>Heo đất MoMo</span></a>
              <a className="nav-link" style={router === 'Tin tức cộng đồng' ? {borderBottom: '2px solid #E47EB6',color: "#E47EB6"}:{}} type="button"  onClick={()=>{handleChoseItem('Tin tức cộng đồng')}}><span>Tin tức cộng đồng</span></a>
              <a className="nav-link" style={router === 'Các đối tác đồng hành' ? {borderBottom: '2px solid #E47EB6',color: "#E47EB6"}:{}} type="button"  onClick={()=>{handleChoseItem('Các đối tác đồng hành')}}><span>Các đối tác đồng hành</span></a>
            </nav>
          </div>
          <div className='col-2'></div>
        </div>
        <div>
          { router === 'Trái tim MoMo' && <MoMoHeart />}
          { router === 'Heo đất MoMo' && <Pig />}
          { router === 'Tin tức cộng đồng' && <News />}
          { router === 'Các đối tác đồng hành' && <Partner />}
        </div>
  
      </div>
    )
  }