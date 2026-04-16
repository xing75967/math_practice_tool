function login() {

  if (!window.DB) {
    alert("System not ready (DB missing)");
    return;
  }

  const u = prompt("Username:");
  const p = prompt("Password:");

  const user = window.DB.users[u];

  if (!user) {
    alert("User not found");
    return;
  }

  if (user.password !== p) {
    alert("Wrong password");
    return;
  }

  localStorage.setItem("user", u);
  localStorage.setItem("grades", JSON.stringify(user.grades));

  alert("Welcome " + u);
  location.reload();
}

function logout() {
  localStorage.clear();
  location.href = "/index.html";
}
