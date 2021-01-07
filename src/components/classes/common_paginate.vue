<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li class="page-item" :class="{disabled: page==1}">
                <a class="page-link page-a"  @click="$emit('click_page', page-1)" tabindex="-1">上一页</a>
            </li>
            
            <li v-for="pg in total_page" :key="'page'+pg" class="page-item" :class="{active:pg==page}">
                <a class="page-link page-a" @click="$emit('click_page', pg)">{{pg}}</a>
            </li>
            <li class="page-item" :class="{disabled: page==total_page}">
                <a class="page-link page-a" @click="$emit('click_page', page+1)">下一页</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'common-paginate',
    props: {
        total: Number,
        page_size: Number,
        page: Number
    },
    computed: {
        total_page: function(){
            return Math.ceil(this.total/this.page_size)
        }
    }
}
</script>

<style scope>
.page-a:hover, .page-a:focus, .page-a:active, .page-a:visited{
    box-shadow: none;
}

</style>