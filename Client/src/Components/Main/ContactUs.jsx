const ContactUs = () => {
    return (

        <section id="ContactUs">
            <div className="portfolio container my-5">
                <h1>درباره مینی لوپ ها</h1>
                <div className="row my-5">
                    <div className="col-lg-6">
                        <img src="img/vid.gif" className="rounded-circle"/>
                    </div>

                    <div class="col-lg-6">
                        <div class="contact-wrap w-100">
                            <h3 class="mb-4">تماس با ما</h3>
                            <form method="POST" id="contactForm" name="contactForm" class="contactForm">
                                <div class="row">
                                    <div class="col-md-12 my-2">
                                        <div class="form-group">
                                            <label class="label my-1" for="name">نام و نام خانوادگی</label>
                                            <input type="text" class="form-control" name="name" id="name" placeholder="نام و نام خانوادگی"/>
                                        </div>
                                    </div>
                                    <div class="col-md-12 my-2"> 
                                        <div class="form-group">
                                            <label class="label my-1" for="email">ایمیل</label>
                                            <input type="email" class="form-control" name="email" id="email" placeholder="ایمیل"/>
                                        </div>
                                    </div>
                                    <div class="col-md-12 my-2">
                                        <div class="form-group">
                                            <label class="label my-1" for="subject">موضوع</label>
                                            <input type="text" class="form-control" name="subject" id="subject" placeholder="موضوع"/>
                                        </div>
                                    </div>
                                    <div class="col-md-12 my-2">
                                        <div class="form-group">
                                            <label class="label my-1" for="#">پیام</label>
                                            <textarea name="message" class="form-control" id="message" cols="30" rows="4" placeholder="پیام"></textarea>
                                            <button className="btn m-5 bg-info w-25">ارسال پیام</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContactUs;