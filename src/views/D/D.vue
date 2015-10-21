
<template>

    <div id="D">
        <div class="list-block">
            <ul>
                <li>
                    <a v-link="{ path: '/D/D_A'}" external class="item-link item-content">
                        <div class="item-media"><i class="icon icon-gift"></i></div>
                        <div class="item-inner">
                            <div class="item-title">点击切换到D-A</div>
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
            console.log("D-dom准备完毕") // -> 'foo'
        },
        methods:{
            loadPage:function(gift_id){
                console.info(gift_id);
            }
        }
    }
</script>