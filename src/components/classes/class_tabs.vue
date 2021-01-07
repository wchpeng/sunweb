<template>
    <div class="container">
        <div class="row">
            <div class="col-9">
                <class-tab-items></class-tab-items>
            </div>
            <div class="col-3">
                <class-cube :data="teacher_cube_data"></class-cube>
                <class-cube :data="latest_student_data"></class-cube>
                <class-cube-list :data="my_study_data"></class-cube-list>
            </div>
        </div>
    </div>
</template>


<script>
import ClassCubeInfo from './class_tabs_components/class_cube.vue'
import ClassCubeList from './class_tabs_components/class_cube_list.vue'
import classTabItems from './class_tabs_components/class_tabs_item.vue'

export default {
    name: 'classDetail2',
    data(){
        return {
            show_q: false,
            content: "回复回复",
            active_name: "1",
            hot1: 'http://123.57.95.214/sunweb/static/t1.jpeg',
            teacher_cube_data: {
                title: '授课教师',
                avatar: 'http://123.57.95.214/sunweb/static/a.jpg',
                username: '洪晓伟',
                sign: '人生是一场注定没有回头的旅程，所见即所得，把我自己。',
                default: '还没有最新动态哦~'
            },
            latest_student_data: {
                title: '最新学员',
                avatar: 'http://123.57.95.214/sunweb/static/a.jpg',
                username: '洪晓伟',
                sign: '',
                default: '',
            },
            my_study_data: {
                title: '最新学员',
                items: [
                    {
                        username: '洪伟',
                        span_text: '开始学习',
                        class_name: '英语入门基础',
                    },
                    {
                        username: '洪伟',
                        span_text: '加学习',
                        class_name: ''
                    },
                ]
            }
        }
    },
    components: {
        'class-cube': ClassCubeInfo,
        'class-cube-list': ClassCubeList,
        'class-tab-items': classTabItems,
    },
    methods: {
    }
}
</script>

<style scoped>
</style>