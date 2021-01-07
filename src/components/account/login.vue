<template>
    <div class="pb-5" style="background:#fff;border:1px solid rgba(0,0,0,0.15);border-radius:8px;">
        <div class="btn-group btn-group-toggle btn-block mb-3" data-toggle="buttons">
            <label 
                @click="show_login=true"
                :class="{'login-register-btn-active':show_login}" 
                class="btn btn-lg login-register-btn" 
                style="border-top-left-radius: 8px;"
            >
                <input type="radio" name="options" id="option1" autocomplete="off" checked> 登录
            </label>
            <label 
                @click="show_login=false"
                :class="{'login-register-btn-active':!show_login}" 
                class="btn btn-lg login-register-btn" 
                style="border-top-right-radius: 8px;"
            >
                <input type="radio" name="options" id="option2" autocomplete="off"> 注册
            </label>
        </div>
        <div class="px-2">
            <Form v-show="!show_login" :model="register_info" class="px-5 pt-5" :rules="register_rules" label-position="top">
                <FormItem prop="phone">
                    <p class="my-input-label"><strong>手机号码</strong></p>
                    <Input size="large" maxlength="11" placeholder="您正常使用的手机号" search enter-button="发送验证码" v-model="register_info.phone"></Input>
                </FormItem>    
                <FormItem prop="username">
                    <p class="my-input-label"><strong>用户名</strong></p>
                    <Input size="large" maxlength="20" placeholder="中英文均可，5~20个字" v-model="register_info.username"></Input>
                </FormItem>    
                <FormItem prop="password">
                    <p class="my-input-label"><strong>密码</strong></p>
                    <Input size="large" max_length="20" placeholder="5~20位" password type="password" v-model="register_info.password"></Input>
                </FormItem>    
                <FormItem prop="verify_code">
                    <p class="my-input-label"><strong>验证码</strong></p>
                    <Input size="large" placeholder="手机验证码" v-model="register_info.verify_code"></Input>
                </FormItem>    
                
                <button class="btn btn-block btn-primary mt-4">注册</button>
            </Form>

            <Form v-show="show_login" :model="login_info" :rules="login_rules" class="px-5 pt-5" label-position="top">
                <FormItem prop="username">
                    <p class="my-input-label"><strong>用户名</strong></p>
                    <Input size="large" placeholder="手机号/用户名" v-model="login_info.username"></Input>
                </FormItem>    
                <FormItem prop="password">
                    <p class="my-input-label"><strong>密码</strong></p>
                    <Input size="large" max_length="20" placeholder="密码" password v-model="login_info.password"></Input>
                </FormItem>    
                <button class="btn btn-block btn-primary mt-4">登录</button>
            </Form>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                show_login: false,
                register_info: {
                    phone: '',
                    username: '',
                    password: '',
                    verify_code: '',
                },
                login_info: {
                    username: '',
                    password: ''
                },
                login_rules: {
                    username: [
                        { required: true, message: '请输入手机号或用户名', trigger: 'blur' },
                        { type: 'string', min: 5, message: '应在 5~20 位', trigger: 'blur'}
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 5, max:20, message: '密码应在 5~20 位', trigger: 'blur' }
                    ]
                },
                register_rules: {
                    phone: [
                        { required: true, message: '请输入手机号', trigger: 'blur' },
                        { 
                            type: 'string',
                            trigger: 'blur',
                            asyncValidator: (rule, value) => {
                                return new Promise((resolve, reject) => {
                                    if (!/0?(13|14|15|17|18|19)[0-9]{9}/.test(value)){
                                        reject('电话号码格式错误！');
                                    } else {
                                        resolve();
                                    }
                                })
                            }
                        }
                    ],
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { type: 'string', min: 5, message: '应在 5~20 位', trigger: 'blur'}
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 5, max:20, message: '密码应在 5~20 位', trigger: 'blur' }
                    ],
                    verify_code: [
                        { required: true, message: '请输入验证码', trigger: 'blur' },
                        { type: 'string', min: 5, message: '应在 5~20 位', trigger: 'blur'}
                    ],
                }
            }
        }
    }
</script>

<style>
.my-input-label{
    margin-top: -10px;
    padding-bottom: 5px;
}
.ivu-input:focus{
    /* 去掉边框阴影 */
    box-shadow: none!important;
}
.login-register-btn{
    border: none;
    height: 60px;
    padding: 15px;
    background: #eee;
    color: rgb(0, 0, 0, 0.5);
    border-radius: 0;
}
.login-register-btn:hover,.login-register-btn:active,.login-register-btn:focus{
    background: #fff;
    color: rgb(0, 0, 0, 0.5);
}
.login-register-btn-active{
    background: #fff;
}
</style>