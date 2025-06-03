import React, { useEffect, useState } from 'react'
import { MyButton } from '../MyButton'
import axios from 'axios'
import { Loader } from '../Loader';
import { ToastContainer, Bounce, toast } from "react-toastify";
import { Button, Modal } from 'react-bootstrap';
import { useFetchApi } from '../../hooks/FetchApiHook';
import { Link } from 'react-router-dom';

export const ApiDemo1 = () => {

    const [msg, setmsg] = useState("");
    const [users, setusers] = useState([]);
    const [load, setload] = useState(false);
    const [singleUser, setSingleUser] = useState({});
    const [show, setShow] = useState(false);
    const [filteredNewData, setFilterNewData] = useState();
    const [isSearching, setIsSerching] = useState(false);

    // const getData = async () => {
    //     setload(true);
    //     const res = await axios.get("https://node5.onrender.com/user/user");
    //     console.log(res);
    //     console.log(res.data);
    //     console.log(res.data.message);
    //     console.log(res.data.data);
    //     setmsg(res.data.message);
    //     // setusers(prevUsers => [...prevUsers, ...res.data.data]);
    //     setusers(res.data.data);
    //     setload(false);
    // }

    // setload(true);
    const {data, loading, refetch} = useFetchApi("https://node5.onrender.com/user/user");
    // setusers(data);
    // setload(false); 

    const deleteUser = async (id) => {
        // setload(true);
        const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`);
        console.log(res);

        if (res.status === 204) {
            refetch("https://node5.onrender.com/user/user");
            toast.success('user deleted successfully !!', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
        setload(false)
    }

    const getSingleUser = async (id) => {
        const res = await axios.get(`https://node5.onrender.com/user/user/${id}`);
        setSingleUser(res.data.data);
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
    }

    const filterData = async (event) => {
        console.log(event.target.value);
        let val = event.target.value;
        setIsSerching(true);
        const res = await axios.get("https://node5.onrender.com/user/filter2", {
            params: {
                name: val
            }
        });
        console.log(res.data.data);
        setFilterNewData(res.data.data);
    }

    // useEffect(() => {
    //     getData();
    // }, [])

    return (
        <div style={{ textAlign: "center" }}>
            <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
            <h2>ApiDemo1</h2>
            {/* <MyButton name='GET DATA' class='btn btn-primary' myFun={() => { getData() }}></MyButton> */}
            {loading && <Loader />}
            <br />
            {msg}<br />
            {/* {
            users.map((u)=>{
                return (
                    <li>{u.name} -- {u.age}</li>
                )
            })
        } */}

            <input style={{marginBottom: "1rem"}} type='search' placeholder='search' onChange={()=>{filterData(event)}} />

            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {   isSearching ? 
                        filterNewData.map((u) => {
                                return (
                                    <tr>
                                        <td>{u._id}</td>
                                        <td>{u.name}</td>
                                        <td>{u.age}</td>
                                        <td>{u.email}</td>
                                        <td>{u.isActive ? "Active" : "Not Active"}</td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => { deleteUser(u._id) }}>DELETE</button>
                                            <button className='btn btn-info' onClick={() => { getSingleUser(u._id) }}>DATA</button>
                                            <Link to={`/updateuser/${u._id}`} className='btn btn-warning'>UPDATE</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        :
                        data.map((u) => {
                            return (
                                <tr>
                                    <td>{u._id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.age}</td>
                                    <td>{u.email}</td>
                                    <td>{u.isActive ? "Active" : "Not Active"}</td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => { deleteUser(u._id) }}>DELETE</button>
                                        <button className='btn btn-info' onClick={() => { getSingleUser(u._id) }}>DATA</button>
                                        <Link to={`/updateuser/${u._id}`} className='btn btn-warning'>UPDATE</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Name: {singleUser.name}<br/>
                    Age: {singleUser.age}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

// https://node5.onrender.com/user/filter2