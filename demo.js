//window.onload，在html加载完成后运行
window.onload=function(){
    //[0]代表class名为oneh的第一个元素
    //let和var作用相同，但作用域不同，let是块级，var是全域
    let box=document.getElementsByClassName("oneh")[0];
    /*addEventListener也是给元素添加事件，和on有什么区别？
    再给同一个元素重复添加事件时，on会覆盖掉前面的事件，addEventListener则不会*/
    //()=>{}相当于function(){}
    box.addEventListener('click',()=>{
        alert("这是测试代码")
    })
}
    /*
    git需要在终端执行命令，命令如下：
    1、git init 初始化git仓库
        （视频里讲再打开新建文件夹2，.gitignore和.开头的文件会隐藏，
        其实不是已经执行了.gitignore文件，仅仅是因为windows设置了隐藏文件选项！）
    2、
    */








