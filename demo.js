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
    什么是git？
    git是一个开源的分布式版本控制系统
    分布式：同一个项目可以和同事一起开发（将一个项目分成好几份，并记录每次各个分支项目的改动）
    版本控制系统；文件改动后可以保存改动之前的版本（保存在中央仓库里）

    github是什么？
    1、github是一个基于git的web 协作社区，上传代码设为public，大家都可以看到并一起完善，该bug等
    2、可以用任何终端将代码保存在上面（相当于云盘）
    */


    /*
    如何上传代码至github
    git需要在终端执行命令，命令如下：
    1、git init ：
        初始化git仓库
        （视频里讲再打开新建文件夹2，.gitignore和.开头的文件会隐藏，
        其实不是已经执行了.gitignore文件，仅仅是因为windows设置了隐藏文件选项！）
    2、git add . ：
        把要提交的文件放置到暂存区里
        在visual Studio Code（也可以理解为本地git）和github中有三个区：本地区，暂存区，远程仓库区
    3、git commit -m 第一次上传文件 ：
        把暂存区的代码提交到远程仓库中
    4、git status ：
        查看当前项目有哪些改动
        若在本地修改了文件，则会提示那个文件进行了修改，若没有修改文件则提示没有更新
    5、git log :
        显示之前提交的日志
        （会显示提交id，作者和事件）
    */








