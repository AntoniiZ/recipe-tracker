import React from 'react'

export default function Footer() {

    return (
        <footer className="footer">
            <div className="container p-4">

                <section className="footerSection">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Important</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">random</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
                            <h5 className="text-uppercase">About us</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">footer</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Social media</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">links</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

            </div>

        </footer>
    )
}