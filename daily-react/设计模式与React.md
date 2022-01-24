大纲

## 01| 单一职责原则 (Single Responsibility Principle, SRP)

```
问题 1：
1. how 如何正确构造组件？
2. when 在什么时候，一个大的组件应该拆分成更小的组件？
3. 如何设计松耦合的组件之间的通信
```

基本准则：单一职责原则
一个组件有且只有一个变化的因素

----

举几个🌰：

实例 1: 一个组件拉取远程数据，当逻辑修改的时候，有一个变化的因素
可能发生变化的因素：
- 修改服务URL
- 修改响应格式
- 使用其他第三方 HTTP 请求库
- 逻辑相关的修改

实例 2: 列表组件将数据映射到行组件，当逻辑修改的时候，有一个变化的因素
可能发生变化的因素：
- 限制当前页行组件显示的条数
- 没有数据的时候，显示【列表为空】
- 后台数据接口字段和行组件映射相关的任何修改

问题2: 你的组件有很多职责吗？
如果【是】，则按每个单独的职责将组件分成若干个块

单一职责原则[https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html]

问题3: 
3.1 立即开始编码，无需识别职责边界并相应地规划结构？
3.2 1(组件)=n(组件) 一个容器组件可以做到一切，不需要为每个职责创建组成部分？
3.3 无拆分-无开销: 不用思考拆分组件之间的通信（Props 和 callbacks）？

1.1 多重职责陷阱
当一个组件有多个职责时，会发生一个常见的问题。看似无害，并且工作量较少
设计很脆弱，副作用很难预测和控制

举个 🌰
<TableAndForm> 同时有两个职责，table 渲染 和 form 表单创建
那么这个组件的变更，至少有两个变化的因素
怎么来修改：



封装
继承
多态

SOLID
六个原则的首字母联合起来（两个 L 算做一个）就是 SOLID （solid，稳定的），其代表的含义就是这六个原则结合使用的好处：建立稳定、灵活、健壮的设计
Single Responsibility Principle, SRP 单一职责原则
Open Closed Principle, OCP 开闭原则
Liskov Substitution Principle, LSP 里氏替换原则
Law of Demeter, LOD 迪米特法则
Interface Segregation Principle, IAP 接口隔离原则
Dependence Inversion Principle, DIP 依赖倒置原则
