####  Installation-安装

##### You can use Webrix as an npm package, or as a script tag. - 你可以通过npm包或者script标签来使用webrix
   
1. As an NPM Package - 通过npm使用   
    You can install Webrix with npm(or yarn if you prefer). - 你能通过在npm或者yarn来安装webrix   
    ```javascript
    # With npm - npm安装命令
    npm i webrix

    # With yarn - yarn安装命令
    yarn add webrix
    ```   
    Webrix requires has peer dependencies for react, react-dom and prop-types, so be sure to install them as well:   
    Webrix 需要依赖于 react, react-dom and prop-types，所以确保安装好他们   
    ```javascript
    npm i react react-dom prop-types
    ```

    You can then import components/hooks like so: - 你可以像下面这样导入组件/hooks
    ```javascript
    import {Movable} from 'webrix/components';

    // For better tree shaking you can make your imports more specific.
    // This can potentially reduce your final bundle size, but the
    // difference can be negligible since the entire Webrix library
    // is rather small

    // 为了更好的优化代码体积(tree shaking： 把应用当成一棵树，要把上面用不到的树叶摇下来)
    // 你可以导入代码更加具体(像下面一样来代替上面的)
    // 这样可以减小最终打包的体积，但是这几乎没有区别。因为webrix库是相当小的
    import Movable from 'webrix/components/Movable';
    ```   

2. As a Script Tag - 通过Script标签使用    
    Alternatively you can add a &lt;script/&gt; tag to your document's &lt;head/&gt; and get Webrix through a CDN:  
    你可以通过CDN 把Webrix在script标签中引入到页面里 
    ```html
    <script src="https://unpkg.com/webrix@latest/webrix.umd.min.js" crossorigin></script>
    ```

    Webrix does not work without react, react-dom, prop-types and classnames, so be sure to include those as well:   
    webrix 需要react, react-dom, prop-types and classnames这些， 确保也引入了这些文件

    ```html
    <script src="https://unpkg.com/react/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js" crossorigin></script>
    <script type="module" src="https://unpkg.com/prop-types/prop-types.min.js" crossorigin></script>
    <script type="module" src="https://unpkg.com/classnames" crossorigin></script>
    ```
    You can now access everything through the global Webrix variable:
    现在可以使用所有的功能通过全局的Webrix变量

    ```javascript
    const {Movable} = Webrix.components;
    ```