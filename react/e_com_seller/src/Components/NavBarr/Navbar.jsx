import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MenuItems from './MenuItems'
import StartContext from '../ContextDataFol/StartContext'

const Navbar = () => {
    const commonData = useContext(StartContext);
    console.log(commonData.userAuth[1]);

    function getLink(opts) {
        let newOpts = opts.replace(/ /g, "_");
        newOpts = newOpts.toLowerCase();
        return newOpts
    }
    return (
        <nav className="navbar navbar-expand-lg bg-dark" style={{borderBottom:"1px solid #C3A665"}}>
            <div className="container-fluid" >
                <Link className="navbar-brand" to="/dashboard"><img src={require("../../Images/deity_itself_logo_crop.jpg")} className='img-fluid' alt="deity_itself" style={{ width: "150px" }} /></Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ color: "#C3A665" }}>
                    {
                        MenuItems.map((items, i) => {
                            return (
                                <div className="dropdown">
                                    <button style={{color:"#C3A665"}} className="btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {items.head}
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        {
                                            items.options.map((opts, ind) => {
                                                return (
                                                    <li><Link className="dropdown-item" style={{color:"#C3A665"}} to={getLink(opts)}>{opts}</Link></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }

                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
                <div className='d-flex gap-3'>
                    <button style={{ color: "#C3A665", backgroundColor: "#C3A665" }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className='d-flex align-items-center gap-2 '>
                        <div style={{ color: "#C3A665" }}>
                            <p className="p-0 m-0" style={{ fontSize: "10px" }}>Org. : {commonData.userAuth[1].orgName}</p>
                            <p className="p-0 m-0" style={{ fontSize: "10px" }}>User :  {commonData.userAuth[1].userName} ({commonData.userAuth[1].orgId})</p>
                            <p className="p-0 m-0" style={{ fontSize: "10px" }}>GST No.:- {commonData.userAuth[1].gstNo}</p>
                        </div>
                        <div>
                            <div class="dropdown">
                                <button class="btn btn-secondary p-1 m-0 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={require("../../Images/J.png")} width={"37px"} alt="Org. Logo" className="img-fluid rounded rounded-5" />
                                </button>
                                <ul class="dropdown-menu dropdown-menu-dark" style={{bottom:"-150px", left:"-110px"}}>
                                    <li><Link class="dropdown-item" to="/dashboard" style={{color:"#C3A665"}}>Start Date</Link></li>
                                    <li><Link class="dropdown-item" to="/dashboard" style={{color:"#C3A665"}}>End Date</Link></li>
                                    <li><Link class="dropdown-item" to="/dashboard" style={{color:"#C3A665"}}>Help & Feedback</Link></li>
                                    <li class="dropdown-item text-danger" onClick={()=>{commonData.setUserAuth([false, {}])}}>Logout</li>
                                </ul>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
