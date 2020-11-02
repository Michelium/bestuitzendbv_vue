<template>
    <div>
        <nav class="navbar navbar-expand-lg custom_navbar custom-navbar-light p-0 mb-2 mb-sm-5" id="custom-navbar">
            <div class="container">
                <div class="row px-3 pt-3 pt-lg-0">
                    <div class="col-8">
                        <router-link :to="{ name: 'home' }"><a class="navbar-brand" href=""><img :src="'images/logo.jpg'" alt="LOGO"></a></router-link>
                    </div>
                    <div class="col-4">
                        <button class="navbar-toggler collapsed float-right mt-2" type="button" data-toggle="collapse" data-target="#custom-nav" aria-controls="custom-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span> Menu
                        </button>
                    </div>
                </div>
                <div class="navbar-collapse collapse mt-3 mt-lg-0" id="custom-nav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a href="" class="nav-link">Home</a></li>
                        <li class="nav-item"><a href="" class="nav-link">Over&nbsp;ons</a></li>
                        <li class="nav-item"><a href="" class="nav-link">Vacatures</a></li>
                        <li class="nav-item"><a href="" class="nav-link">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
    nav .navbar-brand img {
        max-width: 50%;
    }

    .custom-navbar-light {
        background: transparent !important;
        position: absolute;
        top: 20px;
        left: 0;
        right: 0;
        z-index: 3;
    }

    @media (max-width: 991.98px) {
        nav .navbar-brand img {
            max-width: 70%;
        }

        .custom-navbar-light {
            background: white !important;
            position: relative;
            top: 0;
        }

        .custom-navbar-light .container {
            padding-left: 15px !important;
            padding-right: 15px !important;
        }

        .custom-navbar-light .row:first-of-type {
            background: white!important;
        }
    }

    .custom-navbar-light .navbar-brand {
        color: #000;
    }

    .custom-navbar-light .navbar-brand:hover {
        color: #000;
    }

    @media (max-width: 991.98px) {
        .custom-navbar-light .navbar-nav {
            padding-bottom: 10px;
        }
    }

    .custom-navbar-light .navbar-nav > .nav-item > .nav-link {
        font-size: 14px;
        padding-top: .9rem;
        padding-bottom: .9rem;
        padding-left: 20px;
        padding-right: 20px;
        letter-spacing: 1px;
        color: #000;
        font-weight: 500;
        text-transform: uppercase;
        opacity: 1 !important;
    }

    .custom-navbar-light .navbar-nav > .nav-item > .nav-link:hover {
        color: #B43C39;
    }

    @media (max-width: 991.98px) {
        .custom-navbar-light .navbar-nav > .nav-item > .nav-link {
            padding-left: 0;
            padding-right: 0;
            padding-top: .5em;
            padding-bottom: .5em;
            color: black;
        }

        .custom-navbar-light .navbar-nav > .nav-item > .nav-link:hover {
            color: #B43C39;
        }
    }

    .custom-navbar-light .navbar-nav > .nav-item .dropdown-menu {
        border: none;
        background: #fff;
        -webkit-box-shadow: 0px 10px 34px -20px rgba(0, 0, 0, 0.41);
        -moz-box-shadow: 0px 10px 34px -20px rgba(0, 0, 0, 0.41);
        box-shadow: 0px 10px 34px -20px rgba(0, 0, 0, 0.41);
    }

    .custom-navbar-light .navbar-nav > .nav-item.custom-seperator {
        position: relative;
        margin-left: 20px;
        padding-left: 20px;
    }

    @media (max-width: 991.98px) {
        .custom-navbar-light .navbar-nav > .nav-item.custom-seperator {
            padding-left: 0;
            margin-left: 0;
        }
    }

    .custom-navbar-light .navbar-nav > .nav-item.custom-seperator:before {
        position: absolute;
        content: "";
        top: 10px;
        bottom: 10px;
        left: 0;
        width: 2px;
        background: rgba(255, 255, 255, 0.05);
    }

    @media (max-width: 991.98px) {
        .custom-navbar-light .navbar-nav > .nav-item.custom-seperator:before {
            display: none;
        }
    }

    .custom-navbar-light .navbar-nav > .nav-item.cta > a {
        color: black;
        border: 1px solid #B43C39;
        padding-top: .5rem;
        padding-bottom: .5rem;
        padding-left: 20px;
        padding-right: 20px;
        margin-top: 4px;
        background: #B43C39;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        border-radius: 5px;
    }

    .custom-navbar-light .navbar-nav > .nav-item.cta > a span {
        display: inline-block;
        color: black;
    }

    .custom-navbar-light .navbar-nav > .nav-item.cta > a:hover {
        color: white;
        background: #B43C39;
        border: 1px solid #B43C39;
    }

    .custom-navbar-light .navbar-nav > .nav-item.cta.cta-colored a {
        border: 1px solid #38d39f;
        background: #38d39f !important;
    }

    .custom-navbar-light .navbar-nav > .nav-item.active > a {
        color: rgba(255, 255, 255, 0.5);
        color: #B43C39;
    }

    .custom-navbar-light .navbar-toggler {
        border: none;
        color: rgba(212, 15, 15, 0.5) !important;
        cursor: pointer;
        padding-right: 0;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 16px;
        letter-spacing: .1em;
    }

    .custom-navbar-light .navbar-toggler:hover, .custom-navbar-light .navbar-toggler:focus {
        text-decoration: none;
        color: #B43C39;
        outline: none !important;
    }

    .custom-navbar-light.scrolled {
        position: fixed;
        right: 0;
        left: 0;
        top: 0;
        margin-top: -130px;
        background: #fff !important;
        -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 991.98px) {
        .custom-navbar-light.scrolled .nav-item > .nav-link {
            padding-left: 0 !important;
            padding-right: 0 !important;
            padding-bottom: 0 !important;
        }
    }

    .custom-navbar-light.scrolled .nav-item.active > a {
        color: #B43C39 !important;
    }

    .custom-navbar-light.scrolled .nav-item.cta > a {
        color: black !important;
        background: #B43C39;
        border: none !important;
        padding-top: 0.5rem !important;
        padding-bottom: .5rem !important;
        padding-left: 20px !important;
        padding-right: 20px !important;
        margin-top: 6px !important;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        border-radius: 5px;
    }

    .custom-navbar-light.scrolled .nav-item.cta > a span {
        display: inline-block;
        color: black !important;
    }

    .custom-navbar-light.scrolled .nav-item.cta.cta-colored span {
        border-color: #B43C39;
    }

    @media (max-width: 991.98px) {
        .custom-navbar-light.scrolled .navbar-nav {
            background: none;
            border-radius: 0px;
            padding-left: 0rem !important;
            padding-right: 0rem !important;
        }
    }

    .custom-navbar-light.scrolled .navbar-toggler {
        border: none;
        color: rgba(0, 0, 0, 0.5) !important;
        border-color: rgba(0, 0, 0, 0.5) !important;
        cursor: pointer;
        padding-right: 0;
        text-transform: uppercase;
        font-size: 16px;
        letter-spacing: .1em;
    }

    .custom-navbar-light.scrolled .nav-link {
        padding-top: 0.9rem !important;
        padding-bottom: 0.9rem !important;
        color: #000 !important;
    }

    .custom-navbar-light.scrolled .nav-link.active {
        color: #B43C39 !important;
    }

    .custom-navbar-light.scrolled.awake {
        margin-top: 0px;
        -webkit-transition: .3s all ease-out;
        -o-transition: .3s all ease-out;
        transition: .3s all ease-out;
    }

    .custom-navbar-light.scrolled.sleep {
        -webkit-transition: .3s all ease-out;
        -o-transition: .3s all ease-out;
        transition: .3s all ease-out;
    }

    .custom-navbar-light.scrolled .navbar-brand {
        color: #000;
    }
</style>
