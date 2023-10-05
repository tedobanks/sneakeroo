<script setup>
import { defineProps, defineEmits } from "vue"

const emit = defineEmits(['userOption'])

const { question } = defineProps(['question'])

const emitOptionSelected = (isCorrect) => {
    emit('userOption', isCorrect)
}


</script>

<template>
    <div class="question-container">
        <h6>Question {{ question.id }}</h6>
        <h2 class="question">{{ question.question }}</h2>
        <div class="options-container">
            <div v-for="option in question.options" :key="option.id" @click="emitOptionSelected(option.isCorrect)" class="option">
                <h4 class="label">{{ option.label }}</h4>
                <h4 class="answer">{{ option.text }}</h4>
            </div>

        </div>
    </div>
</template>

<style scoped>
.question-container {
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.03);
    width: 100%;

    margin-bottom: 20px;
    padding: 40px 20px 40px 20px;
}

.question {
    font-weight: 700;
    color: #F5F749;
    margin-bottom: 30px;
}

.options-container {
    margin: 0 10px 0 10px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.option {
    border-radius: 10px;
    height: 40px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    padding: 0 10px 0 10px;
    cursor: pointer;
}

.label {
    background-color: black;
    color: white;
    font-weight: 700;
    height: 30px;
    width: 30px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px 0 10px;
}


.answer {
    font-weight: 600;
    color: white;
}
</style>