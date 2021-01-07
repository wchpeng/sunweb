<template>
    <!-- 课程块 -->
    <div class="col-3 my-3">
        <figure class="figure class_per_item" style="background:#fff;">
            <a :href="detail_url">
                <figure class="figure">
                <img :src="image" class="figure-img img-fluid class-item-img" style="" alt="...">
                </figure>
            </a>
            <figcaption class="figure-caption px-2 my-2">
                <a :href="detail_url" class="no_style_a text-body">{{name}}</a>
            </figcaption>
            <figcaption class="figure-caption px-2 pb-2">
                <span class="mr-2"><Icon size="15" type="md-people" /> {{student_num}}</span>
                <span class="mr-2"><Icon type="ios-chatboxes" /> {{comment_num}}</span>
                <span v-if="free" class="float-right text-success">免费</span>
                <span v-else class="float-right text-danger">{{price}}元</span>
            </figcaption>
        </figure>
    </div>   
</template>

<script>

export default {
    name: 'indexClassesItem',
    data(){
        return {
        }
    },
    props: {
        detail_url: String,
        image: String,
        student_num: Number,
        comment_num: Number,
        price: String,
        name: String,
        free: Boolean,
    }
}
</script>

<style>
    .no_style_a{
        color: #6c757d;
        font-size: .9rem;
    }
    .no_style_a:hover{
        border: none;
        text-decoration:none
    }
    .class_per_item{
        border-radius: 0.25rem;
        transition:all 200ms ease;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    .class_per_item:hover{
        transform:translate(0, -5px);
        transition-delay: 0s;
        background: rgba(0,0,0);
        box-shadow: 0px 5px 3px rgba(0, 0, 0, 0.1);
    }
    .class-item-img{
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }
</style>