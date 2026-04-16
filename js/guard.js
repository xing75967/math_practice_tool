(function () {

  const user = localStorage.getItem("user");
  const grades = JSON.parse(localStorage.getItem("grades") || "[]");

  function kick() {
    window.location.replace("/index.html");
  }

  if (!user) {
    kick();
    return;
  }

  if (grades.includes("all")) return;

  const pageGrade = window.pageGrade;

  if (!pageGrade) return;

  if (!grades.includes(pageGrade)) {
    alert("No permission");
    kick();
  }

})();
