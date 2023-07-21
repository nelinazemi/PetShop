import { Link } from 'react-router-dom';
import '../Style/Login.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Login = () => {

  const [admin, setAdmin] = useState([]);
  const {id} = useParams();

  useEffect(() => {
      handleAdmin()
  }, [])

  const handleAdmin = async() => {
      await axios.get("http://localhost:5050/logins")
      .then(res => {
          setAdmin(res.data);
      })
      .catch(error => {
          console.log(error);
      })
  }

    return (
      <div className='login-container'>
        <div class="d-flex justify-content-center m-5">
          <div class="card login-card my-5">
            <div class="card-header">
              <h3 className='text-right'>ورود</h3>
            </div>
            <div class="card-body">
              <form>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                  </div>
                  <input type="text" class="form-control " placeholder="ایمیل" value={admin.username}/>
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                  </div>
                  <input type="password" class="form-control text-right" placeholder="گذرواژه" value={admin.password} />
                </div>
                <div class="row align-items-center remember">
                  <input type="checkbox"/>مرا به خاطر بسپار
                </div>
                <div class="form-group">
                  <Link to='/adminroutes'><input type="submit" value="ورود" class="btn float-right login_btn" /></Link>
                </div>
              </form>
            </div>
            <div class="card-footer">
              <div class="d-flex justify-content-center">
                <a href="#">گذرواژه خود را فراموش کرده اید؟</a>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <Link to='/'><input type="submit" value="خروج" class="btn float-left mx-5 login_btn" /></Link>
        </div>
      </div>
    )
}

export default Login;