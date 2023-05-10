<!-- 捲動後出現按鈕JS -->
window.addEventListener("scroll", function() {
var goDiv = document.querySelector(".go");
if (window.pageYOffset > 160) {
goDiv.style.display = "block";
} else {
goDiv.style.display = "none";
}
});



<!-- 捲動到特定座標JS -->
function scrollToPosition(targetId) {
  // 取得要捲動到的目標元素
  var target = document.getElementById(targetId);

  // 取得目標元素的y座標
  var targetPosition = target.offsetTop - 160;

  // 捲動畫面到目標元素的位置
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });
}
