function login() {

  const u = prompt("Username:");
  const p = prompt("Password:");

  const user = window.DB.users[u];

  if (!user || user.password !== p) {
    alert("❌ Login failed");
    window.location.href = "/index.html";
    return;
  }

  // ✅ 保存登录状态
  localStorage.setItem("user", u);
  localStorage.setItem("grades", JSON.stringify(user.grades));

  alert("✅ Welcome " + u);
}
