<style>
</style>

<template>
    <div class="page page-current">

        <nav class="bar bar-tab" v-if="isIndex" >
            <a class="tab-item" external v-link="{ path: '/A',activeClass: 'active'}">
                <span class="icon icon-home"></span>
                <span class="tab-label">ViewA</span>
            </a>
            <a class="tab-item" external v-link="{ path: '/B',activeClass: 'active' }">
                <span class="icon icon-gift"></span>
                <span class="tab-label">ViewB</span>
            </a>
            <a class="tab-item" external  v-link="{ path: '/C',activeClass: 'active' }">
                <span class="icon icon-app"></span>
                <span class="tab-label">ViewC</span>
            </a>
            <a class="tab-item" external v-link="{ path: '/D',activeClass: 'active' }">
                <span class="icon icon-me"></span>
                <span class="tab-label">ViewD</span>
            </a>
        </nav>
            <router-view keep-alive></router-view>
    </div>

</template>

<script>
module.exports = {
    data :function() {
        return {
            isIndex:true
        }
    }
}
</script>
