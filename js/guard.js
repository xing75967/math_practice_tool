(function () {

  const user = localStorage.getItem("user");
  const grades = JSON.parse(localStorage.getItem("grades") || "[]");

  function goLogin() {
    window.location.replace("/index.html");
  }

  function goError() {
    window.location.replace("/error.html");
  }

  // ⭐ 未登录 → 登录页
  if (!user) {
    goLogin();
    return;
  }

  // ⭐ teacher
  if (grades.includes("all")) return;

  const pageGrade = window.pageGrade;

  if (!pageGrade) return;

  if (!grades.includes(pageGrade)) {
    goError();
  }

})();
