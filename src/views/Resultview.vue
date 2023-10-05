<script setup>
import { defineProps } from "vue"
import { RouterLink } from "vue-router"

const { score, length } = defineProps(['score', 'length'])
</script>

<template>
    <main>
        <div class="container">
            <h2 class="board">YOUR SCORE</h2>
            <h1 class="score">{{ score }} / {{ length }}</h1>
            <RouterLink to="/"><button>GO BACK</button></RouterLink>
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
}

.container {
    text-align: center;
    width: 100%;
    height: 70%;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.77);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.board {
    font-size: 5vw;
    color: #F5F749;
    font-weight: 600;
}

.score {
    font-size: 5vw;
    color: #F5F749;
    font-weight: 600;
}

button {
    padding: 10px 20px 10px 20px;
    border-radius: 8px;
    border: 2px solid #F5F749;
    color: white;
    background-color: transparent;
    font-size: 15px;
    width: 10vw;
}

@media only screen and (max-width: 600px) {
    .score{
        font-size: 10vw;
        margin: 10px 0 10px 0;
    }
    button{
        width: 40vw;
    }
  }
</style>