import React from "react";
import "./Footer.css"
import 'bootstrap/dist/css/bootstrap.css';
const Footer = () => {
    return (
        <>
        <footer class="page-footer font-small blue pt-4">

            <div class="container-fluid text-center text-md-left">

                <div class="row">

                    <div class="col-md-6 mt-md-0 mt-3">

                        <h5 class="text-uppercase">CENTRAL TRANSPORT</h5>
                        <p>Deliver item Safely,Quick and in affordable price.</p>

                    </div>


                    <hr class="clearfix w-100 d-md-none pb-3" />

                    <div class="col-md-3 mb-md-0 mb-3">

                        <h5 class="text-uppercase">ABOUT US</h5>

                        <ul class="list-unstyled">
                            <li>
                                <a href="#">HOME</a>
                            </li>
                            <li>
                                <a href="#">ABPUT US</a>
                            </li>
                            <li>
                                <a href="#">CONTACT</a>
                            </li>
                            <li>
                                <a href="#">LOGIN</a>
                            </li>
                            <li>
                                <a href="#">Register</a>
                            </li>
                        </ul>

                    </div>

                    <div class="col-md-3 mb-md-0 mb-3">

                        <h5 class="text-uppercase">POLICY INFO</h5>

                        <ul class="list-unstyled">
                            <li>
                                <a href="#!">Link 1</a>
                            </li>
                            <li>
                                <a href="#!">Link 2</a>
                            </li>
                            <li>
                                <a href="#!">Link 3</a>
                            </li>
                            <li>
                                <a href="#!">Link 4</a>
                            </li>
                        </ul>

                    </div>

                </div>

            </div>

            <div class="footer-copyright text-center py-3">© 2021 Copyright:
                <a href="#"> MDBootstrap.com</a>
            </div>

        </footer>
        </>
    );
}
export default Footer;