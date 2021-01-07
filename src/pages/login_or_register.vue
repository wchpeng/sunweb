<template>
    <div style="background:#eee">
        <common-header></common-header>
        <div class="container-fluid" style="height:680px">
            <div class="row">
                <div class="col-4 offset-4">
                    <login-cube class="mt-5"></login-cube>
                </div>
            </div>
        </div>
        <footer-copyright></footer-copyright>
    </div>
</template>
<script>
import LoginCube from '../components/account/login.vue'
import CommonHeader from '../components/classes/header.vue'
import FooterCopyright from '../components/index/footer_copyright.vue'

    export default {
        data () {
            return {
            }
        },
        components: {
            'login-cube': LoginCube,
            'common-header': CommonHeader,
            'footer-copyright': FooterCopyright,
        }
    }
</script>
