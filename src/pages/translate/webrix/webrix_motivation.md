### Motivation-起因

> Many applications use 3rd-party component banks (like Bootstrap/Material-UI/Tailwind) for their UI. While this is a good solution for basic applications, as the list of requirements grows in size and complexity, these component banks become a burden and slow down the development.
> 许多的应用界面使用着第三方的ui库(像Bootstrap/Material-UI/Tailwind)， 这是一个很好的方案对于简单的应用来说，随着需求规模和复杂度的增加,这些组件库变成了累赘拖慢了开发。

> This is because component banks cater to a very large audience, so they come packed with features that you mostly never use, and yet they never seem to cover all of your application's needs.
> 这是因为组件库为了迎合大量的使用者,所以他们在里面挤满了许多你可能根本不会用到的特性,然而这看起来里面的功能也不像是能够全面覆盖你的应用需求.

> Different applications have different users, and they each require their own unique user experience. This can only be delivered by developing your own set of UI components.
> 不同的应用有不同的用户,然而他们都需要独一无二的用户体验,这只能通过自己开发自己的组件才能实现

##### Developing Your Own Component Bank-开发你自己的组件
---  
> Developing good UI components is very hard and time-consuming. Achieving the desired behavior is complex and sometimes requires you to wield magic-like tricks to overcome browser limitations. Moreover, making them "work" isn't enough - you also need to consider other aspects, like accessibility, performance, mobile-friendliness, and cross-browser support.
> 开发好的ui组件是非常困难和耗时的。实现所需的行为是复杂的，有时需要使用魔术般的技巧来克服浏览器的限制，此外，让他们能运行还不足，你也需要考虑其他的方面，比如可访问性、性能、移动友好性和跨浏览器支持

> What if you could build your own, custom component bank, without having to worry too much about all these technicalities, and just focus on the presentation?
> 如果你能构建你自己的组件库呢,不需要考虑太多的技术细节，仅仅集中在展现上面


##### The Bricks of the Web-积木式web
---   
> After building numerous UI components, we realized that there are many common challenges that can be solved once and reused everywhere.
> 在开发了许多的ui组件后，我们意识到许多的相同困难可以解决一次后在任何地方复用

> We then extracted those solutions into a set of small, single-purpose components, each aimed at overcoming a specific UI challenge.
> 我们把这些解决方案提炼到一个小集合中,单一用途组件,每个旨在解决特定的难题.

> We call these components "the bricks of the web" - hence the name Webrix.
> 我们叫做"the bricks of the web",因此命名为Webrix

> Component banks can be thought of as the infrastructure of a UI application. Webrix is therefore the infrastructure of a component bank. With Webrix you can create a component bank that has exactly what you need, nothing more, nothing less.
> 组件库可以看作是ui应用的基础结构,因此Webrix可以看作是组件库的基础结构,通过webrix你可以创建一个满足你的需求不多也不少的组件库

##### Case in Point - DropDown-
---   
>For example, if you want to build your own DropDown component, you can use 
<Poppable/>
>(for managing the DropDown placements and overflow recovery), 
<Stackable/>
>(for dynamically maintaining the stacking context) and 
<ClickOutside/>
 (for closing the DropDown when clicking outside of it):