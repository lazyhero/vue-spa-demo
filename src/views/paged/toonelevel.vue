<template>
    <div  transition="page" class="page page-current">
        <header class="bar bar-nav">
            <a class="button button-link button-nav pull-left back"  v-link="{path:'/D'}">
                <span class="icon icon-left"></span>
                返回
            </a>
            <h1 class="title">演示跳转一级页</h1>
        </header>
        <div class="content">
            <div class="circle_box">
                <div class="circle_top">
                    <div class="circle" id="circle">
                        <div class="text_box" id="text_box">
                            <p class="text">文本1</p>
                            <p class="count">文本2</p>
                        </div>
                    </div>
                </div>
                <div class="select">
                    <a id="shop" v-link="{path:'/B'}"><span>跳到B页</span></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
            }
        },
        methods:{
        }
    }
</script>
