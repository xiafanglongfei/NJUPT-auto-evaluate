// 教务管理系统 -> 活动报名 -> 教学评价
var selects = $('iframeautoheight').contentDocument.getElementsByTagName("select")
var j = 1
var n = selects[0].childElementCount
console.log(n)
var t = self.setInterval(autoEvaluate, 1000)
function autoEvaluate() {
    if(j == n) {
        window.clearInterval(t)
        // 取消下面这行代码的注释，那么脚本在完成所有页面的评价之后，会自动帮你点击提交按钮
        // $('iframeautoheight').contentDocument.getElementById("Button2").click()
    }
    for (i = 1; i < selects.length; i++) {
        selects[i].value = "好"
    }
    var rand = Math.max(1, Math.floor(Math.random() * selects.length));
    selects[rand].value = "较好"
    $('iframeautoheight').contentDocument.getElementById("Button1").click()
    j++
    console.log(j)
}
