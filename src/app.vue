<style>
.body {
}
</style>

<template>
    <div class="page page-current">

        <nav class="bar bar-tab" v-if="isIndex" >
            <a class="tab-item" external v-link="{ path: '/home',activeClass: 'active'}">
                <span class="icon icon-home"></span>
                <span class="tab-label">首页</span>
            </a>
            <a class="tab-item" external v-link="{ path: '/B',activeClass: 'active' }">
                <span class="icon icon-gift"></span>
                <span class="tab-label">B页</span>
            </a>
            <a class="tab-item" external  v-link="{ path: '/C',activeClass: 'active' }">
                <span class="icon icon-app"></span>
                <span class="tab-label">C页</span>
            </a>
            <a class="tab-item" external v-link="{ path: '/D',activeClass: 'active' }">
                <span class="icon icon-me"></span>
                <span class="tab-label">D页</span>
            </a>
        </nav>
        <!-- 缓存一级路由切换的页面 -->
        <router-view keep-alive></router-view>
    </div>
</template>

<script>
module.exports = {
    data :function() {
        return {
            authenticating: false,
            isIndex:true
        }
    }
}
</script>
