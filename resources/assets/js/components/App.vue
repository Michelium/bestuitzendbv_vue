<template>
    <div>
        <h2>hello</h2>
        <p>
            <router-link :to="{ name: 'home' }">Home</router-link> |
        </p>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
