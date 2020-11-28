<template>
    <footer class="footer">
        <div class="container-fluid pt-4">
            <h3 class="text-white text-center pb-3">Best Uitzend BV</h3>
            <div class="row">
                <div class="col-6 col-md-4">
                    <h6>Adresgegevens</h6>
                    <p>
                        Duke Ellingtonstraat 25 <br>
                        2551 WB Den Haag <br>
                    </p>
                </div>
                <div class="col-6 col-md-4">
                    <h6>Contactgegevens</h6>
                    <p>
                        <a href="mailto:bestuitzendbv@gmail.com">bestuitzendbv@gmail.com</a> <br>
                        06 85052234 <br>
                        06 45362595 <br>
                    </p>
                </div>
                <div class="col-12 col-md-4">
                    <h6>Volg ons</h6>
                    <div id="social-icons">
                        <a href="#" class="fab fa-facebook-f"></a>
                        <a href="#" class="fab fa-instagram"></a>
                        <a href="#" class="fab fa-twitter"></a>
                    </div>
                </div>
            </div>
            <hr class="mb-0">
            <nav class="nav justify-content-center">
                <span class="navbar-text">&#169; 2020 Best Uitzend BV &nbsp;&nbsp;| </span>
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link"><span>Algemene voorwaarden</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><span>Privacyverklaring</span></a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 307px; /* Set the fixed height of the footer here */
    line-height: 60px; /* Vertically center the text there */
    background-color: #B43C39;
    color: #dddddd;
}

@media (max-width: 767px) and (min-width: 540px) {
    .footer {
        height: 395px;
    }
}

@media (max-width: 539px) {
    .footer {
        height: 472px;
    }
}

.footer .row {
    text-align: center;
}

.footer .row p {
    line-height: 2;
}

.footer #social-icons {
    display: inline-block;
}

.footer #social-icons a {
    text-align: center;
    padding: 6px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 20px;
    border: #ffffff 3px solid;
    margin: 0 10px 0 0;
    background-color: #B43C39;
    color: white;
    transition: background 0.5s;
    text-decoration: none;
}

.footer #social-icons a:hover {
    background: #333333;
    transition: background 0.5s;
}

.footer .nav-link {
    color: white;
}

.footer .nav-link span:hover {
    text-decoration: #ffffff underline;
}
</style>
