<template>
    <div class="col">
        <div class="row" style="background:#fff">
            <div class="col-5">
                
                <div class="row">
                    <div class="col-5" style="padding:0">
                        <div style="padding:15px;position:relative;">
                            <img src="http://123.57.95.214/sunweb/static/t1.jpeg" class="img-fluid" alt="">
                            <span class="class-pubed">已发布</span>
                            <!-- <span class="class-unpubed">未发布</span> -->
                        </div>
                    </div>
                    <div class="col-6" style="padding-top:25px;">
                        <a href=""><p class="text-body" style="font-weight:bold;font-size:1.1rem;padding-bottom:10px;">祁蒙英语入门</p></a>
                        <p class="text-danger">￥<span style="font-size:1.1rem"> 0.00</span></p>
                    </div>
                </div>
            </div>
            <div class="col-7">
                <button class="btn btn-sm btn-outline-primary float-right mt-5 ml-2 mr-4">管理课程</button>
                <button class="btn btn-sm btn-outline-primary float-right mt-5 mx-2">查看课程</button>
                <div class="mt-4 float-right mx-3">
                    <div class="mt-3 text-secondary" style="font-weight:bold;text-align:center;line-height:1.5rem;font-size:.9rem;">课程学员</div>
                    <div style="font-weight:bold;text-align:center;line-height:1.5rem;font-size:1.0rem;">10</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.class-pubed{
    background: #28a745;
    font-weight: bold;
    color: #fff;
    height: 2rem;
    line-height: 2rem;
    width: 4rem;
    text-align: center;
    display: inline-block;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    position: absolute;
    top: 10px;
    left: 0;
}
.class-unpubed{
    background: #6c757d;
    font-weight: bold;
    color: #fff;
    height: 2rem;
    line-height: 2rem;
    width: 4rem;
    text-align: center;
    display: inline-block;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    position: absolute;
    top: 10px;
    left: 0;
}
</style>