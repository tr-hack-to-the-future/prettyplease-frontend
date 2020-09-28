import React, { Component, useState } from 'react';
import PPNavbar from './PPNavbar';



function CharityPage() {
    const [navitems, setnavitems] = useState([
        { itemName: "Review and Accept", itemLink: "", itemAddr: "", activePage: true },
        { itemName: "Fund Request", itemLink: "/FundRequest", itemAddr: "FundRequest/", activePage: false }

    ]);
    const [showProfile, setshowProfile] = useState(true);


    return (
        <div className="ReviewAccept">
            <PPNavbar NavItems={navitems} showProfile={showProfile} />
            <h1>Charity Page</h1>
            <div class="container">

                <p class="text-justify mt-4">You have received 4 offers for the request you made on 21/09/2020</p>


                <div class="card-deck">

                    <div class="row">
                        <div class="col sm-12 md-6 lg-6">
                            <div
                                class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div class="col-auto flex-column">
                                    <svg class="bd-placeholder-img" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                                        <image href="./img/abstract-logo.jpg" height="200" width="200"></image>
                                    </svg>
                                </div>
                                <div class="col p-4 d-flex flex-column position-static">
                                    <a href="Sponsor1.html" class="stretched-link">
                                        <strong class="d-inline-block mb-2 text-primary">Sponsor name1</strong>
                                        <p class="card-text mb-auto">This is the text about Sponsor description and values of
                            their organization.</p>
                                    </a>
                                </div>

                            </div>

                        </div>
                        <div class="col sm-12 md-6 lg-6">
                            <div
                                class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div class="col-auto ">
                                    <svg class="bd-placeholder-img" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                                        <image href="./img/abstract-logo2.jpg" height="200" width="200"></image>
                                    </svg>
                                </div>
                                <div class="col p-4 d-flex flex-column position-static">
                                    <a href="Sponsor1.html" class="stretched-link">
                                        <strong class="d-inline-block mb-2 text-primary">Sponsor name2</strong>
                                        <p class="card-text mb-auto">This is the text about Sponsor description and values of
                            their organization.</p>
                                    </a>
                                </div>

                            </div>

                        </div>


                    </div>
                    <div class="row">
                        <div class="col sm-12 md-6 lg-6">
                            <div
                                class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div class="col-auto">
                                    <svg class="bd-placeholder-img" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                                        <image href="./img/abstract-logo3.jpg" height="200" width="200"></image>
                                    </svg>
                                </div>
                                <div class="col p-4 d-flex flex-column position-static">
                                    <a href="Sponsor1.html" class="stretched-link">
                                        <strong class="d-inline-block mb-2 text-primary">Sponsor name3</strong>
                                        <p class="card-text mb-auto">This is the text about Sponsor description and values of
                            their organization.</p>
                                    </a>
                                </div>

                            </div>

                        </div>
                        <div class="col sm-12 md-6 lg-6">
                            <div
                                class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div class="col-auto">
                                    <svg class="bd-placeholder-img" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                                        <image href="./img/abstract-logo4.jpg" height="200" width="200"></image>
                                    </svg>
                                </div>
                                <div class="col p-4 d-flex flex-column position-static">
                                    <a href="Sponsor1.html" class="stretched-link">
                                        <strong class="d-inline-block mb-2 text-primary">Sponsor name4</strong>
                                        <p class="card-text mb-auto">This is the text about Sponsor description and values of
                            their organization.</p>
                                    </a>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>

            </div>
        </div>

    );
}

export default CharityPage;