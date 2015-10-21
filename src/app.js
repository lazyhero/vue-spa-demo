// With proper loader configuration you can load,
// pre-process and insert css directly with require().
// See webpack.config.js for details.
var Vue = require('vue')
var VueRouter = require('vue-router');
Vue.use(VueRouter);

var app = Vue.extend(require('./app.vue'))

var router = new VueRouter({
    hashbang: true
})

// normal routes
router.map({
    '/A': {
        component: require('./views/A.vue')
    },
    '/B': {
        component: require('./views/B.vue'),
        subRoutes:{
            'B_A/:recordId': {
                name: 'B_A', // 给这条路径加上一个名字
                component: require('./views/B_A.vue')
            }
        }
    },
    '/C': {
        component: require('./views/C.vue')
    },
    '/D': {
        component: require('./views/D/D.vue'),
        subRoutes: {
            '/D_A': {
                component: require('./views/D/D_A.vue')
            }
        }
    }
})

//默认首屏为ViewA
router.redirect({
    '/':"/A"
})

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

router.afterEach(function (transition) {
    console.log('当前路由为: ' + transition.to.path)
})

// 启动路由 顶层实例APP挂载到id为app的dom上
router.start(app, '#app');

//暴漏vue和router
window.router = router;
window.vue = Vue;
console.info("暴漏vue和router---可进行调试");