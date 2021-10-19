import React from 'react';
import Footer from '../Common/Footer';
import Navbar from '../Common/Navbar';
import CustomerTruckList from '../Truck/CustomerTruckList';
const TruckBooking = () => {
    return (
        <>
        <Navbar/>
            <div class="container mt-5">
                <section class="dark-grey-text">

                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <ul class="nav md-pills nav-justified pills-primary font-weight-bold">
                                        <li class="nav-item">
                                            <a class="nav-link active" data-toggle="tab" href="#tabCheckoutBilling123" role="tab">1. Billing</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content pt-4">
                                        <div class="tab-pane fade in show active" id="tabCheckoutBilling123" role="tabpanel">
                                            <form>
                                                <div class="row">
                                                    <div class="col-md-6 mb-4">
                                                        <label for="firstName" class="">PICKUP CITY</label>
                                                        <input type="text" id="firstName" class="form-control" />
                                                    </div>
                                                    <div class="col-md-6 mb-2">
                                                        <label for="lastName" class="">DROP CITY</label>
                                                        <input type="text" id="lastName" class="form-control" />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-4 col-md-12 mb-4">
                                                        <label for="country">TYPE OF LOAD</label>
                                                        <select class="custom-select d-block w-100" id="country" required>
                                                            <option value="">Choose...</option>
                                                            <option>Part Load</option>
                                                            <option>Full Load</option>
                                                        </select>
                                                        <div class="invalid-feedback">
                                                            Please select a valid country.
                                                        </div>

                                                    </div>
                                                    <div class="col-lg-4 col-md-6 mb-4">

                                                        <label for="state">Type of Material</label>
                                                        <select class="custom-select d-block w-100" id="state" required>
                                                            <option value="">Choose...</option>
                                                            <option>Mediacal</option>
                                                            <option>Home</option>
                                                            <option>Industrial</option>
                                                        </select>
                                                        <div class="invalid-feedback">
                                                            Please provide a valid state.
                                                        </div>

                                                    </div>

                                                    <div class="col-lg-4 col-md-6 mb-4">
                                                        <label for="zip">WEIGHT</label>
                                                        <input type="text" class="form-control" id="zip" placeholder="X_MT" required />
                                                        <div class="invalid-feedback">
                                                            WEIGHT
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div class="mb-1">
                                                    <input type="checkbox" class="form-check-input filled-in" id="chekboxRules" />
                                                    <label class="form-check-label" for="chekboxRules">I accept the terms and conditions</label>
                                                </div>
                                                <div class="mb-1">
                                                    <input type="checkbox" class="form-check-input filled-in" id="safeTheInfo" />
                                                    <label class="form-check-label" for="safeTheInfo">Save this information for next time</label>
                                                </div>
                        

                                                <hr />

                                                <button class="btn btn-primary btn-lg btn-block" type="submit">SUBMIT</button>
                                            </form>

                                        </div>
                                    </div>
                                </div>



                                {/* <div class="col-lg-4 mt-4">

                                    <button class="btn btn-primary btn-lg btn-block" type="submit">CANCLE</button>
                                    
                                </div> */}
                                
                            </div>
                        </div>
                        <CustomerTruckList/>
                    </div>
                    
                </section>
                
            </div>
            <Footer/>
        </>
    )
}

export default TruckBooking;