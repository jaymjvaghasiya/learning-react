import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Login = () => {

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const submitHandler = async (data) => {
        console.log(data);

        try {
            const res = await axios.post("https://node5.onrender.com/user/login", data);
            console.log(res);
            if(res.status === 200) {
                localStorage.setItem("id", res.data.data._id);
                toast.success(res.data?.message);
                navigate("/");
            }
        } catch(error) {
            toast.error(error.response.data?.message);
        }
    }

  return (
    <div style={{textAlign: "center"}}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(submitHandler)}>
            <label>EMAIL</label>
            <input type='email' {...register("email")} /> <br/>
            <label>PASSWORD</label>
            <input type='password' {...register("password")} /> <br/>
            <input type='submit' />
        </form>
    </div>
  )
}
