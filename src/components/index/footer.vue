<template>
    <!-- 底部栏 -->
    <div class="footer pt-5">
        <div class="py-4" style="background:#c8c9ca;font-size:.8rem;color:#6c757d;">
            <div class="container">
                <div v-for="(item,idx) in data.items" :key="'footer'+idx" class="row">
                    <div class="col-1"></div>
                    <div class="col">
                        <span class="mr-2">{{item.name}}</span>
                        <template v-for="(link,idx2) in item.links">
                            <span v-if="idx2!=0" :key="'s'+idx2"> |</span>
                            <a :href="link.url" :key="'k'+idx2">{{link.name}}</a>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-white-50 py-4 text-center" style="font-size:.9rem;background:#444">
            <div class="mb-3">{{data.copyright}}</div>
            <div>{{data.copyright_text}}</div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'indexFooter',
    props: {
        data: Object
    }
}
</script>

<style>

</style>