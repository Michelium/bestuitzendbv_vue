<template>
    <form @submit.prevent="submit" novalidate>
        <div v-if="success" class="alert alert-success alert-dismissible fade show" role="alert">
            <p>Uw bericht is verstuurd!</p>
        </div>
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="form-group">
                    <label for="name">* Naam:</label>
                    <input type="text" class="form-control" name="name" id="name" required v-model="fields.name">
                    <div v-if="errors && errors.name" class="text-danger">{{ errors.name[0] }}</div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="form-group">
                    <label for="company_name">Bedrijfsnaam:</label>
                    <input type="text" class="form-control" name="company_name" id="company_name" v-model="fields.company_name">
                    <div v-if="errors && errors.company_name" class="text-danger">{{ errors.company_name[0] }}</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="form-group">
                    <label for="email">* E-mail:</label>
                    <input type="email" class="form-control" name="email" id="email" required v-model="fields.email">
                    <div v-if="errors && errors.email" class="text-danger">{{ errors.email[0] }}</div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="form-group">
                    <label for="phone">Telefoonnummer:</label>
                    <input type="phone" class="form-control" name="phone" id="phone" v-model="fields.phone">
                    <div v-if="errors && errors.phone" class="text-danger">{{ errors.phone[0] }}</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <label class="required" for="function">Reageert u op een vacature? Vul hieronder in op welke functie u wilt reageren:</label>
                    <select class="form-control" name="function" id="function" v-model="fields.function">
                        <option selected value="Geen">Geen</option>
                        <option value="Vrachtwagenchauffeur">Vrachtwagenchauffeur</option>
                        <option value="Verpakkingsmedewerker">Verpakkingsmedewerker</option>
                        <option value="Agrarischemedewerker">Agrarischemedewerker</option>
                        <option value="Bouwmedewerker">Bouwmedewerker</option>
                    </select>
                    <div v-if="errors && errors.function" class="text-danger">{{ errors.function[0] }}</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <label for="message">* Uw bericht</label>
                    <textarea class="form-control" name="message" id="message" cols="30" rows="3" v-model="fields.message"></textarea>
                    <div v-if="errors && errors.message" class="text-danger">{{ errors.message[0] }}</div>
                </div>
            </div>
        </div>
        <button :disabled="!loaded" type="submit" class="btn btn-primary">Verstuur</button>
    </form>
</template>

<script>
export default {
    name: 'ContactForm',
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
                    console.log(error.response.data['message'])
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
