const email = document.getElementById("email");
const errorMsg = document.getElementById("error");
const notifyBtn = document.getElementById("notify-button");

notifyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email.value).trim())) {
    errorMsg.classList.remove("show");
  } else {
    errorMsg.classList.add("show");
  }
});
