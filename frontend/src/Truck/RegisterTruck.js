import React, { useState } from 'react'
import Navbar from '../Common/Navbar'
import './Addtruck.css'
const RegisterTruck=({ history })=> {

    let [newUser, setnewUser] = useState({})
    const handleChangeEvent = (e, field) => {
        let fieldValue = e.target.value
        setnewUser({ ...newUser, [field]: fieldValue })
        // if (field === 'email') {
        //     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //     if (fieldValue.match(mailformat)) {
        //         setnewUser({ ...newUser, [field]: fieldValue })
        //         return true
        //     } else {
        //         alert("You have entered an invalid email address!");
        //         return false
        //     }
        // } else if (field === 'password') {
        //     var passwordFormat = /^[A-Za-z]\w{7,14}$/;
        //     if (fieldValue.match(passwordFormat)) {
        //         setnewUser({ ...newUser, [field]: fieldValue })
        //         return true
        //     }else{
        //         alert("Input Password and Submit [7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter]")
        //     }
        }
    
    // submiting data to backend
    const submitData = e => {
        e.preventDefault()
        // signupFunc.registerUser(newUser)
        //     .then(response => response.data)
        // console.log(newUser)
        // history.push('/login')
        window.alert("Added success");
        history.push('/transDash')
    }




    return (
        <>
        <Navbar/>
        <div className="container">
            <div className="flex-container">
                <div className="row full">
                    <div className="col-md-12">
                        <div className="form-container">
                            <div className="form-container-in"></div>
                            <div className="row sgnUp ">
                                <div className="col-md-6 right-divider pdding">
                                    <h1 className="lead-text mn-txt">
                                        ADD TRUCK
                                    </h1>
                                </div>
                                <div className="left-divider">
                                    <div className="col-md-6">
                                        <form onSubmit={e => submitData(e)}>
                                            <div className="form-group2">
                                                <label htmlFor="name">Truck Name:</label>
                                                <input id="name" type="text" className="form-control sgnUp" onChange={e => handleChangeEvent(e, 'name')} />
                                            </div>
                                            <div className="form-group2">
                                                <label htmlFor="name">TRUCK ID</label>
                                                <input id="name" type="text" className="form-control sgnUp" onChange={e => handleChangeEvent(e, 'name')} />
                                            </div>
                                            <div class="form-group2">
                                                <label htmlFor="mob-number">Truck Number</label>
                                                <input required id="mob-number" type="text" className="form-control sgnUp" onChange={e => handleChangeEvent(e, 'mobile')} />
                                            </div>
                                            <div class="form-group2">
                                                <label htmlFor="mob-number">Driver Name</label>
                                                <input required id="mob-number" type="text" className="form-control sgnUp" onChange={e => handleChangeEvent(e, 'mobile')} />
                                            </div>
                                            <div class="form-group2">
                                                <label htmlFor="mob-number">Route Pickup City</label>
                                                <input required id="mob-number" type="text" className="form-control sgnUp" onChange={e => handleChangeEvent(e, 'mobile')} />
                                                <label htmlFor="mob-number">Route Drop City</label>
                                                <input required id="mob-number" type="text" className="form-control sgnUp" onChange={e => handleChangeEvent(e, 'mobile')} />
                                            </div>
                                            <div class="form-group2">
                                                <input required type="submit" value="submit" className="btn-primary btnn form-submit sub-btn sgnUp" />
                                            </div>
                                            <div className="form-group2">
                                                <label htmlFor="name">ALAWAY TRANSPORT SAFELY</label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default RegisterTruck;