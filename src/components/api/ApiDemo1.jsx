import React, { useState } from 'react'
import { MyButton } from '../MyButton'
import axios from 'axios'
import { Loader } from '../Loader';

export const ApiDemo1 = () => {

    const [msg, setmsg] = useState("");
    const [users, setusers] = useState([]);
    const [load, setload] = useState(false);

    const getData = async () => {
        setload(true);
        const res = await axios.get("https://node5.onrender.com/user/user");
        console.log(res);
        console.log(res.data);
        console.log(res.data.message);
        console.log(res.data.data);
        setmsg(res.data.message);
        setusers(prevUsers => [...prevUsers, ...res.data.data]);
        setload(false);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>ApiDemo1</h2>
            <MyButton name='GET DATA' class='btn btn-primary' myFun={() => { getData() }}></MyButton>
            {load && <Loader/>}
            <br />
            {msg}<br />
            {/* {
            users.map((u)=>{
                return (
                    <li>{u.name} -- {u.age}</li>
                )
            })
        } */}

            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((u) => {
                            return (
                                <tr>
                                    <td>{u._id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.age}</td>
                                    <td>{u.email}</td>
                                    <td>{u.isActive ? "Active" : "Not Active"}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
