<template>
    <div style="background:#fff;padding-left:24px;padding-right:24px;">
        <Tabs value="name1" >
            <TabPane label="课程介绍" name="name1">
                <class-tab-introduction></class-tab-introduction>
            </TabPane>


            <TabPane label="学习目录" name="name2">
                <class-tab-menu></class-tab-menu>
            </TabPane>

            <TabPane label="学员评价" name="name3">
                <class-tab-comment></class-tab-comment>
            </TabPane>

            <TabPane label="问题（2）" name="name4">
                <class-tab-question></class-tab-question>
            </TabPane>
            
            <TabPane label="笔记（1）" name="name5">
                <class-tab-note></class-tab-note>
            </TabPane>

        </Tabs>
    </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.core.css";
import ClassTabIntroduction from './class_introduction.vue'
import ClassTabMenu from './class_menu.vue'
import ClassTabComment from './class_comment.vue'
import ClassTabNote from './class_notes.vue'
import ClassTabQuestion from './class_question.vue'


export default {
    data(){
        return {
        }
    },
    components: {
        'quill-editor': quillEditor,
        'class-tab-introduction': ClassTabIntroduction,
        'class-tab-menu': ClassTabMenu,
        'class-tab-comment': ClassTabComment,
        'class-tab-note': ClassTabNote,
        'class-tab-question': ClassTabQuestion,
    },
    methods: {
    },
    computed: {
    }
}

</script>

<style>

</style>