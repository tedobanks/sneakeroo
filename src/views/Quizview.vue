<script setup>
import { ref, computed } from "vue"
import { useRoute } from "vue-router";
import data from "../data/quizes.json"
import Question from "../components/Question.vue";
import Resultview from "./Resultview.vue";

const route = useRoute()
const currentCategoryIndex = route.params.id - 1
const showResult = ref(false)
const currentGameScore = ref(0)
const currentQuestionIndex = ref(0)
const currentQuestionNumber = computed(() => currentQuestionIndex.value + 1)
const questionsLength = data[currentCategoryIndex].questions.length
const currentQuestion = computed(() => data[currentCategoryIndex].questions[currentQuestionIndex.value])
const currentBarPercentage = computed(() => `${currentQuestionNumber.value / questionsLength * 100}%`)
const increment = () => {
    currentQuestionIndex.value++

}

const userSelectedOption = (isCorrect) => {
    if (isCorrect) {
        currentGameScore.value++
    }
    if (currentQuestionNumber.value == questionsLength) {
        showResult.value = true
    }
    if (currentQuestionIndex.value != questionsLength) {
        currentQuestionIndex.value++
    }
}

</script>

<template>
    <div v-if="!showResult">
        <h3 class="indicator">Question {{ currentQuestionNumber }} of {{ questionsLength }}</h3>
        <div class="progress-bar">
            <div class="progress" :style="{ width: currentBarPercentage }"></div>
        </div>
        <Question :question="currentQuestion" @userOption="userSelectedOption" />
    </div>
    <Resultview v-else :score="currentGameScore" :length="questionsLength"/>
</template>

<style scoped>
.indicator {
    margin-top: 10px;
    margin-bottom: 20px;
}

.progress-bar {
    width: 100%;
    height: 30px;
    border-radius: 15px;
    margin-bottom: 20px;
    border: 1px solid #F5F749;
}

.progress {
    height: 100%;
    background-color: #F5F749;
    width: 0%;
    border-radius: 15px;
}
</style>