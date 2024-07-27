/**
 * 更新页面上的年份
 */
function loadYear() {
    var date = new Date();
    $("#updateYear").text(date.getFullYear());
}

function handleScroll() {
    // window.scrollY：文档在垂直方向已滚动的像素值，clientHeight代表浏览器窗口的高度
    if (window.scrollY > rootElement.clientHeight) {
        scrollToTopBtn.classList.add("showBtn")
    } else {
        scrollToTopBtn.classList.remove("showBtn")
    }
}

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}