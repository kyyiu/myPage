# Scalable -- 可伸缩     
---    
能被用来创建可放大缩小的组件，虽然这种功能可以用css的transfrom轻松实现比如transform: scale() ，使用css的transform不会影响正常的文档流     

MDN解释：     
> 通过修改坐标，css transform 修改形状和位置这些来影响的内容不会扰乱正常的文档流        

这意味着只是表面上改变了元素，但是并没有改变dom本身的位置和影响周围的元素， Scalable关注于缩放元素的比例尺寸，以此来准确更新文档流.以下的例子说明了这一点