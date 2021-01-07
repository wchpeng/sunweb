<template>
    <!-- 公开课 -->
    <div class="container">
        <div class="class_block1 mb-4">
            <div class="row">
                <div class="col mt-4 mb-3">
                    <div class="h5 float-left text-dark">{{data.title}}</div>
                    <a :href="data.more" class="btn btn-sm btn-link a_button float-right">更多</a>
                </div>
            </div>
            <div class="row">
                <div v-for="(item,index) in data.items" :key="data.title+index" class="col-4">
                    <figure class="figure">
                        <div class="position-relative" style="margin-bottom:.5rem;" @mouseenter="$emit('pub-cls-mouseenter', index)" @mouseleave="$emit('pub-cls-mouseleave', index)">
                        <a :href="item.detail_url">
                            <img :src="item.image" class="figure-img img-fluid rounded" style="margin-bottom:0" alt="...">
                            <div class="position-absolute model_join" v-show="item.show_shadow">
                                <div><img :src="item.class_image" style="width:15%" class="rounded-circle mt-4" alt=""></div>
                                <div class="mt-2 text-light"><strong>{{item.class_text}}</strong></div>
                                <button type="button" class="btn btn-sm mt-2 btn-primary no_outline_btn">{{item.join_text}}</button>
                            </div>
                        </a></div>
                        <figcaption class="figure-caption">
                            <span style="font-size:1rem">{{item.name}}</span>
                            <span class="float-right text-info align-bottom" style="font-size:0.9rem">{{item.student_num}}学员</span>
                        </figcaption>
                    </figure>
                </div>
                <!-- <div class="col">
                    <figure class="figure">
                        <div class="position-relative" style="margin-bottom:.5rem;" @mouseenter="model_shadow_show3 = true" @mouseleave="model_shadow_show3 = false">
                        <a href="">
                            <img :src="t3" class="figure-img img-fluid rounded" style="margin-bottom:0" alt="...">
                            <div class="position-absolute model_join" v-show="model_shadow_show3">
                                <div><img :src="h" style="width:15%" class="rounded-circle mt-4" alt=""></div>
                                <div class="mt-2 text-light"><strong>公开课堂</strong></div>
                                <button type="button" class="btn btn-sm mt-2 btn-primary no_outline_btn">免费加入</button>
                            </div>
                        </a></div>
                        <figcaption class="figure-caption">
                            <span style="font-size:1rem">专业英语</span>
                            <span class="float-right text-info align-bottom" style="font-size:0.9rem">3学员</span>
                        </figcaption>
                    </figure>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'indexClassPublic',
    data(){
        return {}
    },
    props: {
        data: Object
    }
}
</script>

<style>
    .a_button{
        border: none;
        color: #007bff;
        padding-bottom: 0;
    }
    .a_button:hover{
        border: none;
        background: #fff;
    }
    .model_join{
        top: 0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.4);
        border-radius: 0.25rem;
        text-align: center;
    }
</style>