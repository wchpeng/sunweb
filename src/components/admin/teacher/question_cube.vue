<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <my-question-cube :title="'学员问答'"></my-question-cube>
            </div>
        </div>
    </div>
</template>

<script>
import MyQuestionCube from '../my_study/my_question_cube.vue'

export default {
    name: 'questionCube',
    data(){
        return {}
    },
    components: {
        'my-question-cube': MyQuestionCube
    }
}
</script>

<style>

</style>