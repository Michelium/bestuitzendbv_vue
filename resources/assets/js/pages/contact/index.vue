<template>
    <section>
        <div class="row mx-0 mb-5 text-white text-center" id="header">
            <div class="col-12 p-2">
                <h2>Contact</h2>
            </div>
        </div>

        <div class="row mx-0 mb-5" id="first">
            <div class="col-12 col-md-8 mx-auto">
                <div class="card p-2">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <h6>ADRES:</h6>
                            <p>Duke Ellingtonstraat 25 <br> 2551 WB Den Haag <br> Nederland</p>
                        </div>
                        <div class="col-12 col-md-6">
                            <h6>CONTACT:</h6>
                            <p><i class="fa fa-envelope"></i> <a href="mailto:bestuitzendbv@gmail.com">bestuitzendbv@gmail.com</a> <br> <i class="fa fa-phone"></i> 06 85052234<br>
                                <i class="fa fa-phone"></i> 06 45362595</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mx-0 mb-5" id="second">
            <div class="col-12 col-lg-4 ml-auto">
                <h3>Contacteer ons</h3>
                <p>Wilt u ons contacteren? Aarzel dan niet en vul het contact formulier hier onderin en we nemen z.s.m. contact met u op. U kunt ook bellen naar de vermelde
                    telefoon nummers als u een snellere reactie wilt!</p>
            </div>
            <div class="col-12 col-lg-4 mr-auto mt-3 mt-lg-0 mb-5">
                <ContactForm/>
            </div>
        </div>
    </section>
</template>

<script>
import ContactForm from './ContactForm'

export default {
    name: 'Contact',
    components: {
        ContactForm,
    }
}
</script>

<style scoped>
#header {
    background: #B43C39;
}

#first .card {
    border: 3px solid #B43C39;
    border-radius: 10px;
}
</style>
