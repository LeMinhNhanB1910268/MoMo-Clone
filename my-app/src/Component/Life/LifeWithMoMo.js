import React, {useState} from 'react'
import NewInfo from '../View-News/NewInfo'
export default function LifeWithMoMo() {
    const [router, setRouter] = useState('Mới nhất')
    const handleChoseItem = (text) => {
      setRouter(text)
    }
  return (
    <div className='container'>
        <div className='title'>
          <h3 className='title-content'> Sống thông minh cùng MoMo</h3>
          <h5 className='text-center'>Chung tay quyên góp giúp đỡ các hoàn cảnh khó khăn trên khắp cả nước.</h5>
        </div>
        <div className=''></div>
        <div className='row'>
          <div className='col-2'></div>
          <div className='col-19'>          
            <nav className="nav nav-menu">
              <a className="nav-link" style={router === 'Mới nhất' ? {borderBottom: '2px solid #E47EB6', color: "#E47EB6"}:{}} type="button"  onClick={()=>{handleChoseItem('Mới nhất')}}>Mới nhất</a>
              <a className="nav-link" ><span>Du lịch</span></a>
              <a className="nav-link"><span>Tài chính</span></a>
              <a className="nav-link" ><span>Game App</span></a>
              <a className="nav-link" ><span>Đời sống</span></a>
              <a className="nav-link" ><span>Chọn MoMo</span></a>
              <a className="nav-link" ><span>Mua sắm</span></a>
            </nav>
          </div>
          <div className='col-1'></div>
        </div>
        <div>
          { router === 'Mới nhất' && <NewInfo />}
        </div>

    </div>
  )
}
