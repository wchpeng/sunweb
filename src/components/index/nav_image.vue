<template>
    <!-- nav 图 -->
    <div>
        <div class="bg_about" :style="{backgroundImage: 'url(' + data.bg_image + ')'}" style="width:100%;height:100%;">
            <div style="background:rgba(0,0,0,0.7)">
                <div class="container text-center">
                    <div class="row">
                        <div class="col text-light mt-4">
                            <p  style="font-size:1.5rem">{{data.title}}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div v-for="(item,index) in data.items" :key="data.title+index" class="col mb-4">
                            <div>
                                <span class="text-light" style="font-size:3rem">{{item.statistic_num}}</span>
                                <span class="text-light">{{item.statistic_unit}}</span>
                            </div>
                            <div class="text-light mb-4">{{item.desc}}</div>
                        </div>

                        <!-- <div class="col mb-4">
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
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'indexNavImage',
    data(){
        return {}
    },
    props: {
        data: Object
    }
}
</script>

<style>
    .bg_about{
        /* background-image: url('http://123.57.95.214/sunweb/static/about_bg.jpg'); */
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: 50%;
    }
</style>