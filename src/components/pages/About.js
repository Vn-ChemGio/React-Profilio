import React, {Component} from 'react';

class About extends Component {
    render() {
        return (

        <section id="section2">
            <div className="container">
                <h2>Giới thiệu</h2>
                <div className="row">
                    <div className="col-sm-3">
                        <img src="images/man02.png" alt="man" className="img-responsive section-img"/>
                    </div>
                    {/* end .col-sm-3 */}
                    <div className="col-sm-9">
                        <h3 className="small-margin-bottom">Phạm Ngọc Quỳnh</h3>
                        <h5>Coder &amp; Developer</h5>
                        <p>Với nhiều năm làm việc trong ngành CNTT, cũng như kinh doanh. <br/>
                            Tại nhiều vị trí làm việc (Coder, Developer, Manager...), <br/>
                            cũng như nhiều dự án ở nhiều mảng ứng dụng (Website, Game, Mobile VAT..)<br/>
                            Đã đem lại cho tôi nhiều kiến thức cũng như kinh nghiệm thực tế trong quá trình làm việc<br/>
                            Vì vậy, tôi tự tin mình sẽ chắc chắn làm hài lòng các bạn dù ở bất kì vị trí nào.</p>

                        <div className="signature"><img src="images/signature.png" alt="signature"
                                                        className="img-responsive"/></div>
                        <ul className="list-unstyled text-uppercase">
                            <li><b>Ngày Sinh:</b> 29, Tháng 5, 1990</li>
                            <li><b>Số Điện Thoại:</b> 090-4565-090</li>
                            <li><b>Email:</b> tieugiaoxm@gmail.com</li>
                            <li><b>Địa Chỉ:</b>26 Đường Láng, Đống Đa, TP.Hà Nội, Việt Nam</li>
                            <li><b>Facebook:</b> fb.me/Vn.ChemGio</li>
                            <li><b>Skyper:</b> tieungaoonline</li>
                        </ul>
                        {/* end .list-unstyled */}
                        <div className="spacer"/>
                        <h3>What I'm Doing</h3>
                        <div className="row">

                            <div className="col-sm-4">
                                <div className="service">
                                    <div className="icon"><i className="ion-settings"/></div>
                                    <h5>Server Manager</h5>
                                </div>
                                {/* end .service */}
                            </div>
                            {/* end .col-sm-4 */}
                            <div className="col-sm-4">
                                <div className="service">
                                    <div className="icon"><i className="ion-ios-game-controller-b"/></div>
                                    <h5>Game Development</h5>
                                </div>
                                {/* end .service */}
                            </div>
                            {/* end .col-sm-4 */}
                            <div className="col-sm-4">
                                <div className="service">
                                    <div className="icon"><i className="ion-code-working"/></div>
                                    <h5>FullStack Development</h5>
                                </div>
                                {/* end .service */}
                            </div>

                            {/* end .col-sm-4 */}
                        </div>
                        {/* end .row */}
                    </div>
                    {/* end .col-sm-9 */}
                </div>
                {/* end .row */}
            </div>
            {/* end .container */}
        </section>
    )
    }
}

export default About;