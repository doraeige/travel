# 仿去哪儿网 - WebApp
- 去哪网总共有3个模块（首页模块+城市选择模块+详情模块）
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

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

![](http://oph264zoo.bkt.clouddn.com/17-8-11/10545126.jpg)

