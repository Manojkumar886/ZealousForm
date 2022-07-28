import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import { create } from "./ArrayValues";

export const Zform=()=>
{

    //const[value,setValue]=useState()
    //{
    //}
    const[person,setPerson]=useState({
        "zeaName":"",
        "zeaDob":"",
        "zeaAdd":"",
        "zeaMail":"",
        "zeaNum":0,
        "zeaCourse":"",
        "zeaPayment":"",
        "zeaSkills":new Array()
    }) 

    const tracky=(obj)=> //store a array values
    {
        const{value}=obj.target
        person.zeaSkills.push(value)
    }
    const track=(manoj)=>
    {
        const{name,value}=manoj.target
        setPerson(
            (old)=>
            {
                return{
                    ...old,
                    [name]:value
                }
            }
        )
    }

    const reg=()=>{
        // alert('new life start-welcome to zealous tech park')
        // alert("Successfully Registered"+JSON.stringify(person))
        create(person)
    }
    const remove=()=>{
        alert('Rejected')
    }
    const imgsrc={
        height:'100px',
        width:'280px'
    }
    const change={
        fontFamily:'Orbitron'
    }
    return(
        <>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 card bg-dark">
                    <div className="card-body text-secondary text-center">
                        <img src="../Images/ZealousLogo.jpg" alt="" className="card-img" style={imgsrc} ></img>
                        <h1 style={change} className="text-primary text-center">Zealous System Corp</h1>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <h4 className="mt-3 text-center">PERSONAL INFORMATION</h4>
                    <div className="form-group mt-2">
                        <label>Name</label>
                        <input
                        type="text"
                        name="zeaName"
                        onChange={track}
                        value={person.zeaName}
                        placeholder="Enter the Name"
                        className="form-control" 
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label>Date Of Birth</label>
                        <input type="Date"
                        name="zeaDob"
                        onChange={track}
                        value={person.zeaDob}
                        className="form-control" 
                        />
                    </div>
                    <h4 className="mt-2 text-center">CONTACT INFORMATION</h4>
                    <div className="form-group mt-2">
                        <label>Address</label>
                        <textarea 
                        name="zeaAdd"
                        onChange={track}
                        value={person.zeaAdd}
                        className="form-control"
                        placeholder="Tell us your DoorNo/Pincode/Distrik/State "
                        />
                    </div>
                    <div className="form-group mt-1">
                        <label>MailID</label>
                        <input type="email"
                        name="zeaMail"
                        onChange={track}
                        value={person.zeaMail}
                        placeholder="abcdef123@gmail.com"
                        className="form-control"
                        />
                    </div>
                    <div className="form-group mt-1">
                        <label>MobileNumber</label>
                        <input type="number"
                        name="zeaNum"
                        onChange={track}
                        value={person.zeaNum}
                        placeholder=" tell us your current Mobile Number"
                        className="form-control"
                        />
                    </div>
                    <h4 className="text-center">COURSE INFORMATION</h4>
                    <div className="form-group mt-1">
                        <label>CourseName</label>
                        <input type="text"
                        name="zeaCourse"
                        onChange={track}
                        value={person.zeaCourse}
                        placeholder=" tell us your course details"
                        className="form-control"
                        />
                    </div>
                    <div className="form-group mt-1">
                        <label>PaymentDetails</label>
                        <br/>
                        <input type="radio" onchage={track} name="zeaPayment" value={person.zeaPayment} className="ms-2" />Cash
                        <input type="radio" onchage={track} name="zeaPayment" value={person.zeaPayment} className="ms-2" />Card
                        <input type="radio" onchage={track} name="zeaPayment" value={person.zeaPayment} className="ms-2" />Cheque
                    </div>
                    <div className="form-group mt-1">
                        <label>LanguagesKnown</label>
                        <br/>
                        <input type="checkbox" onChange={tracky} name="zeaSkills" value="Tamil" className="ms-5"/>Tamil
                        <input type="checkbox" onChange={tracky} name="zeaSkills" value="Malayalam" className="ms-5" />Malayalam
                    </div>
                    <div className="text-center mt-2 ">
                        <button onClick={reg} className="btn btn-outline-success col-5 ms-4">Register</button>
                        <button onClick={remove} className="btn btn-outline-warning col-5 me-4">cancel</button>

                    </div>

                </div>
            </div>
        </div>
        
        </>
    )
}