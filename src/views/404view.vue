<script setup>
import {RouterLink} from "vue-router"
import nxpath from "../assets/images/nxpath.png"
</script>

<template>
    <div class="container">
        <div class="text-container">
            <h1>404</h1>
            <h3>Page not found</h3>
            <h4>Sorry, we couldn't find the page you're looking for</h4>
            <RouterLink to="/"><h6 class="back">Back home</h6></RouterLink>
        </div>
        <div class="image-container">
            <img :src="nxpath" alt="" class="">
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
}

.image-container {
    display: flex;
    align-items: center;
    justify-content: end;
    height: 100%;
    width: 100%;
    z-index: 0;
}

.image-container img {
    height: 100vh;
}

.text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-self: center;
    z-index: 1;
}

.text-container h1 {
    font-weight: 700;
    font-size: 150px;
    color: white;
}

.text-container h3 {
    font-weight: 500;
    font-size: 40px;
    color: white;
}

.text-container h4 {
    font-weight: 500;
    font-size: 20px;
    color: white;
}
.back {
    color: purple;
    cursor: pointer;
    font-size: 20px;
    text-decoration: none;
    font-weight: 500;
}
</style>