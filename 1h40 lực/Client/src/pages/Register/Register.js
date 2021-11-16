import React,{useState} from 'react';
import Axios from 'axios';
import {URL_API,INFO,TOKEN} from '../../SettingValue';
export default function Register(props) {

    let [userRegister, setUserRegister] = useState({
        hoten:"",
        email:"",
        sodienthoai:"",
        diachi:"",
        username: "",
        password: "",
        confirmpassword:"",
      });
    const handleInput=(event)=>{
        let { name, value } = event.target;
        setUserRegister({
          ...userRegister,
          [name]: value,
        });
    }
    const handleRegister=(event)=>{
        event.preventDefault();
        if(userRegister.password===userRegister.confirmpassword){
            let promise=Axios({
                url:`${URL_API}/register`,
                method:'POST',
                data:userRegister
            });
    
            promise.then((result)=>{
                console.log('thanh cong',result);
            })
            promise.catch((err)=>{
               
                console.log('that bai',err);
            });
        }
        else{
            alert("Mật khẩu không khớp với nhau");
            return;
        }

    }
    const handleReturn=()=>{
        props.history.push('/');
    }
    return (
        <div>
            <p>Đăng ký tài khoản</p>
        <form onSubmit={handleRegister}>
            <div className="form-group">
                <label>Họ và tên</label>
                <input type="text" name="hoten" className="form-control" onChange={handleInput}/>
          </div>

          <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" className="form-control" onChange={handleInput}/>
          </div>

          <div className="form-group">
                <label>Số điện thoại</label>
                <input type="text" name="sodienthoai" className="form-control" onChange={handleInput}/>
          </div>

          <div className="form-group">
                <label>Địa chỉ</label>
                <input type="text" name="diachi" className="form-control" onChange={handleInput}/>
          </div>

          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" className="form-control" onChange={handleInput}/>
          </div>
          <div className="form-group">
            <label>Mật khẩu</label>
            <input type="password" name="password" className="form-control" onChange={handleInput}/>
          </div>
          <div className="form-group">
            <label>Xác nhận mật khẩu</label>
            <input type="password" name="confirmpassword" className="form-control" onChange={handleInput}/>
          </div>

          <div className="form-group">
            <button className="btn btn-danger" onClick={handleRegister}>Đăng ký</button>
          </div>
          <div className="form-group">
            <button className="btn btn-danger" onClick={handleReturn}>Quay trở lại</button>
          </div>
        </form>

        </div>

    )
}
