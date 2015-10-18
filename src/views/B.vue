<style>
</style>

<template>
    <div id="gift" class="content">

        <div class="row no-gutter">
            <a v-for="record in records"  class="col-50" v-link="{ name: 'B_A', params: { recordId: record.id }}" v-bind:class="{'list-item__left':($index%2==0?true:false),'list-item__right':($index%2==0?false:true)}">
                <div class="content-padded list-item__info">
                    <p class="mod_state"><span>{{record.supplier}}</span><span vs-if="!record.isHave" class="state state_grey">抢光了</span></p>
                    <p>{{record.title}}</p>
                    <p>{{record.per_count}}<span class="per_count"></span></p>
                </div>
                <div class="no-gutter">
                    <img class="mod_img" v-bind:src="record.pic" alt="">
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
                    {id:"11073",title:"Beats入耳式耳机",supplier:"苹果促销",pic:"http://static.diditaxi.com.cn/op/imall_cms_image/20150910/20150910180605list.jpg",per_count:"6000",isHave:true},
                    {id:"12073",title:"AppleIpadMini",supplier:"苹果促销",pic:"http://static.diditaxi.com.cn/op/imall_cms_image/20150821/20150821103302list.jpg",per_count:"2800",isHave:false},
                    {id:"13073",title:"Beats入耳式耳机",supplier:"苹果促销",pic:"http://static.diditaxi.com.cn/op/imall_cms_image/20150910/20150910180605list.jpg",per_count:"6000",isHave:true},
                    {id:"14073",title:"AppleIpadMini",supplier:"苹果促销",pic:"http://static.diditaxi.com.cn/op/imall_cms_image/20150821/20150821103302list.jpg",per_count:"2800",isHave:false}
                ]
            }
        },
        ready: function () {
            console.log(this) // -> 'foo'
        },
        methods:{
            _showDetail:function(gift_id){
                console.info(gift_id);
            }
        }
    }
</script>
