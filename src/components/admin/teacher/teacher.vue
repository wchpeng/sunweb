<template>
    <div>
        <!-- 导航栏 -->
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div class="container" style="font-weight:bold;font-size:1rem;">
                <a class="navbar-brand pr-4"><span style="font-size:1.3rem;">我的教学</span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item mx-4" @click="click_title=1" :class="{'active': click_title==1, 'title-active': click_title==1}">
                            <a class="nav-link" href="#">在教课程</a>
                        </li>
                        <li class="nav-item mx-3" @click="click_title=2" :class="{'active': click_title==2, 'title-active': click_title==2}">
                            <a class="nav-link" href="#">公开课</a>
                        </li>
                        <li class="nav-item mx-4" @click="click_title=3" :class="{'active': click_title==2, 'title-active': click_title==3}">
                            <a class="nav-link" href="#">学员问答</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- 二级按钮菜单 -->
        <class-cube v-show="click_title==1" class="my-4" style="min-height:508px"></class-cube>
        <pub-cube v-show="click_title==2" class="my-4" style="min-height:508px"></pub-cube>
        <question-cube v-show="click_title==3" class="my-4" style="min-height:508px"></question-cube>
    </div>
</template>

<script>
import ClassCube from './class_cube.vue'
import PubCube from './pub_cube.vue'
import QuestionCube from './question_cube.vue'

export default {
    name: 'teacherItem',
    data(){
        return {
            click_title: 1,
        }
    },
    components: {
        'class-cube': ClassCube,
        'pub-cube': PubCube,
        'question-cube': QuestionCube
    },
    methods: {
    }
}
</script>

<style>
.title-active{
    border-bottom: 2px solid #dc3545;
}
</style>