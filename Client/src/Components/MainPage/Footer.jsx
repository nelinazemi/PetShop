const Footer = () => {
    return (
        <div className="container-expand-md p-3 text-center" style={{backgroundColor:"#7858A6"}}>
            <div className="row">
                <div className="col-12 text-light">
                    <img src='img/logo.png' height={'100px'} />
                    <h4 className="m-3">بزرگ ترین مجموعه پرورش خرگوش مینی لوپ عروسکی ترکیش در ایران</h4>
                    <h5 className="m-5"> ما را در شبکه های اجتماعی دنبال کنید</h5>
                    <a><img src="img/icons/instagram.png" className="px-2"/></a>
                    <a><img src="img/icons/whatsapp.png" className="px-2"/></a>
                    <a><img src="img/icons/rubika.png" className="mx-2" style={{width: "42px", height: "42px"}}/></a>
                    <a><img src="img/icons/telegram.png" className="px-2"/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;