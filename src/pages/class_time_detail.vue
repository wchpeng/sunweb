<template>
    <div>
        <div class="container-fluid div-video" id="div-video">
            <div class="row mx-3 my-2" id="video-header">
                <div class="col">
                    <button class="btn btn-light back_btn" style="border:none;padding:0;background:#eee"><Icon type="ios-arrow-back" />返回课程</button>
                    <button class="btn" disabled>|</button>
                    <button class="btn" disabled>第一节：声明的律动</button>
                </div>
            </div>
            <div class="row mx-3">
                <div class="col">
                    <d-player-video></d-player-video>
                </div>
            </div>
            <div class="row" style="height:40px"></div>
            <!-- <div v-show="show_slidebar" id="class-time-slidebar"> -->
            <div id="slidebar" class="slidebar">
                <div class="slidebar-btn-div">
                    <button :class="{active:show_menu}" @click="click_menu" class="btn btn-lg btn-outline-success slidebar-btn my-2">目录</button>
                    <button :class="{active:show_note}" @click="click_note" class="btn btn-lg btn-outline-success slidebar-btn my-3">笔记</button>
                    <button :class="{active:show_question}" @click="click_question" class="btn btn-lg btn-outline-success slidebar-btn my-2">问答</button>
                </div>
                <div class="class-time-slidebar" id="class-time-slidebar" v-show="show_slidebar">
                    <div v-show="show_menu" class="content-menu mt-3">
                        <class-tab-menu></class-tab-menu>
                    </div>
                    <div v-show="show_note" class="content-note mt-3">
                        <class-tab-note></class-tab-note>
                    </div>
                    <div v-show="show_question" class="content-question mt-3">
                        <class-time-question></class-time-question>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DPlayerVideo from '../components/classes/class_time/dplayer.vue'
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.core.css";
import ClassTabMenu from '../components/classes/class_tabs_components/class_menu.vue'
import ClassTabTimeNote from '../components/classes/class_tabs_components/class_time_notes.vue'
import ClassTimeQuestion from '../components/classes/class_tabs_components/class_time_question.vue'

export default {
    name: 'classTiemDetail',
    data(){
        return {
            show_menu: false,
            show_note: false,
            show_question: false,
        }
    },
    computed: {
        show_slidebar: function(){
            return this.show_menu || this.show_note || this.show_question
        }
    },
    watch: {
        show_slidebar: function(){
            this.resize_video_height()
        }
    },
    components: {
        'd-player-video': DPlayerVideo,
        'quill-editor': quillEditor,
        'class-tab-menu': ClassTabMenu,
        'class-tab-note': ClassTabTimeNote,
        'class-time-question': ClassTimeQuestion,
    },
    methods: {
        click_menu: function(){
            this.show_menu = !this.show_menu;
            this.show_note = false;
            this.show_question = false;
        },
        click_note: function(){
            this.show_menu = false;
            this.show_note = !this.show_note;
            this.show_question = false;
        },
        click_question: function(){
            this.show_menu = false;
            this.show_note = false;
            this.show_question = !this.show_question;
        },
        resize_video_height: function(){
            let window_width = window.innerWidth
            let window_height = window.innerHeight
            let video_header = document.getElementById('video-header')
            let video_header_height = window.getComputedStyle(video_header).height
            video_header_height = parseInt(video_header_height)

            console.log('window_width: ', window_width)
            console.log('window_height: ', window_height)
            console.log('video_header_height: ', video_header_height)
            console.log((window_height - video_header_height) + 'px')

            if (this.show_slidebar){
                document.getElementById('div-video').style.width = (window_width-350) + 'px'
            } else {
                document.getElementById('div-video').style.width = (window_width) + 'px'
            }
            document.getElementById('slidebar').style.height = (window_height) + 'px'
            document.getElementById('class-time-slidebar').style.height = (window_height) + 'px'
            document.getElementById('div-video').style.height = (window_height) + 'px'
            document.getElementsByClassName('dplayer')[0].style.height = (window_height - video_header_height - 60) + 'px'
        }
    },
    mounted(){
        let _this = this;
        _this.resize_video_height();
        window.onresize = function(){
            _this.resize_video_height()
        }
    }
}
</script>

<style>
#div-video{
    position: absolute;
    left: 0;
    top: 0;
    /* width: 800px; */
    background: #eee;
}
#slidebar{
    position: absolute;
    left: 100%;
    top: 0;
}
#class-time-slidebar{
    width: 350px;
    overflow: scroll;
}
.slidebar-btn{
    border: none;
    display: block;
    /* width: 56px; */
    border-radius: 0;
    background: #fff;
    font-size: 1.0rem;
}
.slidebar-btn-div{
    position: absolute;
    width: 64px;
    left: -64px;
    top: 30%;
}
input {
    border-radius: 0!important;
    outline: none;
}
input:focus, input:active{
    box-shadow: none!important;
}
/* .div-video-enter-to, .div-video-enter-active{
    animation: fadein .5s;
}
.div-video-leave-active, .div-video-leave-to{
    animation: fadein2 0.5s;
}
.slidebar-enter-to, .slidebar-enter-active{
    animation: fadein 1.5s;
}
.slidebar-leave-active, .slidebar-leave-to{
    animation: fadein2 1.5s;
}
.class-time-slidebar-enter-to, .class-time-slidebar-enter-active{
    animation: fadein 1.5s;
}
.class-time-slidebar-leave-active, .class-time-slidebar-leave-to{
    animation: fadein2 1.5s;
}
@keyframes fadein {
    0% {
        transform: translate(350px, 0);
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
        transform: translate(350px, 0);
    }
} */
</style>