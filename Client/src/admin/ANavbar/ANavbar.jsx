const ANavbar = () => {
    return (

    <nav class="navbar fixed-top navbar-expand-md" style={{backgroundColor: "#dcb5ff"}}>
      <div class="container-fluid">
        <a class="navbar-brand mx-3" href="#">آذی پت شاپ</a>
        <img src="img/logo.png" style={{width:"60px", height: "60px"}}/>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main_nav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="#">پنل مدیریت</a></li>
          </ul>
        </div>
      </div>
    </nav>

    )
}

export default ANavbar;