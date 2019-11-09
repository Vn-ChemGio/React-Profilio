import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <section id="section1" className="no-padding-bottom active">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7 vertical-center padding-fix">
                            <h1 style={{display:"inline-flex"}}> <code>Coder<sup>+</sup> </code> &amp; <code>Developer<sup>+</sup></code>
                            </h1>
                            <p> Với nhiều năm làm việc trong ngành CNTT, cũng như kinh doanh. <br/>
                                Tại nhiều vị trí làm việc (Coder, Developer, Manager...), <br/>
                                cũng như nhiều dự án ở nhiều mảng ứng dụng (Website, Game, Mobile VAT..)<br/>
                                Đã đem lại cho tôi nhiều kiến thức cũng như kinh nghiệm thực tế trong quá trình làm việc<br/>
                                Vì vậy, tôi tự tin mình sẽ chắc chắn làm hài lòng các bạn dù ở bất kì vị trí nào.</p>
                            <p className="button-row">
                                <a href={"tel:+84904565090"} className="button solid-button white">Gọi cho tôi</a>
                                <a href={"http://windblade.herokuapp.com/vCard"} className="button solid-button purple">Lưu Contact</a>

                            </p>
                        </div>
                        {/* end .col-sm-7 */}
                        <div className="col-sm-5 vertical-center">
                            <img src="images/man01.png" alt="man" className="img-responsive section-img"/>
                        </div>
                        {/* end .col-sm-5 */}
                    </div>
                    {/* end .row */}
                </div>
                {/* end .container */}
            </section>
        )
    }
}

export default Home;