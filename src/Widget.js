import React from 'react'
import "./CSS/Widget.css"
import InfoIcon from '@mui/icons-material/Info';
function Widget() {
  return (
    <div className='widget'>
      <div className='widget__top'>
        <div className='widget__header'>
            <h4>Linkedin News</h4>
            <InfoIcon/>
        </div>
        <div className='widget__body'>
            <ul className='widget__options'>
                <li>
                    <h4>Slaying job search fees</h4>
                    <p>6d ago *  292 readers</p>
                </li>
                <li>
                    <h4>Slaying job search fees</h4>
                    <p>6d ago *  292 readers</p>
                </li>
                <li>
                    <h4>Slaying job search fees</h4>
                    <p>6d ago *  292 readers</p>
                </li>
                <li>
                    <h4>Slaying job search fees</h4>
                    <p>6d ago *  292 readers</p>
                </li>
                <li>
                    <h4>Slaying job search fees</h4>
                    <p>6d ago *  292 readers</p>
                </li>
            </ul>
        </div>
      </div>

      <div className='widget__bottom'>
        <div className='widget__header'>
            <h4>Today's Top Courses</h4>
            <InfoIcon/>
        </div>
        <div className='widget__body'>
        <ul className='widget__options'>
                <li>
                    <h4>Leading with a Heavy Heat</h4>
                    <p>Kay Coly</p>
                </li>
                <li>
                    <h4>Leading with a Heavy Heat</h4>
                    <p>Kay Coly</p>
                </li>
                <li>
                    <h4>Leading with a Heavy Heat</h4>
                    <p>Kay Coly</p>
                </li>
                <li>
                    <h4>Leading with a Heavy Heat</h4>
                    <p>Kay Coly</p>
                </li>
                <li>
                    <h4>Leading with a Heavy Heat</h4>
                    <p>Kay Coly</p>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Widget
