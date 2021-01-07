<template>
    <div style="background:#eee">
        <common-header></common-header>
        <teacher-item class="my-2"></teacher-item>
        <footer-copyright></footer-copyright>
    </div>
</template>

<script>
import CommonHeader from '../components/classes/header.vue'
import FooterCopyright from '../components/index/footer_copyright.vue'
import TeacherItem from '../components/admin/teacher/teacher.vue'

export default {
    name: 'admin_mystudy',
    data(){
        return {}
    },
    components: {
        'common-header': CommonHeader,
        'footer-copyright': FooterCopyright,
        'teacher-item': TeacherItem,
    }
}
</script>

<style>

</style>