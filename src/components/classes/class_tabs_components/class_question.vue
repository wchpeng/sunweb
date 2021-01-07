<template>
    <div>
        <ul class="list-group mb-3" v-show="show_questions">
            <li class="list-group-item" style="border-left:none;border-right:none;border-top:none;">
                <div class="row">
                    <div class="col">
                        <button class="btn btn-sm btn-outline-info active" style="font-size:.7rem">全部</button>
                        <button class="btn btn-sm btn-outline-info" style="font-size:.7rem">精华</button>

                        <button class="btn btn-sm" style="font-size:.7rem;padding-right:0" disabled>排序:</button>
                        <div class="btn-group">
                            <button style="padding-left:0;font-size:.7rem" type="button" class="btn btn-sm btn-outline dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {{latest_content}}
                            </button>
                            <div class="dropdown-menu">
                                <button class="dropdown-item" style="font-size:.7rem">最新回复</button>
                                <button class="dropdown-item" style="font-size:.7rem">最新发帖</button>
                            </div>
                        </div>

                        <button class="btn btn-sm btn-outline-secondary" @click="show_ask=true" style="font-size:.7rem;float:right">提问题</button>
                    </div>
                </div>
            </li>

            <li class="list-group-item" style="border-left:none;border-right:none;border-top:none;">
                <div class="row">
                    <div class="col-1 text-center div-avatar">
                        <img style="display:block" src="http://123.57.95.214/sunweb/static/a.jpg" class="img-fluid rounded-circle" alt="">
                    </div>
                    <div class="col-10">
                        <div class="my-2" style="font-size:1.2rem"><a @click="show_reply=true" href="javascript:;"><Icon color="red" type="md-help-circle" /> textsssss</a></div>
                        <div style="font-size:.7rem;color:#a3a3a3">洪伟 发起了提问 · 最后回复 <span class="text-danger">洪伟</span> · 9分钟前</div>
                    </div>
                </div>
            </li>
            <li class="list-group-item" style="border-left:none;border-right:none;border-top:none;">
                <div class="row">
                    <div class="col-1 text-center div-avatar">
                        <img style="display:block" src="http://123.57.95.214/sunweb/static/a.jpg" class="img-fluid rounded-circle" alt="">
                    </div>
                    <div class="col-10">
                        <div class="my-2" style="font-size:1.2rem"><a href=""><Icon color="red" type="md-help-circle" /> textsssss</a></div>
                        <div style="font-size:.7rem;color:#a3a3a3">洪伟 发起了提问 · 最后回复 <span class="text-danger">洪伟</span> · 9分钟前</div>
                    </div>
                </div>
            </li>
        </ul>

        <div class="mb-5" v-show="show_ask">
            <button class="btn btn-sm btn-light mb-3" @click="show_ask=false"><Icon type="ios-arrow-back" /><strong style="font-size:.8rem">返回</strong></button>
            <input type="text" class="form-control text-secondary mb-3" style="font-size:.8rem" placeholder="标题，一句话描述你的问题~" >
            <quill-editor v-model="content" :options="editorOption"></quill-editor>
            <button type="button" class="btn btn-primary btn-sm float-right mt-2">提问</button>
        </div>

        <ul class="list-group" v-show="show_reply">
            <li class="list-group-item" style="border-left:none;border-right:none;border-top:none;">
                <div class="row mb-2">
                    <div class="col-11">
                        <div class="mb-3" @click="show_reply = false">
                            <button class="btn btn-sm btn-light"><Icon type="ios-arrow-back" /><strong style="font-size:.8rem">返回</strong></button>
                        </div>
                        <div>
                            <button class="btn btn-primary btn-sm" disabled>问</button>
                            <span class="ml-2" style="font-size:1.5rem;vertical-align:bottom"> textsssss</span>
                        </div>
                    </div>
                    <div class="col-1" style="padding:10px">
                        <img style="display:block" src="http://123.57.95.214/sunweb/static/a.jpg" class="img-fluid rounded-circle" alt="">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    <div style="font-size:.7rem;color:#a3a3a3">By <span class="text-danger">洪伟</span> · 9分钟前 · 4此浏览</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col my-5">
                    我的房间上分卡设计费李开复计算列宽是婕拉司法局雷锋及旅客 
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <a href="" class="float-right ml-3"><Icon type="ios-create-outline" />编辑</a>
                        <a href="" class="float-right ml-3"><Icon type="md-close-circle" />删除</a>
                        <a href="" class="float-right ml-3"><Icon type="ios-arrow-dropup-circle" />置顶</a>
                        <a href="" class="float-right ml-3"><Icon type="md-thumbs-up" />加精</a>
                    </div>
                </div>

                <div class="my-5" style="font-size:1.2rem;padding-bottom:.5rem;border-bottom:4px solid #d3d3d3">
                    <Icon type="ios-redo" /> 2回复
                </div>

                <div class="row my-3">
                    <div class="col-1 text-center">
                        <img style="display:block" src="http://123.57.95.214/sunweb/static/a.jpg" class="img-fluid rounded-circle" alt="">
                    </div>
                    <div class="col-11">
                        <div style="color:#a3a3a3">洪伟 · 9分钟前</div>
                        <div>textsssss</div>
                    </div>
                </div>
                <hr>
                <div class="row my-3">
                    <div class="col-1 text-center">
                        <img style="display:block" src="http://123.57.95.214/sunweb/static/a.jpg" class="img-fluid rounded-circle" alt="">
                    </div>
                    <div class="col-11">
                        <div style="color:#a3a3a3">洪伟 · 9分钟前</div>
                        <div>textsssss</div>
                    </div>
                </div>
                <hr>
                <div class="row my-3">
                    <div class="col-1 text-center">
                        <img style="display:block" src="http://123.57.95.214/sunweb/static/a.jpg" class="img-fluid rounded-circle" alt="">
                    </div>
                    <div class="col-11">
                        <div style="color:#a3a3a3">洪伟 · 9分钟前</div>
                        <div>textsssss</div>
                    </div>
                </div>

                <div class="mt-5" style="font-size:1.2rem;padding-bottom:.5rem;border-bottom:4px solid #d3d3d3">
                    <Icon type="md-add" /> 添加回复
                </div>
                <div class="mt-4">
                    <quill-editor v-model="content" :options="editorOption"></quill-editor>
                    <button type="button" class="btn btn-primary btn-sm float-right mt-2">添加答案</button>
                </div>
            </li>
            
        </ul>
    </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.core.css";

export default {
    data(){
        return {
            show_ask: false,
            show_reply: false,
            ask_content: '',
            content: '',
            latest_content: '最新提问',
            editorOption: {placeholder: ''}
        }
    },
    components: {
        'quill-editor': quillEditor,
    },
    computed: {
        show_questions: function(){
            return !(this.show_ask || this.show_reply)
        }
    }
}
</script>

<style>
.div-avatar{
    padding: 12px
}
.ql-editor{
    height: 220px;
}
</style>