<template>
    <!-- 课程块 -->
    <div class="container">
        <div class="class_block1 mb-4">
            <div class="row">
                <list-class-item 
                    v-for="(item,idx) in class_items"
                    :key="'class-item-'+idx"
                    :name="item.name"
                    :image="item.image"
                    :student_num="item.student_num"
                    :comment_num="item.comment_num"
                    :price="item.price"
                    :free="item.free"
                    :detail_url="item.detail_url"
                ></list-class-item>
            </div>
        </div>
    </div>
</template>

<script>

import classItem from './classes_item.vue'

export default {
    name: 'indexClasses',
    components: {
        'list-class-item': classItem
    },
    data(){
        return {
            class_items: [
                {
                    'name': 'K12 学习英语',
                    'image': 'http://123.57.95.214/sunweb/static/t1.jpeg',
                    'student_num': 3,
                    'comment_num': 0,
                    'free': true,
                    'price': '0',
                    'detail_url': 'https://xxx',
                },
                {
                    'name': 'K12 学习英语',
                    'image': 'http://123.57.95.214/sunweb/static/t1.jpeg',
                    'student_num': 3,
                    'comment_num': 0,
                    'free': true,
                    'price': '0',
                    'detail_url': 'https://xxx',
                },
                {
                    'name': 'K12 学习英语',
                    'image': 'http://123.57.95.214/sunweb/static/t1.jpeg',
                    'student_num': 3,
                    'comment_num': 0,
                    'free': true,
                    'price': '0',
                    'detail_url': 'https://xxx',
                },
                {
                    'name': 'K12 学习英语',
                    'image': 'http://123.57.95.214/sunweb/static/t1.jpeg',
                    'student_num': 3,
                    'comment_num': 0,
                    'free': true,
                    'price': '0',
                    'detail_url': 'https://xxx',
                },
                {
                    'name': 'K12 学习英语',
                    'image': 'http://123.57.95.214/sunweb/static/t1.jpeg',
                    'student_num': 3,
                    'comment_num': 0,
                    'free': true,
                    'price': '0',
                    'detail_url': 'https://xxx',
                },
                {
                    'name': 'K12 学习英语',
                    'image': 'http://123.57.95.214/sunweb/static/t1.jpeg',
                    'student_num': 3,
                    'comment_num': 0,
                    'free': true,
                    'price': '0',
                    'detail_url': 'https://xxx',
                },
                {
                    'name': 'K12 学习英语',
                    'image': 'http://123.57.95.214/sunweb/static/t1.jpeg',
                    'student_num': 3,
                    'comment_num': 0,
                    'free': true,
                    'price': '0',
                    'detail_url': 'https://xxx',
                },
                {
                    'name': 'K12 学习英语',
                    'image': 'http://123.57.95.214/sunweb/static/t1.jpeg',
                    'student_num': 3,
                    'comment_num': 0,
                    'free': true,
                    'price': '0',
                    'detail_url': 'https://xxx',
                },
                {
                    'name': 'K12 学习英语',
                    'image': 'http://123.57.95.214/sunweb/static/t1.jpeg',
                    'student_num': 3,
                    'comment_num': 0,
                    'free': true,
                    'price': '0',
                    'detail_url': 'https://xxx',
                },
                {
                    'name': 'K12 学习英语',
                    'image': 'http://123.57.95.214/sunweb/static/t1.jpeg',
                    'student_num': 3,
                    'comment_num': 0,
                    'free': true,
                    'price': '0',
                    'detail_url': 'https://xxx',
                },
            ]
        }
    },
    props: {
        data: Object
    }
}
</script>

<style>

</style>