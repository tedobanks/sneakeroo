<script setup>
import { ref, watch, defineProps } from 'vue';
import q from "../data/quizes.json"
import Card from "../components/Card.vue"


const quizes = ref(q)

const search = ref("")

watch(search, () => {
  quizes.value = q.filter(quiz => quiz.category.toLowerCase().includes(search.value.toLowerCase()))
})
</script>


<template>
  <div>
    <header>
      <h2>Sneakeroo</h2>

      <input v-model="search" type="text" placeholder="Search Categories">
    </header>

    <div class="cards-container">
      <Card v-for="quiz in quizes" :key="quiz.category" :quiz="quiz" />

    </div>
  </div>
</template>

<style scoped>

.container header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  margin-bottom: 30px;
}
.container header h2 {
  font-size: 5vw;
  color: #F5F749;
  font-weight: 700;
}

.container header input {
  background-color: transparent;
  border: #F5F749;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  padding: 4px;
  color: grey;
  font-weight: 500;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

@media only screen and (max-width: 600px) {
  .container header{
    margin-top: 10px;
  }
  .container header input {
    width: 30vw;
    font-size: 3vw;
  }
}
</style>