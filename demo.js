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
    一、如何上传代码至github
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
    4、和远程仓库建立连接（复制新建仓库的两行代码）
        git remote add origin git@github.com:ga1239/three-demo.git
        git push -u origin master
    5、git status ：
        查看当前项目有哪些改动
        若在本地修改了文件，则会提示那个文件进行了修改，若没有修改文件则提示没有更新
    6、git log :
        显示之前提交的日志
        （会显示提交id，作者和事件）
    7.1、git log --author="jiangyi"
        只查看jiangyi提交的日志
    二、修改改动后的代码文件并上传到github远程仓库
    1、git status
        显示修改后的文件（文件为红，意为未添加到暂存区）
    2、git add demo.html
        将修改的文件添加到缓存区（注意add后不是. 是具体的文件名，可用*）
    3、git status
        显示修改后的文件（文件为绿，意为已添加到暂存区）
    4、git commit -m 第一次修改文件
    5、git push -u origin master
    （若出现error: src refspec main does not match any报错，
    再git remote add origin git@github.com:ga1239/three-demo.git
        git push -u origin master）
    三、想要删除不需要的文件时如何操作
    手动删除：
    1、在编辑器中将文件删除
    2、git add .
    3、git commit -m 删除demo2.html文件
    4、git push -u origin master
    通过命令行方式删除：
    1、git rm demo_copy.html
    2、git add .
    3、git commit -m 删除demo2.html文件
    4、git push -u origin master
        （自己发现的一点：
        命令行只能命令的是暂存区，不是本地！！！使用命令行之前先更新暂存区！！）
    四、rename文件（太简单不写了）
        git mv demo2.html demo22.html
        （将demo2.html改名为demo22.html）
    五、移动文件位置
        git mv demo2.html home
        （将demo2.html移动至home文件夹下）
    六、移动并修改文件名
        git mv demo2.html home/home22.html
        （将demo2.html移动到home文件夹下并改名为home22.html）
    七、文件有变化时如何查看文件前后变化
        git log --pretty=oneline home/demo2.html
        （--pretty=oneline意为日志只显示一行，显示上一个对demo2.html操作的日志）
        git show 4ca257ebb0206065ff5234afcda7e7cff6103071
        （查看具体id的改动内容）
        git log -p home/demo2.html
        （查看文件具体的改动内容）
        （注意查看详情时的操作和Linux的vi编辑器操作差不多！！）
    
    */








