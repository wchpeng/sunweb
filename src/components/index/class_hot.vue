<template>
    <!-- 热门课堂 -->
    <div class="container">
        <div class="mb-4">
            <div class="row mb-4">
                <div class="col mt-4 mb-3">
                    <div class="h5 float-left text-dark">{{data.title}}</div>
                    <a :href="data.more" class="btn btn-sm btn-link a_button float-right">更多</a>
                </div>
            </div>
            <div v-for="(item2,index) in data.items" :key="'xxx'+index" class="row mb-4">
                <div v-for="(item, idx2) in item2" :key="data.title+index+idx2" class="col">
                    <div class="hot_border">
                        <div class="row">
                            <div class="col">
                                <a :href="item.detail_url">
                                <img :src="item.image" alt="">
                                </a>
                            </div>
                            <div class="col">
                                <p class="text-secondary mt-3" style="font-size:1.3rem">{{item.name}}</p>
                            </div>
                            <div class="col"></div>
                            <div class="col">
                                <a :href="item.detail_url" type="button" class="btn my_button2 mt-3" style="">{{item.button_text}}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
export default {
    name: 'indexClassHot',
    data(){
        return {}
    },
    props: {
        data: Object
    }
}
</script>

<style>
    .hot_border{
        border-radius: 0.25rem;
        padding: 1px;
        border: 1px solid #c8c9ca;
    }
    .hot_border:hover{
        border: 1px solid #dc3545;
    }
    .my_button2{
        border-radius: 1rem;
        border: 1px solid #d3d3d3;
        outline: none;
        font-size:.8rem;
    }
    .my_button2:focus, .my_button2:hover, .my_button2:active{
        border: 1px solid #dc3545;
        color: #dc3545;
    }
</style>