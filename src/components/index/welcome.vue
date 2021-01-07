<template>
    <!-- 欢迎页 -->
    <div>
        <div class="bg_welcome" :style="{backgroundImage: 'url(' + data.bg_image + ')'}" style="width:100%;height:100%;">
            <div class="text-center py-5" style="background:rgba(0,0,0,0.6)">
                <div class="pt-4 pb-4 display-4 text-light">
                    {{data.title}}
                </div>
                <div class="pb-5">
                    <button type="button" class="btn btn-lg btn-success my_button3">&nbsp;&nbsp; {{data.enter_text}} &nbsp;&nbsp;</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'indexBgWelcome',
    props: {
        data: Object
    }
}
</script>

<style>
    .bg_welcome{
        background-repeat: no-repeat;
        background-position: 50%;
    }
    .my_button3{
        padding: 0;
        border-radius: 3rem;
        outline: none;
    }
</style>