#### react-app-rewired 实现按需打包

---

> 实现按需打包，少不了 babel-plugin-import 包。由于 create-react-app 脚手架工具已经对 webpack 做了一层封装，所以不太好去配置.babelrc 文件。

> 往常实现方式：

```javascript
{
  "plugins": [
    ["import", {
      "libraryName": "antd", //需按需打包的库
      "libraryDirectory": "es",
      "style": "css"
    }]
  ]
}
```

> 所以，我们得借助于 react-app-rewired 包，该包是对 react-scripts 进行了扩展

### 步骤

> 1. npm i babel-plugin-import react-app-rewired -D
> 2. 修改 package.json 文件

```javascript
"scripts": {
    "start": "react-app-rewired start",  //主要修改就是把以前的react-scripts包替换为react-app-rewired
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  },
```

> 3. 在项目根目录下创建 config-overrides.js 文件

```javascript
const { injectBabelPlugin } = require("react-app-rewired");
module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", style: "css" }],
    config
  );
  return config;
};
```

> 4.新的 react-app-rewired@2.x 版本的关系，你需要还需要安装 customize-cra。

```javascript
const { override, fixBabelImports } = require("customize-cra");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css",
  })
);
```

##### customize-cra

---

> customize-cra 是依赖于 react-app-rewired 的库，通过 config-overrides.js 来修改底层的 webpack，babel 配置。

> config-overrides.js 创建在项目根目录下，是 react-app-rewird 包所利用的文件，结合 customize-cra 可以轻松修改底层配置，而不用运行 npm run eject 来暴露 webpack.config.js 来修改配置

> 示例如下：

```javascript
const { override } = require("customize-cra");
module.exports = override({
  // 在这里customize-cra里的一些函数来修改配置
});
```

##### addLessLoader

```javascript
const { override, addLessLoader } = require('customize-cra');
module.exports = override({
    // 调用这个函数相当于在 webpack.config.js 里面配置 less-loader  前提是要下载 less 和 less-loader,
    // 下面的配置不光配置了less-loader，还设置了less模块化语法，但是只能是以 .module.less 的文件才能模块化
    addLessLoader({
        lessOptions: {
           javascriptEnabled: true,
           localIdentName: '[local]--[hash:base64:5]'
        }
    }),
});
```

##### fixBabelImports

```javascript
const { override, fixBabelImports } = require('customize-cra');
module.exports = override({
    // 这里以antd-mobile 按需下载为例， 使用这个方法前提是 安装了 babel-plugin-import 插件
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css' // 加载组件时连样式一并加载
    }),
});
```

##### addBabelPlugin

```javascript
const { override, fixBabelImports } = require('customize-cra');
module.exports = override({
    // addBabelPlugin 用来配置添加babel插件的
    // 这里以 @babel/plugin-proposal-decorators 插件为例， 这个插件是用来支持 es7 装饰器语法的
    addBabelPlugin(
        ["@babel/plugin-proposal-decorators", { "legacy": true }]
    )
});
```

#### Arco 按需加载

---

> @arco-design/web-react 默认支持 tree shaking。直接引入 import { Button } from '@arco-design/web-react'; 即可按需加载。

##### ArcoWebpackPlugin

---

> 如果项目是以 Webpack 为构建工具的，使用 @arco-design/webpack-plugin 插件可以实现组件和样式的按需加载  
> 1.npm i @arco-design/webpack-plugin -D  
> 2.在 webpack 配置中加入：  
```javascript
const ArcoWebpackPlugin = require("@arco-design/webpack-plugin");
module.exports = {
  plugins: [new ArcoWebpackPlugin()],
};
```
##### babel-plugin-import
> 如果 tree-shaking 失效且不使用 webpack 插件的情况下，可以通过 babel-plugin-import 进行按需加载。 npm i babel-plugin-import -D

> 组件按需加载,在 babel 配置中加入：

```javascript
plugins: [
  [
    'babel-plugin-import',
    {
      libraryName: '@arco-design/web-react',
      libraryDirectory: 'es',
      camel2DashComponentName: false,
      style: true, // 样式按需加载
    },
  ],
];
```
> Icon 按需加载,在 babel 配置中加入：

```javascript
plugins: [
  [
    'babel-plugin-import',
    {
      libraryName: '@arco-design/web-react/icon',
      libraryDirectory: 'react-icon',
      camel2DashComponentName: false,
    },
  ],
];
```