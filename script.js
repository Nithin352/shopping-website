function openLogin() {
  document.getElementById("loginModal").style.display = "flex";
}
function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}
function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  document.getElementById("message").textContent =
    "Login successful! Welcome, " + email + ".";
}
window.onclick = function(event) {
  const modal = document.getElementById("loginModal");
  if (event.target === modal) closeLogin();
};
