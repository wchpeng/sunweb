<template>
    <!-- 轮播图 -->
    <div class="container-fluid">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li  v-for="(item, index) in other_carousel_pictures" :key="'carousel_btn'+index" data-target="#carouselExampleIndicators" :data-slide-to="index+1"></li>
            </ol>
            <div class="carousel-inner" >
                <div class="carousel-item active">
                    <img :src="first_carousel_picture" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" v-for="(item, index) in other_carousel_pictures" :key="'carousel'+index">
                    <img :src="item" class="d-block w-100" alt="...">
                </div>
            </div>

            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'indexCarousel',
    data(){
        return {}
    },
    computed: {
        first_carousel_picture: function(){
            return this.pictures[0]
        },
        other_carousel_pictures: function(){
            return this.pictures.slice(1,-1)
        }
    },
    props: {
        pictures: Array
    }
}
</script>

<style>

</style>