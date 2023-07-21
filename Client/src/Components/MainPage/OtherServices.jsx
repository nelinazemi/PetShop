import { Link } from "react-router-dom";

const OtherServices = () => {

  return (
    <section id="otherservices" class="pricing my-5">

      <div class="container-expand-md my-3" data-aos="fade-up">

        <div class="section-header my-5">
          <h2>سایر حیوانات</h2>
        </div>

        <div class="row mt-3" data-aos="fade-left">

          <div class="col-lg-4 col-md-4" data-aos="zoom-in" data-aos-delay="100">
            <div class="box">
              <Link to='/productdisplay' className="text-decoration-none text-dark">
                <img src="img/icons/dog.png" />
                <h3>خرید سگ</h3>
              </Link>
            </div>
          </div>

          <div class="col-lg-4 col-md-4" data-aos="zoom-in" data-aos-delay="100">
            <div class="box">
              <Link to='/productdisplay' className="text-decoration-none text-dark">
                <img src="img/icons/snail.png" />
                <h3>خرید حلزون</h3>
              </Link>
            </div>
          </div>

          <div class="col-lg-4 col-md-4" data-aos="zoom-in" data-aos-delay="100">
            <div class="box">
              <Link to='/productdisplay' className="text-decoration-none text-dark">
                <img src="img/icons/bird.png" />
                <h3>خرید پرنده زینتی</h3>
              </Link>
            </div>
          </div>


        </div>

      </div>

  </section>

  );
};

export default OtherServices;
