<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <button class="btn btn-sm mr-3" @click="click_type=1" :class="{'btn-danger': click_type==1, 'btn-light': click_type!=1}">录播公开课</button>
                <button class="btn btn-sm mr-3" @click="click_type=2" :class="{'btn-danger': click_type==2, 'btn-light': click_type!=2}">直播公开课</button>
                <button class="btn btn-sm btn-danger float-right" >创建课程</button>
            </div>
        </div>
        <div v-show="click_type==1">
            <teach-pub-item class="mt-4"></teach-pub-item>
            <teach-pub-item class="mt-4"></teach-pub-item>
            <teach-pub-item class="mt-4"></teach-pub-item>
            <common-paginate
                class="my-5"
                :total=100
                :page="page1"
                :page_size=20
                @click_page="click_page1"
            ></common-paginate>
        </div>
        <div v-show="click_type==2">
            <teach-pub-item class="mt-4"></teach-pub-item>
            <teach-pub-item class="mt-4"></teach-pub-item>
            <teach-pub-item class="mt-4"></teach-pub-item>
            <teach-pub-item class="mt-4"></teach-pub-item>
            <teach-pub-item class="mt-4"></teach-pub-item>
            <teach-pub-item class="mt-4"></teach-pub-item>
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
import TeachPubItem from './teach_pub_item.vue'
import CommonPaginate from '../../classes/common_paginate.vue'

export default {
    name: 'pubCube',
    data(){
        return {
            click_type: 1,
            page1: 1,
            page2: 1,
        }
    },
    components: {
        'common-paginate': CommonPaginate,
        'teach-pub-item': TeachPubItem,
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