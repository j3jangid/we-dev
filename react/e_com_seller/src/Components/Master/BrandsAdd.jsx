import React from 'react'

const BrandsAdd = () => {
    return (
        <div>
            <div className='d-flex bg-dark justify-content-between align-items-center p-2 bg-info' style={{ color: "#C3A665", borderBottom:"1px solid #C3A665" }}>
                <h3>Brands</h3>
                <div className='d-flex'>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className='btn btn-outline-primary loginBtn' style={{ width: "150px" }}>Add New</button>
                </div>
            </div>
            <div>
                <table class="table table-dark  table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BrandsAdd
