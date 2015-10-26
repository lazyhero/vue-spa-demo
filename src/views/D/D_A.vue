<template>
    <div id="D_A" transition="page" class="page page-current">
        <header class="bar bar-nav">
            <a class="button button-link button-nav pull-left back"  v-link="{path:'/D'}">
                <span class="icon icon-left"></span>
                返回
            </a>
            <h1 class="title">D_A-Page</h1>
        </header>
        <div class="content">

            This is Page-D_A
            </br>
            <a v-link="{path:'/B'}"><span>跳转到B</span></a>

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