<template>
    <div class="container">
        <div class="row">
            <div class="col-3">
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action" disabled>我的学习</a>
                    <a @click="click_item(1)" :class="{'item-active': mystudy_item_id==1}" class="list-group-item list-group-item-action mystudy-item">我的课程</a>
                    <a @click="click_item(2)" :class="{'item-active': mystudy_item_id==2}" class="list-group-item list-group-item-action mystudy-item">我的直播</a>
                    <a @click="click_item(3)" :class="{'item-active': mystudy_item_id==3}" class="list-group-item list-group-item-action mystudy-item">我的问答</a>
                    <a @click="click_item(4)" :class="{'item-active': mystudy_item_id==4}" class="list-group-item list-group-item-action mystudy-item">我的笔记</a>
                </div>
            </div>
            <div class="col-9">
                <!-- 我的课程 -->
                <ul v-show="mystudy_item_id==1" class="list-group pb-4" style="background:#fff">
                    <li class="list-group-item">我的课程</li>
                    <hr>
                    <li class="list-group-item">
                        <ul class="list-group list-group-horizontal-md">
                            <li class="list-group-item" style="border:none;padding-left:0;padding-top:0;padding-bottom:0;">
                                <a v-if="mystudy_item_coursestatus_id==1" style="padding-bottom:10px;border-bottom:2px solid #007bff" @click="click_coursestatus(1)">学习中</a>
                                <a v-else style="padding-bottom:10px;border-bottom:2px solid #fff" @click="click_coursestatus(1)">学习中</a>
                            </li>
                            <li class="list-group-item" style="border:none;padding-left:0;padding-top:0;padding-bottom:0;">
                                <a v-if="mystudy_item_coursestatus_id==2" style="padding-bottom:10px;border-bottom:2px solid #007bff" @click="click_coursestatus(2)">已学完</a>
                                <a v-else style="padding-bottom:10px;border-bottom:2px solid #fff" @click="click_coursestatus(2)">已学完</a>
                            </li>
                            <li class="list-group-item" style="border:none;padding-left:0;padding-top:0;padding-bottom:0;">
                                <a v-if="mystudy_item_coursestatus_id==3" style="padding-bottom:10px;border-bottom:2px solid #007bff" @click="click_coursestatus(3)">收藏</a>
                                <a v-else style="padding-bottom:10px;border-bottom:2px solid #fff" @click="click_coursestatus(3)">收藏</a>
                            </li>
                        </ul>
                    </li>
                    <div v-show="mystudy_item_coursestatus_id==1">
                        <li class="list-group-item" style="padding-bottom:4px;">
                            <course-item></course-item>
                        </li>
                        <li class="list-group-item" style="padding-bottom:4px;">
                            <course-item></course-item>
                        </li>
                    </div>
                    <div v-show="mystudy_item_coursestatus_id==2">
                        <li class="list-group-item" style="padding-bottom:4px;">
                            <course-item></course-item>
                        </li>
                        <li class="list-group-item" style="padding-bottom:4px;">
                            <course-item></course-item>
                        </li>
                        <li class="list-group-item" style="padding-bottom:4px;">
                            <course-item></course-item>
                        </li>
                    </div>
                    <div v-show="mystudy_item_coursestatus_id==3">
                        <li class="list-group-item" style="padding-bottom:4px;">
                            <course-item-public></course-item-public>
                        </li>
                        <li class="list-group-item" style="padding-bottom:4px;">
                            <course-item-public></course-item-public>
                        </li>
                        <li class="list-group-item" style="padding-bottom:4px;">
                            <course-item-public></course-item-public>
                        </li>
                        <li class="list-group-item" style="padding-bottom:4px;">
                            <course-item-public></course-item-public>
                        </li>
                    </div>
                </ul>

                <!-- 我的直播 -->
                <ul v-show="mystudy_item_id==2" class="list-group pb-3" style="background:#fff">
                    <li class="list-group-item">我的问答</li>
                    <hr>
                    <li class="list-group-item">
                        <my-question-item></my-question-item>
                    </li>
                    <li class="list-group-item">
                        <my-question-item></my-question-item>
                    </li>
                    <li class="list-group-item">
                        <my-question-item></my-question-item>
                    </li>
                    
                </ul>

                <!-- 我的问答  -->
                <my-question-cube v-show="mystudy_item_id==3"></my-question-cube>
                <!-- <ul v-show="mystudy_item_id==3" class="list-group pb-3" style="background:#fff">
                    <li class="list-group-item">我的问答</li>
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
                    
                </ul> -->

                <!-- 我的笔记 -->
                <ul v-show="mystudy_item_id==4" class="list-group pb-3" style="background:#fff">
                    <li class="list-group-item">我的笔记</li>
                    <hr>
                    <li class="list-group-item">
                        <my-note-item></my-note-item>
                        <div style="position:relative;top:12px;left:0;"><hr></div>
                    </li>
                    <li class="list-group-item">
                        <my-note-item></my-note-item>
                        <div style="position:relative;top:12px;left:0;"><hr></div>
                    </li>
                    <li class="list-group-item">
                        <my-note-item></my-note-item>
                    </li>
                </ul>
            </div>
            <div style="height:700px"></div>
        </div>
    </div>
</template>

<script>
import CourseItem from './course_item.vue'
import CourseItemPublic from './course_item_public.vue'
import MyQuestionItem from './question_item.vue'
import MyQuestionCube from './my_question_cube.vue'
import MyNoteItem from './my_note.vue'

export default {
    data(){
        return {
            mystudy_item_id: 1,
            mystudy_item_coursestatus_id: 1,
        }
    },
    methods: {
        click_item: function(_id){
            this.mystudy_item_id = _id
        },
        click_coursestatus: function(_id){
            this.mystudy_item_coursestatus_id = _id
        }
    },
    components: {
        'course-item': CourseItem,
        'course-item-public': CourseItemPublic,
        'my-question-item': MyQuestionItem,
        'my-question-cube': MyQuestionCube,
        'my-note-item': MyNoteItem,
    }
}
</script>

<style scoped>
.list-group-item{
    border:none;
}
.progress-bar2{
    margin: 0 auto;
}
.mystudy-item{
    padding-left: 2.3rem;
    border-left: 2px solid #fff;
}
.item-active,.item-active:hover{
    color: #007bff;
    border-left: 2px solid #007bff;
}
</style>