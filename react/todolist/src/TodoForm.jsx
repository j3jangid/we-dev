import React, { useState } from 'react'
import Cards from './Cards';

const TodoForm = () => {
    const [data, setData] = useState({});
    const [allData, setAllData] = useState([]);
    const [addUpdate, setAddUpdate] = useState("Add");
    const [index, setIndex] = useState();
    let getstgData = JSON.parse(localStorage.getItem("todo")) || []

    function getData(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    function submit(e) {
        e.preventDefault();
        const time = new Date();
        const currentTime = `${time.getDate()}/${time.getMonth()}/${time.getFullYear()} @ ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
        if (data.title.trim() === "" || data.desc.trim() === "") {
            alert("enter Data")
        } else {
            if (addUpdate === "Add") {
                let localData = [...getstgData, { ...data, savingTime: currentTime, sr: getstgData.length + 1, visiblity: true }]
                localStorage.setItem("todo", JSON.stringify(localData))

            } else {
                let localData = [...getstgData];
                localData[index] = { ...getstgData[index], ...data, updateTime: currentTime };
                localStorage.setItem("todo", JSON.stringify(localData))
                setAddUpdate("Add")
            }
            setData({ title: "", desc: "" })
        }
    }

    function clearFun(e) {
        e.preventDefault();
        setData({ title: "", desc: "" })
    }

    function deleteHandle(i) {
        let localData = [...getstgData];
        localData[i] = { ...localData[i], visiblity: false };
        setAllData(localData)
        localStorage.setItem("todo", JSON.stringify(localData))
    }

    function editHandle(obj, i) {
        setIndex(i);
        setData({ title: obj.title, desc: obj.desc })
        setAddUpdate("Update")
    }

    return (
        <div>
            <form className='container-fluid p-3 pb-4 bg-dark inputBox'>
                <div className="row my-3">
                    <div className="col-12">
                        <input className='form-control' type="text" name="title" id="" value={data.title} onChange={getData} placeholder='Title' autoFocus />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-10 col-lg-10 col-xl-11 col-xxl-11">
                        <textarea className='form-control' style={{ height: "100%" }} name="desc" id="" value={data.desc} onChange={getData} placeholder='Description'></textarea>
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-2 col-xl-1 col-xxl-1 mt-md-2 mt-sm-2 d-flex flex-column gap-2">
                        <button className='btn btn-success' style={{ width: "100%" }} type="submit" onClick={submit}>{addUpdate}</button>
                        <button className='btn btn-danger' style={{ width: "100%" }} type="reset" onClick={clearFun}>Clear</button>
                    </div>
                </div>
            </form>
            <Cards allData={allData} deleteHandle={deleteHandle} editHandle={editHandle} getData={getstgData} />
        </div>
    )
}

export default TodoForm;
