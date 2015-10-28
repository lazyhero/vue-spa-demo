<style>
    .body {
        background: #fff;
    }
</style>

<template>
    <div id="home" class="content">
        <div class="swiper-container" data-space-between="10" data-pagination=".swiper-pagination">
            <div class="swiper-wrapper">
                <div v-for="slide in slides" class="swiper-slide"><img src="{{slide.img}}" alt="" style="width: 100%"></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>

        <div v-for="good in goods">
            <div class="content-block-title">{{good.title}}</div>
            <div class="list-block">
                <ul>
                    <li class="item-content">
                        <div class="item-media"><i class="icon icon-f7"></i></div>
                        <div class="item-inner">
                            <div class="item-title">商品名称</div>
                            <div class="item-after">{{good.name}}</div>
                        </div>
                    </li>
                    <li class="item-content">
                        <div class="item-media"><i class="icon icon-f7"></i></div>
                        <div class="item-inner">
                            <div class="item-title">型号</div>
                            <div class="item-after">{{good.type}}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    module.exports = {
        data: function(){
            return {
                goods: [
                    {title: "幸福福利1", name: "杜蕾斯超薄", type: "超薄"},
                    {title: "幸福福利2", name: "杜蕾斯延时", type: "延时"}
                ],
                slides: [
                    {img: "http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_640x640q60.jpg"},
                    {img: "http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_640x640q60.jpg"},
                    {img: "http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_640x640q60.jpg"},
                ]
            }
        },
        ready: function () {
            console.log("home-dom准备完毕") // -> 'foo'
            $(".swiper-container").swiper();
        }
    }
</script>
