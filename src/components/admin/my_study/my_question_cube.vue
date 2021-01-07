<template>
    <div>
        <ul class="list-group pb-3" style="background:#fff">
            <li class="list-group-item" style="font-size:1rem;">{{title}}</li>
            <hr>
            <li class="list-group-item">
                <my-question-item></my-question-item>
                <div style="position:relative;top:12px;left:0;"><hr></div>
            </li>
            <li class="list-group-item">
                <my-question-item></my-question-item>
                <div style="position:relative;top:12px;left:0;"><hr></div>
            </li>
            <li class="list-group-item">
                <my-question-item></my-question-item>
            </li>
            
        </ul>
    </div>
</template>

<script>
import MyQuestionItem from './question_item.vue'

export default {
    props: {
        title: {
            type: String,
            default: '我的问答'
        }
    },
    components: {
        'my-question-item': MyQuestionItem,
    }
}
</script>

<style>
.list-group-item{
    border:none;
}
</style>