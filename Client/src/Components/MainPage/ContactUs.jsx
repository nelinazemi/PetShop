import '../Style/ContactUs.css';

const ContactUs = () => {
    return (

        <section id="ContactUs">
            <div className="portfolio c-container">
                <div className="row my-5">
                    <div className="col-lg-6">
                        <img src="img/vid.gif" className="rounded-circle"/>
                    </div>
                    <div className='col-lg-6'>
                        <form>
                            <h1 class="title text-center mb-4">تماس با ما</h1>

                                <div class="form-group position-relative">
                                    <label for="formName" class="d-block">
                                        <i class="icon" data-feather="user"></i>
                                    </label>
                                    <input type="text" id="formName" class="form-control form-control-lg thick" placeholder="نام" />
                                </div>

                                <div class="form-group position-relative">
                                    <label for="formEmail" class="d-block">
                                        <i class="icon" data-feather="mail"></i>
                                    </label>
                                    <input type="email" id="formEmail" class="form-control form-control-lg thick" placeholder="ایمیل" />
                                </div>

                                <div class="form-group message">
                                    <textarea id="formMessage" class="form-control form-control-lg" rows="7" placeholder="متن"></textarea>
                                </div>
                            
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary" tabIndex="-1">ارسال پیام</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContactUs;