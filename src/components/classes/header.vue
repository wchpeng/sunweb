<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white" style="font-size:1rem">
        <a class="navbar-brand" href="#">
            <img :src="nav_header" style="height:3rem" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item mx-2">
                    <a class="nav-link header_link" href="#">课程哈哈</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link header_link" href="#">课程哈哈</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link header_link" href="#">课程哈哈</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link header_link" href="#">课程哈哈</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link header_link" href="#">Pricing</a>
                </li>
            </ul>
        </div>
        
        <form class="form-inline ml-3">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                <div class="input-group-apppend">
                    <button class="input-group-text my_button" id="basic-addon1">&nbsp; 🔍 &nbsp;</button>
                </div>
            </div>
        </form>
        <!-- <a type="button" class="btn-link mx-5" id="">登录/注册</a> -->
        <!-- <div class="btn-group mx-3">
            <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                管理后台
            </button>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#">管理后台</a>
                <a class="dropdown-item" href="#">我的教学</a>
                <a class="dropdown-item" href="#">我的学习</a>
            </div>
        </div> -->
        <Dropdown trigger="click" style="margin-left: 20px">
            <a href="javascript:void(0)">
                管理后台
                <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
                <DropdownItem>管理后台</DropdownItem>
                <DropdownItem>我的教学</DropdownItem>
                <DropdownItem>我的学习</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <span class="mr-5 pr-2">
        <Dropdown trigger="click" style="margin-left: 20px">
            <a href="javascript:void(0)">
                <img :src="avatar" style="width:1.5rem;" class="rounded-circle">
                <!-- <Icon type="ios-arrow-down"></Icon> -->
            </a>
            <DropdownMenu slot="list">
                <DropdownItem>
                    <strong>洪伟</strong>
                    <div>
                        <Icon type="ios-snow-outline" />
                        <span style="font-size:.4rem">普通学员</span>
                    </div>
                </DropdownItem>
                <DropdownItem divided>个人中心</DropdownItem>
                <DropdownItem>通知</DropdownItem>
                <DropdownItem divided>退出登录</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        </span>
    </nav>
    </div>
</template>


<script>
export default {
    name: 'classDetail',
    data(){
        return {
            nav_header: 'http://123.57.95.214/sunweb/static/index_nav_header.png',
            avatar: 'http://123.57.95.214/sunweb/static/avatar.jpg'
        }
    }
}
</script>

<style scoped>
    .header_link{
        font-size: 1rem;
    }
    .header_link:hover,.header_btn:focus,.header_btn:active{
        color: #dc3545!important;
    }
    input {
        border-radius: 0!important;
        outline: none;
    }
    input:focus, input:active{
        box-shadow: none!important;
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
</style>