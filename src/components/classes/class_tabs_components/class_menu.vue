<template>
    <div class="list-group class-list-group">
        <button type="button" class="list-group-item list-group-item-action class-time-item">
            <a href="">
                <Icon type="md-checkbox-outline" />
                课程1
                <span class="float-right">直播已结束<Icon type="ios-videocam" /></span>
            </a>
        </button>
        <button type="button" class="list-group-item list-group-item-action class-time-item">
            <a href="">
                <Icon type="md-square-outline" />
                课程2
                <span class="float-right">直播进行中<Icon type="md-desktop" /></span>
            </a>
        </button>
        <button type="button" class="list-group-item list-group-item-action class-time-item">
            <a href="">
                <Icon type="md-square-outline" />
                课程3
                <span class="float-right">01:25<Icon type="md-arrow-dropright-circle" /></span>
            </a>
        </button>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.class-time-item{
    border-left:none;
    border-right:none;
    border-top:none;
    border-bottom: none;
}
.class-time-item:hover,.class-time-item:focus,.class-time-item:active{
    background: #eee;
    outline: none!important;  
    border-color: transparent!important;  
    box-shadow:none!important;
}
.class-list-group{
    border-radius: 0;
}
</style>