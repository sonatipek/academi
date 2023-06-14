<template>
    <div class="border border-primary-subtle rounded-4 w-75 d-flex flex-column justify-content-between">
        <div class="bg-primary-subtle rounded-top-4 px-3 pb-2">
            <img :src="imgSrc" alt="card image" height="150" width="300">
            <h1 class="display-6">{{  title }}</h1>
        </div>

        <ul class="mt-3">
            <li class="ms-4" v-for="item in items" :key="item.id">{{ item.feature }}</li>
        </ul>

        <div class="fw-bold fs-2 text-center">
            {{ ucret }}₺ <span class="fs-6 text-secondary fw-light">/{{ loop }}</span>
        </div>

        <a href="#" class="btn btn-primary w-75 align-self-center mt-3 mb-3">Planı Seç</a>
    </div>
</template>

<script>
    export default{
        props: ['items', 'title', 'imgSrc', 'ucret', 'loop']

    }
</script>

<style>
    div.border{
        min-height: 530px;
    }
</style>