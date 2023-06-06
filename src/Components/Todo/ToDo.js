import React, {useState} from 'react'
import "./ToDo.css"

const ToDo = () => {

    const[form,setForm] = useState({task : ""})
    const[Add,setAdd] = useState([]);

    const AddData = ()=>{
        // setAdd([...Add,{...form , completed : false}]);
        setAdd([...Add,{task : form.task , completed : false}]);
        setForm({task : ""})
    }

    const removeData = (i) => {
        const newData = [...Add];
        newData.splice(i, 1);
        setAdd(newData);
    }

    const taskValidater = (i)=> {
       setAdd((prevAdd) => {
            const newData = [...prevAdd]
            newData[i] = {...newData[i], completed : !newData[i].completed}
            return newData;
        });
    };

    const taskValidaterLength = () => {
        return Add.filter((task) => !task.completed).length;
    }

  return (<>
            <h1 className="main-heading">To Do List</h1>
    <div className = "container">
        <div className="row">
            <br/>
            <div className = "col-xl-9 m-3">
            <input type="text" className='form-control' placeholder='Add a Item' value={form.task} onChange ={(e) => setForm({...form, task : e.target.value}) }/>
            </div>
            <div className = "col-xl-2 m-3">
            <button className="btn btn-success d-flex button-style" onClick={AddData}>+</button>
            </div>
        </div>
    </div>
    <div className = "container">
        <div className="row">
            <br/>
            <div className = "Todostyle shadow-lg">
            {
                Add.map((e,i) => (
                     <div key={i} className= "d-flex justify-content-between m-3">
                        <p className = {e.completed?"completed":""}>{e.task}</p>
                        <input type = "checkbox" checked={e.completed} onClick={()=>taskValidater(i)}/>
                        <button className="btn btn-danger button-style" onClick={()=>removeData(i)}>Remove</button>
                    </div>
                ))
            }
            </div>
        </div>
        <br/>
        <h1>Number of Tasks Remaining: {taskValidaterLength()}</h1>
    </div>
    </>)
}

export default ToDo


