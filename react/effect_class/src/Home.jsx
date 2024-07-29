import React, { useContext, useState } from 'react'
import StartContext from './StartContext'
import Display from './Display'

const Home = () => {
    const [display, setDisplay] = useState(false);

    const data = useContext(StartContext)
    const clickHandle = () => {
    data.setCount(data.count + 1)
    }

    function setData(e){
        data.setDetails({...data.details, [e.target.name] : e.target.value})
        setTimeout(() => {
            setDisplay(true);
        }, 5000);
        // setInterval(() => {
        //     if (condition) {
                
        //     }
            
        // }, 1000);
    }

    

    console.log(data.details);

    return (
        <div style={{backgroundColor:"green"}}>
            hii
            <button onClick={clickHandle}>Click Me</button>
            <h1>{data.count}</h1>
            <span >Name : </span><input type="text" name="name" id="" onChange={setData}/>
            <hr />
            <span>Age : </span><input type="number" name="age" id="" onChange={setData}/>
            <hr />
            <span>City : </span><input type="text" name="city" id="" onChange={setData}/>
            <hr />
            <button>Submit</button>
            {display && 
                <Display data={data.details} />
            }
        </div>
    )
}

export default Home
