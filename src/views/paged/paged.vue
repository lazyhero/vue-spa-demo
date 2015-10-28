
<template>

    <div id="my">
        <div class="card_my">
            <div class="card list-block">
                <div class="card-content">
                    <div class="card-content-inner">
                        <div class="row avatar_row">
                            <div class="col-50">
                                <div class="row">
                                    <div class="col-50">
                                        <div class="avatar">
                                            <img style="border-radius: 100%;" />
                                        </div>
                                    </div>
                                    <div class="col-50">
                                        <div class="avatar_name">
                                            波多野结衣
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-50">
                                <div class="row">
                                    <div class="col-100">
                                        <span class="rule" id="rule">文本1</span>
                                        <div class="level_txt"><span>文本2</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card_my_2">
            <div class="card list-block">
                <div class="card-content">
                    <div class="card-content-inner">
                        <div class="row">
                            <div class="col-100">
                                <p>文本3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="list-block my-menu-1">
            <ul>
                <li>
                    <a v-link="{ path: '/D/toonelevel'}" external class="item-link item-content">
                        <div class="item-media"><i class="icon icon-gift"></i></div>
                        <div class="item-inner">
                            <div class="item-title">演示路由跳转</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a v-link="{ path: '/D/vfor'}" external class="item-link item-content">
                        <div class="item-media"><i class="icon icon-cart"></i></div>
                        <div class="item-inner">
                            <div class="item-title">演示v-for&子路由跳转</div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

        <div class="list-block" >
            <ul>
                <li>
                    <a v-link="{ path: '/D/vmodel'}" external class="item-link item-content">
                        <div class="item-media"><i class="icon icon-menu"></i></div>
                        <div class="item-inner">
                            <div class="item-title">演示v-model</div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

    </div>
    <router-view>
    </router-view>
</template>
<script>
    module.exports = {
        data: function(){
            return {
            }
        },
        ready: function () {
            console.log("my-dom准备完毕") // -> 'foo'
        },
        methods:{
        }
    }
</script>