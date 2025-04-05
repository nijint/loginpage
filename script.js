function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  if (email === "tnijin123@gmail.com" && password === "12345") {
    msg.textContent = "Login success 🚀";
    msg.style.color = "green";
  } else {
    msg.textContent = "Wrong credentials ❌";
    msg.style.color = "red";
  }
}
