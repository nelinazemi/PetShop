import * as React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Services = () => {

    return (

        <section id="Services">
            <div className="container my-5">

                <div className="row my-5">
                    <div class="card flex-row col-md-6" style={{backgroundColor: "#F9FBE7"}}>
                        <div class="card-body">
                            <h4 class="card-title">طرز نگهداری</h4>
                            <p class="card-text"> 
                            .مراقبت از حیوانات خانگی شامل مراقبت کردن از رژیم غذایی مناسب ، تمیز کردن محل زندگی خرگوش و پیراش او است تا حیوان تمیز و سالم باقی بماند</p>
                            <Link to='/sections'><button className='btn my-3'>ادامه مطلب</button></Link>
                        </div>
                        <div className="card-banner d-flex justify-content-center">
                            <img class="card-img" src="img/Slider/photo_2023-05-16_11-16-31.jpg" alt="" />
                        </div>                
                    </div>

                    <div class="card flex-row col-md-6" style={{backgroundColor: "#D6E8DB"}}>
                        <div class="card-body">
                            <h4 class="card-title">فروش حلزون</h4>
                            <p class="card-text">حلزون های طبی نژاد اسکارگو به دلیل کلاژن بسیار بالایی که دارند مناسب برای زیبایی و کاهش چین و چروک ، ضدلک و روشن کننده قوی هستند ارسال به سراسر کشور در کوتاه ترین زمان ممکن با کیفیت ترین و اصیل ترین ها را از ما بخواهید</p>
                            <a href="#" class="button p-2" style={{textDecoration: "none", backgroundColor: "#A6D0DD"}}>ادامه مطلب</a>
                        </div>
                        <div className="card-banner d-flex justify-content-center">
                            <img class="card-img" src='img/Services/snails.jpg' />
                        </div>
                    </div>
                </div>

                <div className="row my-5">
                    <div class="card flex-row col-md-6" style={{backgroundColor: "#FFD3B0"}}>
                        <div class="card-body">
                            <h4 class="card-title">فیلم و عکس رضایت مشتری ها</h4>
                            <p class="card-text"> در این بخش میتوانید فیلم و عکس های ارسالی توسط مشتری های عزیزمان از سراسر کشور را مشاهده کنید. رضایت شما نماد اعتماد ما</p>
                            <a href="#" class="button p-2" style={{textDecoration: "none", backgroundColor: "#D3756B"}}>ادامه مطلب</a>
                        </div>
                        <div className="card-banner d-flex justify-content-center">
                            <img class="card-img" src="img/Services/customers.jpg" alt="" />
                        </div>
                    </div>
                    
                    <div class="card flex-row col-md-6" style={{backgroundColor: "#E3F2C1"}}>
                        <div class="card-body">
                            <h4 class="card-title">وسایل نگهداری</h4>
                            <p class="card-text">وسایل نگهداری خرگوش ها شامل باکس نگهداری و وسایل بهداشتی جهت تضمین سلامت حیوان خانگی می باشد. بهترین و باکیفیت ترین وسایل را در وبسایت ما پیدا کنید</p>
                            <a href="#" class="button p-2" style={{textDecoration: "none", backgroundColor: "#47A992"}}>ادامه مطلب</a>
                        </div>
                        <div className="card-banner d-flex justify-content-center">
                            <img class="card-img" src="img/Services/tools.jpg" alt="" />
                        </div>
                    </div>
                </div>


                <div className="row my-5">
                    <div class="card flex-row col-md-6" style={{backgroundColor: "#A6D0DD"}}>
                        <div class="card-body">
                            <h4 class="card-title">ارتباط و تماس با ما</h4>
                            <p class="card-text">برای اطلاع از اخرین موجودی ها، ثبت سفارش، مطرح کردن انتقادات و پیشنهادات ما را در شبکه های مجازی دنبال کنید</p>
                            <a href="#ContactUs" class="button p-2" style={{textDecoration: "none", backgroundColor: "#8BACAA"}}>ادامه مطلب</a>
                        </div>
                        <div className="card-banner d-flex justify-content-center">
                            <img class="card-img" src="img/Services/contact.jpg" alt="" />
                        </div>
                    </div>

                    <div class="card flex-row col-md-6" style={{backgroundColor: "#F9FBE7"}}>
                        <div class="card-body">
                            <h4 class="card-title">درباره ما</h4>
                            <p class="card-text"> بزرگ ترین مجموعه پرورش مینی لوپ عروسکی ترکیش در شیراز به همراه ارسال به سرتاسر نقاط ایران. باکیفیت ترین وسایل نگهداری و محصولات مربوط به حیوانات را از ما بخواهید</p>
                            <a href="#AboutUs" class="button p-2" style={{textDecoration: "none", backgroundColor: "#F3E99F"}}>ادامه مطلب</a>
                        </div>
                        <div className="card-banner d-flex justify-content-center">
                            <img class="card-img" src="img/Services/AboutUs.jpg" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </section>


    )
}

export default Services;