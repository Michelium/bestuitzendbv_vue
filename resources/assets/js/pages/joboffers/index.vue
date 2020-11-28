<template>
    <section>
        <div class="row mx-0 mb-5 text-white text-center" id="header">
            <div class="col-12 p-2">
                <h2>Vacatures</h2>
            </div>
        </div>

        <div class="row mx-0 mb-5" id="first">
            <div class="col-12 col-md-8 mx-auto mb-3">
                <h4>Bekijk hieronder onze openstaande vacatures:</h4>
            </div>
            <JobOffersList/>
        </div>
    </section>
</template>

<script>
import JobOffersList from './JobOffersList'

export default {
    name: 'JobOffers',
    components: {
        JobOffersList,
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
