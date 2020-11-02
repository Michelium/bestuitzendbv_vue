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
                            <p><i class="fa fa-envelope"></i> <a href="mailto:besttrans2018@gmail.com">besttrans2018@gmail.com</a> <br> <i class="fa fa-phone"></i> 06 85052234<br> <i class="fa fa-phone"></i> 06 45362595</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mx-0 mb-5" id="second">
            <div class="col-12 col-lg-4 ml-auto">
                <h3>Contacteer ons</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa dolor esse iure nulla perspiciatis voluptatibus! Eius enim maiores molestiae
                    sapiente tempore. At corporis, deleniti dolorum in iste libero nemo provident quasi qui quis quo repellendus sunt suscipit tempora ut. Aut commodi dicta
                    dignissimos ea exercitationem nulla placeat qui voluptatibus!</p>
                <ul>
                    <li>Lorem ipsum.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, voluptatum.</li>
                </ul>
                <a href="">Lorem ipsum</a>
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
