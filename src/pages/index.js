import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <meta charSet="utf-8" />
            <title>GrowMark - Digital Marketing HTML Template</title>
            <meta
                content="width=device-width, initial-scale=1.0"
                name="viewport"
            />
            <meta content="" name="keywords" />
            <meta content="" name="description" />
            {/* Favicon */}
            <link href="img/favicon.ico" rel="icon" />
            {/* Google Web Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin=""
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Roboto:wght@500;700&display=swap"
                rel="stylesheet"
            />
            {/* Icon Font Stylesheet */}
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
                rel="stylesheet"
            />
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
                rel="stylesheet"
            />
            {/* Libraries Stylesheet */}
            <link href="lib/animate/animate.min.css" rel="stylesheet" />
            <link
                href="lib/owlcarousel/assets/owl.carousel.min.css"
                rel="stylesheet"
            />
            <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
            {/* Customized Bootstrap Stylesheet */}
            <link href="css/bootstrap.min.css" rel="stylesheet" />
            {/* Template Stylesheet */}
            <link href="css/style.css" rel="stylesheet" />

            {/* Spinner Start */}
            {/* <div
                id="spinner"
                className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
            >
                <div
                    className="spinner-border text-primary"
                    role="status"
                    style={{ width: "3rem", height: "3rem" }}
                />
            </div> */}
            {/* Spinner End */}

            {/* Topbar Start */}
            <div className="container-fluid bg-primary text-white d-none d-lg-flex">
                <div className="container py-3">
                    <div className="d-flex align-items-center">
                        <a href="index.html">
                            <h2 className="text-white fw-bold m-0">GrowMark</h2>
                        </a>
                        <div className="ms-auto d-flex align-items-center">
                            <small className="ms-4">
                                <i className="fa fa-map-marker-alt me-3" />
                                123 Street, New York, USA
                            </small>
                            <small className="ms-4">
                                <i className="fa fa-envelope me-3" />
                                info@example.com
                            </small>
                            <small className="ms-4">
                                <i className="fa fa-phone-alt me-3" />
                                +012 345 67890
                            </small>
                            <div className="ms-3 d-flex">
                                <a
                                    className="btn btn-sm-square btn-light text-primary rounded-circle ms-2"
                                    href=""
                                >
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a
                                    className="btn btn-sm-square btn-light text-primary rounded-circle ms-2"
                                    href=""
                                >
                                    <i className="fab fa-twitter" />
                                </a>
                                <a
                                    className="btn btn-sm-square btn-light text-primary rounded-circle ms-2"
                                    href=""
                                >
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar Start */}
            <div className="container-fluid bg-white sticky-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
                        <a href="index.html" className="navbar-brand d-lg-none">
                            <h1 className="fw-bold m-0">GrowMark</h1>
                        </a>
                        <button
                            type="button"
                            className="navbar-toggler me-0"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarCollapse"
                        >
                            <div className="navbar-nav">
                                <a
                                    href="index.html"
                                    className="nav-item nav-link active"
                                >
                                    Home
                                </a>
                                <a
                                    href="about.html"
                                    className="nav-item nav-link"
                                >
                                    About
                                </a>
                                <a
                                    href="service.html"
                                    className="nav-item nav-link"
                                >
                                    Services
                                </a>
                                <a
                                    href="project.html"
                                    className="nav-item nav-link"
                                >
                                    Projects
                                </a>
                                <div className="nav-item dropdown">
                                    <a
                                        href="#"
                                        className="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                    >
                                        Pages
                                    </a>
                                    <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                                        <a
                                            href="feature.html"
                                            className="dropdown-item"
                                        >
                                            Features
                                        </a>
                                        <a
                                            href="team.html"
                                            className="dropdown-item"
                                        >
                                            Our Team
                                        </a>
                                        <a
                                            href="testimonial.html"
                                            className="dropdown-item"
                                        >
                                            Testimonial
                                        </a>
                                        <a
                                            href="quote.html"
                                            className="dropdown-item"
                                        >
                                            Quotation
                                        </a>
                                        <a
                                            href="404.html"
                                            className="dropdown-item"
                                        >
                                            404 Page
                                        </a>
                                    </div>
                                </div>
                                <a
                                    href="contact.html"
                                    className="nav-item nav-link"
                                >
                                    Contact
                                </a>
                            </div>
                            <div className="ms-auto d-none d-lg-block">
                                <a
                                    href=""
                                    className="btn btn-primary rounded-pill py-2 px-3"
                                >
                                    Get A Quote
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Navbar End */}
            {/* Carousel Start */}
            <div className="container-fluid px-0 mb-5">
                <div
                    id="header-carousel"
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                className="w-100"
                                src="img/carousel-1.jpg"
                                alt="Image"
                            />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-7 text-start">
                                            <p className="fs-4 text-white animated slideInRight">
                                                Welcome to{" "}
                                                <strong>GrowMark</strong>
                                            </p>
                                            <h1 className="display-1 text-white mb-4 animated slideInRight">
                                                Unlock Your Business Growth
                                            </h1>
                                            <a
                                                href=""
                                                className="btn btn-primary rounded-pill py-3 px-5 animated slideInRight"
                                            >
                                                Explore More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                className="w-100"
                                src="img/carousel-2.jpg"
                                alt="Image"
                            />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-end">
                                        <div className="col-lg-7 text-end">
                                            <p className="fs-4 text-white animated slideInLeft">
                                                Welcome to{" "}
                                                <strong>GrowMark</strong>
                                            </p>
                                            <h1 className="display-1 text-white mb-5 animated slideInLeft">
                                                Ready to Grow Your Business
                                            </h1>
                                            <a
                                                href=""
                                                className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft"
                                            >
                                                Explore More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#header-carousel"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#header-carousel"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* Carousel End */}
            {/* Features Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-0 feature-row">
                        <div
                            className="col-md-6 col-lg-3 wow fadeIn"
                            data-wow-delay="0.1s"
                        >
                            <div className="feature-item border h-100 p-5">
                                <div
                                    className="btn-square bg-light rounded-circle mb-4"
                                    style={{ width: 64, height: 64 }}
                                >
                                    <img
                                        className="img-fluid"
                                        src="img/icon/icon-1.png"
                                        alt="Icon"
                                    />
                                </div>
                                <h5 className="mb-3">Award Winning</h5>
                                <p className="mb-0">
                                    Stet stet justo dolor sed duo. Ut clita sea
                                    sit ipsum diam
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-lg-3 wow fadeIn"
                            data-wow-delay="0.3s"
                        >
                            <div className="feature-item border h-100 p-5">
                                <div
                                    className="btn-square bg-light rounded-circle mb-4"
                                    style={{ width: 64, height: 64 }}
                                >
                                    <img
                                        className="img-fluid"
                                        src="img/icon/icon-2.png"
                                        alt="Icon"
                                    />
                                </div>
                                <h5 className="mb-3">Professional Staff</h5>
                                <p className="mb-0">
                                    Stet stet justo dolor sed duo. Ut clita sea
                                    sit ipsum diam
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-lg-3 wow fadeIn"
                            data-wow-delay="0.5s"
                        >
                            <div className="feature-item border h-100 p-5">
                                <div
                                    className="btn-square bg-light rounded-circle mb-4"
                                    style={{ width: 64, height: 64 }}
                                >
                                    <img
                                        className="img-fluid"
                                        src="img/icon/icon-3.png"
                                        alt="Icon"
                                    />
                                </div>
                                <h5 className="mb-3">Fair Prices</h5>
                                <p className="mb-0">
                                    Stet stet justo dolor sed duo. Ut clita sea
                                    sit ipsum diam
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-lg-3 wow fadeIn"
                            data-wow-delay="0.7s"
                        >
                            <div className="feature-item border h-100 p-5">
                                <div
                                    className="btn-square bg-light rounded-circle mb-4"
                                    style={{ width: 64, height: 64 }}
                                >
                                    <img
                                        className="img-fluid"
                                        src="img/icon/icon-4.png"
                                        alt="Icon"
                                    />
                                </div>
                                <h5 className="mb-3">24/7 Support</h5>
                                <p className="mb-0">
                                    Stet stet justo dolor sed duo. Ut clita sea
                                    sit ipsum diam
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Features End */}
            {/* About Start */}
            <div className="container-xxl about my-5">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-6">
                            <div
                                className="h-100 d-flex align-items-center justify-content-center"
                                style={{ minHeight: 300 }}
                            >
                                <button
                                    type="button"
                                    className="btn-play"
                                    data-bs-toggle="modal"
                                    data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                                    data-bs-target="#videoModal"
                                >
                                    <span />
                                </button>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 pt-lg-5 wow fadeIn"
                            data-wow-delay="0.5s"
                        >
                            <div className="bg-white rounded-top p-5 mt-lg-5">
                                <p className="fs-5 fw-medium text-primary">
                                    About Us
                                </p>
                                <h1 className="display-6 mb-4">
                                    The Best Marketing Agency to Improve Your
                                    Business
                                </h1>
                                <p className="mb-4">
                                    Tempor erat elitr rebum at clita. Diam dolor
                                    diam ipsum sit. Aliqu diam amet diam et eos.
                                    Clita erat ipsum et lorem et sit, sed stet
                                    lorem sit clita duo justo
                                </p>
                                <div className="row g-5 pt-2 mb-5">
                                    <div className="col-sm-6">
                                        <img
                                            className="img-fluid mb-4"
                                            src="img/icon/icon-5.png"
                                            alt=""
                                        />
                                        <h5 className="mb-3">
                                            Managed Services
                                        </h5>
                                        <span>
                                            Clita erat ipsum et lorem et sit sed
                                            stet lorem
                                        </span>
                                    </div>
                                    <div className="col-sm-6">
                                        <img
                                            className="img-fluid mb-4"
                                            src="img/icon/icon-2.png"
                                            alt=""
                                        />
                                        <h5 className="mb-3">
                                            Dedicated Experts
                                        </h5>
                                        <span>
                                            Clita erat ipsum et lorem et sit sed
                                            stet lorem
                                        </span>
                                    </div>
                                </div>
                                <a
                                    className="btn btn-primary rounded-pill py-3 px-5"
                                    href=""
                                >
                                    Explore More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Video Modal Start */}
            <div
                className="modal modal-video fade"
                id="videoModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">
                                Youtube Video
                            </h3>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            {/* 16:9 aspect ratio */}
                            <div className="ratio ratio-16x9">
                                <iframe
                                    className="embed-responsive-item"
                                    src=""
                                    id="video"
                                    allowFullScreen=""
                                    allowscriptaccess="always"
                                    allow="autoplay"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Video Modal End */}
            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div
                        className="text-center mx-auto wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 500 }}
                    >
                        <p className="fs-5 fw-medium text-primary">
                            Our Services
                        </p>
                        <h1 className="display-5 mb-5">
                            Digital Marketing Services that We Offer
                        </h1>
                    </div>
                    <div className="row g-4">
                        <div
                            className="col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <div className="service-item position-relative h-100">
                                <div className="service-text rounded p-5">
                                    <div
                                        className="btn-square bg-light rounded-circle mx-auto mb-4"
                                        style={{ width: 64, height: 64 }}
                                    >
                                        <img
                                            className="img-fluid"
                                            src="img/icon/icon-5.png"
                                            alt="Icon"
                                        />
                                    </div>
                                    <h5 className="mb-3">Digital Marketing</h5>
                                    <p className="mb-0">
                                        Erat ipsum justo amet duo et elitr
                                        dolor, est duo duo eos lorem sed diam
                                        stet
                                    </p>
                                </div>
                                <div className="service-btn rounded-0 rounded-bottom">
                                    <a
                                        className="text-primary fw-medium"
                                        href=""
                                    >
                                        Read More
                                        <i className="bi bi-chevron-double-right ms-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay="0.3s"
                        >
                            <div className="service-item position-relative h-100">
                                <div className="service-text rounded p-5">
                                    <div
                                        className="btn-square bg-light rounded-circle mx-auto mb-4"
                                        style={{ width: 64, height: 64 }}
                                    >
                                        <img
                                            className="img-fluid"
                                            src="img/icon/icon-6.png"
                                            alt="Icon"
                                        />
                                    </div>
                                    <h5 className="mb-3">Internet Marketing</h5>
                                    <p className="mb-0">
                                        Erat ipsum justo amet duo et elitr
                                        dolor, est duo duo eos lorem sed diam
                                        stet
                                    </p>
                                </div>
                                <div className="service-btn rounded-0 rounded-bottom">
                                    <a
                                        className="text-primary fw-medium"
                                        href=""
                                    >
                                        Read More
                                        <i className="bi bi-chevron-double-right ms-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay="0.5s"
                        >
                            <div className="service-item position-relative h-100">
                                <div className="service-text rounded p-5">
                                    <div
                                        className="btn-square bg-light rounded-circle mx-auto mb-4"
                                        style={{ width: 64, height: 64 }}
                                    >
                                        <img
                                            className="img-fluid"
                                            src="img/icon/icon-7.png"
                                            alt="Icon"
                                        />
                                    </div>
                                    <h5 className="mb-3">Content Marketing</h5>
                                    <p className="mb-0">
                                        Erat ipsum justo amet duo et elitr
                                        dolor, est duo duo eos lorem sed diam
                                        stet
                                    </p>
                                </div>
                                <div className="service-btn rounded-0 rounded-bottom">
                                    <a
                                        className="text-primary fw-medium"
                                        href=""
                                    >
                                        Read More
                                        <i className="bi bi-chevron-double-right ms-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <div className="service-item position-relative h-100">
                                <div className="service-text rounded p-5">
                                    <div
                                        className="btn-square bg-light rounded-circle mx-auto mb-4"
                                        style={{ width: 64, height: 64 }}
                                    >
                                        <img
                                            className="img-fluid"
                                            src="img/icon/icon-8.png"
                                            alt="Icon"
                                        />
                                    </div>
                                    <h5 className="mb-3">Social Marketing</h5>
                                    <p className="mb-0">
                                        Erat ipsum justo amet duo et elitr
                                        dolor, est duo duo eos lorem sed diam
                                        stet
                                    </p>
                                </div>
                                <div className="service-btn rounded-0 rounded-bottom">
                                    <a
                                        className="text-primary fw-medium"
                                        href=""
                                    >
                                        Read More
                                        <i className="bi bi-chevron-double-right ms-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay="0.3s"
                        >
                            <div className="service-item position-relative h-100">
                                <div className="service-text rounded p-5">
                                    <div
                                        className="btn-square bg-light rounded-circle mx-auto mb-4"
                                        style={{ width: 64, height: 64 }}
                                    >
                                        <img
                                            className="img-fluid"
                                            src="img/icon/icon-9.png"
                                            alt="Icon"
                                        />
                                    </div>
                                    <h5 className="mb-3">B2B Marketing</h5>
                                    <p className="mb-0">
                                        Erat ipsum justo amet duo et elitr
                                        dolor, est duo duo eos lorem sed diam
                                        stet
                                    </p>
                                </div>
                                <div className="service-btn rounded-0 rounded-bottom">
                                    <a
                                        className="text-primary fw-medium"
                                        href=""
                                    >
                                        Read More
                                        <i className="bi bi-chevron-double-right ms-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay="0.5s"
                        >
                            <div className="service-item position-relative h-100">
                                <div className="service-text rounded p-5">
                                    <div
                                        className="btn-square bg-light rounded-circle mx-auto mb-4"
                                        style={{ width: 64, height: 64 }}
                                    >
                                        <img
                                            className="img-fluid"
                                            src="img/icon/icon-10.png"
                                            alt="Icon"
                                        />
                                    </div>
                                    <h5 className="mb-3">E-mail Marketing</h5>
                                    <p className="mb-0">
                                        Erat ipsum justo amet duo et elitr
                                        dolor, est duo duo eos lorem sed diam
                                        stet
                                    </p>
                                </div>
                                <div className="service-btn rounded-0 rounded-bottom">
                                    <a
                                        className="text-primary fw-medium"
                                        href=""
                                    >
                                        Read More
                                        <i className="bi bi-chevron-double-right ms-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
            {/* Project Start */}
            <div className="container-xxl pt-5">
                <div className="container">
                    <div
                        className="text-center text-md-start pb-5 pb-md-0 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 500 }}
                    >
                        <p className="fs-5 fw-medium text-primary">
                            Our Projects
                        </p>
                        <h1 className="display-5 mb-5">
                            We've Done Lot's of Awesome Projects
                        </h1>
                    </div>
                    <div
                        className="owl-carousel project-carousel wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        <div className="project-item mb-5">
                            <div className="position-relative">
                                <img
                                    className="img-fluid"
                                    src="img/project-1.jpg"
                                    alt=""
                                />
                                <div className="project-overlay">
                                    <a
                                        className="btn btn-lg-square btn-light rounded-circle m-1"
                                        href="img/project-1.jpg"
                                        data-lightbox="project"
                                    >
                                        <i className="fa fa-eye" />
                                    </a>
                                    <a
                                        className="btn btn-lg-square btn-light rounded-circle m-1"
                                        href=""
                                    >
                                        <i className="fa fa-link" />
                                    </a>
                                </div>
                            </div>
                            <div className="p-4">
                                <a className="d-block h5" href="">
                                    Data Analytics &amp; Insights
                                </a>
                                <span>
                                    Erat ipsum justo amet duo et elitr dolor,
                                    est duo duo eos lorem
                                </span>
                            </div>
                        </div>
                        <div className="project-item mb-5">
                            <div className="position-relative">
                                <img
                                    className="img-fluid"
                                    src="img/project-2.jpg"
                                    alt=""
                                />
                                <div className="project-overlay">
                                    <a
                                        className="btn btn-lg-square btn-light rounded-circle m-1"
                                        href="img/project-2.jpg"
                                        data-lightbox="project"
                                    >
                                        <i className="fa fa-eye" />
                                    </a>
                                    <a
                                        className="btn btn-lg-square btn-light rounded-circle m-1"
                                        href=""
                                    >
                                        <i className="fa fa-link" />
                                    </a>
                                </div>
                            </div>
                            <div className="p-4">
                                <a className="d-block h5" href="">
                                    Marketing Content Strategy
                                </a>
                                <span>
                                    Erat ipsum justo amet duo et elitr dolor,
                                    est duo duo eos lorem
                                </span>
                            </div>
                        </div>
                        <div className="project-item mb-5">
                            <div className="position-relative">
                                <img
                                    className="img-fluid"
                                    src="img/project-3.jpg"
                                    alt=""
                                />
                                <div className="project-overlay">
                                    <a
                                        className="btn btn-lg-square btn-light rounded-circle m-1"
                                        href="img/project-3.jpg"
                                        data-lightbox="project"
                                    >
                                        <i className="fa fa-eye" />
                                    </a>
                                    <a
                                        className="btn btn-lg-square btn-light rounded-circle m-1"
                                        href=""
                                    >
                                        <i className="fa fa-link" />
                                    </a>
                                </div>
                            </div>
                            <div className="p-4">
                                <a className="d-block h5" href="">
                                    Business Target Market
                                </a>
                                <span>
                                    Erat ipsum justo amet duo et elitr dolor,
                                    est duo duo eos lorem
                                </span>
                            </div>
                        </div>
                        <div className="project-item mb-5">
                            <div className="position-relative">
                                <img
                                    className="img-fluid"
                                    src="img/project-4.jpg"
                                    alt=""
                                />
                                <div className="project-overlay">
                                    <a
                                        className="btn btn-lg-square btn-light rounded-circle m-1"
                                        href="img/project-4.jpg"
                                        data-lightbox="project"
                                    >
                                        <i className="fa fa-eye" />
                                    </a>
                                    <a
                                        className="btn btn-lg-square btn-light rounded-circle m-1"
                                        href=""
                                    >
                                        <i className="fa fa-link" />
                                    </a>
                                </div>
                            </div>
                            <div className="p-4">
                                <a className="d-block h5" href="">
                                    Social Marketing Strategy
                                </a>
                                <span>
                                    Erat ipsum justo amet duo et elitr dolor,
                                    est duo duo eos lorem
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Project End */}
            {/* Quote Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <p className="fs-5 fw-medium text-primary">
                                Get A Quote
                            </p>
                            <h1 className="display-5 mb-4">
                                Need Our Expert Help? We're Here!
                            </h1>
                            <p>
                                Tempor erat elitr rebum at clita. Diam dolor
                                diam ipsum sit. Aliqu diam amet diam et eos.
                                Clita erat ipsum et lorem et sit, sed stet lorem
                                sit clita duo justo
                            </p>
                            <p className="mb-4">
                                Tempor erat elitr rebum at clita. Diam dolor
                                diam ipsum sit. Aliqu diam amet diam et eos.
                                Clita erat ipsum et lorem et sit, sed stet lorem
                                sit clita duo justo
                            </p>
                            <a
                                className="d-inline-flex align-items-center rounded overflow-hidden border border-primary"
                                href=""
                            >
                                <span
                                    className="btn-lg-square bg-primary"
                                    style={{ width: 55, height: 55 }}
                                >
                                    <i className="fa fa-phone-alt text-white" />
                                </span>
                                <span className="fs-5 fw-medium mx-4">
                                    +012 345 6789
                                </span>
                            </a>
                        </div>
                        <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-delay="0.5s"
                        >
                            <h2 className="mb-4">Get A Free Quote</h2>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                        />
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="mail"
                                            placeholder="Your Email"
                                        />
                                        <label htmlFor="mail">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="mobile"
                                            placeholder="Your Mobile"
                                        />
                                        <label htmlFor="mobile">
                                            Your Mobile
                                        </label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <select
                                            className="form-select"
                                            id="service"
                                        >
                                            <option selected="">
                                                Digital Marketing
                                            </option>
                                            <option value="">
                                                Social Marketing
                                            </option>
                                            <option value="">
                                                Content Marketing
                                            </option>
                                            <option value="">
                                                E-mail Marketing
                                            </option>
                                        </select>
                                        <label htmlFor="service">
                                            Choose A Service
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea
                                            className="form-control"
                                            placeholder="Leave a message here"
                                            id="message"
                                            style={{ height: 130 }}
                                            defaultValue={""}
                                        />
                                        <label htmlFor="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <button
                                        className="btn btn-primary w-100 py-3"
                                        type="submit"
                                    >
                                        Submit Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Quote Start */}
            {/* Team Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div
                        className="text-center mx-auto wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 500 }}
                    >
                        <p className="fs-5 fw-medium text-primary">Our Team</p>
                        <h1 className="display-5 mb-5">
                            Our Expert People Ready to Help You
                        </h1>
                    </div>
                    <div className="row g-4">
                        <div
                            className="col-lg-3 col-md-6 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <div className="team-item rounded overflow-hidden pb-4">
                                <img
                                    className="img-fluid mb-4"
                                    src="img/team-1.jpg"
                                    alt=""
                                />
                                <h5>Alex Robin</h5>
                                <span className="text-primary">
                                    Founder &amp; CEO
                                </span>
                                <ul className="team-social">
                                    <li>
                                        <a className="btn btn-square" href="">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn btn-square" href="">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn btn-square" href="">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn btn-square" href="">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 wow fadeInUp"
                            data-wow-delay="0.3s"
                        >
                            <div className="team-item rounded overflow-hidden pb-4">
                                <img
                                    className="img-fluid mb-4"
                                    src="img/team-2.jpg"
                                    alt=""
                                />
                                <h5>Adam Crew</h5>
                                <span className="text-primary">Co Founder</span>
                                <ul className="team-social">
                                    <li>
                                        <a className="btn btn-square" href="">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn btn-square" href="">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn btn-square" href="">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn btn-square" href="">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 wow fadeInUp"
                            data-wow-delay="0.5s"
                        >
                            <div className="team-item rounded overflow-hidden pb-4">
                                <img
                                    className="img-fluid mb-4"
                                    src="img/team-3.jpg"
                                    alt=""
                                />
                                <h5>Boris Johnson</h5>
                                <span className="text-primary">
                                    Executive Manager
                                </span>
                                <ul className="team-social">
                                    <li>
                                        <a className="btn btn-square" href="">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn btn-square" href="">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn btn-square" href="">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn btn-square" href="">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 wow fadeInUp"
                            data-wow-delay="0.7s"
                        >
                            <div className="team-item rounded overflow-hidden pb-4">
                                <img
                                    className="img-fluid mb-4"
                                    src="img/team-4.jpg"
                                    alt=""
                                />
                                <h5>Robert Jordan</h5>
                                <span className="text-primary">
                                    Digital Marketer
                                </span>
                                <ul className="team-social">
                                    <li>
                                        <a className="btn btn-square" href="">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn btn-square" href="">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn btn-square" href="">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn btn-square" href="">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
            {/* Testimonial Start */}
            <div className="container-xxl pt-5">
                <div className="container">
                    <div
                        className="text-center text-md-start pb-5 pb-md-0 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 500 }}
                    >
                        <p className="fs-5 fw-medium text-primary">
                            Testimonial
                        </p>
                        <h1 className="display-5 mb-5">
                            What Clients Say About Our Services!
                        </h1>
                    </div>
                    <div
                        className="owl-carousel testimonial-carousel wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        <div className="testimonial-item rounded p-4 p-lg-5 mb-5">
                            <img
                                className="mb-4"
                                src="img/testimonial-1.jpg"
                                alt=""
                            />
                            <p className="mb-4">
                                Diam dolor diam ipsum sit. Aliqu diam amet diam
                                et eos. Clita erat ipsum et lorem et sit, sed
                                stet lorem sit clita duo justo
                            </p>
                            <h5>Client Name</h5>
                            <span className="text-primary">Profession</span>
                        </div>
                        <div className="testimonial-item rounded p-4 p-lg-5 mb-5">
                            <img
                                className="mb-4"
                                src="img/testimonial-2.jpg"
                                alt=""
                            />
                            <p className="mb-4">
                                Diam dolor diam ipsum sit. Aliqu diam amet diam
                                et eos. Clita erat ipsum et lorem et sit, sed
                                stet lorem sit clita duo justo
                            </p>
                            <h5>Client Name</h5>
                            <span className="text-primary">Profession</span>
                        </div>
                        <div className="testimonial-item rounded p-4 p-lg-5 mb-5">
                            <img
                                className="mb-4"
                                src="img/testimonial-3.jpg"
                                alt=""
                            />
                            <p className="mb-4">
                                Diam dolor diam ipsum sit. Aliqu diam amet diam
                                et eos. Clita erat ipsum et lorem et sit, sed
                                stet lorem sit clita duo justo
                            </p>
                            <h5>Client Name</h5>
                            <span className="text-primary">Profession</span>
                        </div>
                        <div className="testimonial-item rounded p-4 p-lg-5 mb-5">
                            <img
                                className="mb-4"
                                src="img/testimonial-4.jpg"
                                alt=""
                            />
                            <p className="mb-4">
                                Diam dolor diam ipsum sit. Aliqu diam amet diam
                                et eos. Clita erat ipsum et lorem et sit, sed
                                stet lorem sit clita duo justo
                            </p>
                            <h5>Client Name</h5>
                            <span className="text-primary">Profession</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial End */}
            {/* Footer Start */}
            <div
                className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-4">Our Office</h4>
                            <p className="mb-2">
                                <i className="fa fa-map-marker-alt me-3" />
                                123 Street, New York, USA
                            </p>
                            <p className="mb-2">
                                <i className="fa fa-phone-alt me-3" />
                                +012 345 67890
                            </p>
                            <p className="mb-2">
                                <i className="fa fa-envelope me-3" />
                                info@example.com
                            </p>
                            <div className="d-flex pt-3">
                                <a
                                    className="btn btn-square btn-light rounded-circle me-2"
                                    href=""
                                >
                                    <i className="fab fa-twitter" />
                                </a>
                                <a
                                    className="btn btn-square btn-light rounded-circle me-2"
                                    href=""
                                >
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a
                                    className="btn btn-square btn-light rounded-circle me-2"
                                    href=""
                                >
                                    <i className="fab fa-youtube" />
                                </a>
                                <a
                                    className="btn btn-square btn-light rounded-circle me-2"
                                    href=""
                                >
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <a className="btn btn-link" href="">
                                About Us
                            </a>
                            <a className="btn btn-link" href="">
                                Contact Us
                            </a>
                            <a className="btn btn-link" href="">
                                Our Services
                            </a>
                            <a className="btn btn-link" href="">
                                Terms &amp; Condition
                            </a>
                            <a className="btn btn-link" href="">
                                Support
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-4">Business Hours</h4>
                            <p className="mb-1">Monday - Friday</p>
                            <h6 className="text-light">09:00 am - 07:00 pm</h6>
                            <p className="mb-1">Saturday</p>
                            <h6 className="text-light">09:00 am - 12:00 pm</h6>
                            <p className="mb-1">Sunday</p>
                            <h6 className="text-light">Closed</h6>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-4">Newsletter</h4>
                            <p>
                                Dolor amet sit justo amet elitr clita ipsum
                                elitr est.
                            </p>
                            <div className="position-relative w-100">
                                <input
                                    className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                                    type="text"
                                    placeholder="Your email"
                                />
                                <button
                                    type="button"
                                    className="btn btn-light py-2 position-absolute top-0 end-0 mt-2 me-2"
                                >
                                    SignUp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
            {/* Copyright Start */}
            <div className="container-fluid copyright py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            ??{" "}
                            <a className="fw-medium text-light" href="#">
                                Your Site Name
                            </a>
                            , All Right Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            {/*/*** This template is free as long as you keep the footer author???s credit link/attribution link/backlink. If you'd like to use the template without the footer author???s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                            Designed By{" "}
                            <a
                                className="fw-medium text-light"
                                href="https://htmlcodex.com"
                            >
                                HTML Codex
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright End */}
            {/* Back to Top */}
            <a
                href="#"
                className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
            >
                <i className="bi bi-arrow-up" />
            </a>

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
            <script src="lib/wow/wow.min.js"></script>
            <script src="lib/easing/easing.min.js"></script>
            <script src="lib/waypoints/waypoints.min.js"></script>
            <script src="lib/owlcarousel/owl.carousel.min.js"></script>
            <script src="lib/lightbox/js/lightbox.min.js"></script>
        </>
    );
}
