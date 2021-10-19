import React from 'react';
const CustomerTruckList = () => {
    return (
        <div class="container z-depth-1 p-5 my-5">
            <section>
                <div class="table-responsive">
                    <table class="table product-table table-cart-v-1">
                        <thead>
                            <tr>
                                <th class="font-weight-bold">
                                    <strong>TRUCK NUMBER</strong>
                                </th>
                                <th class="font-weight-bold">
                                    <strong>Company</strong>
                                </th>
                                <th></th>
                                <th class="font-weight-bold">
                                    <strong>Price</strong>
                                </th>
                                <th class="font-weight-bold">
                                    <strong>QTY</strong>
                                </th>
                                <th class="font-weight-bold">
                                    <strong>Capacity</strong>
                                </th>
                                <th class="font-weight-bold">
                                    <strong>TOTAL</strong>
                                </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h5 class="mt-3">
                                        <strong>416416</strong>
                                    </h5>
                                </td>
                                <td>TATA</td>
                                <td></td>
                                <td>$800</td>
                                <td class="text-center text-md-left">
                                    <span class="qty">1 </span>
                                    <div class="btn-group radio-group ml-2" data-toggle="buttons">
                                        <label class="btn btn-sm btn-primary btn-rounded">
                                            <input type="radio" name="options" id="option1" />&mdash;
                                        </label>
                                        <label class="btn btn-sm btn-primary btn-rounded">
                                            <input type="radio" name="options" id="option2" />+
                                        </label>
                                    </div>
                                </td>
                                <td class="font-weight-bold">
                                    <strong>$800</strong>
                                </td>
                                <td class="font-weight-bold">
                                    <strong>$800</strong>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top"
                                        title="BOOK NOW">BOOK
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5 class="mt-3">
                                        <strong>416416</strong>
                                    </h5>
                                </td>
                                <td>TATA</td>
                                <td></td>
                                <td>$800</td>
                                <td class="text-center text-md-left">
                                    <span class="qty">1 </span>
                                    <div class="btn-group radio-group ml-2" data-toggle="buttons">
                                        <label class="btn btn-sm btn-primary btn-rounded">
                                            <input type="radio" name="options" id="option1" />&mdash;
                                        </label>
                                        <label class="btn btn-sm btn-primary btn-rounded">
                                            <input type="radio" name="options" id="option2" />+
                                        </label>
                                    </div>
                                </td>
                                <td class="font-weight-bold">
                                    <strong>$800</strong>
                                </td>
                                <td class="font-weight-bold">
                                    <strong>$800</strong>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top"
                                        title="BOOK NOW">BOOK
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5 class="mt-3">
                                        <strong>416416</strong>
                                    </h5>
                                </td>
                                <td>TATA</td>
                                <td></td>
                                <td>$800</td>
                                <td class="text-center text-md-left">
                                    <span class="qty">1 </span>
                                    <div class="btn-group radio-group ml-2" data-toggle="buttons">
                                        <label class="btn btn-sm btn-primary btn-rounded">
                                            <input type="radio" name="options" id="option1" />&mdash;
                                        </label>
                                        <label class="btn btn-sm btn-primary btn-rounded">
                                            <input type="radio" name="options" id="option2" />+
                                        </label>
                                    </div>
                                </td>
                                <td class="font-weight-bold">
                                    <strong>$800</strong>
                                </td>
                                <td class="font-weight-bold">
                                    <strong>$800</strong>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top"
                                        title="BOOK NOW">BOOK
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

export default CustomerTruckList;