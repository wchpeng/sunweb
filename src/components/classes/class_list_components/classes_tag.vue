<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <ul class="list-group">
                    <li class="list-group-item dashed-bottom-border">
                        <div class="row my-1">
                            <div class="col-2 type-title">
                               <button class="btn btn-sm btn-item" style="color:#000" disabled>所选分类：</button>
                            </div>
                            <div class="col type-item ">
                                <span class="ml-2"></span>
                                <span v-for="(item,idx) in all_types" :key="'all_type'+item.id">
                                    <span v-if="idx!=0">></span>
                                    <button
                                        class="btn btn-sm btn-link btn-item"
                                        @click="click_type(item.id)"
                                    >{{item.name}}</button>
                                </span>
                                <button 
                                    v-for="tag in all_tags" 
                                    :key="'all_tag'+tag.tag_id"
                                    @click="click_tag(tag.tag_id)"
                                    class="btn btn-sm btn-outline-secondary btn-item mx-2"
                                >{{tag.tag_name}} <Icon type="md-close" /></button>
                            </div>
                        </div>
                    </li>

                    <li class="list-group-item dashed-bottom-border">
                        <div class="row my-1">
                            <div class="col-2 type-title">
                                <button class="btn btn-sm btn-item" style="color:#000" disabled>分类：</button>
                            </div>
                            <div class="col type-item">
                                <button 
                                    v-for="item in level1_types" 
                                    :key="'level1'+item.id"
                                    class="btn btn-sm btn-link mx-2 btn-item"
                                    :class="{'type-active':item.active}"
                                    @click="click_type(item.id)"
                                >{{item.name}}</button>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item dashed-bottom-border" v-show="level2_types.length">
                        <div class="row my-1">
                            <div class="col-2 type-title">
                            </div>
                            <div class="col type-item">
                                <button 
                                    v-for="item in level2_types" 
                                    :key="item.id" 
                                    class="btn btn-sm btn-link mx-2 btn-item"
                                    :class="{'type-active':item.active}"
                                    @click="click_type(item.id)"
                                >{{item.name}}</button>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item dashed-bottom-border" v-show="level3_types.length">
                        <div class="row my-1">
                            <div class="col-2 type-title">
                            </div>
                            <div class="col type-item">
                                <button 
                                    v-for="item in level3_types" 
                                    :key="item.id" 
                                    class="btn btn-sm btn-link mx-2 btn-item"
                                    :class="{'type-active':item.active}"
                                    @click="click_type(item.id)"
                                >{{item.name}}</button>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item dashed-bottom-border" v-show="level4_types.length">
                        <div class="row my-1">
                            <div class="col-2 type-title">
                            </div>
                            <div class="col type-item">
                                <button 
                                    v-for="item in level4_types" 
                                    :key="item.id" 
                                    class="btn btn-sm btn-link mx-2 btn-item"
                                    :class="{'type-active':item.active}"
                                    @click="click_type(item.id)"
                                >{{item.name}}</button>
                            </div>
                        </div>
                    </li>


                    <li class="list-group-item" style="border:none;">
                        <div class="row my-1">
                            <div class="col-2 type-title">
                                <button class="btn btn-sm btn-item" style="color:#000" disabled>标签：</button>
                            </div>
                            <div class="col type-item">
                                <button 
                                    v-for="tag in tags" 
                                    :key="'tag'+tag.tag_id"
                                    @click="click_tag(tag.tag_id)"
                                    :class="{active:tag.active}"
                                    class="btn btn-sm btn-outline-secondary btn-item mx-2"
                                >{{tag.tag_name}}</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'classesTags',
    data(){
        let _types_data = [
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
                                id: 2345,
                                items: [
                                    {
                                        name: 'k10201',
                                        id: 56754,
                                        items: []
                                    },
                                    {
                                        name: 'k10202',
                                        id: 54644,
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
                        id: 445,
                        items: [
                            {
                                name: 'CET101',
                                id: 663,
                                items: []
                            },
                            {
                                name: 'CET17702',
                                id: 56321,
                                items: [
                                    {
                                        name: 'CET1027701',
                                        id: 123232,
                                        items: []
                                    },
                                    {
                                        name: 'CET10202',
                                        id: 134243,
                                        items: []
                                    }
                                ]
                            },
                            {
                                name: 'CET103',
                                id: 6543,
                                items: [
                                    {
                                        name: 'CET10203',
                                        id: 9876,
                                        items: []
                                    },
                                    {
                                        name: 'CET10203',
                                        id: 30305678302,
                                        items: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'CET2333',
                        id: 4444,
                        items: [
                            {
                                name: 'CET101',
                                id: 454323,
                                items: []
                            },
                            {
                                name: 'CET102',
                                id: 545,
                                items: [
                                    {
                                        name: 'CET10201',
                                        id: 53434345,
                                        items: []
                                    },
                                    {
                                        name: 'CET10202',
                                        id: 343312,
                                        items: []
                                    }
                                ]
                            },
                            {
                                name: 'CET103',
                                id: 11123444,
                                items: [
                                    {
                                        name: 'CET10203',
                                        id: 434321990,
                                        items: []
                                    },
                                    {
                                        name: 'CET10203',
                                        id: 99994,
                                        items: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
        let types_data = {}
        for (let i=0; i<_types_data.length; i++){
            this.init_types_data(types_data, _types_data[i], null)
        }

        let tags = [
            {
                tag_id: 1,
                tag_name: '汽修'
            },
            {
                tag_id: 2,
                tag_name: '背诵'
            },
            {
                tag_id: 3,
                tag_name: '哈弗'
            },
            {
                tag_id: 4,
                tag_name: '三资金'
            },
        ]
        let tags_map = {}
        for (let i=0; i<tags.length; i++){
            tags[i]['active'] = false
            tags_map[tags[i].tag_id] = tags[i]
        }
        return {
            click_type_ids: [],
            types_data: types_data,
            tags: tags,
            click_tag_ids: [],
            tags_map: tags_map,
        }
    },
    methods: {
        init_types_data(result, item, parent){
            item['parent'] = parent
            item['active'] = false
            result[item.id] = item
            for (var i=0; i<item.items.length;i++){
                this.init_types_data(result, item.items[i], item)
            }
        },
        click_tag(tag_id){
            if (this.tags_map[tag_id]['active']){
                this.remove_from_array(tag_id, this.click_tag_ids)
                this.tags_map[tag_id]['active'] = false
                // console.log('tag_id: ', tag_id)
                // console.log('this.click_tag_ids: ', this.click_tag_ids)
                // console.log('this.tags_map[tag_id]: ', this.tags_map[tag_id])
            } else {
                this.click_tag_ids.push(tag_id)
                this.tags_map[tag_id]['active'] = true
            }
        },
        click_type(id){
            let _item = this.types_data[id]
            let array = [id]
            while (Boolean(_item.parent)){
                array.unshift(_item.parent.id)
                _item = _item.parent
            }
            this.click_type_ids = array
            console.log(this.click_type_ids.length)
        },
        in_array(val, array){
            for (let i=0; i<array.length; i++){
                if (array[i] == val){
                    return true
                }
            }
            return false
        },
        remove_from_array(val, array){
            let index = array.indexOf(val)
            while (index > -1){
                array.splice(index, 1)
                index = array.indexOf(val)
            }
        }

    },
    watch: {
        click_type_ids: function(){
            for (let key in this.types_data){
                let _id = this.types_data[key].id
                if (this.in_array(_id, this.click_type_ids)){
                    this.types_data[_id].active = true
                } else {
                    this.types_data[_id].active = false
                }
            }
        }
    },
    computed: {
        level1_types: function(){
            let result = []
            for (let key in this.types_data){
                if (!Boolean(this.types_data[key].parent)){
                    result.push(this.types_data[key])
                }
            }
            return result.sort((a, b) => {a.id-b.id<0})
        },
        level2_types: function(){
            if (this.click_type_ids.length < 1){
                return []
            }
            let result = this.types_data[this.click_type_ids[0]].items
            console.log(result)
            return result
        },
        level3_types: function(){
            if (this.click_type_ids.length < 2){
                return []
            }
            return this.types_data[this.click_type_ids[1]].items
        },
        level4_types: function(){
            if (this.click_type_ids.length < 3){
                return []
            }
            return this.types_data[this.click_type_ids[2]].items
        },
        all_types: function(){
            let result = []
            for (let i=0; i<this.click_type_ids.length; i++){
                let type_id = this.click_type_ids[i]
                result.push(this.types_data[type_id])
            }
            return result
        },
        all_tags: function(){
            let result = []
            for (let i=0; i<this.click_tag_ids.length; i++){
                let type_id = this.click_tag_ids[i]
                result.push(this.tags_map[type_id])
            }
            return result
        }
    }
}
</script>

<style>
.type-item{
    padding-right: 0;
}
.type-item{
    padding-left: 0;
    margin-left: -3rem;
}
.type-active{
    color: #dc3545;
}
.type-active:hover,.type-active:focus,.type-active:active{
    color: #dc3545;
}
.btn-item{
    padding-top: 0;
    padding-bottom: 0;
}
.dashed-bottom-border{
    border: none;
    border-bottom: 1px dashed rgba(0,0,0,0.125);
}
</style>