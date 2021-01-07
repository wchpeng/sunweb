<template>
    <!-- 系列课程 -->
    <div class="container">
        <div class="class_block1 mb-4">
            <div class="row">
                <div class="col mt-4 mb-3">
                    <div class="h5 float-left text-dark">{{data.title}}</div>
                    <a :href="data.more" class="btn btn-sm btn-link a_button float-right">更多</a>
                </div>
            </div>
            <div class="row">
                <div v-for="(item,index) in data.items" :key="data.title+index" class="col-3">
                    <figure class="figure">
                        <a :href="item.detail_url">
                            <figure class="figure" style="overflow:hidden;margin-bottom:0.18rem;border-radius:0.25rem;">
                            <img :src="item.image" class="figure-img img-fluid rounded img_hover_big" alt="...">
                            </figure>
                        </a>
                        <figcaption class="figure-caption mt-2">
                            <a :href="item.detail_url" class="no_style_a text-body">{{item.name}}</a>
                        </figcaption>
                    </figure>
                    <a :href="item.detail_url"><button class="join_button">立即加入</button></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'indexSerialClass',
    data(){
        return {}
    },
    props: {
        data: Object
    }
}
</script>

<style>
    .no_style_a{
        color: #6c757d;
    }
    .no_style_a:hover{
        border: none;
        text-decoration:none
    }
    .img_hover_big{
        margin-bottom: 0;
        transition:all 200ms ease;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    .img_hover_big:hover{
        transform:scale(1.07);
        transition-delay: 0s;
    }
    .a_button{
        border: none;
        color: #007bff;
        padding-bottom: 0;
    }
    .a_button:hover{
        border: none;
        background: #fff;
    }
    .join_button{
        width: 100%;
        border: 1px solid #dc3545;
        background: #fff;
        color: #dc3545;
        font-size: 0.85rem;
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
    }
    .join_button:hover{
        background: #dc3545;
        color: #fff;
    }
</style>