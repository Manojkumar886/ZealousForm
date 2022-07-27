import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

export const Display=()=>{
    return(
        <>
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="mt-2 text-center">
                    <button className="btn btn-outline-success col-5 me-5">New Registration</button>
                    <button className="btn btn-outline-danger col-5">Login</button>
                </div>
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
                        </thead>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}