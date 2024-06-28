import React, { useState } from 'react'
import Cards from './Cards';

const TodoForm = () => {
    const [data, setData] = useState({});
    const [allData, setAllData] = useState([]);
    const [addUpdate, setAddUpdate] = useState("Add");
    const [index, setIndex] = useState();

    function getData(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    function submit(e) {
        e.preventDefault();
        const time = new Date();
        const currentTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
        if (data.title.trim() === "" || data.desc.trim() === "") {
            alert("enter Data")
        } else {
            if (addUpdate === "Add") {
                setAllData([...allData, { ...data, savingTime: currentTime }]);
            } else {
                let localData = [...allData];
                localData[index] = { ...localData[index], updateTime: currentTime };
                setAllData(localData);
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
        let localData = [...allData];
        localData.splice(i, 1);
        setAllData(localData)
    }

    function editHandle(obj, i) {
        setIndex(i);
        setData({ title: obj.title, desc: obj.desc })
        setAddUpdate("Update")
    }

    return (
        <div>
            <form>

                <input type="text" name="title" id="" value={data.title} onChange={getData} placeholder='Title' autoFocus />
                <input type="text" name="desc" id="" value={data.desc} onChange={getData} placeholder='Description' />
                <button type="submit" onClick={submit}>{addUpdate}</button>
                <button type="reset" onClick={clearFun}>Clear</button>
            </form>
            <Cards allData={allData} deleteHandle={deleteHandle} editHandle={editHandle} />
        </div>
    )
}

export default TodoForm;
