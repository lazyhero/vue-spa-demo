<template>
    <!--v-model演示-->
    <div class="page page-current" transition="page" >
        <header class="bar bar-nav">
            <a class="button button-link button-nav pull-left back" v-link="{path:'/D'}">
                <span class="icon icon-left"></span>
                返回
            </a>
            <h1 class="title">v-model演示</h1>
        </header>
        <div class="content">
            <div v-for="record in records" class="card demo-card-header-pic"
                    @click="chooseAction($index,$event,this)">
                {{checkDefault(record.isDefault,$index)}}
                <div class="card-content">
                    <div v-show="record.isDefault" class="default_flag"></div>
                    <div class="card-content-inner">
                        <p>{{record.contact}} {{record.mobile}}</p>
                        <p class="color-gray">地址:{{record.city}},{{record.detail}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div></div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
                curDefaultIndex:"",
                curIndex:"",
                records:[
                    {id:1,contact:"董小姐",mobile:"18888888888",city:"北京市 海淀区",detail:"安河桥北",isDefault:true},
                    {id:2,contact:"懒先森",mobile:"18888888888",city:"黑龙江省 野垫子",detail:"村东头老槐树旁",isDefault:false},
                    {id:3,contact:"别删我",mobile:"18888888888",city:"北京市 朝阳区",detail:"优脱褲海天盛筵",isDefault:false}
                ]
            }
        },
        methods:{
            chooseAction:function($index,$event,vm){
                var actionBtns = [
                    {
                        text: '设置为默认',
                        bold:true,
                        color: 'default',
                        onClick:function(){
                            vm.setDefault($index,$event,vm);
                        }
                    },
                    {
                        text: '编辑',
                        bold: true,
                        color: 'edit',
                        onClick: function() {
                            vm.editAddr($index,$event,vm);
                        }
                    },
                    {
                        text: '删除',
                        color: 'danger',
                        onClick: function() {
                            vm.deleteAddr($index,$event,vm);
                        }
                    }
                ];
                $.actions(actionBtns);
            },
            checkDefault:function(isDefault,$index){
                this.curIndex = $index;
                if(isDefault)this.curDefaultIndex = $index;
            },
            setDefault:function($index,$event,vm){
                vm.records[vm.curDefaultIndex].isDefault = false;
                vm.records[$index].isDefault = true;
                $.toast("操作成功");
            },
            updateAddr:function(id){
                $.toast("操作成功");
                $.closeModal(document.querySelector(".popup"));
            },
            deleteAddr:function($index,$event) {
                var curChoose =$event.target;
                while(curChoose.className.indexOf("card ")<0){
                    curChoose = curChoose.parentNode;
                }
                $(curChoose).remove();
            },
            //编辑地址
            editAddr:function($index,$event,ele){
                var popupHTML = '<div class="popup popup-addr">'+
                        '<div class="content-block">'+
                        "<header class=\"bar bar-nav\">"+
                        "        <a class=\"button button-link button-nav pull-left close-popup\" href=\"javascript:void(0)\">"+
                        "            收起"+
                        "        </a>"+
                        "        <h1 class=\"title\">编辑我吧!</h1>"+
                        "    </header>"+
                        "<div class=\"list-block\">"+
                        "    <ul>"+
                        "      <!-- Text inputs -->"+
                        "      <li>"+
                        "        <div class=\"item-content\">"+
                        "          <div class=\"item-media\"><span class=\"icon icon-card\"></span></div>"+
                        "          <div class=\"item-inner\">"+
                        "            <div class=\"item-title label\">联系人</div>"+
                        "            <div class=\"item-input\">"+
                        "              <input type=\"text\" v-model=\"records[curIndex].contact\" placeholder=\"您的名字\">"+
                        "            </div>"+
                        "          </div>"+
                        "        </div>"+
                        "      </li>"+
                        "      <li>"+
                        "        <div class=\"item-content\">"+
                        "          <div class=\"item-media\"><span class=\"icon icon-phone\"></span></div>"+
                        "          <div class=\"item-inner\">"+
                        "            <div class=\"item-title label\">联系电话</div>"+
                        "            <div class=\"item-input\">"+
                        "              <input type=\"text\" v-model=\"records[curIndex].mobile\" placeholder=\"手机号\">"+
                        "            </div>"+
                        "          </div>"+
                        "        </div>"+
                        "      </li>"+
                        "      <li>"+
                        "        <div class=\"item-content\">"+
                        "          <div class=\"item-media\"><span class=\"icon icon-browser\"></span></div>"+
                        "          <div class=\"item-inner\">"+
                        "            <div class=\"item-title label\">省市区</div>"+
                        "            <div class=\"item-input\">"+
                        "              <input id=\"city-picker\" v-model=\"records[curIndex].city\" type=\"text\" placeholder=\"\">"+
                        "            </div>"+
                        "          </div>"+
                        "        </div>"+
                        "      </li>"+
                        "      <li class=\"align-top\">"+
                        "        <div class=\"item-content\">"+
                        "          <div class=\"item-media\"><span class=\"icon icon-home\"></span></div>"+
                        "          <div class=\"item-inner\">"+
                        "            <div class=\"item-title label\">详细地址</div>"+
                        "            <div class=\"item-input\">"+
                        "              <textarea v-model=\"records[curIndex].detail\" placeholder=\"街道,门牌\"></textarea>"+
                        "            </div>"+
                        "          </div>"+
                        "        </div>"+
                        "      </li>"+
                        "    </ul>"+
                        "  </div>"+
                        "  <div class=\"content-block\">"+
                        "    <div class=\"row\">"+
                        "      <div class=\"col-50\"><a href=\"javascript:void(0)\" class=\"button button-big button-fill button-danger close-popup\">取消</a></div>"+
                        "      <div class=\"col-50\"><a @click=\"updateAddr(records[curIndex].id)\" class=\"button button-big button-fill button-success\">提交</a></div>"+
                        "    </div>"+
                        "  </div>"+
                        '</div>'+
                        '</div>'
                $.popup(popupHTML);
                this.$compile(document.querySelector(".popup-addr"));
            }
        }
    }
</script>