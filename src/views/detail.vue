<style>
</style>

<template>
    <div class="page page-current" >
        <div class="content detail_content">
            <div class="row no-gutter">
                <div class="col-100 img_head">
                    <img class="gift-cover" src="{{gift.bigPic}}">
                    <div class="gradients">
                        <p id="merchant_name">{{gift.merchant_name}}</p>
                        <p id="name">{{gift.name}}</p>
                    </div>
                </div>
            </div>
            <div class="row no-gutter describe" v-bind:class="{fixTop:isFixDesc}">
                <div class="col-50 ">
                    <span id="goods_count">{{gift.pre_count}}</span>
                </div>
                <div class="col-50 ">
                    <a v-if="!isGet" href="javascript:void(0)" v-on:click="pay(gift.id)" class="btn-org">立即兑换</a>
                    <div v-if="isGet" class="btn-gray">已兑换</div>
                </div>
            </div>
            <div class="main" id="main">
                <div v-html="gift.content"></div>
            </div>
            <div class="row no-gutter">
                <div class="col-100" style="background-color: #ffffff">
                    <div class="border">
                        <div class="declare">
                            <p>重要说明</p>
                            <div class="declare_cont" id="declare">
                                <div>商品兑换流程请仔细参照商品详情页的“兑换流程”、“注意事项”与“使用时间”，除商品本身不能正常兑换外，商品一经兑换，一律不退还积分。（如商品过期、兑换流程操作失误、仅限新用户兑换）</div>
                                <div>活动由提供，与设备生产商Apple Inc.公司无关</div></div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>

</template>

<script>
    module.exports = {
        data: function(){
            return {
                gift : {
                    id:"11073",
                    name:"能量堡垒钙维D片",
                    merchant_name:"乾乾",
                    bigPic:"http://static.diditaxi.com.cn/op/imall_cms_image/20150928/20150928175804detail.jpg",//大图
                    pre_count:"1000",
                    content:"<p>商品简介：</p>"+
                    "            <p>【纯天然紫水晶手链】 &nbsp;价值188元</p>"+
                    "            <p>108颗佛珠手串6mm多圈多层男女款手链，配以藏银装饰，紫水晶在天然水晶石的功效与作用是很强大的，紫水晶被称为“幸运之石”，同时被认为是爱的守护石</p>"+
                    "            <p><br /></p>"+
                    "            <p>使用范围：</p>"+
                    "            <p>全国<span style=\"color: rgb(227, 108, 9);\">（15元运费用户自理）</span></p>"+
                    "            <p><br /></p>"+
                    "            <p>使用有效期：</p>"+
                    "            <p>兑换之日起至2015年10月31日有效</p>"+
                    "            <p><br /></p>"+
                    "            <p>兑换流程：</p>"+
                    "            <p>1、兑换后获得【兑换码】，兑换码可在【兑换记录】中查询</p>"+
                    "            <p>2、关注藏珺阁微信公众号【yu_cangjunge】或【藏珺阁】</p>"+
                    "            <p>3、点击底部菜单——滴滴兑换或回复：水晶手链，点击回复链接进入商品页面</p>"+
                    "            <p>4、点击【购买】——【使用优惠】——输入【兑换码】——即可免费领取该商品</p>"+
                    "            <p>5、兑换成功后商家会在1-3个工作日内发货</p>"+
                    "            <p><br /></p>"+
                    "            <p>注意事项：</p>"+
                    "            <p>1、每位用户仅限兑换一次</p>"+
                    "            <p>2、每个订单只能使用一次</p>"+
                    "            <p>3、客服电话：xxxxxxxx</p>"+
                    "            <p>4、<span style=\"color: rgb(227, 108, 9);\">中秋期间、十一期间发货会慢1~3天，敬请理解</span></p>"
                },
                isGet:false,
                isFixDesc:false
            }
        },
        methods:{
            pay:function(){
                var ctx = this
                $.confirm('确定兑换吗?', function () {
                    //    购买逻辑
                    ctx.isGet = true;
                    $.alert('兑换成功');
                });
            },
            _judgeFixTop:function(ele){
//                在此处可以添加 滚动监测
            }
        }
    }
</script>
