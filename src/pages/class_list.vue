<template>
    <div style="background:#f3f3f3">
        <common-header></common-header>
        <class-tags class="mt-4 mb-2"></class-tags>
        <class-items></class-items>
        <common-paginate
            @click_page="click_page"
            :total="page_data.total"
            :page="page_data.page"
            :page_size="page_data.page_size"
            class="mb-5 mt-5"
        ></common-paginate>
        <footer-copyright :data="footer_data" class="pt-3"></footer-copyright>
        <right-slide
            :cls="my_classes"
            :study_center="study_center"
            :homework="homework"
        ></right-slide>
    </div>
</template>

<script>
import CommonHeader from '../components/classes/header.vue'
import FooterCopyright from '../components/index/footer_copyright.vue'
import ClassesItems from '../components/classes/class_list_components/classes_items'
import ClassesTags from '../components/classes/class_list_components/classes_tag.vue'
import CommonPaginate from '../components/classes/common_paginate.vue'
import RightSlide from '../components/index/right_slide.vue'

export default {
    data(){
        return {
            page_data: {
                total: 73,
                page: 2,
                page_size: 20
            },
            footer_data: {
                copyright: 'Powered by EduSoho v20.4.7 ©2014-2020 课程存档',
                copyright_text: '课程内容版权均归 杭州阔知网络科技有限公司 所有',
                teacher_cube: {
                    title: '授课教师',
                    avatar: 'http://123.57.95.214/sunweb/static/a.jpg',
                    username: '洪晓伟',
                    sign: '人生是一场注定没有回头的旅程，所见即所得，把我自己。',
                    default: '还没有最新动态哦~'
                }
            },
            my_classes: {
                'items': [
                    {
                        image: 'http://123.57.95.214/sunweb/static/t1.jpeg',
                        title: 'TNT 三硝基甲苯',
                        process: 35,
                        detail_url: 'http://xxxxx'
                    },
                    {
                        image: 'http://123.57.95.214/sunweb/static/t1.jpeg',
                        title: 'TNT 三硝基甲苯',
                        process: 35,
                        detail_url: 'http://xxxxx'
                    },
                    {
                        image: 'http://123.57.95.214/sunweb/static/t1.jpeg',
                        title: 'TNT 三硝基甲苯',
                        process: 35,
                        detail_url: 'http://xxxxx'
                    },
                ]
            },
            homework: {
                'exam': {
                    title: '考试',
                    has_more: true,
                    more: 'http://xxx',
                    items: [
                        {name: '听力与口语', link: 'http://xxx'},
                        {name: '听力与口语', link: 'http://xxx'},
                        {name: '听力与口语', link: 'http://xxx'},
                    ]
                },
                'homework': {
                    title: '作业',
                    has_more: false,
                    more: 'http://xxx',
                    items: [
                        {name: '多素', link: 'http://xxx'},
                        {name: '多素', link: 'http://xxx'},
                        {name: '多素', link: 'http://xxx'},
                        {name: '多素', link: 'http://xxx'},
                    ]
                }
            },
            study_center: {
                avatar: 'http://123.57.95.214/sunweb/static/avatar.jpg',
                username: '洪伟',
                title: '学习课程',
                items: [
                    {
                        cls_name: '课程:测试直播课程',
                        study_count: 1,
                        total: 7,
                        cls_items: [
                            {
                                name: '发布1.0版本',
                                detail_url: 'http://xxx'
                            },
                            {
                                name: '发布2.0版本',
                                detail_url: 'http://xxx'
                            },
                            {
                                name: '发布3.0版本',
                                detail_url: 'http://xxx'
                            },
                        ]
                    },
                    {
                        cls_name: '课程:测试直播课程',
                        study_count: 1,
                        total: 7,
                        cls_items: [
                            {
                                name: '发布1.0版本',
                                detail_url: 'http://xxx'
                            },
                            {
                                name: '发布2.0版本',
                                detail_url: 'http://xxx'
                            },
                            {
                                name: '发布3.0版本',
                                detail_url: 'http://xxx'
                            },
                        ]
                    },
                ]
            }
        }
    },
    components: {
        'common-header': CommonHeader,
        'footer-copyright': FooterCopyright,
        'class-items': ClassesItems,
        'class-tags': ClassesTags,
        'common-paginate': CommonPaginate,
        'right-slide': RightSlide,
    },
    methods: {
        click_page: function(page){
            this.page_data['page'] = page
            console.log('click_page: ', page)
        }
    }
}
</script>

<style>

</style>