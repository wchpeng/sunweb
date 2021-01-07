<template>
  <div>
    <!-- 头部 -->
    <div class="container">
        <!-- <div class="nav"> -->
        <div>
        <!-- <ul> -->
            <div class="row my-3">
                <div class="col mt-1">
                    <div class="nav-item">
                    <img :src="navHeaderImgUrl" class="img-fluid" alt="">
                    </div>
                </div>
                <div class="col-6">
                    <div class="nav-item">
                        <div class="input-group input-group-md mt-4">
                            <input type="text" class="form-control" placeholder="搜索内容">
                            <div class="input-group-append">
                                <button type="button" class="btn btn-md my_button">&nbsp; 🔍 &nbsp;</button>
                                <!-- <span class="input-group-text" style="cursor:pointer" id="basic-addon2">&nbsp; 🔍 &nbsp;</span> -->
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <!-- <a href="" class="btn btn-md">登录</a> -->
                    <button id="www_login" type="button" class="btn btn-md btn-link mt-4 mx-auto a_button float-right">登录/注册</button>
                </div>
            </div>
        </div>
    </div>
    <!-- </nav> -->

  </div>
</template>

<script>
export default {
    name: "sunIndexHeader",
    data(){
        return {
        }
    },
    props: {
        navHeaderImgUrl: String
    }
}
</script>


<style scoped>
    input {
        border-radius: 0;
        outline: none;
    }
    input:focus{
        box-shadow: none;
    }
    .my_button {
        border-radius: 0;
        border: 1px solid #d3d3d3;
        outline: none;
    }
    .my_button:focus, .my_button:hover, .my_button:active{
        box-shadow: none;
        outline: none;
        background: #c8c9ca;
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
</style>