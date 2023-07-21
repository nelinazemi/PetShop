import { Link } from 'react-router-dom';
import '../Style/Services.css';

const Services = () => {
    return (

        <section id="Services">
        <div class="section-header mb-5">
            <h2>خدمات</h2>
        </div>
            <div className='container'>
                <div className='row'>
                    <div class="s-card" style={{backgroundColor: "#F4D3D3"}}>
                        <div class="s-card-text">
                            <div class="portada" style={{backgroundImage: `url("img/Slider/photo_2023-05-16_11-16-31.jpg")`}}>
                            </div>
                            <div class="title-total">   
                                <h2>طرز نگهداری</h2>
                                <div class="desc">.مراقبت از حیوانات خانگی شامل مراقبت کردن از رژیم غذایی مناسب ، تمیز کردن محل زندگی خرگوش و پیراش او است تا حیوان تمیز و سالم باقی بماند</div>
                                <div class="actions">
                                    <Link to='/readmore'><button className='btn se-btn' style={{backgroundColor: "#eea29a"}}>ادامه مطلب</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="s-card" style={{backgroundColor: "#A7EDE7"}}>
                        <div class="s-card-text">
                            <div class="portada" style={{backgroundImage: `url("img/Services/snails.jpg")`}}>
                            </div>
                            <div class="title-total">   
                                <h2>فروش حلزون</h2>
                                <div class="desc"> فروش حلزون های طبی مناسب برای زیبایی و کاهش چین و چروک ، ضدلک و روشن کننده قوی. ارسال به سراسر کشور در کوتاه ترین زمان ممکن با بهترین کیفیت</div>
                                <div class="actions">
                                    <Link to='/readmore'><button className='btn se-btn' style={{backgroundColor: "#87bdd8"}}>ادامه مطلب</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="s-card" style={{backgroundColor:"#E3F2C1"}}>
                        <div class="s-card-text">
                            <div class="portada" style={{backgroundImage: `url("img/Services/tools.jpg")`}}>
                            </div>
                            <div class="title-total">   
                                <h2>وسایل نگهداری</h2>
                                <div class="desc"> وسایل نگهداری خرگوش ها شامل باکس نگهداری و وسایل بهداشتی جهت تضمین سلامت حیوان خانگی می باشد. بهترین و باکیفیت ترین وسایل را در وبسایت ما پیدا کنید</div>
                                <div class="actions">
                                    <a href='#Stuff'><button className='btn se-btn my-3' style={{backgroundColor: "#B3C890"}}>ادامه مطلب</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="s-card" style={{backgroundColor: "#E1D4BB"}}>
                        <div class="s-card-text">
                            <div class="portada" style={{backgroundImage: `url("img/Services/customers.jpg")`}}>
                            </div>
                            <div class="title-total">   
                                <h2>فیلم و عکس رضایت مشتریان</h2>
                                <div class="desc"> در این بخش میتوانید فیلم و عکس های ارسالی توسط مشتری های عزیزمان از سراسر کشور را مشاهده کنید. رضایت شما نماد اعتماد ما</div>
                                <div class="actions">
                                    <a href='#Customers'><button className='btn se-btn my-3' style={{backgroundColor: "#FFEAD2"}}>ادامه مطلب</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="s-card" style={{backgroundColor: "#A6D0DD"}}>
                        <div class="s-card-text">
                            <div class="portada" style={{backgroundImage: `url("img/Services/contact.jpg")`}}>
                            </div>
                            <div class="title-total">   
                                <h2>ارتباط و تماس با ما</h2>
                                <div class="desc"> برای اطلاع از اخرین موجودی ها، ثبت سفارش، مطرح کردن انتقادات و پیشنهادات ما را در شبکه های مجازی دنبال کنید</div>
                                <div class="actions">
                                    <a href='#ContactUs'><button className='btn se-btn my-3' style={{backgroundColor: "#AEE2FF"}}>ادامه مطلب</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="s-card" style={{backgroundColor: "#F9FBE7"}}>
                        <div class="s-card-text">
                            <div class="portada" style={{backgroundImage: `url("img/Services/AboutUs.jpg")`}}>
                            </div>
                            <div class="title-total">   
                                <h2>درباره ما</h2>
                                <div class="desc"> بزرگ ترین مجموعه پرورش مینی لوپ عروسکی ترکیش در شیراز به همراه ارسال به سرتاسر نقاط ایران. باکیفیت ترین وسایل نگهداری و محصولات مربوط به حیوانات را از ما بخواهید</div>
                                <div class="actions">
                                    <a href='#AboutUs'><button className='btn se-btn mt-5' style={{backgroundColor: "#FFDCB6"}}>ادامه مطلب</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
    )
}

export default Services;
