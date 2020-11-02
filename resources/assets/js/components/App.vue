<template>
    <main>
        <div class="container-fluid p-0">
            <AppHeader/>
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
