(function () {

  const user = localStorage.getItem("user");
  const grades = JSON.parse(localStorage.getItem("grades") || "[]");

  // ❌ 没登录直接踢回首页
  if (!user) {
    window.location.href = "/index.html";
    return;
  }

  // ✅ teacher 直接放行
  if (grades.includes("all")) return;

  // 🔒 当前页面路径
  const path = window.location.pathname;

  // ❗简单权限判断（按 grade 字符串匹配）
  const allowed = grades.some(g => path.includes(g));

  if (!allowed) {
    alert("No permission for this page");
    window.location.href = "/index.html";
  }

})();
