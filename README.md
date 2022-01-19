# NJUPT-auto-evaluate

![](https://img.shields.io/github/issues/xiafanglongfei/NJUPT-auto-evaluate)
![](https://img.shields.io/github/forks/xiafanglongfei/NJUPT-auto-evaluate)
![](https://img.shields.io/github/stars/xiafanglongfei/NJUPT-auto-evaluate)
![](https://img.shields.io/github/license/xiafanglongfei/NJUPT-auto-evaluate)

## 介绍
南邮每学期都有一个本科生学生评教的活动，分为两项——“教师满意度调查”和“教学评价”，每项评价的页面数与你本学期的课程数相同，每个页面有 10 个左右的评价项。评价页面屏蔽了 tab 键，每个选项都得用鼠标慢慢选，这样的设定令人极其之恶心，正常完成一次这样的评价的体验极其之差。

然后我就想写个一键评测的脚本来帮我完成评价。

上网搜了搜，发现前人已经写过🤪。→[正方教务系统一键教学评价脚本](https://chi.miantiao.me/zhengfang-yijian/)

但这个脚本只能帮助我们选择一个页面里的选项，然鹅每门课程都有一个页面，用鼠标点起来还是有点烦😡。

像我上个学期一共有 21 门课程，每门课都得点一下，然后 21 个老师的评价，我又得点 21 下，总共得点 42 下，极其之烦。有这宝贵的 42 下鼠标的时间，我还不如把这时间拿去好好思考下人生呢，你说有没有道理🙃。

本着“能一下完成，绝不能两下”的原则，我把上面提到的评价脚本改进了一下：现在脚本能够一次完成一整项评价，而不用每门课每门课或者每个老师每个老师地选择了。

效率又提高了一大截。

## 用法
1. 进入正方教务系统（推荐使用 [Chrome](https://www.google.cn/chrome/) 浏览器），接着依次进入 教务管理系统 -> 问卷调查 -> 满意度调查，打开浏览器的“开发者工具”（快捷键为 F12，不同的浏览器打开方式可能不完全相同；Mac 用户的 Safari 浏览器默认隐藏了“开发者工具”，建议换用 Chrome）。
![](https://s2.ax1x.com/2019/05/24/VissaV.png)

2. 在弹出的窗口找到 console （控制台）的 tab，将 auto-evaluate-1-manyidudiaocha.js 中的代码复制到 console 中，敲回车运行代码。稍等几秒，所有页面的评价自动完成，但不会自动提交。如果你对哪个老师特别不满意，可以回到那个老师的页面作出你真实的评价。最后手动点击提交，这一项评价完成。

   ![](https://s2.ax1x.com/2019/05/24/VisrV0.png)

   ![](https://s2.ax1x.com/2019/05/24/Vi64N6.png)

3. 上一项评价完成后，正常情况下会自动跳到“教学评价”的页面（如果没有，从这儿进入 教务管理系统 -> 活动报名 -> 教学评价），这次使用 auto-evaluate-2-jiaoxuepingjia.js 文件中的代码进行相同的操作即可。

4. Done.

**Tip**：你可能已经注意到其中有一行代码被我注释掉了。取消这行代码的注释，那么脚本在完成所有页面的评价之后，会自动帮你点击提交按钮，真正实现一键评价。

```javascript
$('iframeautoheight').contentDocument.getElementById("Button2").click()
```

## 联系方式
如果你有任何疑问，欢迎随时联系我：
- 邮箱 [1197393094@qq.com](mailto:1197393094@qq.com)

## 致谢
- 感谢天奇大佬（[@professorZTQ](https://github.com/professorZTQ)）发现的bug，并及时告知与我

<a href="https://github.com/professorZTQ"><img src="https://avatars1.githubusercontent.com/u/50069922?s=400&v=4" width="80"/><a>

## 如果你喜欢本项目，欢迎star、fork、提issue 和 PR
