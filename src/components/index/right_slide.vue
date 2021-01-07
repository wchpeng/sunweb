<template>
    <div>
        <transition name="slide11">
            <div v-show="is_display_div" style="background:#fff;position:fixed;z-index:100;right:0;top:0;">
                <div class="right_line_right" style="background:#f8f9fa;float:right;height:800px;overflow:scroll;width:220px;">
                    <!-- 学习课程 -->
                    <div class="px-2 py-4 right_title text-center" :style="{display:display_0}" style="width:200px;">
                        <div class="px-2">
                            <a style="float:left;" class="right_arrow">→</a>
                            <span class="text-center pr-2">学习中心</span>
                        </div>
                        <div class="py-3">
                            <img :src="study_center.avatar" class="rounded-circle" alt="">
                        </div>
                        <div class="py-3">
                            {{study_center.username}}
                        </div>
                        <div class="py-4"><strong>{{study_center.title}}</strong></div>
                        <div v-for="(item,idx3) in study_center.items" :key="'class'+idx3" class="py-3 ml-3 text-left right_class_item">
                            <Timeline>
                                <TimelineItem color="red">
                                    <Icon type="ios-trophy" slot="dot"></Icon>
                                    {{item.cls_name}}
                                    <span style="float:right;color:#dc3545;">{{item.study_count}}/{{item.total}}</span>
                                </TimelineItem>
                                <TimelineItem v-for="(i,idx4) in item.cls_items" :key="'tlt'+idx4"><a :href="i.detail_url">{{i.name}}</a></TimelineItem>
                            </Timeline>
                        </div>
                    </div>
                    <!-- 我的考试/作业 -->
                    <div class="px-2 py-4 right_title text-center" :style="{display:display_1}" style="width:200px;overflow:scroll;">
                        <div class="px-2">
                            <a style="float:left;" class="right_arrow">→</a>
                            <span class="text-center pr-2">我的考试/作业</span>
                            <div class="py-4"><strong>{{homework.exam.title}}</strong></div>
                            <div v-for="(item,idwk) in homework.exam.items" :key="'exam'+idwk" class="py-3 pl-2 text-left">
                                <a :href="item.link">
                                <span>></span>
                                <span class="pl-1" style="font-size:.8rem">{{item.name}}</span>
                                </a>
                            </div>
                            <div v-if="homework.exam.has_more">
                                <a :href="homework.exam.more" style="font-size:.8rem">更多 >></a>
                            </div>
                            <div class="pb-4 pt-5"><strong>{{homework.homework.title}}</strong></div>
                            <div v-for="(item,idwk) in homework.homework.items" :key="'homework'+idwk" class="py-3 pl-2 text-left">
                                <a :href="item.link">
                                <span>></span>
                                <span class="pl-1" style="font-size:.8rem">{{item.name}}</span>
                                </a>
                            </div>
                            <div v-if="homework.homework.has_more">
                                <a :href="homework.homework.more" style="font-size:.8rem">更多 >></a>
                            </div>
                        </div>
                    </div>
                    <!-- 我的课程/班级 -->
                    <div class="px-2 py-4 right_title text-center" :style="{display:display_2}" style="width:200px;overflow:scroll">
                        <div class="px-2">
                            <a style="float:left;" class="right_arrow">→</a>
                            <span class="text-center pr-2">我的课程/班级</span>
                            <div class="py-4">
                                <button href="" type="button" style="width:45%;outline:none;" @click="is_class=false" :class="{'btn-danger': !is_class}" class="btn btn-sm btn-secondary my_button4">课程</button>
                                <button href="" type="button" style="width:45%" @click="is_class=true" :class="{'btn-danger': is_class}" class="btn btn-sm btn-secondary my_button4">班级</button>
                            </div>
                            <div v-for="(item,idx) in cls.items" :key="'cards'+idx" class="py-3">
                                <div class="card my_card" style="width: 100%;">
                                    <a :href="item.detail_url">
                                        <img class="card-img-top px-2 py-2" :src="item.image" alt="Card image cap">
                                        <div>
                                            <div class="progress mb-1" style="border-radius:0;">
                                                <div class="progress-bar bg-warning" role="progressbar" style="width: 25%" :aria-valuenow="item.process" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p class="card-text text-dark text-left pl-2 py-2" style="font-size:.7rem">{{item.title}}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right_border_fixed text-center" style="height:800px;">
                    <div style="height:125px;"></div>
                    <div class="py-1 py-2 right_little_icon" :class="{right_little_icon_red:is_click_0}" @click="click_slide_left_0">
                        <!-- <a href="javascript:;" type="button" class="btn btn-sm">
                        学习中心
                        </a> -->
                        <div><strong>学习中心</strong></div>
                    </div>
                    <div class="py-1 right_little_icon" :class="{right_little_icon_red:is_click_1}" @click="click_slide_left_1" style="height:35px;padding-top:5px;">
                        <Poptip trigger="hover" placement="left" word-wrap content="我的作业">
                            <Icon size="25" type="ios-create-outline" />
                        </Poptip>
                    </div>
                    <div class="py-1 right_little_icon" :class="{right_little_icon_red:is_click_2}" @click="click_slide_left_2" style="height:35px;padding-top:5px;">
                        <Poptip trigger="hover" placement="left" word-wrap content="我的课堂">
                            <Icon size="25" type="md-school" />
                        </Poptip>
                    </div>
                </div>
            </div>
        </transition>

        <div style="background:#fff;position:fixed;z-index:99;right:0;top:0;">
            <div class="right_border_fixed text-center" style="height:800px;">
                <div style="height:125px;"></div>
                <div class="py-1 py-2 right_little_icon" :class="{right_little_icon_red:is_click_0}" @click="click_slide_left_0">
                    <!-- <a href="javascript:;" type="button" class="btn btn-sm">
                    学习中心
                    </a> -->
                    <div><strong>学习中心</strong></div>
                </div>
                <div class="py-1 right_little_icon" :class="{right_little_icon_red:is_click_1}" @click="click_slide_left_1" style="height:35px;padding-top:5px;">
                    <Poptip trigger="hover" placement="left" word-wrap content="我的作业">
                        <Icon size="25" type="ios-create-outline" />
                    </Poptip>
                </div>
                <div class="py-1 right_little_icon" :class="{right_little_icon_red:is_click_2}" @click="click_slide_left_2" style="height:35px;padding-top:5px;">
                    <Poptip trigger="hover" placement="left" word-wrap content="我的课堂">
                        <Icon size="25" type="md-school" />
                    </Poptip>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'rightSlide',
    data(){
        return {
            is_class: false,
            is_click_0: false,
            is_click_1: false,
            is_click_2: false,
        }
    },
    methods: {
        click_slide_left_0: function(){
            this.is_click_0 = !this.is_click_0
            this.is_click_1 = false
            this.is_click_2 = false
        },
        click_slide_left_1: function(){
            this.is_click_0 = false
            this.is_click_1 = !this.is_click_1
            this.is_click_2 = false
        },
        click_slide_left_2: function(){
            console.log('click 2...')
            console.log(this.display_2)
            this.is_click_0 = false
            this.is_click_1 = false
            this.is_click_2 = !this.is_click_2
            console.log(this.display_2)
        },
    },
    computed: {
        display_0: function(){
            return this.is_click_0?'block':'none'
        },
        display_1: function(){
            return this.is_click_1?'block':'none'
        },
        display_2: function(){
            return this.is_click_2?'block':'none'
        },
        is_display_div: function(){
            return this.is_click_0 || this.is_click_1 || this.is_click_2
        },
    },
    mounted(){
        document.addEventListener('click',e => { 
            if(!this.$el.contains(e.target)){
                // this.listLineUl = false//点击其他区域关闭
                this.is_click_0 = false;
                this.is_click_1 = false;
                this.is_click_2 = false;
            }
        })
    },
    props: {
        cls: Object,
        homework: Object,
        study_center: Object,
    }
}
</script>

<style>
    .right_little_icon{
        padding-left: 5px;
        padding-right: 5px;
        background: #f8f9fa;
        color: #545a60;
        border-radius: 0;
        outline: none;
        cursor:pointer;
    }
    .right_little_icon:hover{
        background: #dc3545;
        color: #f8f9fa;
        border-radius: 0;
        outline: 0;
    }
    .right_little_icon_red{
        background: #dc3545;
        color: #f8f9fa;
        border-radius: 0;
        outline: 0;
    }
    .right_little_icon>a{
        background: #f8f9fa;
        color: #343a40;
        border-radius: 0;
        outline: none;
    }
    .right_little_icon>a:hover, .right_little_icon>a:focus, .right_little_icon>a:active{
        background: #dc3545;
        color: #f8f9fa;
        border-radius: 0;
        outline: none;
    }
    .right_border_fixed{
        font-size: 15px;
        float:right;
        width:35px;
        height: 100%;
        border-left: 1px solid #e3e3e3;
    }
    .right_arrow:hover, .right_arrow:focus, .right_arrow:active{
        color: #dc3545;
    }
    .right_class_item{
        border-bottom: 1px dotted #c8c9ca;
    }
    .my_card{
        transition:all 200ms ease;
    }
    .my_card:hover{
        transform: scale(1.05);
    }
    .right_title {
        animation: hideIndex 0.3s;
        -moz-animation: hideIndex  0.3s; /* Firefox */
        -webkit-animation: hideIndex  0.3s; /* Safari and Chrome */
        -o-animation: hideIndex  0.3s; /* Opera */
    }
    @keyframes hideIndex{
        /* <!--具体细节自己可以调整--> */
        /* 0%{ opacity: 0; transform: translate(300px, 200px) }
        100%{opacity: 1; transform: translate(0, 0) } */
        0%{ opacity: 0; transform: scale(0.9) }
        100%{opacity: 1; transform: scale(1) }
    }
    .btn:focus,.btn:active:focus,
    .btn.active:focus,.btn.focus,
    .btn:active.focus,.btn.active.focus { 
        outline: none;  
        border-color: transparent;  
        box-shadow:none;
    }
    .slide11-enter-to, .slide11-enter-active{
        animation: fadein .5s;
    } 
    .slide11-leave-active, .slide11-leave-to{
        animation: fadein2 0.5s;
    }
    @keyframes fadein {
        0% {
            transform: translate(220px, 0);
        }
        100% {
            transform: none;
        }
    }
    @keyframes fadein2 {
        0% {
            transform: none;
        }
        100% {
            transform: translate(220px, 0);
        }
    }
   
</style>