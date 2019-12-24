#### 开发文档

- `npm run dev`开发环境
- `npm run build`开发环境
- `npm run deploy`部署

#### 踩坑记录

1. 输出`umd`格式文件，包含`commomjs`和`amd`规范，`node`和浏览器都使用
2. `babel`配置`babel-plugin-import`插件可以将`commonjs`规范的文件按需加载进来，对于`esm`规范的文件`webpack`生产默认支持`tree shaking`
