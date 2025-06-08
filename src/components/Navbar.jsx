import Switch from '@mui/material/Switch';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { themeAction } from '../redux/ThemeSlice';
import { FormControlLabel, styled } from '@mui/material';


export const Navbar = (props) => {

    const cart = useSelector((state) => state.cart.cart);
    // console.log("cart...", cart);
    const bank = useSelector((state) => state.bank);
    const themeMode = useSelector((state) => state.theme.theme);

    const dispatch = useDispatch();
    const handleChange = (event) => {
        let val = event.target.checked
        let mode = val ? "dark" : "light"
        dispatch(themeAction(mode));
    }

    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
        width: 62,
        height: 34,
        padding: 7,
        '& .MuiSwitch-switchBase': {
            margin: 1,
            padding: 0,
            transform: 'translateX(6px)',
            '&.Mui-checked': {
                color: '#fff',
                transform: 'translateX(22px)',
                '& .MuiSwitch-thumb:before': {
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                        '#fff',
                    )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
                },
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: '#aab4be',
                    ...theme.applyStyles('dark', {
                        backgroundColor: '#8796A5',
                    }),
                },
            },
        },
        '& .MuiSwitch-thumb': {
            backgroundColor: '#001e3c',
            width: 32,
            height: 32,
            '&::before': {
                content: "''",
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
            },
            ...theme.applyStyles('dark', {
                backgroundColor: '#003892',
            }),
        },
        '& .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: '#aab4be',
            borderRadius: 20 / 2,
            ...theme.applyStyles('dark', {
                backgroundColor: '#8796A5',
            }),
        },
    }));

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/">{props.title}</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        {/* <li class="nav-item active">
                            <Link class="nav-link" to="/movies">Movies <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/shows">Shows </Link>
                        </li> */}
                        {/* <li class="nav-item">
                            <Link class="nav-link" to="/usestatedemo1">UseStateDemo1 </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/usestatedemo2">UseStateDemo2 </Link>
                        </li> */}
                        {/* <li class="nav-item">
                            <Link class="nav-link" to="/usestatedemo3">UseStateDemo3 </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/usestatedemo4">UseStateDemo4 </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/ipl">IPL </Link>
                        </li> */}
                        {/* <li class="nav-item">
                            <Link class="nav-link" to="/formdemo1">FORM DEMO 1 </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/formdemo2">FORM DEMO 2 </Link>
                        </li> */}
                        {/* <li class="nav-item">
                            <Link class="nav-link" to="/formdemo4">FORM DEMO 4 </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/formdemo5">FORM DEMO 5 </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/formdemo6">FORM DEMO 6 </Link>
                        </li> */}
                        {/* <li class="nav-item">
                            <Link class="nav-link" to="/memodemo1">Use Memo Demo 1 </Link>
                        </li> */}
                        <li class="nav-item">
                            <Link class="nav-link" to="/memodemo2">Use Memo Demo 2 </Link>
                        </li>
                        {/* <li class="nav-item">
                            <Link class="nav-link" to="/addproduct">Add Product </Link>
                        </li> */}
                        <li class="nav-item">
                            <Link class="nav-link" to="/addproducts">Add Products </Link>
                        </li>
                        {/* <li class="nav-item">
                            <Link class="nav-link" to="/findbomb">Find Bomb </Link>
                        </li> */}
                        {/* <li class="nav-item">
                            <Link class="nav-link" to="/apidemo1">API DEMO 1 </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/apidemo2">API DEMO 2 </Link>
                        </li> */}
                        {/* <li class="nav-item">
                            <Link class="nav-link" to="/apidemo4">API DEMO 4 </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/getproducts">Get Products</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/useeffect1">Use Effect 1</Link>
                        </li> */}
                        <li class="nav-item">
                            <Link class="nav-link" to="/products">Products</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/productdata">Product Data</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/reduxproductlist">Redux Products</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to="/rate">Rateing</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/slider">Slider</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/dashboard/*">Dashboard</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to="/bank">Bank</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/login">Login</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link">Cart: {cart.length}</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link"><b>Balance: {bank.balance}</b></Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to="/cartproducts"><b>Cart Products</b></Link>
                        </li>

                        <li>
                            {/* <Switch defaultChecked onChange={()=>dispatch(themeAction("dark"))} /> */}
                            {/* <Switch
                                checked={themeMode === "dark"}
                                onChange={handleChange}
                            /> */}
                            <FormControlLabel
                                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}s
                                onChange={handleChange}
                                checked={themeMode === "dark"}
                            />
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}
