const Navbar = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img src="img/logo.png" alt="" height="90" />
              <span>آذی پت شاپ</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#AboutUs">درباره ما</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#ContactUs">تماس با ما</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Bunnies">محصولات</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Services">خدمات</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><button className='button p-1'>ورود مدیران</button></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    
        
    )

}

export default Navbar;