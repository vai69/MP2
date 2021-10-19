import React from 'react';
import "../Customer/CustomerSignin.css"
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
const CustomerSignin = ({history}) => {
    const handleLogin=(e)=>{
        history.push('/transDash');
    }
    return (
        <>
            <Navbar />
            <div class="container my-5 px-0 z-depth-1">
                <section class="p-5 my-md-5 text-center sec">

                    <form class="my-5 mx-md-5" action="">

                        <div class="row">
                            <div class="col-md-6 mx-auto">
                                <div class="card">
                                    <div class="card-body">
                                        <form class="text-center col_clor" action="#!">

                                            <h3 class="font-weight-bold my-4 pb-2 text-center dark-grey-text">Log In Transporter</h3>
                                            <input type="email" id="defaultSubscriptionFormPassword" class="form-control mb-4" placeholder="Email" />
                                            <input type="password" id="defaultSubscriptionFormEmail" class="form-control" placeholder="Password" />
                                            <small id="passwordHelpBlock" class="form-text text-right blue-text">
                                                <a href="">Recover Password</a>
                                            </small>

                                            <div class="text-center">
                                                <button type="button" class="btn btn-warning btn-rounded my-4 waves-effect" onClick={e=>handleLogin(e)}>LOGIN</button>
                                            </div>

                                        </form>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </form>

                </section>
            </div>
            <Footer />
        </>
    )
}
export default CustomerSignin;
