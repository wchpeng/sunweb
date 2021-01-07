<template>
    <div style="background:#eee">
        <common-header></common-header>
        <my-study-item class="my-4"></my-study-item>
        <footer-copyright></footer-copyright>
    </div>
</template>

<script>
import CommonHeader from '../components/classes/header.vue'
import FooterCopyright from '../components/index/footer_copyright.vue'
import MyStudyItem from '../components/admin/my_study/my_study.vue'

export default {
    name: 'admin_mystudy',
    data(){
        return {}
    },
    components: {
        'common-header': CommonHeader,
        'footer-copyright': FooterCopyright,
        'my-study-item': MyStudyItem,
    }
}
</script>

<style>

</style>