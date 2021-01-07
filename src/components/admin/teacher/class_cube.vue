<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <button class="btn btn-sm mr-3" @click="click_type=1" :class="{'btn-danger': click_type==1, 'btn-light': click_type!=1}">普通课程</button>
                <button class="btn btn-sm mr-3" @click="click_type=2" :class="{'btn-danger': click_type==2, 'btn-light': click_type!=2}">直播课程</button>
                <button class="btn btn-sm btn-danger float-right" >创建课程</button>
            </div>
        </div>
        <div v-show="click_type==1">
            <teach-class-item class="mt-4"></teach-class-item>
            <teach-class-item class="mt-4"></teach-class-item>
            <teach-class-item class="mt-4"></teach-class-item>
            <common-paginate
                class="my-5"
                :total=100
                :page="page1"
                :page_size=20
                @click_page="click_page1"
            ></common-paginate>
        </div>
        <div v-show="click_type==2">
            <teach-class-item class="mt-4"></teach-class-item>
            <teach-class-item class="mt-4"></teach-class-item>
            <teach-class-item class="mt-4"></teach-class-item>
            <teach-class-item class="mt-4"></teach-class-item>
            <teach-class-item class="mt-4"></teach-class-item>
            <teach-class-item class="mt-4"></teach-class-item>
            <common-paginate
                class="my-5"
                :total=80
                :page="page2"
                :page_size=20
                @click_page="click_page2"
            ></common-paginate>
        </div>
    </div>
</template>

<script>
import TeachClassItem from './teach_class_item.vue'
import CommonPaginate from '../../classes/common_paginate.vue'

export default {
    name: 'classCube',
    data(){
        return {
            click_type: 1,
            page1: 1,
            page2: 1,
        }
    },
    components: {
        'teach-class-item': TeachClassItem,
        'common-paginate': CommonPaginate,
    },
    methods: {
        click_page1: function(_id){
            this.page1 = _id
        },
        click_page2: function(_id){
            this.page2 = _id
        },
    }
}
</script>

<style>

</style>