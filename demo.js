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
    4、和远程仓库建立连接并推送（复制新建仓库的两行代码）
        git remote add origin git@github.com:ga1239/three-demo.git
        git push -u origin master
        （把代码推送到默认分支master上）
    5、git status ：
        查看当前项目有哪些改动
        若在本地修改了文件，则会提示那个文件进行了修改，若没有修改文件则提示没有更新
    6、git log :
        显示之前提交的日志
        （会显示提交id，作者和事件）
    7.1、git log --author="jiangyi"
        只查看jiangyi提交的日志
    总结一下，代码有4个状态：本地，暂存，提交，推送
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
        git push -u origin master，可能还会出现连接问题，尝试刷新github页面？？）
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
    八、将文件还原至之前状态（将编辑器的代码还原成最近提交给github的代码）
        git diff
        （显示现在编辑器的代码和已提交代码不同的文件，并显示哪点代码不同
            红色表示文件最后一次的操作日志，绿色表示该文件和最后一次上传的代码在哪点不同
            ！！用于查找改动不多的文件，比较文件并手动修改文件）
        git checkout -- home/demo2.html
        （直接将demo2.html文件还原至上回提交的状态，注意没有确认提示）
    九、不再追踪时如何实现撤销追踪操作
        （什么是追踪？把某个文件加入到了暂存区中后，git会实现对这个文件的追踪
            举个例子：实现git checkout -- demo.html还原操作时，只能在未添加至暂存区还原
            若已添加至暂存区，则不会还原，这就说明暂存区的文件已经被git追踪，导致不会让文件
            还原至之前的状态）
        （如果文件已经添加至暂存区，依然像把它还原，则需要撤销该文件的追踪，
            文件状态改为未添加金暂存区，即可执行还原操作）
        git reset HEAD home/demo2.html
        （撤销对以添加至暂存区的demo2.html的追踪操作，再git status发现文件变红色了）
        （撤销追踪后可以git add 再次将文件添加到暂存区）
    十、将代码整体回到上一版本或者指定版本
        git reset --hard HEAD^^^
        （上传远程仓库一次就相当于增加一次版本，一个^表示向前一个版本，三个就表示
            向前三个版本）
        （注意，是编辑器里所有的代码全部回到之前版本，不能指定一个文件，所以要慎用！）
        （适用与相隔版本不多的版本回退，如果版本太多就不适合）
        git reset --hard HEAD 4ca257ebb0206065ff5234afcda7e7cff6103071
        （后面加的是版本号（提交时的id号），可以只取7、8位）
        （使用git log查看所有提交的id）
    十一、将单个文件回退到上一版本或指定版本
        git checkout 4ca257ebb0206065ff5234afcda7e7cff6103071 -- demo2.html
        （和第八个很像，只不过这个是回到具体id的版本）
    十二、想要给每个版本创建一个独特标签，做所有标签管理
        git tag v1.0
        （默认给最新的版本添加一个v1.0的标签，不用进行其他操作，直接就添加了
            （相当于已经提交，但没有推送）可以直接git log，可在版本号后查看到tag）
        git tag
        （查看所有提交版本的标签，仅显示标签内容）
        git tag v0.5 4ca257ebb0206065ff5234afcda7e7cff6103071
        （给指定版本id添加tag，可以是之前版本）
        git tag -d v0.5
        （删除指定标签）
        git push origin v1.0
        （推送指定标签）
    十三、想要创建删除分支如何操作
        （什么是分支？除了一个主线master，还可以创建分支，分支不会影响master和其他分支
            方便大家协同开发）
        git branch haha
        （创建一个名为haha的分支）
        （创建分支可以理解为将master复制了一遍，所以其他分支也会有master的log信息）
        git branch
        （查看当前项目所有分支，当前所在分支前会有*标识,排序是按首字母排序的）
        git checkout haha
        （切换到haha分支，若分支存在更改后未提交的代码，则不能切换，必须提交之后才能切换）
        git branch -d xixi
        （删除xixi分支，注意不能删除当前所在的分支）
        git checkout -b xixi
        （创建并切换到xixi分支）
        git checkout -D xixi
        （强制删除xixi分支，分支若提交了修改，就不能使用git checkout -b删除）
    十四、合并分支及相关
        （在分支xixi上更改代码并提交之后，切换到主分支master，master的代码还是
            未更改的，分支也可推送到远程仓库，推送时注意把分支名改为xixi git push -u origin xixi）
        git merge xixi
        （合并分支：将xixi和master合并，注意，要在master下才能合并，合并的意思是：若xixi分支中的
            demo.html发生改动，master主分支的demo.html未改动，
            则将master中的demo.html替换成xixi下的demo.html！
            合并完成之后，xixi分支依然存在，推送到github，github也依然有xixi分支）
    十五、当合并分支有冲突时如何正确的合并分支
        （若主分支master中的demo.html文件和分支xixi中的demo.html同时做了修改，
            则会在合并时git merge xixi发生冲突报错，此时如何解决？）
        git merge --abort
        （以当前分支为主合并代码，注意另一个分支的代码不会被修改成和这个分支一样
            例：合并master和xixi，两个分支都对demo.html做了修改，发生冲突，
            在master分支下使用git merge --abort 命令，即将demo.html改为master下的
            demo.html，并不用在此提交，直接推送就行。注意：xixi分支下的demo.html不会被修改）

    */








