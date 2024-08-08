import React from 'react'
import { useLocation } from 'react-router-dom'

const Contectus = () => {
    const location = useLocation()
    const formData = location.state.formData
    return (
        <div>
            <h1>Contect us</h1>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">Sr</th>

                        <th scope="col">Fname</th>
                        <th scope="col">Lname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Password</th>
                        <th scope="col">ConfirmPassword</th>
                        <th scope="col">Address</th>
                        {/* <th scope="col">Delete</th> */}
                        {/* <th scope="col">Edit</th> */}




                    </tr>
                </thead>
                <tbody>


                    {/* { */}
                    {/* // allData.map((e, i) => { */}
                    {/* // return ( */}
                    <>

                        <tr>
                            <th scope="row">{1}</th>
                            <td>{formData.fname}</td>
                            <td>{formData.lname}</td>
                            <td>{formData.email}</td>
                            <td>{formData.mobile}</td>
                            <td>{formData.password}</td>
                            <td>{formData.cpassword}</td>
                            <td>{formData.address}</td>
                            {/* <td><button onClick={() => deleteHandle(i)} className="btn btn-danger"><FaRegTrashAlt /></button></td> */}
                            {/* <td><button onClick={() => EditHandle(e, i)} className="btn btn-primary"><FaEdit /></button></td> */}


                        </tr>
                    </>
                    {/* //         ) */}
                    {/* //     }) */}
                    {/* // } */}



                </tbody>
            </table>
        </div>
    )
}

export default Contectus
