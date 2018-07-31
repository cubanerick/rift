import React from "react";


 const TeacherSidebar = (props) => {

    var button;
    if(props.userType ==="student"){
        console.log("student type");
        button ="";
    }
    else{
        console.log(" teacher type");

        button =   <button className="btn btn-primary" type="button" onClick={props.addUnit}>Add Unit</button>
    }

     return(
     <div className="sidebar">
        {props.units.map(item => (<p onClick={()=>props.selectUnit(item._id, item.name)} key={item._id}>{item.name}</p>))}
        <input type="text" id={props.id} onChange={props.handleInputChange} value={props.inputvalue} />
        
        {button}
        
    </div>
 )
}

 export default TeacherSidebar;