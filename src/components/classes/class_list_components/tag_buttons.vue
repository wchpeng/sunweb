<template>
    <div>
        <button class="btn btn-sm btn-link">全部</button>


        
        <!-- <button class="btn btn-sm btn-link">K12英语</button>
        <button class="btn btn-sm btn-link">CET英语</button>
        <button class="btn btn-sm btn-link">出国留学</button>
        <button class="btn btn-sm btn-link">专业考研</button> -->

        
    </div>
</template>

<script>
export default {
    name: 'tagBtns',
    data(){
        return {
            tags_data: [
                {
                    name: '全部',
                    id: 1,
                    items: []
                },
                {
                    name: 'K12英语',
                    id: 2,
                    items: [
                        {
                            name: 'k1',
                            id: 201,
                            items: [
                                {
                                    name: 'k101',
                                    id: 20101,
                                    items: []
                                },
                                {
                                    name: 'k102',
                                    id: 20102,
                                    items: [
                                        {
                                            name: 'k10201',
                                            id: 2010201,
                                            items: []
                                        },
                                        {
                                            name: 'k10202',
                                            id: 2010202,
                                            items: []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'CET-ENG',
                    id: 3,
                    items: [
                        {
                            name: 'CET1',
                            id: 301,
                            items: [
                                {
                                    name: 'CET101',
                                    id: 30201,
                                    items: []
                                },
                                {
                                    name: 'CET102',
                                    id: 30202,
                                    items: [
                                        {
                                            name: 'CET10201',
                                            id: 3010201,
                                            items: []
                                        },
                                        {
                                            name: 'CET10202',
                                            id: 3010202,
                                            items: []
                                        }
                                    ]
                                },
                                {
                                    name: 'CET103',
                                    id: 30302,
                                    items: [
                                        {
                                            name: 'CET10203',
                                            id: 3030201,
                                            items: []
                                        },
                                        {
                                            name: 'CET10203',
                                            id: 3010302,
                                            items: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: 'CET1',
                            id: 301,
                            items: [
                                {
                                    name: 'CET101',
                                    id: 30201,
                                    items: []
                                },
                                {
                                    name: 'CET102',
                                    id: 30202,
                                    items: [
                                        {
                                            name: 'CET10201',
                                            id: 3010201,
                                            items: []
                                        },
                                        {
                                            name: 'CET10202',
                                            id: 3010202,
                                            items: []
                                        }
                                    ]
                                },
                                {
                                    name: 'CET103',
                                    id: 30302,
                                    items: [
                                        {
                                            name: 'CET10203',
                                            id: 3030201,
                                            items: []
                                        },
                                        {
                                            name: 'CET10203',
                                            id: 3010302,
                                            items: []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style>

</style>