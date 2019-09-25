//1.实现一个call
Function.prototype.mycall=function(context){
    if(typeof this != 'function'){
        throw new TypeError('not function');
    }
    context=context||window;
    context.fn=this;  //将当前函数作为context的属性
    let args=[...arguments].slice(1);
    let result = context.fn(args);
    delete context.fn;
    return result
}
//2.实现一个apply
Function.prototype.myapply=function(context){
    if(typeof this != 'function'){
        throw new TypeError('not function');
    }
    context=context||window;
    context.fn=this;
    let result;
    //apply的参数是一个列表
    if(arguments[1]){
        result=context.fn(...arguments[1]);
    }else{
        result=context.fn();
    }
    delete context.fn;
    return result;
}
//3.实现一个bind

