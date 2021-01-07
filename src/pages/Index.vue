<template>
    <div>
        <index-header :navHeaderImgUrl="navHeaderImgUrl"></index-header>
        <index-header-next :rel_width="www001_width"></index-header-next>
        <carousel :pictures="carousel_pictures"></carousel>
        <index-class :data="class_data"></index-class>
        <index-class-live :data="class_live_data"></index-class-live>
        <index-serial-class :data="serial_class_data"></index-serial-class>
        <index-class-public
            :data="class_public_data"
            @pub-cls-mouseenter="trans_class_public_shadow_show"
            @pub-cls-mouseleave="trans_class_public_shadow_hide"
        ></index-class-public>
        <index-nav-image :data="nav_image_data"></index-nav-image>
        <index-class-hot :data="class_hot_data"></index-class-hot>
        <index-bg-welcome :data="bg_welcome_data"></index-bg-welcome>
        <index-footer :data="footer_data"></index-footer>
        <right-slide
            :cls="my_classes"
            :study_center="study_center"
            :homework="homework"
        ></right-slide>
    </div>
</template>

<script>
import SunIndexHeader from '../components/index/header.vue'
import SunIndexHeaderNext from '../components/index/header_next.vue'
import Carousel from '../components/index/carousel.vue'
import IndexClass from '../components/index/class_common.vue'
import IndexClassLive from '../components/index/class_live.vue'
import IndexSerialClass from '../components/index/serial_class.vue'
import IndexClassPublic from '../components/index/class_public.vue'
import IndexNavImage from '../components/index/nav_image.vue'
import IndexClassHot from '../components/index/class_hot.vue'
import IndexBgWelcome from '../components/index/welcome.vue'
import IndexFooter from '../components/index/footer.vue'
import IndexRightSlide from '../components/index/right_slide.vue'

export default {
    name: 'Index2',
    data(){
        return {
            www001_width: 255,
            navHeaderImgUrl: 'http://123.57.95.214/sunweb/static/index_nav_header.png',
            carousel_pictures: [
                'http://123.57.95.214/sunweb/static/car1.jpg',
                'http://123.57.95.214/sunweb/static/car2.jpg',
                'http://123.57.95.214/sunweb/static/car3.jpg',
                'http://123.57.95.214/sunweb/static/car4.jpg'
            ],
            class_data: {
                title: '祁蒙课程',
                more: 'http://www.baidu.com',
                items: [
                    {
                        name: '祁蒙英语入门',
                        image: 'http://123.57.95.214/sunweb/static/t1.jpeg',
                        avatar: 'http://123.57.95.214/sunweb/static/avatar.jpg',
                        username: '洪伟',
                        user_detail_url: 'http://xxxx',
                        detail_url: 'http://xxxx',
                        student_num: 2,
                        free: true,
                        price: '1230.54'
                    },
                    {
                        name: '祁蒙英语入门',
                        image: 'http://123.57.95.214/sunweb/static/t1.jpeg',
                        avatar: 'http://123.57.95.214/sunweb/static/avatar.jpg',
                        username: '洪伟',
                        user_detail_url: 'http://xxxx',
                        detail_url: 'http://xxxx',
                        student_num: 2,
                        free: true,
                        price: '1230.54'
                    },
                    {
                        name: '祁蒙英语入门',
                        image: 'http://123.57.95.214/sunweb/static/t1.jpeg',
                        avatar: 'http://123.57.95.214/sunweb/static/avatar.jpg',
                        username: '洪伟',
                        user_detail_url: 'http://xxxx',
                        detail_url: 'http://xxxx',
                        student_num: 2,
                        free: true,
                        price: '1230.54'
                    }
                ]
            },
            class_live_data: {
                title: '祁蒙课程',
                more: 'http://www.baidu.com',
                items: [
                    {
                        name: '祁蒙英语入门',
                        tag_image: 'http://123.57.95.214/sunweb/static/tag_live.png',
                        image: 'http://123.57.95.214/sunweb/static/t1.jpeg',
                        avatar: 'http://123.57.95.214/sunweb/static/avatar.jpg',
                        username: '洪伟',
                        user_detail_url: 'http://xxxx',
                        detail_url: 'http://xxxx',
                        student_num: 2,
                        free: true,
                        price: '1230.54'
                    },
                    {
                        name: '祁蒙英语入门',
                        tag_image: 'http://123.57.95.214/sunweb/static/tag_live.png',
                        image: 'http://123.57.95.214/sunweb/static/t1.jpeg',
                        avatar: 'http://123.57.95.214/sunweb/static/avatar.jpg',
                        username: '洪伟',
                        user_detail_url: 'http://xxxx',
                        detail_url: 'http://xxxx',
                        student_num: 2,
                        free: true,
                        price: '1230.54'
                    },
                    {
                        name: '祁蒙英语入门',
                        tag_image: 'http://123.57.95.214/sunweb/static/tag_live.png',
                        image: 'http://123.57.95.214/sunweb/static/t1.jpeg',
                        avatar: 'http://123.57.95.214/sunweb/static/avatar.jpg',
                        username: '洪伟',
                        user_detail_url: 'http://xxxx',
                        detail_url: 'http://xxxx',
                        student_num: 2,
                        free: true,
                        price: '1230.54'
                    }
                ]
            },
            serial_class_data: {
                title: '系列课程',
                more: 'http://www.baidu.com',
                items: [
                    {
                        name: '祁蒙英语入门',
                        image: 'http://123.57.95.214/sunweb/static/t1.jpeg',
                        detail_url: 'http://xxx'
                    },
                    {
                        name: '祁蒙英语入门',
                        image: 'http://123.57.95.214/sunweb/static/t2.jpg',
                        detail_url: 'http://xxx'
                    },
                    {
                        name: '祁蒙英语入门',
                        image: 'http://123.57.95.214/sunweb/static/t3.jpg',
                        detail_url: 'http://xxx'
                    },
                    {
                        name: '祁蒙英语入门',
                        image: 'http://123.57.95.214/sunweb/static/t4.jpg',
                        detail_url: 'http://xxx'
                    }
                ]
            },
            class_public_data: {
                title: '公开课程',
                more: 'http://www.baidu.com',
                items: [
                    {
                        name: '祁蒙英语入门',
                        image: 'http://123.57.95.214/sunweb/static/t1.jpeg',
                        detail_url: 'http://xxx',
                        join_text: '免费加入',
                        class_text: '公开课堂',
                        class_image: 'http://123.57.95.214/sunweb/static/h.jpg',
                        show_shadow: false,
                        student_num: 3
                    },
                    {
                        name: '祁蒙英语入门',
                        image: 'http://123.57.95.214/sunweb/static/t1.jpeg',
                        detail_url: 'http://xxx',
                        join_text: '免费加入',
                        class_text: '公开课堂',
                        class_image: 'http://123.57.95.214/sunweb/static/h.jpg',
                        show_shadow: false,
                        student_num: 3
                    },
                ]
            },
            nav_image_data: {
                title: '关于Maple Leaves',
                bg_image: 'http://123.57.95.214/sunweb/static/about_bg.jpg',
                items: [
                    {
                        'statistic_num': 1000,
                        'statistic_unit': '万+',
                        'desc': 'Quality Curriculum'
                    },
                    {
                        'statistic_num': 1000,
                        'statistic_unit': '万+',
                        'desc': 'Quality Curriculum'
                    },
                    {
                        'statistic_num': 1000,
                        'statistic_unit': '万+',
                        'desc': 'Quality Curriculum'
                    },
                    {
                        'statistic_num': 1000,
                        'statistic_unit': '万+',
                        'desc': 'Quality Curriculum'
                    }
                ]
            },
            class_hot_data: {
                title: '热门课程',
                more: 'http://xxx',
                items: [
                    [
                        {
                            'image': 'http://123.57.95.214/sunweb/static/hot1.png',
                            'name': '雅思课堂',
                            'button_text': '在线教程',
                            'detail_url': 'http://xxx'
                        },
                        {
                            'image': 'http://123.57.95.214/sunweb/static/hot1.png',
                            'name': '雅思课堂',
                            'button_text': '在线教程',
                            'detail_url': 'http://xxx'
                        },
                    ],
                    [
                        {
                            'image': 'http://123.57.95.214/sunweb/static/hot1.png',
                            'name': '雅思课堂',
                            'button_text': '在线教程',
                            'detail_url': 'http://xxx'
                        },
                        {
                            'image': 'http://123.57.95.214/sunweb/static/hot1.png',
                            'name': '雅思课堂',
                            'button_text': '在线教程',
                            'detail_url': 'http://xxx'
                        },
                    ]
                ]
            },
            bg_welcome_data: {
                'title': 'Welcome To Canada',
                'detail_url': 'http://xxx',
                'enter_text': 'Enter',
                'bg_image': 'http://123.57.95.214/sunweb/static/welcome.jpg'
            },
            footer_data: {
                copyright: 'Powered by EduSoho v20.4.7 ©2014-2020 课程存档',
                copyright_text: '课程内容版权均归 杭州阔知网络科技有限公司 所有',
                items: [
                    {
                        name: '友情链接：',
                        links: [
                            {
                                name: '友盟',
                                url: 'http://xxx'
                            },
                            {
                                name: '阿里日志',
                                url: 'http://xxx'
                            },
                            {
                                name: '清华x-lab',
                                url: 'http://xxx'
                            },
                        ]
                    }
                ]
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
        'index-header': SunIndexHeader,
        'index-header-next': SunIndexHeaderNext,
        'carousel': Carousel,
        'index-class': IndexClass,
        'index-class-live': IndexClassLive,
        'index-serial-class': IndexSerialClass,
        'index-class-public': IndexClassPublic,
        'index-nav-image': IndexNavImage,
        'index-class-hot': IndexClassHot,
        'index-bg-welcome': IndexBgWelcome,
        'index-footer': IndexFooter,
        'right-slide': IndexRightSlide,
    },
    methods: {
        resize_www001_width: function(){
            this.www001_width = document.getElementById('www001').offsetWidth;
        },
        trans_class_public_shadow_show: function(index){
            this.class_public_data['items'][index]['show_shadow'] = true
        },
        trans_class_public_shadow_hide: function(index){
            this.class_public_data['items'][index]['show_shadow'] = false
        },
    },
    mounted(){
        let _this = this;
        _this.resize_www001_width();
        window.onresize = function(){
            _this.resize_www001_width()
        }
    }
}
</script>

<style>

</style>
