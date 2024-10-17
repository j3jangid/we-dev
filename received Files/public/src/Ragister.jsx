/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import "./App.css"
import Swal from "sweetalert2"
import { Link, useNavigate } from "react-router-dom"
const Register = () => {
    const [formData, setformData] = useState({})
    let navigate = useNavigate()
    // eslint-disable-next-line no-unused-vars
    const [allData, setallData] = useState([])

    const changeHandle = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value })
    }

    const clickHandle = (e) => {
        e.preventDefault()
        let getData = JSON.parse(localStorage.getItem("user")) || []

        let findData = getData.findIndex((e) => e.email === formData.email)
        if (findData === -1) {
            let localData = [...getData, formData]
            setallData(localData)
            localStorage.setItem("user", JSON.stringify(localData))
            console.log(formData);


            Swal.fire({
                title: 'Registration Successful!',
                text: 'You have been registered successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            navigate("/login")

            setformData({ fname: "", lname: "", mobile: "", email: "", password: "", cpassword: "" })
            // Optionally, reset the form



        } else {
            Swal.fire({
                title: 'Registration Failed',
                text: 'Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }
    return (
        <div className="mt-5">
            <div className="container mt-5 text-center">
                <div className="row ">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6">
                        <form style={{ backgroundColor: "#4C54E0", boxShadow: "inset 0px 0px 5px 0px" }} className=" p-5 rounded-5 text-light text-start formBox m-auto">
                            <div className="text-center h1 text-light" >Register Now</div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="fname" className="form-label">Fname</label>
                                        <input onChange={changeHandle} value={formData.fname} type="text" name="fname" className="form-control" id="name" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Lname</label>
                                        <input onChange={changeHandle} type="text" value={formData.lname} name="lname" className="form-control" id="lname" aria-describedby="emailHelp" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="msb-3">
                                        <label htmlFor="email" className="form-label">Email </label>
                                        <input onChange={changeHandle} type="email" name="email" value={formData.email} className="form-control" id="email" aria-describedby="emailHelp" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Mobile</label>
                                        <input onChange={changeHandle} value={formData.mobile} type="number" name="mobile" className="form-control" id="" aria-describedby="emailHelp" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">password</label>
                                        <input onChange={changeHandle} value={formData.password} type="password" name="password" className="form-control" id="password" aria-describedby="emailHelp" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="cpassword" className="form-label">Cpassword</label>
                                        <input onChange={changeHandle} value={formData.cpassword} type="password" name="cpassword" className="form-control" id="cpassword" aria-describedby="emailHelp" />
                                    </div>
                                </div>

                                <button type="submit" className="btn" onClick={clickHandle}>Submit</button>

                            </div>
                            <div className="col-md-6 mt-4">
                                <Link to="/login" className="text-light">already have an account</Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Register
