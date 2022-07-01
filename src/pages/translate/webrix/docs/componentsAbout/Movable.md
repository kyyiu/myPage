# <center> Movable </center>

---

> The &lt;Movable/&gt; component can be used to create elements that the user can move.  
翻译: &lt;Movable/&gt; 组件可以创建用户可以移动的元素

> As opposed to a draggable element, the &lt;Movable/&gt; component does not require a source/target configuration. Instead, it supports 3 custom events (onBeginMove,onMove,onEndMove) through which you can control the movement.     
翻译: 和draggable(可拖拽)元素相反, &lt;Movable/&gt; 组件不需要配置。对此，它通过提供三个自定义事件(onBeginMove,onMove,onEndMove)来控制移动    
   
> The &lt;Movable/&gt; also comes with a custom hook for reduced boilerplate and easy constraint application. That hook accepts an array of Operations, which are used for controlling the way an element is moved. &lt;Movable/&gt; is packaged with a set of built-in Operations that you can use, and you can also create your own.    
翻译：&lt;Movable/&gt;组件自带自定义hook为了简化样板，限制应用。 这个hook需要一个依赖控制元素移动的操作数组，&lt;Movable/&gt;和这些内置方法一起打包，让你可以使用，并且可以创造属于自己的&lt;Movable/&gt;

### Basic Example -- 基本使用    
```javascript
import React, {useMemo, useState, useRef} from 'react';
import {Movable} from 'webrix/components';
import './BasicExample.less';

const {move, update} = Movable.Operations;

export default () => {
    const ref = useRef();
    const [position, setPosition] = useState({});
    const props = Movable.useMove(useMemo(() => [
        move(ref),
        update(setPosition),
    ], []));

    return (
        <Movable {...props} ref={ref} style={position}>
            Move Me!
        </Movable>
    );
}
```     

>In this example we are using the 
Movable.useMove()
 hook to control the movement. The 
useMove()
 hook accepts an array of operations, which are processed in the order in which they are provided.    
>在这个例子我们用
Movable.useMove() hook来控制移动.
useMove() hook接受一个按照提供的顺序进行处理的操作数组

>In this example we use 2 operations: 
move()
 and 
update()
. In the next section we will further discuss what operations are, and how they can be used.     
>在这个例子我们用了两个操作
move()
 和 
update()
后面再来介绍这些操作相关的使用   



### Operations -- 操作      
>Operations are configuration objects that can be used to control the way an element moves, apply constraints, or even execute functions based on events. The 
Movable.useMove()
 hook accepts an array of operations, and executes them in order. An operation can also pass data forwards to the next operation, so that you can mix multiple operations together for achieving more complex behaviors.       
>Operations是配置对象，可用于控制元素移动、应用约束甚至基于事件执行函数的方式.
Movable.useMove() hook接受一个operations数组,并且按顺序执行，一个operation也能把数据传递给下一个operation，所以你可以混合多个operations来实现更加复杂的功能     

#### Constraint Axis -- 限制轴     
```javascript
import React, {useState, useRef, useMemo} from 'react';
import {Movable} from 'webrix/components';
import './ConstraintAxis.less';

const {move, update} = Movable.Operations;

export default () => {
    const [top, setTop] = useState();
    const ref = useRef();
    const props = Movable.useMove(useMemo(() => [
        move(ref),
        // 解析出top,仅更新top的值
        update(({top}) => setTop(top)),
    ], []));

    return (
        // es6 {top: top}
        <Movable {...props} ref={ref} style={{top}}>
            I Move Vertically
        </Movable>
    );
};
```

>The 
&lt;Movable/&gt;
 component gives you complete control over the positioning of the element by only passing information through the events without actually manipulating the element itself. This way you are free to add your own logic and constraints.       
In this example, we ignore the movement of the mouse on the 
x
 axis to constraint the element to the 
y
 axis. We do that by only updating the 
top
 value of the position in the 
update()
 operation.       
>Movable 组件通过事件传递信息来给你提供完整的定位控制，不用去精确的操作元素本身，这样你可以自由的添加你的逻辑和约束      
在这个例子里，我们忽略了元素在x轴的移动来限制元素在y轴上
我们通过仅仅更新top定位属性的值在update操作事件中实现的       


#### Snapping -- 瞬移     
```javascript
import React, {useState, useRef, useMemo} from 'react';
import {Movable} from 'webrix/components';
import './Snapping.less';

const {move, update, snap} = Movable.Operations;

export default () => {
    const [position, setPosition] = useState({});
    const ref = useRef();
    const props = Movable.useMove(useMemo(() => [
        move(ref),
        snap(20, 20),
        update(setPosition),
    ], []));

    return (
        <Movable {...props} ref={ref} style={position}>
            I snap to a 20x20 grid
        </Movable>
    );
}
```     
>Similarly to the previous example, more complex constraints can be applied using the provided operations in 
Movable.Operations
.

In the example above we're using the 
Movable.Operations.snap()
 operation to make the movable element snap to a 
20px
 by 
20px
 grid.       
> 和上面的例子相似，可以用Movable.Operations里面提供的operations应用于更加复杂的约束     
在这个例子里面我们用了Movable.Operations.snap() operation来使得元素在20x20的格子方向移动，只能向左右或者向上下20px移动     


```javascript
import React, {useState, useRef, useMemo} from 'react';
import {Movable} from 'webrix/components';
import './SnappingAdvanced.less';

const {move, update, snap} = Movable.Operations;

// For display purposes only, this part can otherwise be ignored
const getInitialLeft = index => {
    const count = 3, size = 120, space = 40;
    return (
        (window.innerWidth - (count * size + (count - 1) * space)) / 2 + index * (size + space)
    );
}

const SnappingMovable = ({index, horizontal, vertical, strength = 1}) => {
    const [position, setPosition] = useState({left: getInitialLeft(index)});
    const ref = useRef();
    const props = Movable.useMove(useMemo(() => [
        move(ref),
        snap(horizontal, vertical, strength),
        update(setPosition),
    ], [horizontal, vertical, strength]));

    return (
        <Movable {...props} ref={ref} style={position}>
            Grid: {horizontal}x{vertical}<br/>
            Strength: {strength}
        </Movable>
    );
};

export default () => (
    <>
        <SnappingMovable horizontal={30} vertical={30} index={0}/>
        <SnappingMovable horizontal={60} vertical={1} index={1}/>
        <SnappingMovable horizontal={60} vertical={60} strength={0.3} index={2}/>
    </>
);
```      
>In this example you can see how to apply different gird sizes and different snap strengths.    
>在这个例子里面你可以看到如何应用不同的格子尺寸和不同的移动感      

#### Contain -- 容器     
```javascript
import React, {useState, useRef, useMemo} from 'react';
import {Movable} from 'webrix/components';
import './Contain.less';

const {move, update, contain} = Movable.Operations;

export default () => {
    const [position, setPosition] = useState({});
    const movable = useRef();
    const container = useRef();
    const props = Movable.useMove(useMemo(() => [
        move(movable),
        contain(movable, container),
        update(setPosition),
    ], []));

    return (
        <>
            <div className='container' ref={container}/>
            <Movable {...props} ref={movable} style={position}>
                Move Me!
            </Movable>
        </>
    );
}
```     
>In this example we're using the 
Movable.Operations.contain()
 operation to limit the movement of the element within the boundaries of the given container.     
> 在这个例子我们用Movable.Operations.contain()
 operation来限制元素在给定的容器边界内进行移动     

####  Mixing Operations -- 混合操作      
```javascript
import React, {useState, useRef, useMemo} from 'react';
import {Movable} from 'webrix/components';
import './Mixing.less';

const {move, update, snap, contain} = Movable.Operations;

export default () => {
    const [position, setPosition] = useState({});
    const movable = useRef();
    const container = useRef();
    const props = Movable.useMove(useMemo(() => [
        move(movable),
        snap(1, 25),
        contain(movable, container),
        update(setPosition),
    ], []));

    return (
        <>
            <div className='container' ref={container}/>
            <Movable {...props} ref={movable} style={position}>
                I snap to a 1x25 grid
            </Movable>
        </>
    );
}
```     
>In this example we're combining 2 different operations to achieve a more complex behavior. You can mix as many operations as you need, but for optimal UX you will need to make sure that the operations make sense when applied together.

For example, using 
move()
 and 
trackpad()
 together can produce strange results, since it makes no sense to use a Movable component as a trackpad, and move it at the same time.      

>在这个例子我们组合两个不同的operations实现一个更加复杂的行为。
你可以混合许多oerations只要你需要，但是为了获得最佳的用户体验，需要确保这些操作在一起时是有有意义的     

#### Custom Operations -- 自定义Operations    
```javascript
import React, {useState, useRef, useMemo} from 'react';
import {Movable} from 'webrix/components';
import './CustomOperations.less';

const {move, update} = Movable.Operations;

// This operation adds a class name when the element is being moved.
// We use this to apply CSS that makes it look like the element is "lifted" from the screen.
export const classname = (ref, cls) => Movable.Operations.createOperation({
    onBeginMove: () => ref.current.classList.add(cls),
    onEndMove: () => ref.current.classList.remove(cls),
});

// This operation snaps the element to a 50x50 grid, but only when it is  dropped.
export const snapOnDrop = setPosition => Movable.Operations.createOperation({
    onEndMove: (e, shared) => {
        const {top, left} = shared.next;
        const GRID = 50;
        setPosition({
            top: Math.round(top / GRID) * GRID,
            left: Math.round(left / GRID) * GRID,
        })
    },
});

export default () => {
    const [position, setPosition] = useState({});
    const ref = useRef();
    const props = Movable.useMove(useMemo(() => [
        move(ref),
        classname(ref, 'moving'),
        update(setPosition),
        snapOnDrop(setPosition),
    ], []));

    return (
        <>
            <div className='grid'/>
            <Movable {...props} ref={ref} style={position}>
                Pick me up!
            </Movable>
        </>
    );
}
```      
>You can create your own custom operations using the 
Movable.Operations.createOperation()
 function. This function takes an object with one or more of the Movable's events (i.e. 
onBeginMove
, 
onMove
 and 
onEndMove
).

In this example, we create a custom operation called 
snapClass
, that adds the given CSS class to the element when it is snapped to the given grid.

Each Movable event receives 2 arguments:

The original event object.
An object with the data shared between events/operations.
You can pass data between events by mutating the 2nd argument, which is an object that is shared between all the events, and across operations. This argument also contains a 
next
 key, where you should store the next coordinates (in the above example we extract 
next
 from it to determine whether it will be on the grid after all operations are applied).      
>你可以使用Movable.Operations.createOperation()函数
创建你自己的自定义operations 
这个函数接受一个对象，包含一个或者多个Movable's 组件的事件(onBeginMove
, 
onMove
 and 
onEndMove)
在这个例子里面，我们创建了一个叫snapClass的自定义operation,当元素被snap开始结束时 会将传入的css类给那个元素进行删除或者赋予
每个Movable事件接受两个参数
1. 原始事件对象
2. 一个在事件和operations之间共享的数据对象    
通过改变第二个参数，可以在事件之间传递数据，这是一个在所有事件和operaton之间共享的对象    
这个参数也包含一个next键，你需要把下一个坐标保存在这里（在上面的示例中，我们提取下一个从中确定在应用所有操作后它是否将在网格上）
       

#### Trackpad -- 触控     
```javascript
import React, {useState, useRef, useMemo} from 'react';
import {Movable} from 'webrix/components';
import './MovableArea.less';

const {trackpad, update} = Movable.Operations;

export default () => {
    const [position, setPosition] = useState({left: 125, top: 125});
    const movable = useRef();
    const props = Movable.useMove(useMemo(() => [
        trackpad(movable),
        update(setPosition),
    ], []));

    return (
        <Movable {...props} ref={movable}>
            <div className='handle' style={position}/>
        </Movable>
    );
};
```     

>Until now we've been using the 
move()
 operation to move the element by clicking on it and dragging it. However, in certain cases you don't want to click on the element, but rather on the point you wish the element to move to (for example, in sliders).

For that you can use the 
Movable.Operations.trackpad()
 operation, as seen in the example above. Click anywhere inside the dashed box to make the red circle move to that point. Click & drag anywhere inside the dashed box to make the red circle follow the cursor.     
>到现在我们已经使用move() operation来移动元素通过点击元素再拖拽它.    
然而，有些情况下你并不想点击元素，而是元素移动到你点击的地方(比如， 在sliders里面)      
为此你可以使用Movable.Operations.trackpad() operation, 如上面的例子所示。单击虚线框内的任意位置，使红色圆圈移动到该点。单击并拖动虚线框内的任意位置，使红色圆圈跟随光标     

#### Custom Handlers -- 自定义Handlers      
```javascript
import React, {useState, useCallback} from 'react';
import {Movable} from 'webrix/components';
import './Manual.less';

export default () => {
    const [{top, left}, setPosition] = useState({top: 0, left: 0});

    const handleOnMove = useCallback(({cx, cy}) => {
        // cx/cy represent the change in x/y since the last event.
        setPosition(({top, left}) => ({top: top + cy, left: left + cx}));
    }, [setPosition]);

    return (
        <Movable style={{top, left}} onMove={handleOnMove}>
            Move Me!
        </Movable>
    );
}
```      


>If you need some custom behavior that you cannot get using the 
Movable
 hooks, you can write your own event handlers. When a user moves a 
Movable
 element, the custom events (
onBeginMove
, 
onMove
, 
onEndMove
) are triggered, passing the mouse position (
x/y
), the difference in the coordinates since the beginning of the event (
dx/dy
), and the difference in the coordinates since the last event (
cx/cy
) as arguments.

In this example we are using the change in coordinates (
cx/cy
) for updating the 
position
 state.

Notice that we are using a function to set the state, instead of passing an object directly. This is because the state may be updated asynchronously, so we cannot rely on the state value for calculating the next position.

Using a function will give us the previous state as an argument, and we can use that to accurately calculate the next position.        
>如果你需要某些Movable hook无法自定义的行为，你能写自己的事件处理     
当用户移动Movable元素， 自定义事件 (
onBeginMove
, 
onMove
, 
onEndMove
) 被触发，传递鼠标位置(x/y),      
自事件开始以来坐标的差异(dx/dy)    
和上次事件后的坐标差(cx/cy)    
这些作为参数     
在这个例子里面我们使用坐标的变化来更新位置状态      
注意我们是通过函数来设置状态，而不是直接传递一个对象.     
这是因为状态可以异步更新，所以我们不能依赖状态值来计算下一个位置



```javascript
import React, {useState, useCallback, useRef} from 'react';
import {Movable} from 'webrix/components';
import './ManualAdvanced.less';

export default () => {
    const [{top, left}, setPosition] = useState({top: 0, left: 0});
    const initial = useRef({top, left});

    const handleOnBeginMove = useCallback(() => {
        initial.current = {top, left};
    }, [top, left]);

    const handleOnMove = useCallback(({dx, dy}) => {
        // dx/dy represent the change in x/y since the the beginning of the drag.
        const {top, left} = initial.current;
        setPosition({top: top + dy, left: left + dx});
    }, [setPosition]);

    return (
        <Movable style={{top, left}} onBeginMove={handleOnBeginMove} onMove={handleOnMove}>
            Move Me!
        </Movable>
    );
}
```    
>You can avoid the issue explained above, and get a more user-friendly movement by using the deltas (
dx/dy
) or the mouse position (
x/y
). However, using them requires maintaining the initial position of the element as soon as the movement begins. This can be done through the 
onBeginMove
 event, as can be seen in the above example.       
> 您可以避免上面解释的问题，并通过使用delta或者鼠标的位置获得更用户友好的移动       
然而使用他们需要在移动开始时保持初始位置越快越好，这能通过onbeginMove事件完成，   
如上面的例子所示
