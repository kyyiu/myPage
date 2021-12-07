# <center> Movable </center>

---

> The &lt;Movable/&gt; component can be used to create elements that the user can move.  
翻译: &lt;Movable/&gt; 组件可以创建用户可以移动的元素

> As opposed to a draggable element, the &lt;Movable/&gt; component does not require a source/target configuration. Instead, it supports 3 custom events (onBeginMove,onMove,onEndMove) through which you can control the movement.     
翻译: 和draggable(可拖拽)元素相反, &lt;Movable/&gt; 组件不需要配置。对此，它通过提供三个自定义事件(onBeginMove,onMove,onEndMove)来控制移动    
   
> The &lt;Movable/&gt; also comes with a custom hook for reduced boilerplate and easy constraint application. That hook accepts an array of Operations, which are used for controlling the way an element is moved. &lt;Movable/&gt; is packaged with a set of built-in Operations that you can use, and you can also create your own.    
翻译：&lt;Movable/&gt;组件自带自定义hook为了简化样板，限制应用。 这个hook需要一个依赖控制元素移动的操作数组，&lt;Movable/&gt;和这些内置方法一起打包，让你可以使用，并且可以创造属于自己的&lt;Movable/&gt;