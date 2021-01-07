<template>
    <div class="mb-3" style="background:#fff;padding: 20px">
        <Card :bordered="false" :dis-hover="true">
            <p slot="title">{{data.title}}</p>
            <div class="row">
                <div class="col">
                    <p class="my-1" v-for="(item,idx) in data.items" :key="'cls-cube-'+idx">{{item.username}} <span class="text-secondary">{{item.span_text}}</span> {{item.class_name}}</p>
                </div>
            </div>
        </Card>
    </div>
</template>

<script>
export default {
    name: 'classCubeList',
    props: {
        data: Object
    }
}
</script>

<style>

</style>