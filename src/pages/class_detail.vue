<template>
    <div class="bg-grey" style="background:#f3f3f3">
        <common-header></common-header>
        <div class="container">
            <Breadcrumb class="mt-3">
                <BreadcrumbItem to="/">首页</BreadcrumbItem>
                <BreadcrumbItem to="/components/breadcrumb">出国留学</BreadcrumbItem>
                <BreadcrumbItem to="/components/breadcrumb">雅思</BreadcrumbItem>
                <BreadcrumbItem to="/components/breadcrumb">雅思听力</BreadcrumbItem>
                <BreadcrumbItem>听力基础</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <class-info></class-info>
        <class-tabs></class-tabs>


        <footer-copyright :data="footer_data"></footer-copyright>
    </div>
</template>

<script>

import CommonHeader from '../components/classes/header.vue'
import ClassInfo from '../components/classes/class_info.vue'
import FooterCopyright from '../components/index/footer_copyright.vue'
import ClassTabs from '../components/classes/class_tabs.vue'

export default {
    name: 'classDetail',
    data(){
        return {
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
        }
    },
    components: {
        'common-header': CommonHeader,
        'class-info': ClassInfo,
        'footer-copyright': FooterCopyright,
        'class-tabs': ClassTabs,
    }
}
</script>

<style>
</style>