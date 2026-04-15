(function () {

  const user = localStorage.getItem("user");
  const grades = JSON.parse(localStorage.getItem("grades") || "[]");

  // ❌ 未登录
  if (!user) {
    window.location.href = "/index.html";
    return;
  }

  // ⭐ teacher
  if (grades.includes("all")) return;

  const pageGrade = window.pageGrade;

  if (!pageGrade) return;

  if (!grades.includes(pageGrade)) {
    alert("No permission for this page");
    window.location.href = "/index.html";
  }

})();
