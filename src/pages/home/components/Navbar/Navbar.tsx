import React from 'react';
import './navbar.scss';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar_left'>
                <img src="/images/english-right-now-logo.png" alt="" className='navbar_left_logo' />
            </div>
            <div className='navbar_center'>
                <span>Giới thiệu</span>
                <span>Khoá học</span>
                <span>Giảng viên</span>
                <span>Nghề nghiệp</span>
            </div>
            <div className='navbar_right'>
                <span><button className='primary_button'>TƯ VẤN HỌC PHÍ VÀ LỊCH HỌC</button></span>
            </div>
        </nav>
    )
}
