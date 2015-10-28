<template>
    <div class="page page-current" transition="page" >
        <header class="bar bar-nav">
            <a class="button button-link button-nav pull-left back" v-link="{path:'/D'}">
                <span class="icon icon-left"></span>
                返回
            </a>
            <h1 class="title">演示v-for&子路由跳转</h1>
            <!-- 由my的子路由change 跳转到 gift下的子路由detail-->
        </header>
        <div class="content">
            <div class="list-block media-list inset">
                <ul style="background: none!important;">
                    <li v-for="record in records" style="background-color: #fff;border-radius: .35rem;margin-bottom: 5px;">
                        <a v-link="{name: 'detail', params: { giftId: record.id }}" class="item-link item-content">
                            <div class="item-media"><img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" style='width: 2.2rem;'></div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title font_little">{{record.title}}<span class="content_count">{{record.count}}</span></div>
                                </div>
                                <div v-show="record.explan" class="item-text">{{record.explan}}</div>
                                <div v-show="!record.explan" class="item-text">文本:<span class="orange">{{record.code}}</span></div>
                                <div v-show="!record.explan" class="item-text"><span class="expire">有效期{{record.start_date}}至{{record.end_date}}</span></div>
                            </div>
                        </a>
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
                records:[
                    {id:1,title:"你",count:"100",result:false,explan:"太难编了",start_date:"2015-09-01",end_date:"2015-09-30"},
                    {id:2,title:"我",count:"100",result:false,explan:"太难编了",start_date:"2015-09-01",end_date:"2015-09-30"},
                    {id:3,title:"他",count:"100",result:true,explan:"",code:"123456789",start_date:"2015-09-01",end_date:"2015-09-30"}
                ]
            }
        },
        methods:{
        }
    }
</script>