<template>
    <div>
        <div class="row" @mouseenter="show_check_note = true" @mouseleave="show_check_note = false">
            <div class="col-3">
                <a href="">
                    <img src="http://123.57.95.214/sunweb/static/t1.jpeg" class="img-fluid" alt="">
                </a>
            </div>
            <div class="col-9" style="font-size:.9rem">
                <a href="">
                    <p class="my-2 text-secondary">共 <span>1</span> 篇笔记</p>
                    <p class="mt-3"><span class="text-secondary">最后更新于1天前</span><span v-show="show_check_note" class="float-right">查看笔记</span></p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyNoteItem',
    data(){
        return {
            show_check_note: false
        }
    }
}
</script>

<style>

</style>