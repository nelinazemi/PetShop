import Carousel from 'react-bootstrap/Carousel';
import '../Style/Hero.css';

const Hero = () => {
    return(
        <div>
            <section class="hero">
                <div class="wrapper">
                    <Carousel className='col-lg-5'>
            　　　      <Carousel.Item className='slide'>
            　　　        <img
            　　　          className="d-block w-100"
            　　　          src= "img/c3.jpg"
                            height={"400rem"}
            　　　        />
            　　　      </Carousel.Item>
            　　　      <Carousel.Item className='slide'>
            　　　        <img
            　　　          className="d-block w-100"
            　　　          src= "img/c1.jpg"
                            height={"400rem"}
            　　　        />
            　　　      </Carousel.Item>
            　　　      <Carousel.Item className='slide'>
            　　　        <img
            　　　          className="d-block w-100"
            　　　          src= "img/c4.jpg"
                            height={"400rem"}
            　　　        />
            　　　      </Carousel.Item>
        　　　      </Carousel>
                    <div class="content">
                        <h2 class="hero__title">بزرگ ترین مجموعه</h2>
                        <h2 class="hero__title">پرورش خرگوش مینی لوپ عروسکی ترکیش در ایران</h2>
                        <p class="hero__text">ما را در شبکه های اجتماعی دنبال کنید</p>
                        <a href="https://instagram.com/azy_petshop?igshid=NGExMmI2YTkyZg=="><img src="img/icons/instagram.png" className="px-2"/></a>
                        <a href='https://wa.me/9981706252'><img src="img/icons/whatsapp.png" className="px-2"/></a>
                        <a href='https://rubika.ir/azy_petshop'><img src="img/icons/rubika.png" className="mx-2" style={{width: "42px", height: "42px"}}/></a>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default Hero;