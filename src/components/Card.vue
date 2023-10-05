<script setup>
import { defineProps } from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter()

const {quiz} = defineProps(['quiz'])

const goPath = () => router.push(`/quiz/${quiz.id}`)
</script>

<template>
    
    <div @click="goPath"  class="card">
        <img :src="quiz.image" alt="">
        <h2>{{ quiz.category }}</h2>
        <p>{{ quiz.questions.length }} Questions</p>
    </div>
</template>

<style scoped>


.card {
    width: 300px;
    background-color: white;
    border-radius: 16px;
    margin-bottom: 20px;
    
}

.card img {
    width: 100%;
    height: 150px;
    margin-bottom: 20px;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
}

.card h2 {
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 5px;
    color: #565554;
    padding: 0 10px 0 10px;
}

.card p {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 20px;
    color: #565554;
    padding: 0 10px 0 10px;
}
</style>