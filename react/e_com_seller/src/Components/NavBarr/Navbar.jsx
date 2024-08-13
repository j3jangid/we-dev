import React from 'react'
import { Link } from 'react-router-dom'
import MenuItems from './MenuItems'


const Navbar = () => {
    console.log(MenuItems[0].head);



    return (
        <nav class="navbar navbar-expand-lg bg-dark" >
            <div class="container-fluid" >
                <Link class="navbar-brand" to="/dashboard"><img src={require("../../Images/deity_itself_logo_crop.jpg")} className='img-fluid' alt="deity_itself" style={{ width: "150px" }} /></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{ color: "#C3A665" }}>
                    {
                        MenuItems.map((items, i) => {
                            return (
                                <div class="dropdown">
                                    <button class="btn text-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {items.head}
                                    </button>
                                    <ul class="dropdown-menu">
                                        {
                                            items.options.map((opts, ind) => {
                                                return (
                                                    <li><Link class="dropdown-item" to="/">{opts}</Link></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                    
                    {/* <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
