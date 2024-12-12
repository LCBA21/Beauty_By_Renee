document.addEventListener("DOMContentLoaded", () => {
    const flipper = document.querySelector(".flipper");
    const toLogin = document.getElementById("to-login");
    const toSignup = document.getElementById("to-signup");
  
    toLogin.addEventListener("click", (e) => {
      e.preventDefault();
      flipper.classList.add("flip");
    });
  
    toSignup.addEventListener("click", (e) => {
      e.preventDefault();
      flipper.classList.remove("flip");
    });
  });
  