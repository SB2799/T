import React,{useState} from 'react'

const Button = () => {

    const num = 0;
    const[count,setCount] = useState(num);

    const Adder = ()=> {
        if(count>=0 && count<14)
        setCount(count+1);
    }

    const Sub = ()=> {
        if(count>0 && count<=14)
        setCount(count-1);
    }

  return (
    <div>
        <div className = "container">
            <div className = "row ">
                <h1>{count}</h1>
                <br/>
                <div className='col-xl-3'>
                <button className='btn btn-primary m-2 p-2' onClick={Adder}>Increment</button>
                <button className='btn btn-secondary m-2 p-2' onClick={Sub}>Decrement</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Button