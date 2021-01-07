<template>
  <div>
      <!-- <nav class="navbar"> -->
        <!-- 头部 -->
        <div class="container">
            <!-- <div class="nav"> -->
            <div>
            <!-- <ul> -->
                <div class="row">
                    <div class="col mt-2">
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

    <!-- 头部下一栏 -->
    <div class="container">
        <div class="row">
            <div class="col-sm-3 mt-2">
                <div id="hhh001" class="list-group position-relative" style="margin:0;padding:0">
                    <a href="#" id="www001" class="list-group-item list-group-item-action py-2" style="background:#dc3545;color:#fff;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-justify" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        全部课程
                    </a>
                    <!-- <div style="position:absolute;"> -->
                    <div id="hhh0011" ref="hhh0011" :style="{width:www001_width+'px'}">
                    <!-- <div style="position:relative"> -->
                        <div class="list-group-item list-group-item-action third-item">
                            <div><a href="">K12英语</a></div>
                            <div>
                                <a href="" style="font-size:0.75rem">首页</a>
                                <a href="" style="font-size:0.75rem">公开课程</a>
                                <a href="" style="font-size:0.75rem">视频课程</a>
                                <a href="" style="font-size:0.75rem">视频课程</a>
                            </div>

                            <ul>
                                <div class="list-group-item list-group-item-action py-2">
                                    <div><a href="">K12英语</a></div>
                                    <div>
                                        <a href="" style="font-size:0.75rem">首页</a>
                                        <a href="" style="font-size:0.75rem">公开课程</a>
                                        <a href="" style="font-size:0.75rem">视频课程</a>
                                        <a href="" style="font-size:0.75rem">视频课程</a>
                                    </div>
                                    <hr>
                                    <div><a href="">K12英语</a></div>
                                    <div>
                                        <a href="" style="font-size:0.75rem">首页</a>
                                        <a href="" style="font-size:0.75rem">公开课程</a>
                                        <a href="" style="font-size:0.75rem">视频课程</a>
                                        <a href="" style="font-size:0.75rem">视频课程</a>
                                    </div>
                                    <hr>
                                    <div><a href="">K12英语</a></div>
                                    <div>
                                        <a href="" style="font-size:0.75rem">首页</a>
                                        <a href="" style="font-size:0.75rem">公开课程</a>
                                        <a href="" style="font-size:0.75rem">视频课程</a>
                                        <a href="" style="font-size:0.75rem">视频课程</a>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <div class="list-group-item list-group-item-action py-2 pr-1 third-item">
                            <div><a href="">K12英语</a></div>
                            <div>
                                <a href="" style="font-size:0.75rem">首页</a>
                                <a href="" style="font-size:0.75rem">公开课程</a>
                                <a href="" style="font-size:0.75rem">视频课程</a>
                                <a href="" style="font-size:0.75rem">视频课程</a>
                            </div>

                            <ul>
                                <div class="list-group-item list-group-item-action py-2">
                                    <div><a href="">K12英语</a></div>
                                    <div>
                                        <a href="" style="font-size:0.75rem">首页</a>
                                        <a href="" style="font-size:0.75rem">公开课程</a>
                                        <a href="" style="font-size:0.75rem">视频课程</a>
                                        <a href="" style="font-size:0.75rem">视频课程</a>
                                    </div>
                                    <hr>
                                    <div><a href="">K12英语</a></div>
                                    <div>
                                        <a href="" style="font-size:0.75rem">首页</a>
                                        <a href="" style="font-size:0.75rem">公开课程</a>
                                        <a href="" style="font-size:0.75rem">视频课程</a>
                                        <a href="" style="font-size:0.75rem">视频课程</a>
                                    </div>
                                    <hr>
                                    <div><a href="">K12英语</a></div>
                                    <div>
                                        <a href="" style="font-size:0.75rem">首页</a>
                                        <a href="" style="font-size:0.75rem">公开课程</a>
                                        <a href="" style="font-size:0.75rem">视频课程</a>
                                        <a href="" style="font-size:0.75rem">视频课程</a>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    
                        <div class="list-group-item list-group-item-action py-2 pr-1 third-item">
                            <div><a href="">K12英语</a></div>
                            <div>
                                <a href="" style="font-size:0.75rem">首页</a>
                                <a href="" style="font-size:0.75rem">公开课程</a>
                                <a href="" style="font-size:0.75rem">视频课程</a>
                                <a href="" style="font-size:0.75rem">视频课程</a>
                            </div>

                            <ul>
                                <div class="list-group-item list-group-item-action py-2">
                                    <div><a href="">K12英语</a></div>
                                    <div>
                                        <a href="" style="font-size:0.75rem">首页</a>
                                        <a href="" style="font-size:0.75rem">公开课程</a>
                                        <a href="" style="font-size:0.75rem">视频课程</a>
                                        <a href="" style="font-size:0.75rem">视频课程</a>
                                    </div>
                                    <hr>
                                    <div><a href="">K12英语</a></div>
                                    <div>
                                        <a href="" style="font-size:0.75rem">首页</a>
                                        <a href="" style="font-size:0.75rem">公开课程</a>
                                        <a href="" style="font-size:0.75rem">视频课程</a>
                                        <a href="" style="font-size:0.75rem">视频课程</a>
                                    </div>
                                    <hr>
                                    <div><a href="">K12英语</a></div>
                                    <div>
                                        <a href="" style="font-size:0.75rem">首页</a>
                                        <a href="" style="font-size:0.75rem">公开课程</a>
                                        <a href="" style="font-size:0.75rem">视频课程</a>
                                        <a href="" style="font-size:0.75rem">视频课程</a>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-9 mt-2">
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item py-2 second-item">首页</li>
                    <li class="list-group-item py-2 second-item">公开课程</li>
                    <li class="list-group-item py-2 second-item">视频课程</li>
                    <li class="list-group-item py-2 second-item">视频课程</li>
                    <li class="list-group-item py-2 second-item">视频课程</li>
                    <li class="list-group-item py-2 second-item">视频课程</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 轮播图 -->
    <div class="container-fluid">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img :src="car1" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img :src="car2" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img :src="car3" class="d-block w-100" alt="...">
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

    <!-- 课程块 -->
    <div class="container">
        <div class="class_block1 mb-4">
            <div class="row">
                <div class="col mt-4 mb-3">
                    <div class="h5 float-left text-dark">祁蒙课程</div>
                    <button class="btn btn-sm btn-link a_button float-right">更多</button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <figure class="figure">
                        <a href="">
                            <figure class="figure" style="overflow:hidden;margin-bottom:0.18rem;border-radius:0.25rem;">
                            <img :src="t1" class="figure-img img-fluid rounded img_hover_big" alt="...">
                            </figure>
                        </a>
                        <figcaption class="figure-caption my-2">
                            <a href="" class="no_style_a text-body">启蒙英语入门</a>
                        </figcaption>
                        <figcaption class="figure-caption">
                            <a href="#" class="no_style_a">
                                <img :src="avatar" class="rounded-circle" alt="" style="width:1.2rem;">
                            洪伟
                            </a>
                            <span class="float-right text-success">免费</span>
                            <span class="float-right mr-2">0学员</span>
                        </figcaption>
                    </figure>
                </div>
                <div class="col">
                    <figure class="figure">
                        <a href="">
                            <figure class="figure" style="overflow:hidden;margin-bottom:0.18rem;border-radius:0.25rem;">
                            <img :src="t2" class="figure-img img-fluid rounded img_hover_big" alt="...">
                            </figure>
                        </a>
                        <figcaption class="figure-caption my-2">
                            <a href="" class="no_style_a text-body">启蒙英语入门</a>
                        </figcaption>
                        <figcaption class="figure-caption">
                            <a href="#" class="no_style_a">
                                <img :src="avatar" class="rounded-circle" alt="" style="width:1.2rem;">
                            洪伟
                            </a>
                            <span class="float-right text-success">免费</span>
                            <span class="float-right mr-2">0学员</span>
                        </figcaption>
                    </figure>
                </div>
                <div class="col">
                    <figure class="figure">
                        <a href="">
                            <figure class="figure" style="overflow:hidden;margin-bottom:0.18rem;border-radius:0.25rem;">
                            <img :src="t3" class="figure-img img-fluid rounded img_hover_big" alt="...">
                            </figure>
                        </a>
                        <figcaption class="figure-caption my-2">
                            <a href="" class="no_style_a text-body">启蒙英语入门</a>
                        </figcaption>
                        <figcaption class="figure-caption">
                            <a href="#" class="no_style_a">
                                <img :src="avatar" class="rounded-circle" alt="" style="width:1.2rem;">
                            洪伟
                            </a>
                            <span class="float-right text-success">免费</span>
                            <span class="float-right mr-2">0学员</span>
                        </figcaption>
                    </figure>
                </div>
                <div class="col">
                    <figure class="figure">
                        <a href="">
                            <figure class="figure" style="overflow:hidden;margin-bottom:0.18rem;border-radius:0.25rem;">
                            <img :src="t4" class="figure-img img-fluid rounded img_hover_big" alt="...">
                            </figure>
                        </a>
                        <figcaption class="figure-caption my-2">
                            <a href="" class="no_style_a text-body">启蒙英语入门</a>
                        </figcaption>
                        <figcaption class="figure-caption">
                            <a href="#" class="no_style_a">
                                <img :src="avatar" class="rounded-circle" alt="" style="width:1.2rem;">
                            洪伟
                            </a>
                            <span class="float-right text-success">免费</span>
                            <span class="float-right mr-2">0学员</span>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
        <div class="class_block1 mb-4">
            <div class="row">
                <div class="col mt-4 mb-3">
                    <div class="h5 float-left text-dark">祁蒙课程</div>
                    <button class="btn btn-sm btn-link a_button float-right">更多</button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <figure class="figure">
                        <a href="">
                            <figure class="figure" style="overflow:hidden;margin-bottom:0.18rem;border-radius:0.25rem;">
                            <img :src="t1" class="figure-img img-fluid rounded img_hover_big" alt="...">
                            </figure>
                        </a>
                        <figcaption class="figure-caption my-2">
                            <a href="" class="no_style_a text-body">启蒙英语入门</a>
                        </figcaption>
                        <figcaption class="figure-caption">
                            <a href="#" class="no_style_a">
                                <img :src="avatar" class="rounded-circle" alt="" style="width:1.2rem;">
                            洪伟
                            </a>
                            <span class="float-right text-success">免费</span>
                            <span class="float-right mr-2">0学员</span>
                        </figcaption>
                    </figure>
                </div>
                <div class="col">
                    <figure class="figure">
                        <a href="">
                            <figure class="figure" style="overflow:hidden;margin-bottom:0.18rem;border-radius:0.25rem;">
                            <img :src="t2" class="figure-img img-fluid rounded img_hover_big" alt="...">
                            </figure>
                        </a>
                        <figcaption class="figure-caption my-2">
                            <a href="" class="no_style_a text-body">启蒙英语入门</a>
                        </figcaption>
                        <figcaption class="figure-caption">
                            <a href="#" class="no_style_a">
                                <img :src="avatar" class="rounded-circle" alt="" style="width:1.2rem;">
                            洪伟
                            </a>
                            <span class="float-right text-success">免费</span>
                            <span class="float-right mr-2">0学员</span>
                        </figcaption>
                    </figure>
                </div>
                <div class="col">
                    <figure class="figure">
                        <a href="">
                            <figure class="figure" style="overflow:hidden;margin-bottom:0.18rem;border-radius:0.25rem;">
                            <img :src="t3" class="figure-img img-fluid rounded img_hover_big" alt="...">
                            </figure>
                        </a>
                        <figcaption class="figure-caption my-2">
                            <a href="" class="no_style_a text-body">启蒙英语入门</a>
                        </figcaption>
                        <figcaption class="figure-caption">
                            <a href="#" class="no_style_a">
                                <img :src="avatar" class="rounded-circle" alt="" style="width:1.2rem;">
                            洪伟
                            </a>
                            <span class="float-right text-success">免费</span>
                            <span class="float-right mr-2">0学员</span>
                        </figcaption>
                    </figure>
                </div>
                <div class="col">
                    <figure class="figure">
                        <a href="">
                            <figure class="figure" style="overflow:hidden;margin-bottom:0.18rem;border-radius:0.25rem;">
                            <img :src="t4" class="figure-img img-fluid rounded img_hover_big" alt="...">
                            </figure>
                        </a>
                        <figcaption class="figure-caption my-2">
                            <a href="" class="no_style_a text-body">启蒙英语入门</a>
                        </figcaption>
                        <figcaption class="figure-caption">
                            <a href="#" class="no_style_a">
                                <img :src="avatar" class="rounded-circle" alt="" style="width:1.2rem;">
                            洪伟
                            </a>
                            <span class="float-right text-success">免费</span>
                            <span class="float-right mr-2">0学员</span>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>

    <!-- 直播课程 -->
    <div class="container">
        <div class="class_block1 mb-4">
            <div class="row">
                <div class="col mt-4 mb-3">
                    <div class="h5 float-left text-dark">直播课程</div>
                    <button class="btn btn-sm btn-link a_button float-right">更多</button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <figure class="figure">
                        <a href="">
                            <figure class="figure position-relative" style="overflow:hidden;margin-bottom:0.18rem;border-radius:0.25rem;">
                            <img :src="t1" class="figure-img img-fluid rounded img_hover_big" alt="...">
                            <span class="tag_live">
                                <img :src="tag_alive" alt="">
                            </span>
                            </figure>
                        </a>
                        <figcaption class="figure-caption my-2">
                            <a href="" class="no_style_a text-body">启蒙英语入门</a>
                        </figcaption>
                        <figcaption class="figure-caption">
                            <a href="#" class="no_style_a">
                                <img :src="avatar" class="rounded-circle" alt="" style="width:1.2rem;">
                            洪伟
                            </a>
                            <span class="float-right text-success">免费</span>
                            <span class="float-right mr-2">0学员</span>
                        </figcaption>
                    </figure>
                </div>
                <div class="col">
                    <figure class="figure">
                        <a href="">
                            <figure class="figure position-relative" style="overflow:hidden;margin-bottom:0.18rem;border-radius:0.25rem;">
                            <img :src="t2" class="figure-img img-fluid rounded img_hover_big" alt="...">
                            <span class="tag_live">
                                <img :src="tag_alive" alt="">
                            </span>
                            </figure>
                        </a>
                        <figcaption class="figure-caption my-2">
                            <a href="" class="no_style_a text-body">启蒙英语入门</a>
                        </figcaption>
                        <figcaption class="figure-caption">
                            <a href="#" class="no_style_a">
                                <img :src="avatar" class="rounded-circle" alt="" style="width:1.2rem;">
                            洪伟
                            </a>
                            <span class="float-right text-success">免费</span>
                            <span class="float-right mr-2">0学员</span>
                        </figcaption>
                    </figure>
                </div>
                <div class="col">
                    <figure class="figure">
                        <a href="">
                            <figure class="figure position-relative" style="overflow:hidden;margin-bottom:0.18rem;border-radius:0.25rem;">
                            <img :src="t3" class="figure-img img-fluid rounded img_hover_big" alt="...">
                            <span class="tag_live">
                                <img :src="tag_alive" alt="">
                            </span>
                            </figure>
                        </a>
                        <figcaption class="figure-caption my-2">
                            <a href="" class="no_style_a text-body">启蒙英语入门</a>
                        </figcaption>
                        <figcaption class="figure-caption">
                            <a href="#" class="no_style_a">
                                <img :src="avatar" class="rounded-circle" alt="" style="width:1.2rem;">
                            洪伟
                            </a>
                            <span class="float-right text-success">免费</span>
                            <span class="float-right mr-2">0学员</span>
                        </figcaption>
                    </figure>
                </div>
                <div class="col">
                    <figure class="figure">
                        <a href="">
                            <figure class="figure position-relative" style="overflow:hidden;margin-bottom:0.18rem;border-radius:0.25rem;">
                            <img :src="t4" class="figure-img img-fluid rounded img_hover_big" alt="...">
                            <span class="tag_live">
                                <img :src="tag_alive" alt="">
                            </span>
                            </figure>
                        </a>
                        <figcaption class="figure-caption my-2">
                            <a href="" class="no_style_a text-body">启蒙英语入门</a>
                        </figcaption>
                        <figcaption class="figure-caption">
                            <a href="#" class="no_style_a">
                                <img :src="avatar" class="rounded-circle" alt="" style="width:1.2rem;">
                            洪伟
                            </a>
                            <span class="float-right text-success">免费</span>
                            <span class="float-right mr-2">0学员</span>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>
    
    <!-- 系列课程 -->
    <div class="container">
        <div class="class_block1 mb-4">
            <div class="row">
                <div class="col mt-4 mb-3">
                    <div class="h5 float-left text-dark">系列课程</div>
                    <button class="btn btn-sm btn-link a_button float-right">更多</button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <figure class="figure">
                        <a href="">
                            <figure class="figure" style="overflow:hidden;margin-bottom:0.18rem;border-radius:0.25rem;">
                            <img :src="t1" class="figure-img img-fluid rounded img_hover_big" alt="...">
                            </figure>
                        </a>
                        <figcaption class="figure-caption mt-2">
                            <a href="" class="no_style_a text-body">启蒙英语入门</a>
                        </figcaption>
                    </figure>
                    <button class="join_button">立即加入</button>
                </div>
                <div class="col">
                    <figure class="figure">
                        <a href="">
                            <figure class="figure" style="overflow:hidden;margin-bottom:0.18rem;border-radius:0.25rem;">
                            <img :src="t2" class="figure-img img-fluid rounded img_hover_big" alt="...">
                            </figure>
                        </a>
                        <figcaption class="figure-caption mt-2">
                            <a href="" class="no_style_a text-body">启蒙英语入门</a>
                        </figcaption>
                    </figure>
                    <button class="join_button">立即加入</button>
                </div>
                <div class="col">
                    <figure class="figure">
                        <a href="">
                            <figure class="figure" style="overflow:hidden;margin-bottom:0.18rem;border-radius:0.25rem;">
                            <img :src="t3" class="figure-img img-fluid rounded img_hover_big" alt="...">
                            </figure>
                        </a>
                        <figcaption class="figure-caption mt-2">
                            <a href="" class="no_style_a text-body">启蒙英语入门</a>
                        </figcaption>
                    </figure>
                    <button class="join_button">立即加入</button>
                </div>
                <div class="col">
                    <figure class="figure">
                        <a href="">
                            <figure class="figure" style="overflow:hidden;margin-bottom:0.18rem;border-radius:0.25rem;">
                            <img :src="t4" class="figure-img img-fluid rounded img_hover_big" alt="...">
                            </figure>
                        </a>
                        <figcaption class="figure-caption mt-2">
                            <a href="" class="no_style_a text-body">启蒙英语入门</a>
                        </figcaption>
                    </figure>
                    <button class="join_button">立即加入</button>
                </div>
            </div>
        </div>
    </div>

    <!-- 公开课 -->
    <div class="container">
        <div class="class_block1 mb-4">
            <div class="row">
                <div class="col mt-4 mb-3">
                    <div class="h5 float-left text-dark">公开课程</div>
                    <button class="btn btn-sm btn-link a_button float-right">更多</button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <figure class="figure">
                        <div class="position-relative" style="margin-bottom:.5rem;" @mouseenter="model_shadow_show1 = true" @mouseleave="model_shadow_show1 = false">
                        <a href="">
                            <img :src="t1" class="figure-img img-fluid rounded" style="margin-bottom:0" alt="...">
                            <div class="position-absolute model_join" v-show="model_shadow_show1">
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
                </div>
                <div class="col">
                    <figure class="figure">
                        <div class="position-relative" style="margin-bottom:.5rem;" @mouseenter="model_shadow_show2 = true" @mouseleave="model_shadow_show2 = false">
                        <a href="">
                            <img :src="t2" class="figure-img img-fluid rounded" style="margin-bottom:0" alt="...">
                            <div class="position-absolute model_join" v-show="model_shadow_show2">
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
                </div>
                <div class="col">
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
                </div>
            </div>
        </div>
    </div>

    <!-- nav 图 -->
    <div>
        <div class="bg_about" style="width:100%;height:100%;">
            <div style="background:rgba(0,0,0,0.7)">
                <div class="container text-center">
                    <div class="row">
                        <div class="col text-light mt-4">
                            <p  style="font-size:1.5rem">关于Maple Leaves</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col mb-4">
                            <div>
                                <span class="text-light" style="font-size:3rem">5000</span>
                                <span class="text-light">+</span>
                            </div>
                            <div class="text-light mb-4">Quality Curriculum</div>
                        </div>
                        <div class="col mb-4">
                            <div>
                                <span class="text-light" style="font-size:3rem">10000</span>
                                <span class="text-light">+</span>
                            </div>
                            <div class="text-light mb-4">Quality Curriculum</div>
                        </div>
                        <div class="col mb-4">
                            <div>
                                <span class="text-light" style="font-size:3rem">300</span>
                                <span class="text-light">万+</span>
                            </div>
                            <div class="text-light mb-4">Quality Curriculum</div>
                        </div>
                        <div class="col mb-4">
                            <div>
                                <span class="text-light" style="font-size:3rem">1000K</span>
                                <span class="text-light"></span>
                            </div>
                            <div class="text-light mb-4">Quality Curriculum</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 热门课堂 -->
    <div class="container">
        <div class="class_block1 mb-4">
            <div class="row mb-4">
                <div class="col mt-4 mb-3">
                    <div class="h5 float-left text-dark">热门课程</div>
                    <button class="btn btn-sm btn-link a_button float-right">更多</button>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col">
                    <div class="hot_border">
                        <div class="row">
                            <div class="col">
                                <a href="">
                                <img :src="hot1" alt="">
                                </a>
                            </div>
                            <div class="col">
                                <p class="text-secondary mt-3" style="font-size:1.3rem">雅思课堂</p>
                            </div>
                            <div class="col"></div>
                            <div class="col">
                                <a type="button" class="btn my_button2 mt-3" style="">在线教程</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="hot_border">
                        <div class="row">
                            <div class="col">
                                <a href="">
                                <img :src="hot2" alt="">
                                </a>
                            </div>
                            <div class="col">
                                <p class="text-secondary mt-3" style="font-size:1.3rem">雅思课堂</p>
                            </div>
                            <div class="col"></div>
                            <div class="col">
                                <a type="button" class="btn my_button2 mt-3" style="">在线教程</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col">
                    <div class="hot_border">
                        <div class="row">
                            <div class="col">
                                <a href="">
                                <img :src="hot3" alt="">
                                </a>
                            </div>
                            <div class="col">
                                <p class="text-secondary mt-3" style="font-size:1.3rem">雅思课堂</p>
                            </div>
                            <div class="col"></div>
                            <div class="col">
                                <a type="button" class="btn my_button2 mt-3" style="">在线教程</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="hot_border">
                        <div class="row">
                            <div class="col">
                                <a href="">
                                <img :src="hot4" alt="">
                                </a>
                            </div>
                            <div class="col">
                                <p class="text-secondary mt-3" style="font-size:1.3rem">雅思课堂</p>
                            </div>
                            <div class="col"></div>
                            <div class="col">
                                <a type="button" class="btn my_button2 mt-3" style="">在线教程</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col">
                    <div class="hot_border">
                        <div class="row">
                            <div class="col">
                                <a href="">
                                <img :src="hot5" alt="">
                                </a>
                            </div>
                            <div class="col">
                                <p class="text-secondary mt-3" style="font-size:1.3rem">雅思课堂</p>
                            </div>
                            <div class="col"></div>
                            <div class="col">
                                <a type="button" class="btn my_button2 mt-3" style="">在线教程</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="hot_border">
                        <div class="row">
                            <div class="col">
                                <a href="">
                                <img :src="hot6" alt="">
                                </a>
                            </div>
                            <div class="col">
                                <p class="text-secondary mt-3" style="font-size:1.3rem">雅思课堂</p>
                            </div>
                            <div class="col"></div>
                            <div class="col">
                                <a type="button" class="btn my_button2 mt-3" style="">在线教程</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 欢迎页 -->
    <div>
        <div class="bg_welcome" style="width:100%;height:100%;">
            <div class="text-center py-5" style="background:rgba(0,0,0,0.6)">
                <div class="pt-4 pb-4 display-4 text-light">
                    Welcome To Canada
                </div>
                <div class="pb-5">
                    <button type="button" class="btn btn-lg btn-success my_button3">&nbsp;&nbsp; Enter &nbsp;&nbsp;</button>
                </div>
            </div>
        </div>
    </div>


    <!-- 底部栏 -->
    <div class="footer pt-5">
        <div class="py-4" style="background:#c8c9ca;font-size:.8rem;color:#6c757d;">
            <div class="container">
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col">
                        <span class="mr-2">友情链接：</span>
                        <a href="">友盟</a>
                        <span>|</span>
                        <a href="">阿里服务</a>
                        <span>|</span>
                        <a href="">大学x-lab</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-white-50 py-4 text-center" style="font-size:.9rem;background:#444">
            <div class="mb-3">Powered by EduSoho v20.4.7 ©2014-2020 课程存档</div>
            <div>课程内容版权均归 杭州阔知网络科技有限公司 所有</div>
        </div>
    </div>

    <!-- 侧边栏 -->
    <div class="right_line" style="background:#fff;position:fixed;z-index:100;right:0;top:0;">
        <div style="background:#f8f9fa;float:right;display:block;height:800px;overflow:scroll;">
            <!-- 学习课程 -->
            <div class="mx-2 right_title text-center" style="width:200px;">
                <div class="px-2">
                    <a style="float:left;" class="right_arrow">→</a>
                    <span class="text-center pr-2">学习中心</span>
                </div>
                <div class="my-3">
                    <img :src="avatar" class="rounded-circle" alt="">
                </div>
                <div class="my-3">
                    洪伟
                </div>
                <div class="my-4"><strong>学习课程</strong></div>
                <div class="my-3 ml-3 text-left right_class_item">
                    <Timeline>
                        <TimelineItem color="red">
                            <Icon type="ios-trophy" slot="dot"></Icon>
                            课程:测试直播课程
                            <span style="float:right;color:#dc3545;">0/2</span>
                        </TimelineItem>
                        <TimelineItem><a href="">发布1.0版本</a></TimelineItem>
                        <TimelineItem><a href="">发布2.0版本</a></TimelineItem>
                        <TimelineItem><a href="">发布3.0版本</a></TimelineItem>
                    </Timeline>
                </div>
                <div class="my-3 ml-3 text-left right_class_item">
                    <Timeline>
                        <TimelineItem color="red">
                            <Icon type="ios-trophy" slot="dot"></Icon>
                            课程:测试直播课程
                            <span style="float:right;color:#dc3545;">0/2</span>
                        </TimelineItem>
                        <TimelineItem><a href="">发布1.0版本</a></TimelineItem>
                        <TimelineItem><a href="">发布2.0版本</a></TimelineItem>
                        <TimelineItem><a href="">发布3.0版本</a></TimelineItem>
                    </Timeline>
                </div>
                <div class="my-3 ml-3 text-left right_class_item">
                    <Timeline>
                        <TimelineItem color="red">
                            <Icon type="ios-trophy" slot="dot"></Icon>
                            课程:测试直播课程
                            <span style="float:right;color:#dc3545;">0/2</span>
                        </TimelineItem>
                        <TimelineItem><a href="">发布1.0版本</a></TimelineItem>
                        <TimelineItem><a href="">发布2.0版本</a></TimelineItem>
                        <TimelineItem><a href="">发布3.0版本</a></TimelineItem>
                    </Timeline>
                </div>
                <div class="my-3 ml-3 text-left right_class_item">
                    <Timeline>
                        <TimelineItem color="red">
                            <Icon type="ios-trophy" slot="dot"></Icon>
                            课程:测试直播课程
                            <span style="float:right;color:#dc3545;">0/2</span>
                        </TimelineItem>
                        <TimelineItem><a href="">发布1.0版本</a></TimelineItem>
                        <TimelineItem><a href="">发布2.0版本</a></TimelineItem>
                        <TimelineItem><a href="">发布3.0版本</a></TimelineItem>
                    </Timeline>
                </div>
            </div>
            <!-- 我的考试/作业 -->
            <div class="mx-2 text-center" style="width:200px;overflow:scroll;">
                <div class="px-2">
                    <a style="float:left;" class="right_arrow">→</a>
                    <span class="text-center pr-2">我的考试/作业</span>
                    <div class="my-4"><strong>考试</strong></div>
                    <div class="my-3 ml-2 text-left">
                        <a href="">
                        <span>></span>
                        <span class="ml-1" style="font-size:.8rem">听力与口语</span>
                        </a>
                    </div>
                    <div class="my-3 ml-2 text-left">
                        <a href="">
                        <span>></span>
                        <span class="ml-1" style="font-size:.8rem">听力与口语</span>
                        </a>
                    </div>
                    <div class="my-3 ml-2 text-left">
                        <a href="">
                        <span>></span>
                        <span class="ml-1" style="font-size:.7rem">听力与口语</span>
                        </a>
                    </div>
                    <div class="my-3 ml-2 text-left">
                        <a href="">
                        <span>></span>
                        <span class="ml-1" style="font-size:.8rem">听力与口语</span>
                        </a>
                    </div>
                    <div>
                        <a href="" style="font-size:.8rem">更多 >></a>
                    </div>
                    <div class="mb-4 mt-5"><strong>作业</strong></div>
                    <div class="my-3 ml-2 text-left">
                        <a href="">
                        <span>></span>
                        <span class="ml-1" style="font-size:.8rem">夜曲</span>
                        </a>
                    </div>
                    <div class="my-3 ml-2 text-left">
                        <a href="">
                        <span>></span>
                        <span class="ml-1" style="font-size:.8rem">多多</span>
                        </a>
                    </div>
                </div>
            </div>
            <!-- 我的课程/班级 -->
            <div class="mx-2 text-center" style="width:200px;overflow:scroll">
                <div class="px-2">
                    <a style="float:left;" class="right_arrow">→</a>
                    <span class="text-center pr-2">我的课程/班级</span>
                    <div class="my-4">
                        <button href="" type="button" style="width:45%" class="btn btn-sm btn-success my_button4">课程</button>
                        <button href="" type="button" style="width:45%" class="btn btn-sm btn-secondary my_button4">班级</button>
                    </div>
                    <div class="my-3">
                        <div class="card my_card" style="width: 100%;">
                            <a href="">
                                <img class="card-img-top px-2 py-2" :src="t1" alt="Card image cap">
                                <div>
                                    <div class="progress mb-1" style="border-radius:0;">
                                        <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="card-text text-dark text-left pl-2 py-2" style="font-size:.7rem">学习如何制作TNT</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="my-3">
                        <div class="card my_card" style="width: 100%;">
                            <a href="">
                                <img class="card-img-top px-2 py-2" :src="t1" alt="Card image cap">
                                <div>
                                    <div class="progress mb-1" style="border-radius:0;">
                                        <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="card-text text-dark text-left pl-2 py-2" style="font-size:.7rem">学习如何制作TNT</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="my-3">
                        <div class="card my_card" style="width: 100%;">
                            <a href="">
                                <img class="card-img-top px-2 py-2" :src="t1" alt="Card image cap">
                                <div>
                                    <div class="progress mb-1" style="border-radius:0;">
                                        <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="card-text text-dark text-left pl-2 py-2" style="font-size:.7rem">学习如何制作TNT</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="right_border_fixed text-center" style="height:800px;">
            <div style="height:100px;"></div>
            <div class="my-1 right_little_icon">
                <a href="javascript:;" type="button" class="btn btn-sm">
                学习中心
                </a>
            </div>
            
            <div class="my-1 right_little_icon" style="height:35px;">
                <Poptip trigger="hover" placement="left" word-wrap content="我的作业">
                    <Icon size="30" type="ios-create-outline" />
                </Poptip>
            </div>
            <div class="my-1 right_little_icon" style="height:35px;">
                <Poptip trigger="hover" placement="left" word-wrap content="我的课堂">
                    <Icon size="30" type="md-school" />
                </Poptip>
            </div>
        </div>
    </div>
    <div style="height:500px">
    </div>
  </div>

</template>

<script>
export default {
    name: "Index",
    data(){
        return {
            // www001_width: document.getElementById('www001').offsetWidth,
            www001_width: 255,
            navHeaderImgUrl: 'http://123.57.95.214/sunweb/static/index_nav_header.png',
            car1: 'http://123.57.95.214/sunweb/static/car1.jpg',
            car2: 'http://123.57.95.214/sunweb/static/car2.jpg',
            car3: 'http://123.57.95.214/sunweb/static/car3.jpg',
            car4: 'http://123.57.95.214/sunweb/static/car4.jpg',
            t1: 'http://123.57.95.214/sunweb/static/t1.jpeg',
            t2: 'http://123.57.95.214/sunweb/static/t2.jpg',
            t3: 'http://123.57.95.214/sunweb/static/t3.jpg',
            t4: 'http://123.57.95.214/sunweb/static/t4.jpg',
            avatar: 'http://123.57.95.214/sunweb/static/avatar.jpg',
            h: 'http://123.57.95.214/sunweb/static/h.jpg',
            tag_alive: 'http://123.57.95.214/sunweb/static/tag_live.png',
            hot1: 'http://123.57.95.214/sunweb/static/hot1.png',
            hot2: 'http://123.57.95.214/sunweb/static/hot2.jpg',
            hot3: 'http://123.57.95.214/sunweb/static/hot3.png',
            hot4: 'http://123.57.95.214/sunweb/static/hot4.jpeg',
            hot5: 'http://123.57.95.214/sunweb/static/hot5.jpg',
            hot6: 'http://123.57.95.214/sunweb/static/hot6.jpg',
            wel: 'http://123.57.95.214/sunweb/static/welcome.jpg',
            model_shadow_show1: false, 
            model_shadow_show2: false, 
            model_shadow_show3: false,
        }
    },
    methods: {
        resize_www001_width: function(){
            this.www001_width = document.getElementById('www001').offsetWidth;
        }
    },
    mounted(){
        this.resize_www001_width()
        window.onresize = function(){
            resize_www001_width()
        }
    }
}
</script>

<style scoped>
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
    input {
        border-radius: 0;
        outline: none;
    }
    input:focus{
        box-shadow: none;
    }
    .no_out_line_btn{
        outline: none;
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
    .my_button3{
        padding: 0;
        border-radius: 3rem;
        outline: none;
    }
    .right_little_icon{
        background: #f8f9fa;
        color: #343a40;
        border-radius: 0;
        outline: none;
        cursor:pointer;
    }
    .right_little_icon:hover, .right_little_icon:focus, .right_little_icon:active{
        background: #dc3545;
        color: #f8f9fa;
        border-radius: 0;
        outline: none;
    }
    .right_little_icon>a{
        background: #f8f9fa;
        color: #343a40;
        border-radius: 0;
        outline: none;
    }
    .right_little_icon>a:hover, .right_little_icon>a:focus, .right_little_icon>a:active{
        background: #dc3545;
        color: #f8f9fa;
        border-radius: 0;
        outline: none;
    }

    .navHeaderImgCls {
        height: 3.4rem;
    }
    .header-input {
        width: 30%;
    }
    .second-item {
        border: none;
        cursor: pointer
    }
    .second-item:hover {
        color: #dc3545
    }
    .third-item{
        background:rgba(0,0,0,0.3);
        color:#fff;
        border: none;
    }
    .third-item:hover{
        background: #fff;
    }
    .third-item>div>a{
        color: #fff
    }
    .third-item:hover>div>a{
        color: #6c757d;
    }
    .third-item>ul{
        width:280px;
        padding-left:0;
        position:absolute;
        left:100%;
        top: 0;
        display: none;
    }
    .third-item:hover>ul{
        display: block;
    }
    .third-item>ul>div:hover{
        background: #fff;
    }
    .third-item>ul>div{
        border: none;
    }
    .third-item>ul>div>div>a{
        color: #6c757d;
    }
    #hhh0011 {
        display: none;
        position: absolute;
        top: 100%;
        z-index: 2;
    }
    #hhh0011:hover{
        display: block;
    }
    #hhh001:hover>#hhh0011{
        display: block;
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
    .model_join{
        top: 0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.4);
        border-radius: 0.25rem;
        text-align: center;
    }
    .tag_live{
        position: absolute;
        top: 0;
        margin-left: .8rem;
        z-index: 100;
        display: block;
    }
    .hot_border{
        border-radius: 0.25rem;
        padding: 1px;
        border: 1px solid #c8c9ca;
    }
    .hot_border:hover{
        border: 1px solid #dc3545;
    }
    .bg_about{
        background-image: url('http://123.57.95.214/sunweb/static/about_bg.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: 50%;
    }
    .bg_welcome{
        background-image: url('http://123.57.95.214/sunweb/static/welcome.jpg');
        background-repeat: no-repeat;
        background-position: 50%;
    }
    .right_border_fixed{
        float:right;
        width:35px;
        height: 100%;
        border-left: 1px solid #e3e3e3;
    }
    .right_arrow:hover, .right_arrow:focus, .right_arrow:active{
        color: #dc3545;
    }
    .right_class_item{
        border-bottom: 1px dotted #c8c9ca;
    }
    .my_card{
        transition:all 200ms ease;
    }
    .my_card:hover{
        transform: scale(1.05);
    }
</style>