<template>
    <nav class="navbar navbar-expand-lg custom_navbar custom-navbar-light p-0 mb-2 mb-sm-5" id="custom-navbar">
        <div class="container">
            <div class="row px-3 pt-3 pt-lg-0">
                <div class="col-8">
                    <router-link :to="{ name: 'home' }"><a class="navbar-brand"><h3>Best Uitzend B.V.</h3></a></router-link>
                </div>
                <div class="col-4">
                    <button class="navbar-toggler collapsed float-right mt-2" type="button" data-toggle="collapse" data-target="#custom-nav" aria-controls="custom-nav"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span> Menu
                    </button>
                </div>
            </div>
            <div class="navbar-collapse collapse mt-3 mt-lg-0" id="custom-nav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><router-link :to="{ name: 'home' }" class="nav-link">Home</router-link></li>
                    <li class="nav-item"><router-link :to="{ name: 'about' }" class="nav-link">Over&nbsp;ons</router-link></li>
                    <li class="nav-item"><router-link :to="{ name: 'joboffers' }" class="nav-link">Vacatures</router-link></li>
                    <li class="nav-item"><router-link :to="{ name: 'contact' }" class="nav-link">Contact</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
nav .navbar-brand img {
    max-width: 50%;
}

.custom-navbar-light {
    background: transparent !important;
    top: 20px;
    left: 0;
    right: 0;
    z-index: 3;
}

.custom-navbar-light h3 {
    color: #B43C39;
}

@media (max-width: 991.98px) {
    nav .navbar-brand img {
        max-width: 70%;
    }

    .custom-navbar-light {
        background: white !important;
        top: 0;
    }

    .custom-navbar-light .container {
        padding-left: 15px !important;
        padding-right: 15px !important;
    }

    .custom-navbar-light .row:first-of-type {
        background: white !important;
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

.custom-navbar-light .navbar-nav .nav-item .nav-link.active {
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
</style>
