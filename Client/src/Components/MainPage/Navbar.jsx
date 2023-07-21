import { Link } from "react-router-dom";
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  

const MainNavbar = () => {

    return (
      <Navbar className="text-center"  style={{backgroundColor:"#c77dff"}} expand="md">  
        <Container>  
          <Navbar.Brand href="/">  
            <img src="img/logo.png" alt="" height="90" />
            <span>آذی پت شاپ</span>
          </Navbar.Brand>  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />  
          <Navbar.Collapse id="basic-navbar-nav">  
            <Nav className="ml-auto">  
              <Nav.Link href="#AboutUs">درباره ما</Nav.Link>  
              <Nav.Link href="#ContactUs">تماس با ما</Nav.Link>  
              <Nav.Link><Link to='/productdisplay' style={{textDecoration: "none", color: "black"}}>فروشگاه</Link></Nav.Link>  
              <Nav.Link href="#Services">خدمات</Nav.Link>  
              <Nav.Link href="/">خانه</Nav.Link>
              <Nav.Link><Link to='/login'><button className='button'>ورود مدیران</button></Link></Nav.Link> 

              
              
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">  
                <NavDropdown.Item href="#action/3.1">Dropdown Item 1</NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.2">Dropdown Item 2</NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.3">Dropdown Item 3</NavDropdown.Item>  
                <NavDropdown.Divider />  
                <NavDropdown.Item href="#action/3.4">Another Item</NavDropdown.Item>  
              </NavDropdown>   */}
            </Nav>  
          </Navbar.Collapse>  
        </Container>  
      </Navbar>  
    )

}

export default MainNavbar;