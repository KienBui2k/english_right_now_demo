import React from 'react';
import './homeContent.scss';

export default function HomeContent() {
    return (
        <div>
            <div className='content_container'>
                <div className='content'>
                    <div className='content_left'>
                        <h1>Learn English today <br />
                            For a better tomorrow</h1>
                        <p>English Right Now giúp bạn học nhanh, hiểu nhanh và đạt điểm cao trong thời gian ngắn nhất!</p>
                        <button className='primary_button'>TƯ VẤN CHO TÔI HỌC PHÍ VÀ LỊCH HỌC</button>
                    </div>
                    <div className="content_right">
                        <img src="/images/hero.png" alt="" />
                    </div>
                </div>
                <div className='course_title'>
                    <div>
                        <img src="/images/british-council.png" alt="" />
                    </div>
                    <div>
                        <img src="/images/cambridge.png" alt="" />
                    </div>
                    <div>
                        <img src="/images/harvard.png" alt="" />
                    </div>
                    <div>
                        <img src="/images/oxford.png" alt="" />
                    </div>
                    <div>
                        <img src="/images/macmillan.png" alt="" />
                    </div>
                </div>
                <div className='banner'>
                    <img src="/images/banner.png" alt="" className='banner_image' />
                </div>
            </div>
            <div className='course_container'>
                <h3>Hành trang kiến thức English Right Now trang bị cho bạn</h3>
                <div className='course_box'>
                    <div className='course_box_image'>
                        <img src="/images/title-01.jpeg" alt="" />
                    </div>
                    <div className='course_box_image'>
                        <img src="/images/title-02.jpeg" alt="" />
                    </div>
                    <div className='course_box_image'>
                        <img src="/images/title-03.jpeg" alt="" />
                    </div>
                    <div className='course_box_image'>
                        <img src="/images/title-04.jpeg" alt="" />
                    </div>
                </div>
            </div>
            <div className='feedback'>
                <h2>Feedback học viên</h2>
                <div className='feedback_box'>
                    <div className='feedback_box_image'>
                        <img src="/images/feedback-01.jpeg" alt="" />
                    </div>
                    <div className='feedback_box_image'>
                        <img src="/images/feedback-02.jpeg" alt="" />
                    </div>
                    <div className='feedback_box_image'>
                        <img src="/images/feedback-03.jpeg" alt="" />
                    </div>
                    <div className='feedback_box_image'>
                        <img src="/images/feedback-05.jpeg" alt="" />
                    </div>
                    <div className='feedback_box_image'>
                        <img src="/images/feedback-06.jpeg" alt="" />
                    </div>
                    <div className='feedback_box_image'>
                        <img src="/images/feedback-07.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
