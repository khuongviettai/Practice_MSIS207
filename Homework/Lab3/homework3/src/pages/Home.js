import React from "react";

class Home extends React.Component {
    render(){
        return (
            <main>
                <div className="container">
                    <div className="left-side">
                        <div className="profile-text">
                            <div className="imgbox">
                                <img src="./img/infor.png" alt="Logo"/>
                             </div>
                            <h2>Khuong Viet Tai</h2>
                        </div>
                        <div className="contact">
                            <h3 className="title">Contact</h3>
                            <ul>
                                <li>
                                    <span className="icon"><i className="fa fa-calendar" aria-hidden="true"></i></span>
                                    <p className="text">16-05-2001</p>
                                </li>
                                <li>
                                    <span className="icon"><i className="fa fa-phone" aria-hidden="true"></i></span>
                                    <a className="text" href="tel:+84945034118">0945034118</a>
                                </li>
                                <li>
                                    <span className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                                    <a className="text" href="mailto:khuongtai789@gmail.com">khuongtai789@gmail.com</a>
                                </li>
                                <li>
                                    <span className="icon"><i className="fa fa-facebook-official" aria-hidden="true"></i></span>
                                    <a className="text" href="https://www.facebook.com/khuongviettai/">Facebook</a>
                                </li>
                                <li>
                                    <span className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                                    <p className="text">KTX Khu A, DHQG TP Ho Chi Minh</p>
                                </li>
                            </ul>
                        </div>
                        <div className="education">
                            <h3 className="title">Education</h3>
                            <h5>2019 - 2022</h5>
                            <h4>Information System</h4>
                            <h4 className="end-infor">University of Information Technology</h4>
                        </div>

                        <div className="contact language">
                            <h3 className="title">Language</h3>
                            <ul>
                                <li>
                                    <span className="text">English</span>
                                    <span className="percent">
                                        <div style= {{width: '50%'}}></div>
                                    </span>
                                </li>
                                <li>
                                    <span className="text">Chinese</span>
                                    <span className="percent">
                                        <div style={{width: '20%'}}></div>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>    
                    <div className="right--side">
                        <div className="about">
                            <h2 className="title2">Profile</h2>
                            <p> Seasoned and independent Front End Developer  in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging.<br/>  <br/> Very passionate about aesthetics and UI design.</p>
                        </div>
                        <div className="about">
                            <h2 className="title2">Experience</h2>
                            <p> Expand features, refine code, and improve processes, producing smoother operations and enhancing user engagement. <br/> <br/>
                                Designed dynamic and browser compatible pages using HTML5, CSS3, Query, and Javascript. <br/> <br/>
                                Built single page applications (SPA), responsive web design, Ul using HTML5 grid layouts, CSS3 media queries where its an expression and can be used to either true or false. <br/>  <br/>
                                Ensure efficient web development by supporting designers and app developers while resolving website performance issues.</p>
                        </div>
                        <div className="about skill">
                            <h2 className="title2">Skill</h2>
                            <div className="box">
                                <h4>Html</h4>
                                <div className="percent">
                                    <div style={{width: '85%'}}></div>
                                </div>
                            </div>
                            <div className="box">
                                <h4>Css</h4>
                                <div className="percent">
                                    <div style={{width: '95%'}}></div>
                                </div>
                            </div>
                            <div className="box">
                                <h4>Javascript</h4>
                                <div className="percent">
                                    <div style={{width: '75%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>                
            </main>
        );
    }
}

export default Home;