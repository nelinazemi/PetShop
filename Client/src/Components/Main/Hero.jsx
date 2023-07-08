const Container = () => {

    return (

        <section>            
            <div className="container my-3">
                <div className="row">
                    <div id="carouselExampleSlidesOnly" class="col-lg-5 carouselslide my-3" data-bs-ride="carousel">
                        <div class="card-banner carousel-inner">
                            <div class="carousel-item active">
                                <img src="img/Slider/photo_2023-05-16_11-14-43.jpg" className="w-100 mt-5" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="card-body col-lg-5 mx-5 py-5 hero-text-container">
                        <div className="row my-5">
                            <div className="p-5 hero-text border border-5 border-light rounded-3 shadow-lg">
                                <h1 className="m-2">بزرگ ترین مجموعه</h1>
                                <h2 className="m-3">پرورش خرگوش مینی لوپ عروسکی ترکیش در ایران</h2>
                                <h5 className="m-5"> ما را در شبکه های اجتماعی دنبال کنید</h5>
                                <a><img src="img/icons/instagram.png" className="px-2"/></a>
                                <a><img src="img/icons/whatsapp.png" className="px-2"/></a>
                                <a><img src="img/icons/rubika.png" className="mx-2" style={{width: "42px", height: "42px"}}/></a>
                                <a><img src="img/icons/telegram.png" className="px-2"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    );

};

export default Container;