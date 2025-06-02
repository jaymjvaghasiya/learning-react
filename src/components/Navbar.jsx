import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = (props) => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/">{props.title}</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/movies">Movies <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/shows">Shows </Link>
                        </li>
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
                        <li class="nav-item">
                            <Link class="nav-link" to="/formdemo4">FORM DEMO 4 </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/formdemo5">FORM DEMO 5 </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/formdemo6">FORM DEMO 6 </Link>
                        </li>
                        {/* <li class="nav-item">
                            <Link class="nav-link" to="/memodemo1">Use Memo Demo 1 </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/memodemo2">Use Memo Demo 2 </Link>
                        </li> */}
                        {/* <li class="nav-item">
                            <Link class="nav-link" to="/addproduct">Add Product </Link>
                        </li> */}
                        <li class="nav-item">
                            <Link class="nav-link" to="/addproducts">Add Products </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/findbomb">Find Bomb </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/apidemo1">API DEMO 1 </Link>
                        </li>
                        {/* <li class="nav-item">
                            <Link class="nav-link" to="/apidemo2">API DEMO 2 </Link>
                        </li>
                        <li class="nav-item">
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
                    </ul>
                </div>
            </nav>
        </div>
    )
}
