// 教务管理系统 -> 问卷调查 -> 满意度调查

var i = 1
var n = $('iframeautoheight').contentDocument.getElementById("pjkc").childElementCount
console.log(n)
var t = self.setInterval(autoEvaluate, 1000)

/**
 * @description 此函数完成一个页面的所有下拉框的选择，并单击保存按钮
 * @author Aaronsz Xia
 */
function autoEvaluate() {
    var selects = $('iframeautoheight').contentDocument.getElementsByTagName("select")
    if (i == n) {
        window.clearInterval(t)
        // 取消下面这行代码的注释，那么脚本在完成所有页面的评价之后，会自动帮你点击提交按钮
        // $('iframeautoheight').contentDocument.getElementById("Button2").click()
    }
    for (j = 1; j < selects.length; j++) {
        selects[j].value = "完全认同"
    }
    var rand = Math.max(1, Math.floor(Math.random() * selects.length))
    selects[rand].value = "相对认同"
    $('iframeautoheight').contentDocument.getElementById("Button1").click()
    i++
    console.log(i)
}