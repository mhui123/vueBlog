<template>
    <div class="container mt-4" v-for="(a,i) in blogData" :key="i">
        <router-link :to="{name:'detail', params:{id:i}}">
        <h5>{{ a.title }}</h5>
        </router-link>
        <p>{{ a.date }}</p>
    </div>
</template>

<script>
export default {
    name: "list",
    props:{
        blogData: Object,
    },
}
</script>

<style>

</style>