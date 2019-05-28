# 测试2
**1.一个很长的英文字符找出出现过两次以上的英文字母**

**2.规则 ：**

**a->c,b->d,c->e, ...,x->z,y->a,z->b**

**1->8,2->7,3->6,...,7->2,8->1,9->0**

**输入**

```
Cv 79 agctu qh cig，vjg yknn tgkipu;cv 69

At 20 years of age, the will regins;at 30
```

**3.如何实现上下左右居中布局**

**4.解释HTTP协议，JSON，restful API？ 怎么使用？**

**5.怎么定义vue-router的动态路由？怎么获取传过来的动态参数?**

**6.Vuex是什么？怎么使用？哪种功能场景使用它？**

**7.写出至少4种vue当中的指令和用法**

**8.说下封装vue组件的过程？**



**1.JavaScript的基本数据类型有哪些？**

**2.== 和 === 的不同？**

**3.rem 和em的区别？**

**4.什么是深拷贝、浅拷贝？实现一个深拷贝（考虑函数）**

**5.网站性能优化有哪些？**

**6.请解释下面代码中fn1、fn2、fn3、fn4回调的执行顺序**

```
dom1.addEventListener('click',fn1,false)
dom1.addEventListener('click',fn2,true)
dom1.addEventListener('click',fn3,true)
dom1.addEventListener('click',fn4,false)
```

**7.前端常用的跨域方式，简述jsonp的原理**

**8.实现一个具有如下功能的函数**

```
function add(){
}

console.log(add(1)()) //1
console.log(add(1)(2)()) //3
console.log(add(1)(2)(3)()) //6
```

解答：此题考查的是柯里化，闭包的实现

es6的解法是：

```
add= (a)=>{
	return (b)=>{
	if(!b){
		return a
	}
	 return (c)=> {
		 if(!c){
		 return a+b
		 }
	 	return ()=>a + b + c
	 }
	}
}
```

es5的解法是：

function add(){

}

------

**9.用const 和let生命的变量不在windows上，那到底再哪里？**

**如何去获取？**

解答：

全局作用域中，用 let 和 const 声明的全局变量并没有在全局对象中，只是一个块级作用域（Script）中

如何获取？在定义变量的块级作用域中就能获取。

**10.解释一下JavaScript的堆栈，事件循环**

![img](https://img-blog.csdn.net/20180411202638415?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xjMjM3NDIzNTUx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

**11.virtual dom和dom操作的区别和取舍**



**1.输入一个整数n，使得函数F输出斐波那契数列第n项的值**

```
f(0) = 1
f(1) = 2
f(n) = F(n-1) + F(n-2)

function f(n){
//todo
}
```

**2.尽可能多的列出元素居中的方法**

**3.以下两种方式调用函数，alert的结果是什么？**

```
var foo = 1
function main（）{
    alert(foo)
    var foo = 2
    alert(this.foo)
    this.foo = 3
}

main()
new main()
```



**4.下面代码输出结果是？**

```
setTimeout(()=>{	
	console.log('a')
})

new Promise(resolve =>{
    console.log('b')
    resolve()
}).then(()=>{
    console.log('c')
})
console.log('d')
```

