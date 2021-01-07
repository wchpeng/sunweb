<template>
    <div>
        <div id="container"><img class="png" src="http://123.57.95.214/sunweb/static/404/404.png" /> <img class="png msg" src="http://123.57.95.214/sunweb/static/404/404_msg.png" />
        <p><a href="/" target="_blank"><img class="png" src="http://123.57.95.214/sunweb/static/404/404_to_index.png" /></a> </p>
        </div><div id="cloud" class="png"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
/*  搜集整理 www.198zone.com */
body, div {
    margin: 0;
    padding: 0;
}
body {
    background: url("http://123.57.95.214/sunweb/static/404/404_bg.jpg/404_bg.jpg") repeat-x scroll 0 0 #67ACE4;
}
#container {
    margin: 0 auto;
    padding-top: 50px;
    text-align: center;
    width: 560px;
}
#container img {
    border: medium none;
    margin-bottom: 50px;
}
#container .error {
    height: 200px;
    position: relative;
}
#container .error img {
    bottom: -50px;
    position: absolute;
    right: -50px;
}
#container .msg {
    margin-bottom: 65px;
}
#cloud {
    background: url("http://123.57.95.214/sunweb/static/404/404_bg.jpg/404_cloud.png") repeat-x scroll 0 0 transparent;
    bottom: 0;
    height: 170px;
    position: absolute;
    width: 100%;
}
</style>