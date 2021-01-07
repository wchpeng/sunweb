<template>
    <div class="mb-3" style="background:#fff;padding: 20px">
        <Card :bordered="false" :dis-hover="true">
            <p slot="title">{{data.title}}</p>
            <div class="row">
                <div class="col-3" style="padding-right:0px">
                    <p><Avatar size="43" :src="data.avatar" /></p>
                </div>
                <div class="col-9">
                    <p class="text-dark"><strong>{{data.username}}</strong></p>
                    <p class="mt-2 text-secondary" style="font-size:0.7rem">{{data.sign}}</p>
                </div>
            </div>
        </Card>
    </div>
</template>

<script>
export default {
    name: 'classTeacherCube',
    props: {
        data: Object
    }
}
</script>

<style>

</style>