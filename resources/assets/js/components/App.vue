<template>
    <main>
        <div class="container-fluid p-0">
            <AppHeader/>
            <p>
                <router-link :to="{ name: 'home' }">Home</router-link> |
            </p>
            <router-view></router-view>
        </div>
        <AppFooter/>
    </main>
</template>
<script>
    import AppHeader from './AppHeader'
    import AppFooter from './AppFooter'

    export default {
        name: 'App',
        components: {
            AppHeader,
            AppFooter,
        }
    }
</script>
