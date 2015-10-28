<template>
    <div  class="content">
        <div class="content-block task">
            <div class="buttons-tab">
                <a href="#tab1" class="tab-link active button">A状态</a>
                <a href="#tab2" class="tab-link button">B状态</a>
                <a href="#tab3" class="tab-link button">C状态</a>
            </div>
            <div class="content-block">
                <div class="tabs">
                    <!-- A-->
                    <div id="tab1" class="tab active">
                        <div class="content-block">
                            <div v-for="record in records" v-show="!record.isFinish&&record.isDraw" class="card">
                                <div class="card-content task_isFinish">
                                    <div class="task_flag task_unfin"></div>
                                    <div class="card-content-inner">
                                        <div class="list-block">
                                            <ul>
                                                <li>
                                                    <div class="item-content">
                                                        <div class="item-inner">
                                                            <div class="item-title">
                                                                <span>{{record.title}}</span>
                                                            <span class="right_span">
                                                                <a v-on:click="handleMission(record,$event)" external class="button">点我</a>
                                                            </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- B-->
                    <div id="tab2" class="tab">
                        <div class="content-block">
                            <div class="content-block">
                                <div v-for="record in records" v-show="!record.isFinish&&!record.isDraw"  class="card">
                                    <div class="card-content">
                                        <div class="task_flag task_can"></div>
                                        <div class="card-content-inner">
                                            <div class="list-block">
                                                <ul>
                                                    <li>
                                                        <div class="item-content">
                                                            <div class="item-inner">
                                                                <div class="item-title">
                                                                    <span>{{record.title}}</span>
                                                            <span class="right_span">
                                                                <a href="#" class="button button-danger">别点</a>
                                                            </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- C-->
                    <div id="tab3" class="tab">
                        <div class="content-block">
                            <div class="content-block">
                                <div v-for="record in records"  class="card">
                                    <div class="card-content">
                                        <div class="task_flag"
                                             v-bind:class="{'task_can':!record.isFinish&&!record.isDraw,'task_unfin':!record.isFinish&&record.isDraw,'task_fin':record.isFinish&&record.isDraw}">
                                        </div>
                                        <div class="card-content-inner">
                                            <div class="list-block">
                                                <ul>
                                                    <li>
                                                        <div class="item-content">
                                                            <div class="item-inner">
                                                                <div class="item-title">
                                                                    <span>{{record.title}}</span>
                                                            <span class="right_span">
                                                                <a v-show="!record.isFinish&&record.isDraw" href="#" class="button">别点</a>
                                                                <a v-show="!record.isFinish&&!record.isDraw" href="#" class="button button-danger">别点</a>
                                                            </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    var missionDispatcher = {
        sign:function(vm,data){
            var modal = $.modal({
                afterText:'<div class="row">'+
                '    <div class="col-100">'+
                '        <div class="numtext" style="display: none;position: absolute;right: 22px;line-height: 42px;text-align: left;">'+
                '            <div class="row">'+
                '                <div class="col-100">看动画!</div>'+
                '            </div>'+
                '            <div class="row">'+
                '                <div class="col-100" style="width:100%">请继续鞭笞我</div>'+
                '            </div>'+
                '        </div>'+
                '        <div class="num_container">'+
                '            <div class="next num"><span>7</span></div>'+
                '            <div class="current num"><span>6</span></div>'+
                '        </div>'+
                '    </div>'+
                '</div>',
                buttons: [
                    {
                        text: '文本文本',
                        bold: true,
                        onClick: function () {
//                            随便编点啥吧
                        }
                    },
                ]
            })
            var from_page = $(".current");
            var next_page = $(".next");
            from_page.addClass("flipover");
            var events = ['webkitAnimationEnd', 'OAnimationEnd', 'MSAnimationEnd', 'animationend'];
            for(var i=0;i<events.length;i++){
                from_page.on(events[i],function(){
                    from_page.remove();
                    next_page.addClass("translateToLeft");
                });
                next_page.on(events[i],function(){
                    $(".numtext").show().addClass("sloganFadeUp");
                });
            }
            data.isFinish = true;
        }
    }
    module.exports = {
        data: function(){
            return {
                records:[
                    {title:"任务1",isFinish:false,isDraw:true,type:"sign"},
                    {title:"任务2",isFinish:true,isDraw:true,type:"info"},
                    {title:"任务3",isFinish:false,isDraw:false,type:"info"},
                    {title:"任务4",isFinish:false,isDraw:false,type:"change"}
                ]
            }
        },
        ready: function () {
            console.log("record-dom准备完毕") // -> 'foo'
        },
        methods:{
            handleMission:function(data,$event){
                missionDispatcher[data.type].call(this,this,data);
            }
        }
    }
</script>