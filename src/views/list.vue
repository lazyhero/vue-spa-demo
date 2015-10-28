<template>
    <div id="gift" class="content">
        <div class="row no-gutter">
            <a v-for="record in records"  class="col-50" v-link="{ name: 'detail', params: { recordId: record.id }}" v-bind:class="{'list-item__left':($index%2==0?true:false),'list-item__right':($index%2==0?false:true)}">
                <div class="content-padded list-item__info">
                    <p class="mod_state"><span>{{record.supplier}}</span><span vs-if="!record.isHave" class="state state_grey">干啥</span></p>
                    <p>{{record.title}}</p>
                    <p>{{record.per_count}}<span class="per_count"></span></p>
                </div>
                <div class="no-gutter">
                    <img class="mod_img" src={{record.pic}} alt="">
                </div>
            </a>
        </div>
    </div>
    <router-view>
    </router-view>
</template>

<script>
    module.exports = {
        data: function(){
            return {
                records : [
                    {id:"11073",title:"文本",supplier:"文本2",pic:"http://7jpswm.com1.z0.glb.clouddn.com/vue-spa50.pic.jpg",per_count:"250",isHave:true},
                    {id:"12073",title:"文本",supplier:"文本2",pic:"http://7jpswm.com1.z0.glb.clouddn.com/vue-spa50.pic.jpg",per_count:"250",isHave:false},
                    {id:"13073",title:"文本",supplier:"文本2",pic:"http://7jpswm.com1.z0.glb.clouddn.com/vue-spa50.pic.jpg",per_count:"250",isHave:true},
                    {id:"14073",title:"文本",supplier:"文本2",pic:"http://7jpswm.com1.z0.glb.clouddn.com/vue-spa50.pic.jpg",per_count:"250",isHave:false}
                ]
            }
        },
        ready: function () {
            console.log(this) // -> 'foo'
        },
        methods:{

        }
    }
</script>
