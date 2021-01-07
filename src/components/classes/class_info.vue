<template>
    <div class="container">
        
        <div class="card my-3" style="border:none;background:#fff">
            <div class="row no-gutters">
                <div class="col-5">
                    <figure class="figure px-4 py-4">
                        <img :src="hot1" class="figure-img img-fluid rounded" style="height:100%;" alt="...">
                        <figcaption class="figure-caption text-right">
                            <button href="" type="button" class="btn fav_btn">
                                <Icon type="md-heart-outline" /> <span style="font-size:0.9rem">收藏</span>
                            </button>
                        </figcaption>
                    </figure>
                </div>
                <div class="col-7">
                    <div class="card-body">
                        <h5 class="card-title">祁蒙英语基础</h5>
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <span>价格：</span>
                            <span class="text-success ml-3" style="font-size:2rem"><strong>免费</strong></span>
                        </nav>
                        <p class="card-text mt-2">
                            学习有效期：
                            <small class="text-muted">长期有效</small>
                        </p>
                    </div>
                    <div>
                        <button type="button" class="btn btn-warning" style="float:right;margin-top:85px;margin-right:20px;">免费加入</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'classDetail',
    data(){
        return {
            hot1: 'http://123.57.95.214/sunweb/static/t1.jpeg'
        }
    }
}
</script>

<style>
.fav_btn{
    padding: 0;
}
.fav_btn:hover,.fav_btn:focus,.fav_btn:active{
    color: #dc3545;
}
</style>