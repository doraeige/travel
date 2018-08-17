# 仿去哪儿网 - WebApp
本项目是一个仿去哪儿网APP，使用 vue+webpack 构建的单页面应用，项目采用了 vuex、vue-route 、axios 以及 ES6 语法，采用组件化思想搭建整个项目，从而使组件高度复用，代码十分简洁。
- 总共分3个模块（首页模块+城市选择模块+详情模块）
  - 首页模块
     - 头部Header模块
     - 轮播Swiper模块
     - 图标导航Icons模块
     - 热销推荐Recommend模块
     - 周末去哪儿Weekend模块 
  - 城市选择模块
     - 头部Header模块
     - 搜索Search模块
     - 当前城市、热门城市模块、城市列表List模块
     - 侧边字母表Alphabet导航模块 
  - 详情模块
     - 头部返回按钮及Header模块
     - 景点图片Banner模块
     - 相关景点图片展示Gallary模块（点击详情模块会出现图片轮播展示）
     - 票种选择List模块

## 如何运行

- 下载并解压此项目 或 将此项目clone你选择的路径下。
- 在项目的根目录下，执行 `npm install` 下载项目依赖（可打开package.JSON文件查看所需模块）。
- 接着，执行 `npm run start` 或 `npm run dev`，在网址栏输入`http://localhost:8080/`，如果要在移动设备端查看，在命令行 windows 用户输入`ipconfig`，mac 用户输入`ifconfig` 查询IP地址，然后再电脑端或者使用着与电脑端相同网络连接的移动设备端浏览`你的ip地址:8080`(**例如**：`192.168.1.105:8080`)即可。
- 在电脑端，以Chrome浏览器为例，项目WebApp打开后，检查元素(windows用户使用F12 或 CTRL + SHIFT + I; mac用户使用 COMMAND + OPTION + J)后，再切换设备分辨率(windows用户CTRL+SHIFT+M; mac用户COMMAND + SHIFT + M)，最后刷新便可正常浏览。
- 提示：如npm下载依赖速度过慢，请使用[淘宝NPM镜像](https://npm.taobao.org/)

## 环境参数

### 【前端】

- **Vue**：构建用户界面的 MVVM 框架，核心是响应的数据绑定和组系统件
- **vue-router**：为单页面应用提供的路由系统，项目上线前使用了路由懒加载技术，来异步加载路由优化性能
- **vuex**：Vue 集中状态管理，在多个组件共享某些状态时非常便捷
- **axios**：服务端通讯。基于 `Promise` 的网络请求插件
- **better-scroll**：iscroll 的优化版，使移动端滑动体验更加流畅
- **stylus**：css 预编译处理器
- **ES6**：ECMAScript
- **vue-awesome-swiper**： 图片轮播插件
- **fastClick**: 解决300毫秒点击事件延迟问题
- **stylus-loader**: 使用构建工具 webpack 的 stylus-loader 来将 stylus 语言转化为原生 css

### 【后端数据】

- 使用本地模拟数据

## 项目浏览
![gif](https://github.com/doraeige/travel/blob/master/localpic/01.gif)

## 项目图示及介绍

#### 去哪儿 - 主界面

- [x] header区域，搜索城市/景点/游玩主题
- [x] banner部分自动轮播
- [x] 图标选择栏左右滑动，共两页
- [x] “热销推荐”部分，点击不同的选项，根据动态路由进入到对应的景点门票详情页面
- [x] “周末去哪儿”，周末游组件

![image](https://github.com/doraeige/travel/blob/master/localpic/01.png)

#### 去哪儿 - 城市选择切换页面

- [x] 右侧可通过点击或拖动字母，来查看首字母对应的城市
- [x] 输入相应中文或字母，页面将显示出可搜索到的城市列表
- [x] 实现了城市的展示、城市搜索以及城市右侧字母与左侧区块动画联动效果，在城市列表切换了新的城市之后首页城市也跟着变化

![image](https://github.com/doraeige/travel/blob/master/localpic/02.png)

![image](https://github.com/doraeige/travel/blob/master/localpic/03.png)

![image](https://github.com/doraeige/travel/blob/master/localpic/04.png)

#### 去哪儿 - 景区票价详情页面

- [x] 点击图片可查看更多相关景点图片，轮播展示
- [x] 实现 Header 渐隐渐现效果

![image](https://github.com/doraeige/travel/blob/master/localpic/05.png)

![image](https://github.com/doraeige/travel/blob/master/localpic/06.png)

![image](https://github.com/doraeige/travel/blob/master/localpic/07.png)

![image](https://github.com/doraeige/travel/blob/master/localpic/08.png)

## 收获

1. 对 vue 的组件、指令、模版渲染、事件绑定、计算属性等有一定了解
2. 了解 vue 父子组件之间的交互、传值
3. 学会在 vue 项目中使用一些第三方插件（组件）
4. 对组件化、模块化的开发思维有一定理解
5. 了解 vue-router 路由跳转、获取动态路由参数、编程式的导航
6. 了解项目开发流程：项目分析设计 -> 环境搭建 -> 依赖安装 -> 数据模拟 -> 本地开发 -> 项目联调 -> 真机测试 -> 打包上线

## 项目难点
- 不同手机浏览器上的默认样式不同，项目导入 **reset.css** 文件使默认样式统一
- 移动端1px边框问题，手机屏幕分辨率多倍频里1px边框被显示为多像素边框，导入 **border.css** 解决这个问题
- 移动端某些机型某些浏览器 click 事件延迟300ms，项目引入 **fastclick** 库，并在 main.js 中导入解决
- 用轮播图Vue-Awesome-Swiper插件插入图片时，在3G网络下，页面有明显抖动效果，原因: 图片没加载时，高度为0，图片加载完之后才把高度撑开，解决办法：在swiper.vue中的<swiper>标签外包裹一个div，给这个div添加 overflow: hidden, width:100%, height:0, padding-bottom: 图片宽高比；这个div宽度是100%，高度相对于宽度自动撑开 图片宽高比例
- 首页轮播图默认显示是从最后一张图片开始播放，原因：Swiper的初始化创建是根据空数组创建的； 解决办法： <swiper v-if="list.length"> 让初始化时是由完整的数据创建而不是空数组，当list是个空数组的时候，Swiper不会被创建 
- 在城市选择页面，由于拖动字母表显示对应的城市列表这个handleTouchMove方法执行频率较高，通过函数节流方法，限制下函数执行频率，避免浏览器崩溃等
- 记录用户最后一次点击的城市，刷新页面网站可以记录上次用户的选择，这里采用 HTML5 中的 localStorage；如果用户关闭了本地存储功能或使用隐身模式，浏览器会抛出异常，在外层需要包裹一个 try{}catch(e){}
- 在景点详情页面中，有一个多级的菜单需要显示，使用递归组件，在它们自己的模板中调用自身，但确保递归调用是条件性的，用v-if限制，否则递归组件就可能导致无限循环
- 项目打包上线时，axios.get(地址必须为api),本地模拟数据放在根目录 static 目录 mock 文件夹下,要将 api 下所有的 json 文件请求都转发到本地static/mock 文件夹下，需要在根目录 config 目录下 index.js 中设置: proxyTable: {'/api': { pathRewrite: {'^/api': '/static/mock'}}},另外，改动了配置项，需要重启一下服务器 

![](http://oph264zoo.bkt.clouddn.com/17-8-11/10545126.jpg)

