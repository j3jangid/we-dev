/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import "./App.css"
import Swal from "sweetalert2"
import { Link, useNavigate } from "react-router-dom"
// eslint-disable-next-line react/prop-types
const Login = () => {
    const [formData, setformData] = useState({})
    // eslint-disable-next-line no-unused-vars
    const [allData, setallData] = useState([])
    let navigate = useNavigate()

    const changeHandle = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value })
    }

    const clickHandle = (e) => {
        e.preventDefault()
        let getData = JSON.parse(localStorage.getItem("user")) || []
        console.log(e.password === formData.passwords);

        let findData = getData.findIndex((e) => e.email === formData.email && e.password === formData.password)
        if (findData !== -1) {
            let localData = [...allData, formData]
            setallData(localData)
            localStorage.setItem("loggedin", JSON.stringify({ email: formData.email, password: formData.password }))

            Swal.fire({
                title: 'login Successfully!',
                text: 'You have been logged in successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
            });

            setformData({ email: "", password: "" })
            // Optionally, reset the form
            // setcount(count + 1)
            navigate("/")


        } else {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Invalid Email or password',
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
                            <div className="text-center h1 text-light" >Login</div>
                            <div className="row mt-3">


                                <div className="col-md-12">
                                    <div className="msb-3">
                                        <label htmlFor="email" className="form-label">Email </label>
                                        <input onChange={changeHandle} type="email" name="email" value={formData.email} className="form-control" id="email" aria-describedby="emailHelp" />
                                    </div>
                                </div>


                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">password</label>
                                        <input onChange={changeHandle} value={formData.password} type="password" name="password" className="form-control" id="password" aria-describedby="emailHelp" />
                                    </div>
                                </div>



                                <button type="submit" className="btn" onClick={clickHandle}>Submit</button>

                            </div>
                            <div className="col-md-6 mt-4">
                                <Link to="/register" className="text-light">Create an account</Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Login
