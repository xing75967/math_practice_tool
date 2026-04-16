(function () {

  const user = localStorage.getItem("user");
  const grades = JSON.parse(localStorage.getItem("grades") || "[]");

  function goError() {
    window.location.replace("/error.html");
  }

  // ❌ 未登录
  if (!user) {
    goError();
    return;
  }

  // ⭐ teacher 全放行
  if (grades.includes("all")) return;

  const pageGrade = window.pageGrade;

  // 没定义权限 → 默认放行（避免误杀）
  if (!pageGrade) return;

  // ❌ 无权限
  if (!grades.includes(pageGrade)) {
    goError();
    return;
  }

})();
// (function () {

//   const user = localStorage.getItem("user");
//   const grades = JSON.parse(localStorage.getItem("grades") || "[]");

//   // ⭐ 立刻隐藏页面（防闪）
//   document.documentElement.style.display = "none";

//   function kick() {
//     window.location.replace("/index.html");
//   }

//   // ❌ 未登录
//   if (!user) {
//     kick();
//     return;
//   }

//   // ⭐ teacher 直接放行
//   if (grades.includes("all")) {
//     document.documentElement.style.display = "block";
//     return;
//   }

//   // ⭐ 页面权限
//   const pageGrade = window.pageGrade;

//   if (!pageGrade) {
//     document.documentElement.style.display = "block";
//     return;
//   }

//   if (!grades.includes(pageGrade)) {
//     kick();
//     return;
//   }

//   // ✅ 放行
//   document.documentElement.style.display = "block";

// })();

// // (function () {

// //   const user = localStorage.getItem("user");
// //   const grades = JSON.parse(localStorage.getItem("grades") || "[]");

// //   // ❌ 未登录
// //   if (!user) {
// //     window.location.href = "/index.html";
// //     return;
// //   }

// //   // ⭐ teacher
// //   if (grades.includes("all")) return;

// //   const pageGrade = window.pageGrade;

// //   if (!pageGrade) return;

// //   if (!grades.includes(pageGrade)) {
// //     alert("No permission for this page");
// //     window.location.href = "/index.html";
// //   }

// // })();
