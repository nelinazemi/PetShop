const Footer = () => {
    return (
        <div className="container-expand-md bg-dark mt-5 p-3">
            <div className="row">
                <div className="col-md-3 text-light">
                    <h4>فیئلسی، انقلاب نوین آموزشی</h4>
                    <img src='img/logo.png' className="w-50" />
                    <div className='px-5'>
                        <a><i class="bi bi-twitter px-2"></i></a>
                        <a><i class="bi bi-instagram px-2"></i></a>
                        <a><i class="bi bi-linkedin px-2"></i></a>
                        <a><i class="bi bi-telegram px-2"></i></a>
                        <a><i class="bi bi-whatsapp px-2"></i></a>
                    </div>
                </div>
                <div className="col-md-3 d-flex flex-column text-light">
                    <p>آژانس خلاقیت وبسیما در سال 2012 با هدف ایجاد تغییر و تحول در فضای وب ایران فعالیت رسمی خود را آغاز کرد. ما هرسال با تلاش و پشتکار بسیار، همگام با استانداردهای روز دنیا گام برداشتیم و طی این سال‌ها توانستیم نقش مهمی در اشتغال‌زایی، آموزش و تربیت نیروی حرفه‌ای در صنعت وب ایفا کنیم. </p>
                </div>
                <div className="col-md-3 d-flex flex-column text-light">
                    <p>دسترسی سریع</p>
                    <a href='#' className='text-decoration-none text-light'>محصولات آموزشی</a>
                    <a href='#' className='text-decoration-none text-light'>تماس با ما</a>
                    <a href='#' className='text-decoration-none text-light'>خدمات</a>
                    <a href='#' className='text-decoration-none text-light'>دباره ما</a>
                </div>
                <div className="col-md-3 text-light">
                    <p>نشانی: شیراز مرکزی میدان بسیج بلوار عدالت شمالی بن بست 6 عدالت شمالی پلاک 178 طبقه همکف</p>
                    <p>کد پستی: 7176684689</p>
                    <p className='font-italic'>کلیه حقوق محفوظ میباشد</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;