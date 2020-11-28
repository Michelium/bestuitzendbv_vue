<template>
    <section>
        <header class="home-head-image mb-5">
            <div class="title">
                <h1>Best Uitzend B.V.</h1>
            </div>
        </header>

        <div class="row m-0 mb-5" id="first">
            <div class="col-12 col-lg-4 ml-auto">
                <h3>Wie zijn wij?</h3>
                <p>Wij zijn “Best Uitzend” we zijn gespecialiseerd in de volgende vakgebieden:</p>
                <ul>
                    <li>Vrachtwagenchauffeur</li>
                    <li>Verpakkingsmedewerker</li>
                    <li>Agrarischemedewerker</li>
                    <li>Bouwmedewerker</li>
                </ul>
            </div>
            <div class="col-12 col-lg-4 mr-auto mt-3 mt-lg-0 ">
                <img class="img-fluid" :src="'images/index/wiezijnwij.jpg'" alt="Wie zijn wij">
            </div>
        </div>

        <div class="row my-5 mx-0 p-3" id="second">
            <div class="col-12 col-lg-8 mx-auto">
                <h2 class="text-white text-center">Onze belangrijkste vakgebieden:</h2>
                <div class="row">
                    <div class="col-12 col-sm-6 col-lg-3 my-2 my-lg-0">
                        <div class="card">
                            <img class="card-img img-fluid" loading="lazy" :src="'images/index/vrachtwagenchauffeur.jpg'" alt="Vrachtwagenchauffeur">
                            <div class="card-body p-2 p-md-3">
                                <p class="card-text">Vrachtwagenchauffeur</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 my-2 my-lg-0">
                        <div class="card">
                            <img class="card-img img-fluid" loading="lazy" :src="'images/index/verpakkingsmedewerker.jpg'" alt="Verpakkingsmedewerker">
                            <div class="card-body p-2 p-md-3">
                                <p class="card-text">Verpakkingsmedewerker</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 my-2 my-lg-0">
                        <div class="card">
                            <img class="card-img img-fluid" loading="lazy" :src="'images/index/agrarischemedewerker.jpg'" alt="Agrarischemedewerker">
                            <div class="card-body p-2 p-lg-3">
                                <p class="card-text">Agrarischemedewerker</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 my-2 my-lg-0">
                        <div class="card">
                            <img class="card-img img-fluid" loading="lazy" :src="'images/index/bouwmedewerker.jpg'" alt="Bouwmedewerker">
                            <div class="card-body p-2 p-lg-3">
                                <p class="card-text">Bouwmedewerker</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="row m-0 mb-5 pb-5" id="third">
            <div class="col-12 col-lg-4 ml-auto mb-3 mt-lg-0 ">
                <img class="img-fluid" :src="'images/index/vrachtwagenhaven.jpg'" loading="lazy" alt="Vrachtwagen in Haven">
            </div>
            <div class="col-12 col-lg-4 mr-auto">
                <h3>Waar zijn wij actief?</h3>
                <p>Onze vestiging zit in Den Haag, maar wij hebben werk voor in heel Nederland. Heb jij dringend een goed betaalde baan nodig en ben je daar bereid voor te werken?
                    Aarzel dan niet om een mail te sturen of te bellen.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
    header {
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('/images/index/head-image-truck.jpg'),
        no-repeat,
        center center;
        background-size: cover;
        height: 100vh;
    }

    header .title {
        position: absolute;
        top: 15%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        text-align: center;
    }

    header h1 {
        text-transform: uppercase;
        margin: 0;
        font-size: 3rem;
        white-space: nowrap;
    }

    header h2 {
        font-size: 2rem;
    }

    header p {
        margin: 0;
        font-size: 1.3rem;
    }
    @media (min-width: 768px) and (max-width: 991px) {
        header .title {
            margin-top: -19%;
        }
    }
    @media (min-width: 576px) and (max-width: 767px) {
        header .title {
            margin-top: -22%;
        }
    }
    @media screen and (max-width: 575px) {
        header {
            width: 100%;
            height: 0;
            padding-top: 65%;
            background-size: 100% auto;
        }
        header .title {
            margin-top: -70%;
        }
        header h1 {
            font-size: 2rem;
        }
        header h2 {
            font-size: 1.3rem;
        }
        header p {
            font-size: 1rem;
        }
    }

    #second {
        background-color: #B43C39;
    }
</style>
