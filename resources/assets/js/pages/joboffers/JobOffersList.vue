<template>
    <div class="col-12 col-md-8 mx-auto mb-3">
        <div class="card">
            <div class="card-title mb-0 pt-3 pl-3">
                <h3>{{ offer.title }}</h3>
            </div>
            <hr class="my-0">
            <div class="card-body pb-0 pt-2">
                <div class="row">
                    <div class="col-12 col-md-9">
                        <p class="text-muted">{{ offer.description|raw }}</p>
                    </div>
                    <div class="col-12 col-lg-3 offset-lg-0 col-xl-2 offset-xl-1">
                        <p class="text-red">
                            <span class="mr-2 mr-xl-0"><i class="fa fa-location"></i>&nbsp;&nbsp; <b>{{ offer.location }}</b></span><br>
                            <span class="mr-2 mr-xl-0"><i class="fa fa-clock"></i>&nbsp;&nbsp; {% if offer.hours is not empty %}<b>{{ offer.hours }}
                                            uur</b>{% else %}<b>Uren in overleg</b>{% endif %}</span><br>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'JobOffersList',
    data() {
        return {
            fields: {},
            errors: {},
            success: false,
            loaded: true,
        }
    },
    methods: {
        submit() {
            if (this.loaded) {
                this.loaded = false;
                this.success = false;
                this.errors = {};
                axios.post('/api/contact/submit', this.fields).then(response => {
                    this.fields = {};
                    this.loaded = true;
                    this.success = true;
                }).catch(error => {
                    this.loaded = true;
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors || {};
                    }
                });
            }
        },
    }
}
</script>
