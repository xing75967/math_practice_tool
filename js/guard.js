(function () {

  const user = localStorage.getItem("user");
  const grades = JSON.parse(localStorage.getItem("grades") || "[]");

  // ❌ 未登录
  if (!user) {
    window.location.href = "/index.html";
    return;
  }

  // 🔥 teacher 直接放行
  if (grades.includes("all")) return;

  // ⭐ 从页面读取 grade（不再依赖 URL）
  const pageGrade = window.pageGrade;

  if (!pageGrade) {
    console.warn("No pageGrade defined");
    return;
  }

  // ❌ 没权限
  if (!grades.includes(pageGrade)) {
    alert("No permission for this page");
    window.location.href = "/index.html";
  }

})();
