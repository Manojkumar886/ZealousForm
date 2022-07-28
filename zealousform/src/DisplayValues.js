import React, {  useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { list } from "./ArrayValues";
import { Zform } from "./ZealousForm";

export const Display=()=>{
    const[tmparray,setTmparray]=useState([])
    const[createview,setCreateview]=useState(false)
    const add=()=>
    {
        setTmparray(list())
    }    
    useEffect(()=>
    {
        add()
    })
    return(
        <>
        <div className="container mt-3">
            {(createview)?
            <>
                <Zform/>
                <button className="btn btn-outline-danger"
                onClick={()=>
                    {
                        setCreateview(false)
                    }
                }>
                    back
                </button>
            </>
            :
            <>
            <button className="btn btn-outline-success" 
            onClick={()=>
                {
                    setCreateview(true)
                }}>
                New Registration 
            </button>
            </>
            }
            </div>
            <h1 className="text-center text-black bg-info mt-5 ">Zealous Student Details</h1>
            <div className="row justify-content-center">
                <div className="table-responsive-md">
                    <table className="col-lg-8 col-md-10 col-sm-12 p-3 table table-striped shadow rounded ">
                        <thead>
                            <tr className="text-dark">
                                <th>Name</th>
                                <th>Date Of Birth</th>
                                <th>Address</th>
                                <th>MailID</th>
                                <th>MobileNumber</th>                                
                                <th>CourseDetails</th>
                                <th>PaymentDetails</th>
                                <th>LanguagesKnown</th>
                            </tr>
                                {tmparray.map((obj1)=>
                                (
                                    <tr>
                                    <td>{obj1.zeaName}</td>
                                    <td>{obj1.zeaDob}</td>
                                    <td>{obj1.zeaAdd}</td>
                                    <td>{obj1.zeaMail}</td>
                                    <td>{obj1.zeaNum}</td>
                                    <td>{obj1.zeaCourse}</td>
                                    <td>{obj1.zeaPayment}</td>
                                    <td>{obj1.zeaSkills}</td>
                                    </tr>
                                ))}
                        </thead>
                    </table>
                </div>
            </div>
        </>
    )
}