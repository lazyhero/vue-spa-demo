# vue-spa-demo
>DEMO说明

1.  小项目直接精简得到,比较简陋
2.  演示常见需求:vuejs结合vue-router 配合transition指令动画
版本依赖  

* vuejs 1.0rc
* vue-router 0.7.2(未发布,用其github-dev,为了支持keep-alive)
* ui部分为SUI

>效果浏览  

（图片缓冲 稍等片刻）  

![vue-spa-demo](http://7jpswm.com1.z0.glb.clouddn.com/vue-spavue-spa-demo-3.gif)

>安装方法

1. npm install
2. gulp or gulp watch

>最好安装好webpack 虽然这里是用gulp结合的

>未解决问题

vuejs-1.0rc版本 src绑定指令问题 
```html
<img src="本地文件"> 不会了 file-loader url-loader 尝试require方式下成功
```
