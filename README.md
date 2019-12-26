#### 开发文档

- `npm run dev`开发环境
- `npm run build`开发环境
- `npm run deploy`部署

#### 开发环境

- vscode、npm、webpack、eslint、prettier

#### FeatureList

1. 输出`umd`格式文件，允许它和`CommonJS/AMD/全局变量`一起工作
2. 组件库支持按需加载，需要`babel`配置`babel-plugin-component`插件
3. `babel7\corejs3\runtime垫片`、`babel polyfill`按需编译、不污染全局

#### 踩坑记录

1. `Vue` 配置为 `externals`，打包时候排除掉、需要使用者自己安装

```js
//webpack.deploy.js
externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }

//packgage.json
peerDependencies: {
  "vue": ">2.6.10"
}
```

#### TODOList

1. 利用`rollUp`提供`esm`包（`webpack`输出格式不支持`esm`）、方便使用者利用`webpack` `tree shaking`特性
