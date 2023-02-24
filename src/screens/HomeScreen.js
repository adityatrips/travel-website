import React from "react";

const HomeScreen = () => {
    return (<>
        <header className="bg-white">
            <div className="container">
                <div className="row pt-5">
                    <div
                        className="col-md-8 col-xl-6 text-center text-md-start mx-auto">
                        <div className="text-center">
                            <h1 className="fw-bold primary-fg">The best solution
                                for you and your customers</h1>
                        </div>
                    </div>
                    <div className="col-12 col-lg-10 mx-auto">
                        <div className="position-relative"
                             style={{
                                 display: "flex",
                                 flexWrap: "wrap",
                                 justifyContent: "flex-end"
                             }}>
                            <div style={{
                                position: "relative",
                                flex: "0 0 45%",
                                transform: "translate3d(-15%, 35%, 0)"
                            }}>
                                <img alt={"product"} className="img-fluid"
                                     data-bss-parallax=""
                                     data-bss-parallax-speed="0.8"
                                     src="/assets/img/products/3.jpg"/>
                            </div>
                            <div style={{
                                position: "relative",
                                flex: "0 0 45%",
                                transform: "translate3d(-5%, 20%, 0)"
                            }}>
                                <img alt={"product"} className="img-fluid"
                                     data-bss-parallax=""
                                     data-bss-parallax-speed="0.4"
                                     src="/assets/img/products/2.jpg"/>
                            </div>
                            <div
                                style={{
                                    position: "relative",
                                    flex: "0 0 60%",
                                    transform: "translate3d(0, 0%, 0)"
                                }}>
                                <img alt={"products"} className="img-fluid"
                                     data-bss-parallax=""
                                     data-bss-parallax-speed="0.25"
                                     src="/assets/img/products/1.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section>
            <div className="container bg-white py-5">
                <div className="row">
                    <div className="col-md-8 col-xl-6 text-center mx-auto">
                        <p className="fw-bold secondary-fg mb-2 ">Our
                            Services</p>
                        <h3 className="primary-fg fw-bold">What we can do for
                            you</h3>
                    </div>
                </div>
                <div className="py-5 p-lg-5">
                    <div className="row row-cols-1 row-cols-md-2 mx-auto"
                         style={{maxWidth: 900}}>
                        <div className="col-sm-auto">
                            <div className="card">
                                <div className="card-body px-4 py-5 px-md-5">
                                    <div
                                        className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon"
                                        style={{
                                            top: "1rem",
                                            right: "1rem",
                                            position: "absolute"
                                        }}>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             width="1em" height="1em"
                                             fill="currentColor"
                                             viewBox="0 0 16 16"
                                             className="bi bi-bell text-success">
                                            <path
                                                d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"></path>
                                        </svg>
                                    </div>
                                    <h5 className="primary-fg fw-bold card-title">Lorem
                                        ipsum dolor sit&nbsp;</h5>
                                    <p className="text-muted card-text mb-4">Erat
                                        netus est hendrerit, nullam et
                                        quis ad cras porttitor iaculis. Bibendum
                                        vulputate cras aenean.</p>
                                    <button className="btn buttons "
                                            type="button">
                                        Learn more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-8 col-xl-6 text-center mx-auto">
                        <p className="fw-bold secondary-fg mb-2">Contacts</p>
                        <h2 className="fw-bold primary-fg">How you can reach
                            us</h2>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-xl-4">
                        <div>
                            <form className="p-3 p-xl-4" method="post">
                                <div className="mb-3">
                                    <input className="form-control" type="text"
                                           id="name-1" name="name"
                                           placeholder="Name"/>
                                </div>
                                <div className="mb-3">
                                    <input className="form-control" type="email"
                                           id="email-1" name="email"
                                           placeholder="Email"/>
                                </div>
                                <div className="mb-3">
                                        <textarea className="form-control"
                                                  id="message-1" name="message"
                                                  rows="6"
                                                  placeholder="Message"></textarea>
                                </div>
                                <div>
                                    <button
                                        className="btn buttons d-block w-100"
                                        type="submit">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div
                        className="col-md-4 col-xl-4 d-flex justify-content-center justify-content-xl-start">
                        <div
                            className="d-flex flex-wrap flex-md-column justify-content-md-start align-items-md-start h-100">
                            <div className="d-flex align-items-center p-3">
                                <div
                                    className="bs-icon-md bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         width="1em" height="1em"
                                         fill="currentColor" viewBox="0 0 16 16"
                                         className="bi bi-telephone">
                                        <path
                                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                                    </svg>
                                </div>
                                <div className="px-2">
                                    <h6 className="fw-bold mb-0 primary-fg">Phone</h6>
                                    <p className="text-muted mb-0">+123456789</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center p-3">
                                <div
                                    className="bs-icon-md bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         width="1em" height="1em"
                                         fill="currentColor" viewBox="0 0 16 16"
                                         className="bi bi-envelope">
                                        <path fillRule="evenodd"
                                              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
                                    </svg>
                                </div>
                                <div className="px-2">
                                    <h6 className="fw-bold mb-0 primary-fg">Email</h6>
                                    <p className="text-muted mb-0">info@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center p-3">
                                <div
                                    className="bs-icon-md bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         width="1em" height="1em"
                                         fill="currentColor" viewBox="0 0 16 16"
                                         className="bi bi-pin">
                                        <path
                                            d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408-.002-.001.002.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282z"></path>
                                    </svg>
                                </div>
                                <div className="px-2">
                                    <h6 className="fw-bold mb-0 primary-fg">Location</h6>
                                    <p className="text-muted mb-0">12 Example
                                        Street</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-5">
            <div className="container">
                <div
                    className="bg-white border rounded border-light d-flex flex-column justify-content-between align-items-center flex-lg-row p-4 p-lg-5">
                    <div className="text-center text-lg-start py-3 py-lg-1">
                        <h2 className="fw-bold mb-2 primary-fg">Subscribe to our
                            newsletter</h2>
                        <p className="mb-0">Imperdiet consectetur dolor.</p>
                    </div>
                    <form
                        className="d-flex justify-content-center flex-wrap flex-lg-nowrap"
                        method="post">
                        <div className="my-2">
                            <input
                                className="border rounded-pill -sm form-control"
                                type="email" name="email"
                                placeholder="Your Email"/>
                        </div>
                        <div className="my-2">
                            <button className="btn buttons  ms-2" type="submit">
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>);
};

export default HomeScreen;
