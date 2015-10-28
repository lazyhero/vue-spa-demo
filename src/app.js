// With proper loader configuration you can load,
// pre-process and insert css directly with require().
// See webpack.config.js for details.
var Vue = require('vue')
var VueRouter = require('vue-router')
Vue.use(VueRouter);

var app = Vue.extend(require('./app.vue'))

var router = new VueRouter({
    hashbang: true //hash路由
})

//路由表
router.map({
    '/home': {
        component: require('./views/home.vue')
    },
    '/B': {
        component: require('./views/list.vue'),
        //子路由
        subRoutes:{
            'detail/:giftId': {
                name: 'detail', //具名路由
                component: require('./views/detail.vue')
            }
        }
    },
    '/C': {
        component: require('./views/tab.vue')
    },
    '/D': {
        component: require('./views/paged/paged.vue'),
        subRoutes: {
            '/toonelevel': {
                component: require('./views/paged/toonelevel.vue')
            },
            '/vfor': {
                component: require('./views/paged/vfor.vue')
            },
            '/vmodel': {
                component: require('./views/paged/vmodel.vue')
            }
        }
    }
})

//默认/重定向到home页
router.redirect({
    '/':"/home"
})
//注册路由切换前
//使底部菜单栏在一级路由切换时一直保持显示
//在二级页时隐藏
router.beforeEach(function (transition) {
    var toPath = transition.to.path;
    console.info()
    if(toPath.replace(/[^/]/g,"").length>1){
        router.app.isIndex = false;
    }else{
        router.app.isIndex = true;
    }
    transition.next()
})
//注册路由切换后
router.afterEach(function (transition) {
    console.log('成功浏览到: ' + transition.to.path)
    $.refreshScroller();
})

router.start(app, '#app');
//暴漏路由调试接口
window.router = router;