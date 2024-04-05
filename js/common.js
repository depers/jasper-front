/**
 * 更新页面上的年份
 */
function loadYear() {
    var date = new Date();
    $("#updateYear").text(date.getFullYear());
}